import { Brain, Users, GitBranch } from "lucide-react";

export default function WhyChooseUnlox() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[hsl(219,79%,37%)] font-medium text-lg mb-4 block tracking-wide">Why Choose Unlox?</span>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight animate-slide-up mb-16">
            Step Into Experience<br />
            Based Learning
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Feature 1 */}
          <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow animate-scale-in group">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[hsl(219,79%,37%)] transition-colors">
              <Brain className="h-8 w-8 text-gray-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Built for Outcomes, Not<br />
              just certificates
            </h3>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow animate-scale-in group" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[hsl(219,79%,37%)] transition-colors">
              <Users className="h-8 w-8 text-gray-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Personalized, Practical &<br />
              Future-Ready
            </h3>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow animate-scale-in group" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[hsl(219,79%,37%)] transition-colors">
              <GitBranch className="h-8 w-8 text-gray-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              One Ecosystem.<br />
              Infinite Possibilities.
            </h3>
          </div>
        </div>

        {/* Central connecting element with arrow */}
        <div className="flex justify-center">
          <div className="w-64 h-32 bg-gradient-to-r from-[hsl(219,79%,37%)] to-[hsl(217,91%,60%)] rounded-t-full relative">
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[hsl(219,79%,37%)]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
