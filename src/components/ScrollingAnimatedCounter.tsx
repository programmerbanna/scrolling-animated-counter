import * as React from "react";
import { useState, useEffect, useRef } from "react";

interface Props {
  initialValue: number;
  targetValue: number;
  duration?: number; // Duration in seconds
  threshold?: number | string; // Threshold as fraction (e.g., 0.2) or percentage (e.g., 20)
  className?: string | undefined;
}

const ScrollingAnimatedCounter: React.FC<Props> = ({
  initialValue,
  targetValue,
  duration = 2, // Default duration in seconds (if not provided),
  threshold = 0.5, // Default threshold as a fraction (if not provided)
  className,
}) => {
  const [count, setCount] = useState(initialValue);
  const counterRef = useRef<HTMLElement>(null);

  // Convert threshold value to a decimal fraction if provided as a percentage
  const normalizedThreshold =
    typeof threshold === "string" ? parseInt(threshold) / 100 : threshold;

  // Convert duration from seconds to milliseconds
  const durationInMs = duration * 1000;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const interval = setInterval(() => {
              const increment = Math.ceil(
                (targetValue - count) / (durationInMs / 50)
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
      { threshold: normalizedThreshold }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [targetValue, durationInMs, normalizedThreshold]);

  return (
    <span ref={counterRef} className={className}>
      {count}
    </span>
  );
};

export { ScrollingAnimatedCounter };
