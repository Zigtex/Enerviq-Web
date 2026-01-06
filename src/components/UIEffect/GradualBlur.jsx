import React, { useEffect, useRef, useState, useMemo } from "react";
import * as math from "mathjs";

/* =======================
   DEFAULT CONFIG
======================= */
const DEFAULT_CONFIG = {
  position: "bottom",
  strength: 2,
  height: "6rem",
  width: null,
  divCount: 5,
  exponential: false,
  zIndex: 50,
  animated: false,
  duration: "0.3s",
  easing: "ease-out",
  opacity: 1,
  curve: "linear",
  responsive: false,
  target: "parent",
  className: "",
  style: {}
};

/* =======================
   PRESETS
======================= */
const PRESETS = {
  top: { position: "top", height: "6rem" },
  bottom: { position: "bottom", height: "6rem" },
  left: { position: "left", height: "6rem" },
  right: { position: "right", height: "6rem" },

  subtle: { height: "4rem", strength: 1, opacity: 0.8, divCount: 3 },
  intense: { height: "10rem", strength: 4, divCount: 8, exponential: true },
  smooth: { height: "8rem", curve: "bezier", divCount: 10 },
  sharp: { height: "5rem", curve: "linear", divCount: 4 },

  header: { position: "top", height: "8rem", curve: "ease-out" },
  footer: { position: "bottom", height: "8rem", curve: "ease-out" }
};

/* =======================
   CURVE FUNCTIONS
======================= */
const CURVE_FUNCTIONS = {
  linear: p => p,
  bezier: p => p * p * (3 - 2 * p),
  "ease-in": p => p * p,
  "ease-out": p => 1 - Math.pow(1 - p, 2),
  "ease-in-out": p =>
    p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2
};

/* =======================
   UTILS
======================= */
const mergeConfigs = (...configs) =>
  configs.reduce((acc, c) => ({ ...acc, ...c }), {});

const getGradientDirection = position => {
  const map = {
    top: "to top",
    bottom: "to bottom",
    left: "to left",
    right: "to right"
  };
  return map[position] || "to bottom";
};

const debounce = (fn, delay) => {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  };
};

/* =======================
   HOOKS
======================= */
const useResponsiveValue = (enabled, config, key) => {
  const [value, setValue] = useState(config[key]);

  useEffect(() => {
    if (!enabled) return;

    const update = () => {
      const w = window.innerWidth;
      let v = config[key];

      if (w <= 480 && config[`mobile${key}`]) v = config[`mobile${key}`];
      else if (w <= 768 && config[`tablet${key}`]) v = config[`tablet${key}`];
      else if (w <= 1024 && config[`desktop${key}`]) v = config[`desktop${key}`];

      setValue(v);
    };

    const d = debounce(update, 100);
    update();
    window.addEventListener("resize", d);
    return () => window.removeEventListener("resize", d);
  }, [enabled, config, key]);

  return enabled ? value : config[key];
};

const useIntersection = (ref, active) => {
  const [visible, setVisible] = useState(!active);

  useEffect(() => {
    if (!active || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, active]);

  return visible;
};

/* =======================
   COMPONENT
======================= */
const GradualBlur = props => {
  const containerRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const config = useMemo(() => {
    const preset = props.preset && PRESETS[props.preset]
      ? PRESETS[props.preset]
      : {};
    return mergeConfigs(DEFAULT_CONFIG, preset, props);
  }, [props]);

  const height = useResponsiveValue(config.responsive, config, "height");
  const width = useResponsiveValue(config.responsive, config, "width");
  const isVisible = useIntersection(containerRef, config.animated === "scroll");

  const blurLayers = useMemo(() => {
    const layers = [];
    const step = 100 / config.divCount;
    const strength = hovered && config.hoverIntensity
      ? config.strength * config.hoverIntensity
      : config.strength;

    const curveFn = CURVE_FUNCTIONS[config.curve] || CURVE_FUNCTIONS.linear;

    for (let i = 1; i <= config.divCount; i++) {
      let p = curveFn(i / config.divCount);
      let blur = config.exponential
        ? math.pow(2, p * 4) * 0.0625 * strength
        : 0.0625 * (p * config.divCount + 1) * strength;

      const a = math.round((step * (i - 1)) * 10) / 10;
      const b = math.round(step * i * 10) / 10;
      const c = math.round(step * (i + 1) * 10) / 10;

      const gradient = `transparent ${a}%, black ${b}%, black ${c}%, transparent`;

      layers.push(
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            maskImage: `linear-gradient(${getGradientDirection(
              config.position
            )}, ${gradient})`,
            WebkitMaskImage: `linear-gradient(${getGradientDirection(
              config.position
            )}, ${gradient})`,
            backdropFilter: `blur(${blur.toFixed(3)}rem)`,
            WebkitBackdropFilter: `blur(${blur.toFixed(3)}rem)`,
            opacity: config.opacity
          }}
        />
      );
    }

    return layers;
  }, [config, hovered]);

  const style = useMemo(() => {
    const vertical = ["top", "bottom"].includes(config.position);

    return {
      position: config.target === "page" ? "fixed" : "absolute",
      zIndex: config.zIndex,
      opacity: isVisible ? 1 : 0,
      transition: config.animated
        ? `opacity ${config.duration} ${config.easing}`
        : undefined,
      pointerEvents: "none",
      ...(vertical
        ? { height, width: width || "100%", left: 0, right: 0 }
        : { width: width || height, height: "100%", top: 0, bottom: 0 }),
      [config.position]: 0,
      ...config.style
    };
  }, [config, height, width, isVisible]);

  return (
    <div
      ref={containerRef}
      className={`gradual-blur ${config.className}`}
      style={style}
      onMouseEnter={() => config.hoverIntensity && setHovered(true)}
      onMouseLeave={() => config.hoverIntensity && setHovered(false)}
    >
      {blurLayers}
    </div>
  );
};

const GradualBlurMemo = React.memo(GradualBlur);
GradualBlurMemo.PRESETS = PRESETS;

export default GradualBlurMemo;
