import { Button } from "@/components/ui/button";

export default function EduletSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-black leading-tight">
                INDIA'S FIRST<br />
                EDUCATIONAL<br />
                TABLET
              </h2>
              <h3 className="text-3xl font-bold text-blue-300">
                Edu-let - India's First Educational Tablet
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                Every Unlox learner receives a dedicated education tablet, providing seamless, distraction-free learning. With 24/7 access to course materials, Unlox Academy's tablet ensures enhanced focus and immersive engagement, redefining the future of online education.
              </p>
            </div>
            
            <Button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Learn More
            </Button>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Educational tablet with learning interface" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
