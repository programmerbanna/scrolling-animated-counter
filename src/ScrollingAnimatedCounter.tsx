import * as React from "react";
import { useState, useEffect, useRef } from "react";

interface Props {
  initialValue?: number;
  targetValue: number;
  duration?: number;
  threshold?: number;
  className?: string | undefined;
}

const ScrollingAnimatedCounter: React.FC<Props> = ({
  initialValue = 0, // Default initial value (if not provided)
  targetValue,
  duration = 2000, // Default duration in seconds (if not provided),
  threshold = 0.5, // Default threshold as a fraction (if not provided)
  className,
}) => {
  const [count, setCount] = useState(initialValue);
  const counterRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const interval = setInterval(() => {
              const increment = Math.ceil(
                (targetValue - count) / (duration / 50)
              );
              if (count < targetValue) {
                setCount((prevCount) =>
                  Math.min(prevCount + increment, targetValue)
                );
              } else {
                clearInterval(interval);
              }
            }, 50); // Update count every 50 milliseconds

            return () => clearInterval(interval);
          }
        });
      },
      { threshold }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [targetValue, duration, threshold]);

  return (
    <span ref={counterRef} className={className}>
      {count}
    </span>
  );
};

export { ScrollingAnimatedCounter };
