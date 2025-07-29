import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CareerCards() {
  const careerCards = [
    {
      title: "Full Stack Developer",
      subtitle: "Master modern web development",
      price: "₹15,000",
      originalPrice: "₹25,000",
      color: "from-green-400 to-green-500",
      textColor: "text-white"
    },
    {
      title: "Data Science",
      subtitle: "Dive into data analytics",
      price: "₹18,000",
      originalPrice: "₹30,000",
      color: "from-blue-400 to-blue-500",
      textColor: "text-white"
    },
    {
      title: "UI/UX Design",
      subtitle: "Create stunning designs",
      price: "₹12,000",
      originalPrice: "₹20,000",
      color: "from-purple-400 to-purple-500",
      textColor: "text-white"
    },
    {
      title: "Digital Marketing",
      subtitle: "Boost your marketing skills",
      price: "₹10,000",
      originalPrice: "₹18,000",
      color: "from-orange-400 to-orange-500",
      textColor: "text-white"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Your Global Career Starts Here
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our industry-leading programs designed to launch your career in tech
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {careerCards.map((card, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${card.color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={card.textColor}>
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-sm opacity-90 mb-4">{card.subtitle}</p>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold">{card.price}</span>
                    <span className="text-sm line-through opacity-75 ml-2">{card.originalPrice}</span>
                  </div>
                </div>
                <Button
                  variant="secondary"
                  className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[hsl(219,79%,37%)] to-[hsl(217,91%,60%)] text-white px-8 py-4 rounded-xl font-semibold text-lg hover-lift"
          >
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
}