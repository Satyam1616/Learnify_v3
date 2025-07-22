import { Button } from "@/components/ui/button";

export default function AIBluSection() {
  const features = [
    {
      title: "Human Like Interaction",
      description: "Supportive guidance that feels natural and empathetic.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      gradient: "from-blue-50 to-indigo-100"
    },
    {
      title: "Real-time Conversation",
      description: "Engaging, natural dialogue that evolves with you.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      gradient: "from-green-50 to-emerald-100"
    },
    {
      title: "24/7 Availability",
      description: "Learn anytime, anywhere at your convenience.",
      image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      gradient: "from-yellow-50 to-orange-100"
    },
    {
      title: "Personalized, Adaptive Learning",
      description: "Adapts to your unique learning style, pace, and goals.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      gradient: "from-purple-50 to-pink-100"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated background text */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
          <div className="text-8xl font-black text-gray-400 absolute top-10 left-10 animate-pulse-slow">
            Experience
          </div>
          <div className="text-6xl font-black text-gray-400 absolute bottom-20 right-20 animate-pulse-slow" style={{ animationDelay: '1s' }}>
            AI
          </div>
        </div>
        
        <div className="text-center mb-16 relative z-10">
          <div className="animate-slide-up">
            <p className="text-lg text-gray-600 mb-4 tracking-wider font-medium">
              Experience Unlox's step-by-step AI integrated learning
            </p>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              India's No.1 Hyper Intelligent AI Mentor
            </h2>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span className="block gradient-text">Introducing Blu!</span>
              <span className="block text-gray-900">The One Mentor You Need</span>
              <span className="block text-[hsl(219,79%,37%)]">-For Everything</span>
            </h3>
          </div>
          
          <p className="text-xl text-gray-600 mt-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Unlox's courses are specially integrated with an exciting and advanced AI assistant, Blu!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br ${feature.gradient} p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2 animate-scale-in`}
              style={{ animationDelay: `${0.8 + index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src={feature.image}
                  alt={`${feature.title} illustration`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[hsl(219,79%,37%)] transition-colors">
                {feature.title}
              </h4>
              <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
              
              <Button variant="ghost" className="text-[hsl(219,79%,37%)] font-semibold hover:underline p-0 group-hover:translate-x-1 transition-transform">
                Learn More →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
