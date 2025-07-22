export default function WhyChooseUnlox() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">Why Choose Unlox?</h2>
          
          <div className="space-y-8">
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight">
                <span className="block">Step Into Experience</span>
                <span className="block">Based Learning</span>
              </h3>
            </div>
            
            <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built for Outcomes, Not just certificates
              </p>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Personalized, Practical & Future-Ready
              </p>
            </div>
            
            <div className="text-2xl lg:text-3xl font-bold text-[hsl(219,79%,37%)] animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <span className="block">One Ecosystem.</span>
              <span className="block">Infinite Possibilities.</span>
            </div>
          </div>
          
          <div className="mt-16 flex justify-center animate-bounce-slow" style={{ animationDelay: '1s' }}>
            <div className="text-center">
              <div className="text-sm text-gray-500 mb-2">Scroll Down</div>
              <div className="w-6 h-10 border-2 border-gray-300 rounded-full mx-auto flex justify-center">
                <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
