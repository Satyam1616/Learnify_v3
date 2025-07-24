import { Brain, Users, GitBranch } from "lucide-react";
import { useEffect, useState } from "react";

export default function WhyChooseUnlox() {
  const [circles, setCircles] = useState<Array<{ id: number, x: number, y: number, size: number, delay: number }>>([]);

  useEffect(() => {
    // Generate random circles for background animation
    const generateCircles = () => {
      const newCircles = [];
      for (let i = 0; i < 8; i++) {
        newCircles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 100 + 50,
          delay: Math.random() * 4
        });
      }
      setCircles(newCircles);
    };
    generateCircles();
  }, []);

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-transparent relative overflow-visible">
      {/* Removed large soft blue circle with concentric rings background for mobile responsiveness debug */}

      <div className="w-full px-4 md:max-w-7xl md:mx-auto md:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[hsl(219,79%,37%)] font-medium text-base sm:text-lg mb-4 block tracking-wide">Why Choose Unlox?</span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight animate-slide-up mb-10 sm:mb-16">
            Step Into Experience<br />
            Based Learning
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-8 mb-10 sm:mb-16 w-full">
          {/* Feature 1 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-shadow animate-scale-in group">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-[hsl(219,79%,37%)] transition-colors">
              <Brain className="h-7 w-7 sm:h-8 sm:w-8 text-gray-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-base sm:text-xl font-bold text-gray-800 mb-2 sm:mb-4">
              Built for Outcomes, Not<br />
              just certificates
            </h3>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-shadow animate-scale-in group" style={{ animationDelay: '0.2s' }}>
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-[hsl(219,79%,37%)] transition-colors">
              <Users className="h-7 w-7 sm:h-8 sm:w-8 text-gray-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-base sm:text-xl font-bold text-gray-800 mb-2 sm:mb-4">
              Personalized, Practical &<br />
              Future-Ready
            </h3>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-shadow animate-scale-in group" style={{ animationDelay: '0.4s' }}>
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-[hsl(219,79%,37%)] transition-colors">
              <GitBranch className="h-7 w-7 sm:h-8 sm:w-8 text-gray-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-base sm:text-xl font-bold text-gray-800 mb-2 sm:mb-4">
              One Ecosystem.<br />
              Infinite Possibilities.
            </h3>
          </div>
        </div>

        {/* Central connecting element with arrow */}
        {/* Removed blue semicircle and arrow for a cleaner look */}
      </div>
    </section>
  );
}
