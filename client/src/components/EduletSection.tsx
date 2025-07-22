import { Button } from "@/components/ui/button";

export default function EduletSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background decorative tablets */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-48 bg-white rounded-lg transform rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-28 h-40 bg-white rounded-lg transform -rotate-6"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="animate-slide-up">
                <h2 className="text-4xl lg:text-6xl font-black leading-tight tracking-wider">
                  <span className="block">INDIA'S</span>
                  <span className="block">FIRST</span>
                  <span className="block">EDUCATIONAL</span>
                  <span className="block">TABLET</span>
                </h2>
              </div>
              
              <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-3xl lg:text-4xl font-bold text-blue-300 mb-2">
                  Edu-let
                </h3>
                <h4 className="text-2xl font-bold text-blue-200">
                  - India's First Educational Tablet
                </h4>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed animate-slide-up" style={{ animationDelay: '0.6s' }}>
                Every Unlox learner receives a dedicated education tablet, providing seamless, distraction-free learning. With 24/7 access to course materials, Unlox Academy's tablet ensures enhanced focus and immersive engagement, redefining the future of online education.
              </p>
            </div>
            
            <Button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.9s' }}>
              Learn More
            </Button>
          </div>
          
          <div className="relative animate-float">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Educational tablet with learning interface" 
                className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-20 blur-xl"></div>
            </div>
            
            {/* Floating elements around tablet */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-blue-400 rounded-full opacity-60 animate-bounce-slow"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-yellow-400 rounded-full opacity-60 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
