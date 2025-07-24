import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-16 pb-10 sm:pt-20 sm:pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-[60vh] flex flex-col justify-center overflow-hidden">
      <div className="w-full px-4 md:max-w-7xl md:mx-auto md:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8 w-full">
            <div className="inline-flex items-center bg-blue-100 text-[hsl(219,79%,37%)] px-4 py-2 rounded-full text-xs sm:text-sm font-medium animate-fade-in">
              <GraduationCap className="mr-2 h-4 w-4" />
              Learning Reimagined For The Future
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                {['Learning', 'Made', 'Easy'].map((word, index) => (
                  <h1
                    key={word}
                    className={`text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-tight block animate-text-reveal ${word === 'Easy' ? 'gradient-text' : 'text-gray-900'
                      }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {word}
                  </h1>
                ))}
              </div>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed animate-slide-up" style={{ animationDelay: '0.8s' }}>
                Unlox was created with one simple yet powerful core belief, "Learning Made Easy". Dive into our dynamic programs, connect with awesome mentors, and experience education like never before.
              </p>
            </div>
            <Button className="w-full sm:w-auto bg-gradient-to-r from-[hsl(219,79%,37%)] to-[hsl(217,91%,60%)] text-white px-8 py-4 rounded-xl font-semibold text-base sm:text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-scale-in" style={{ animationDelay: '1.2s' }}>
              Explore Programs
            </Button>
          </div>
          <div className="relative w-full flex justify-center mt-10 lg:mt-0">
            <div className="relative z-10 animate-float w-60 h-60 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto">
              <div className="absolute inset-6 bg-gradient-to-br from-[hsl(219,79%,37%)] to-[hsl(217,91%,60%)] rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-white text-5xl sm:text-7xl lg:text-9xl font-black">%</span>
              </div>
            </div>
            {/* Decorative elements restored */}
            <div className="absolute top-4 right-4 w-10 h-10 sm:w-20 sm:h-20 max-w-full max-h-full bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-70 animate-bounce-slow"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 sm:w-16 sm:h-16 max-w-full max-h-full bg-gradient-to-br from-green-300 to-emerald-400 rounded-full opacity-70 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-2 w-6 h-6 sm:w-12 sm:h-12 max-w-full max-h-full bg-gradient-to-br from-purple-300 to-pink-400 rounded-full opacity-60 animate-bounce-slow" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
