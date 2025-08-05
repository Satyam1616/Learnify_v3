import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface ThemedTestimonialsSectionProps {
  theme: 'purple' | 'teal' | 'rose' | 'emerald' | 'amber' | 'indigo';
}

const themeConfig = {
  purple: {
    dotActive: 'bg-purple-400'
  },
  teal: {
    dotActive: 'bg-teal-400'
  },
  rose: {
    dotActive: 'bg-rose-400'
  },
  emerald: {
    dotActive: 'bg-emerald-400'
  },
  amber: {
    dotActive: 'bg-amber-400'
  },
  indigo: {
    dotActive: 'bg-indigo-400'
  }
};

export default function ThemedTestimonialsSection({ theme }: ThemedTestimonialsSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const config = themeConfig[theme];
  
  const testimonials = [
    {
      name: "Neha T",
      role: "Software Engineer",
      text: "The AI Automation program helped me streamline my workflow and boost efficiency. I now use automation projects at my company.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Aditya R",
      role: "Data Analyst",
      text: "The AI program gave me a strong foundation in machine learning and NLP. I landed an AI research role after completing it.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Vikram K",
      role: "Product Manager",
      text: "The mentor-led approach was insightful and practical. I now help optimize growth for SaaS businesses.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Kiran A",
      role: "Marketing Specialist",
      text: "With expert guidance I quickly acquired in-depth marketing skills. The program gave me the confidence I needed to excel in SaaS sales.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 leading-tight px-4">
            Loved by thousands of students
          </h2>
        </div>

        <div className="relative">
          {/* Mobile Slider */}
          <div className="sm:hidden relative overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 mx-auto max-w-sm">
                    <div className="flex items-center mb-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full mr-3 flex-shrink-0"
                      />
                      <div className="min-w-0">
                        <h4 className="font-semibold text-white text-sm truncate">{testimonial.name}</h4>
                        <p className="text-gray-400 text-xs truncate">{testimonial.role}</p>
                      </div>
                    </div>

                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <p className="text-gray-300 text-xs leading-relaxed min-h-[4rem]">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Mobile Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-700 rounded-full p-2 shadow-lg hover:shadow-xl transition-all hover:bg-gray-600"
            >
              <ChevronLeft className="h-4 w-4 text-white" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-700 rounded-full p-2 shadow-lg hover:shadow-xl transition-all hover:bg-gray-600"
            >
              <ChevronRight className="h-4 w-4 text-white" />
            </button>

            {/* Mobile Dots Indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? config.dotActive : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop/Tablet Grid - Fixed height cards */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-scale-in flex flex-col h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4 flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <h4 className="font-semibold text-white text-sm sm:text-base truncate">{testimonial.name}</h4>
                    <p className="text-gray-400 text-xs sm:text-sm truncate">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed flex-grow">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}