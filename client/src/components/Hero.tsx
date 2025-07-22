import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center bg-blue-100 text-[hsl(219,79%,37%)] px-4 py-2 rounded-full text-sm font-medium animate-fade-in">
              <GraduationCap className="mr-2 h-4 w-4" />
              Learning Reimagined For The Future
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                {['Learning', 'Made', 'Easy'].map((word, index) => (
                  <h1 
                    key={word}
                    className={`text-6xl lg:text-8xl font-black leading-tight block animate-text-reveal ${
                      word === 'Easy' ? 'gradient-text' : 'text-gray-900'
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {word}
                  </h1>
                ))}
              </div>
              
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed animate-slide-up" style={{ animationDelay: '0.8s' }}>
                Unlox was created with one simple yet powerful core belief, "Learning Made Easy". Dive into our dynamic programs, connect with awesome mentors, and experience education like never before.
              </p>
            </div>
            
            <Button className="bg-gradient-to-r from-[hsl(219,79%,37%)] to-[hsl(217,91%,60%)] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-scale-in" style={{ animationDelay: '1.2s' }}>
              Explore Programs
            </Button>
          </div>
          
          <div className="relative">
            <div className="relative z-10 animate-float">
              <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(219,79%,37%)] to-[hsl(217,91%,60%)] rounded-full opacity-20 animate-pulse-slow"></div>
                <div className="absolute inset-6 bg-gradient-to-br from-[hsl(219,79%,37%)] to-[hsl(217,91%,60%)] rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-white text-8xl lg:text-9xl font-black">%</span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-70 animate-bounce-slow"></div>
            <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full opacity-70 animate-bounce-slow" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-5 w-12 h-12 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full opacity-60 animate-bounce-slow" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
