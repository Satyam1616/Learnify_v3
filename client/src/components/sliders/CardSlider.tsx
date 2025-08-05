import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CardSliderProps {
  children: React.ReactNode[];
  slidesToShow?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  gap?: string;
  showArrows?: boolean;
  showDots?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

export default function CardSlider({
  children,
  slidesToShow = { mobile: 1, tablet: 2, desktop: 3 },
  gap = "gap-6",
  showArrows = true,
  showDots = true,
  autoPlay = false,
  autoPlayInterval = 5000,
  className = ""
}: CardSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShowCurrent, setSlidesToShowCurrent] = useState(slidesToShow.desktop);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout>();

  const totalSlides = children.length;
  const maxSlide = Math.max(0, totalSlides - slidesToShowCurrent);

  // Handle responsive slides
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setSlidesToShowCurrent(slidesToShow.mobile);
      } else if (width < 1024) {
        setSlidesToShowCurrent(slidesToShow.tablet);
      } else {
        setSlidesToShowCurrent(slidesToShow.desktop);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [slidesToShow]);

  // Auto play functionality
  useEffect(() => {
    if (autoPlay) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide(prev => prev >= maxSlide ? 0 : prev + 1);
      }, autoPlayInterval);

      return () => {
        if (autoPlayRef.current) {
          clearInterval(autoPlayRef.current);
        }
      };
    }
  }, [autoPlay, autoPlayInterval, maxSlide]);

  // Scroll to slide
  const scrollToSlide = (slideIndex: number) => {
    if (scrollContainerRef.current) {
      const slideWidth = scrollContainerRef.current.offsetWidth / slidesToShowCurrent;
      scrollContainerRef.current.scrollTo({
        left: slideIndex * slideWidth,
        behavior: 'smooth'
      });
    }
  };

  const nextSlide = () => {
    if (currentSlide < maxSlide) {
      const newSlide = currentSlide + 1;
      setCurrentSlide(newSlide);
      scrollToSlide(newSlide);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      const newSlide = currentSlide - 1;
      setCurrentSlide(newSlide);
      scrollToSlide(newSlide);
    }
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
    scrollToSlide(slideIndex);
  };

  // Pause auto play on hover
  const handleMouseEnter = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (autoPlay) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide(prev => prev >= maxSlide ? 0 : prev + 1);
      }, autoPlayInterval);
    }
  };

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slider Container */}
      <div className="relative overflow-hidden">
        <div 
          ref={scrollContainerRef}
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * (100 / slidesToShowCurrent)}%)`,
            gap: gap === 'gap-6' ? '1.5rem' : gap === 'gap-4' ? '1rem' : '0.5rem',
            paddingLeft: gap === 'gap-6' ? '0.75rem' : gap === 'gap-4' ? '0.5rem' : '0.25rem',
            paddingRight: gap === 'gap-6' ? '0.75rem' : gap === 'gap-4' ? '0.5rem' : '0.25rem'
          }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex justify-center items-stretch"
              style={{ 
                width: `calc(${100 / slidesToShowCurrent}% - ${gap === 'gap-6' ? '1.5rem' : gap === 'gap-4' ? '1rem' : '0.5rem'})`,
                minWidth: 0
              }}
            >
              <div className="w-full flex justify-center">
                {child}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {showArrows && totalSlides > slidesToShowCurrent && (
        <>
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white ${
              currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
            } transition-all duration-200`}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            disabled={currentSlide >= maxSlide}
            className={`absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white ${
              currentSlide >= maxSlide ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
            } transition-all duration-200`}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}

      {/* Dots Indicator */}
      {showDots && totalSlides > slidesToShowCurrent && (
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: maxSlide + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-orange-500 w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}