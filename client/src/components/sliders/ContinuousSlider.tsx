import { useEffect, useRef } from "react";

interface ContinuousSliderProps {
  children: React.ReactNode[];
  speed?: number; // pixels per second
  gap?: string;
  className?: string;
  pauseOnHover?: boolean;
}

export default function ContinuousSlider({
  children,
  speed = 50,
  gap = "gap-8",
  className = "",
  pauseOnHover = true
}: ContinuousSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);

  const gapValue = gap === 'gap-8' ? '2rem' : gap === 'gap-6' ? '1.5rem' : gap === 'gap-4' ? '1rem' : '0.5rem';

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Set up CSS animation
    const animationDuration = (container.scrollWidth / 2) / speed;
    container.style.setProperty('--animation-duration', `${animationDuration}s`);
    
    return () => {
      container.style.removeProperty('--animation-duration');
    };
  }, [speed, children]);

  const handleMouseEnter = () => {
    if (pauseOnHover && containerRef.current) {
      containerRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover && containerRef.current) {
      containerRef.current.style.animationPlayState = 'running';
    }
  };

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        ref={containerRef}
        className={`flex animate-scroll ${pauseOnHover ? 'pause-on-hover' : ''}`}
        style={{
          gap: gapValue,
          width: 'fit-content',
          animationDuration: `${(children.length * 3)}s`
        }}
      >
        {/* First set of items */}
        {children.map((child, index) => (
          <div
            key={`first-${index}`}
            className="flex-shrink-0"
          >
            {child}
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {children.map((child, index) => (
          <div
            key={`second-${index}`}
            className="flex-shrink-0"
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}