import { Button } from "@/components/ui/button";

export default function EduletSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="animate-slide-up">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-4">
                  <span className="text-black">Edu-let - </span>
                  <span className="text-[hsl(219,79%,37%)]">India's First<br />
                  Educational Tablet</span>
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
                Every Unlox learner receives a dedicated education tablet, providing seamless, distraction-free learning. With 24/7 access to course materials, Unlox Academy's tablet ensures enhanced focus and immersive engagement, redefining the future of online education.
              </p>
            </div>
            
            <Button className="bg-[hsl(219,79%,37%)] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[hsl(217,91%,60%)] transform hover:scale-105 transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.6s' }}>
              Learn More
            </Button>
          </div>
          
          <div className="relative animate-float">
            <div className="relative z-10 bg-black rounded-3xl p-8 shadow-2xl">
              {/* Tablet mockup */}
              <div className="bg-gray-900 rounded-2xl p-4">
                {/* First tablet screen - blue with hands */}
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl p-6 mb-4 relative min-h-[200px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="w-0 h-0 border-l-6 border-r-6 border-b-8 border-transparent border-b-white"></div>
                    </div>
                    <p className="text-white text-sm font-medium">Interactive Learning</p>
                  </div>
                  {/* Hands holding tablet representation */}
                  <div className="absolute bottom-0 left-4 right-4 h-12 bg-gradient-to-t from-orange-200 to-transparent rounded-b-xl opacity-50"></div>
                </div>
                
                {/* Second tablet screen - dark with UNLOX branding */}
                <div className="bg-gray-800 rounded-xl p-6 relative min-h-[200px] flex flex-col items-center justify-center">
                  <div className="text-white text-2xl font-bold mb-2">11:36</div>
                  <div className="text-white text-xl font-bold mb-4">UNLOX</div>
                  <div className="w-12 h-12 border-2 border-gray-400 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                  </div>
                  <div className="text-gray-400 text-xs mt-2">Unlox Academy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
