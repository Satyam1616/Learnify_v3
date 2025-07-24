import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";

export default function EduletSection() {
  const [tabletVisible, setTabletVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationTriggered) {
          setAnimationTriggered(true);
          // First, animate tablet rising from bottom
          setTimeout(() => {
            setTabletVisible(true);
          }, 200);
          // Then, animate text sliding in from left after tablet is in place
          setTimeout(() => {
            setTextVisible(true);
          }, 800);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animationTriggered]);
  return (
    <section ref={sectionRef} className="py-10 sm:py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Text Content - slides in from left and goes behind tablet */}
          <div className={`space-y-8 relative z-10 transition-all duration-1000 ease-out ${textVisible
              ? 'transform translate-x-0 opacity-100'
              : 'transform -translate-x-full opacity-0'
            }`}>
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-4">
                  <span className="text-black">Edu-let - </span>
                  <span className="text-[hsl(219,79%,37%)]">India's First<br />
                    Educational Tablet</span>
                </h2>
              </div>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Every Learnify learner receives a dedicated education tablet, providing seamless, distraction-free learning. With 24/7 access to course materials, Learnify Academy's tablet ensures enhanced focus and immersive engagement, redefining the future of online education.
              </p>
            </div>
            <Button className="w-full sm:w-auto bg-[hsl(219,79%,37%)] text-white px-8 py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-[hsl(217,91%,60%)] transform hover:scale-105 transition-all duration-300">
              Learn More
            </Button>
          </div>
          {/* Tablet - rises from bottom with higher z-index to appear in front */}
          <div className={`relative animate-float w-full max-w-xs sm:max-w-md lg:max-w-lg mx-auto lg:mx-0 ${tabletVisible ? 'opacity-100' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-out`}>
            <div className="bg-black rounded-3xl p-4 sm:p-8 shadow-2xl">
              {/* Tablet mockup */}
              <div className="bg-gray-900 rounded-2xl p-2 sm:p-4">
                {/* Interactive screen */}
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl p-4 sm:p-6 mb-4 relative min-h-[180px] sm:min-h-[250px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-20 sm:h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="w-0 h-0 border-l-4 border-r-4 border-b-6 sm:border-l-8 sm:border-r-8 sm:border-b-12 border-transparent border-b-white"></div>
                    </div>
                    <div className="text-white text-base sm:text-lg font-bold mb-2">Welcome to Learnify</div>
                    <div className="text-blue-100 text-xs sm:text-sm">Your learning journey starts here</div>
                  </div>
                </div>
                {/* Home screen */}
                <div className="bg-gray-800 rounded-xl p-4 sm:p-6 relative min-h-[120px] sm:min-h-[200px]">
                  <div className="text-center">
                    <div className="text-white text-lg sm:text-2xl font-bold mb-2">11:36</div>
                    <div className="text-white text-base sm:text-xl font-bold mb-4">LEARNIFY</div>
                    <div className="grid grid-cols-3 gap-1 sm:gap-2 mb-4">
                      {['📚', '🎓', '📊', '💬', '⚙️', '📱'].map((icon, i) => (
                        <div key={i} className="w-8 h-8 sm:w-12 sm:h-12 bg-gray-700 rounded-xl flex items-center justify-center text-lg">
                          {icon}
                        </div>
                      ))}
                    </div>
                    <div className="text-gray-400 text-xs">Edu-let by Learnify Academy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
