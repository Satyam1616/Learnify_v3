import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center bg-blue-100 text-[hsl(219,79%,37%)] px-4 py-2 rounded-full text-sm font-medium">
              <GraduationCap className="mr-2 h-4 w-4" />
              Learning Reimagined For The Future
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
                <span className="block">Learning</span>
                <span className="block">Made</span>
                <span className="block gradient-text">Easy</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                Unlox was created with one simple yet powerful core belief, "Learning Made Easy". Dive into our dynamic programs, connect with awesome mentors, and experience education like never before.
              </p>
            </div>
            
            <Button className="bg-gradient-to-r from-[hsl(219,79%,37%)] to-[hsl(217,91%,60%)] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Explore Programs
            </Button>
          </div>
          
          <div className="relative">
            <div className="relative z-10 animate-float">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(219,79%,37%)] to-[hsl(217,91%,60%)] rounded-full opacity-20 animate-pulse-slow"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-[hsl(219,79%,37%)] to-[hsl(217,91%,60%)] rounded-full flex items-center justify-center">
                  <span className="text-white text-8xl font-black">%</span>
                </div>
              </div>
            </div>
            
            <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-300 rounded-full opacity-70 animate-bounce"></div>
            <div className="absolute bottom-10 left-10 w-16 h-16 bg-green-300 rounded-full opacity-70 animate-bounce" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
