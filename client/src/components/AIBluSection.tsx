import { Button } from "@/components/ui/button";

export default function AIBluSection() {
  const features = [
    {
      title: "Human Like Interaction",
      description: "Natural conversation that understands context and provides personalized responses.",
      icon: "👤"
    },
    {
      title: "Real-time Conversation",
      description: "Instant responses and dynamic learning conversations that adapt to your pace.",
      icon: "💬"
    },
    {
      title: "24/7 Availability",
      description: "Learn anytime, anywhere at your convenience with round-the-clock support.",
      icon: "🕐"
    },
    {
      title: "Personalized, Adaptive Learning",
      description: "Adapts to your learning style, pace, and goals for optimal learning outcomes.",
      icon: "🎯"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="animate-slide-up">
            <span className="text-[hsl(217,91%,60%)] font-medium text-lg mb-4 block tracking-wider">
              The One Mentor You Need -For Everything
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-8">
              Introducing Blu!
            </h2>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Top Row */}
          <div className="bg-gray-800/50 border border-blue-500/30 rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300 animate-scale-in">
            <div className="text-4xl mb-4">{features[0].icon}</div>
            <h3 className="text-xl font-bold text-white mb-4">{features[0].title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{features[0].description}</p>
            <Button variant="ghost" className="text-[hsl(217,91%,60%)] font-semibold hover:underline p-0 mt-4">
              Learn More →
            </Button>
          </div>

          <div className="bg-gray-800/50 border border-blue-500/30 rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl mb-4">{features[1].icon}</div>
            <h3 className="text-xl font-bold text-white mb-4">{features[1].title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{features[1].description}</p>
            <Button variant="ghost" className="text-[hsl(217,91%,60%)] font-semibold hover:underline p-0 mt-4">
              Learn More →
            </Button>
          </div>

          {/* Bottom Row */}
          <div className="bg-gray-800/50 border border-blue-500/30 rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-4xl mb-4">{features[2].icon}</div>
            <h3 className="text-xl font-bold text-white mb-4">{features[2].title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{features[2].description}</p>
            <Button variant="ghost" className="text-[hsl(217,91%,60%)] font-semibold hover:underline p-0 mt-4">
              Learn More →
            </Button>
          </div>

          <div className="bg-gray-800/50 border border-blue-500/30 rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-4xl mb-4">{features[3].icon}</div>
            <h3 className="text-xl font-bold text-white mb-4">{features[3].title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{features[3].description}</p>
            <Button variant="ghost" className="text-[hsl(217,91%,60%)] font-semibold hover:underline p-0 mt-4">
              Learn More →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
