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
        <div className="text-center mb-16">
          <p className="text-lg text-gray-600 mb-4">Experience Unlox's step-by-step AI integrated learning</p>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">India's No.1 Hyper Intelligent AI Mentor</h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-[hsl(219,79%,37%)] leading-tight">
            Introducing Blu!<br />
            The One Mentor You Need<br />
            -For Everything
          </h3>
          <p className="text-xl text-gray-600 mt-6">
            Unlox's courses are specially integrated with an exciting and advanced AI assistant, Blu!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className={`bg-gradient-to-br ${feature.gradient} p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group`}>
              <img 
                src={feature.image}
                alt={`${feature.title} illustration`}
                className="w-full h-48 object-cover rounded-xl mb-6" 
              />
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <Button variant="ghost" className="text-[hsl(219,79%,37%)] font-semibold hover:underline p-0">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
