
"use client";

import {
  useEffect,
  useRef,
  type ComponentPropsWithoutRef,
} from "react";

interface RevealProps extends ComponentPropsWithoutRef<"div"> {
  delay?: number;
  duration?: number;
  y?: number;
}

export default function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  y = 24,
  ...attributes
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        observer.unobserve(element);

        if (
          window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
          typeof element.animate !== "function"
        ) {
          return;
        }

        element.animate(
          [
            { opacity: 0.88, transform: `translateY(${y}px)` },
            { opacity: 1, transform: "translateY(0)" },
          ],
          {
            duration: duration * 1000,
            delay: delay * 1000,
            easing: "ease-out",
          },
        );
      },
      { threshold: 0.15 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay, duration, y]);

  return (
    <div ref={elementRef} className={className} {...attributes}>
      {children}
    </div>
  );
}
