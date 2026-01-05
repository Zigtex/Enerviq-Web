import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollRevealText = ({
  children,
  className = "",
  stagger = 0.06,
  baseOpacity = 0.15,
  blurStrength = 6,
}) => {
  const containerRef = useRef(null);

  const content = useMemo(() => {
    if (!children) return null;

    return children.split("\n").map((line, lineIndex) => (
      <div key={lineIndex} className="block">
        {line.split(" ").map((word, i) => (
          <span key={i} 
            className="inline-block word mr-[0.35ch] will-change-[opacity,transform,filter]">
            {word}
          </span>
        ))}
      </div>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const words = el.querySelectorAll(".word");

    const tl = gsap.fromTo(
      words,
      {
        opacity: baseOpacity,
        filter: `blur(${blurStrength}px)`,
        y: 12,
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        ease: "none",
        stagger,
        scrollTrigger: {
          trigger: el,
          start: "top bottom-=20%",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [stagger, baseOpacity, blurStrength]);

  return (
    <div
      ref={containerRef}
      className={`will-change-transform ${className}`}
    >
      {content}
    </div>
  );
};

export default ScrollRevealText;