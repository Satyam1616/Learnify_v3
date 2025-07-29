import { Button } from "@/components/ui/button";
import { Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function MentorshipSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const mentors = [
    {
      name: "Samrat Tomar",
      role: "Senior Software Developer, Linked Labs",
      image: "/api/placeholder/300/300",
      company: "CN",
      linkedinUrl: "#"
    },
    {
      name: "Apurva Dende",
      role: "Software Development Manager",
      image: "/api/placeholder/300/300",
      company: "DRONA AVIATION",
      linkedinUrl: "#"
    },
    {
      name: "Meghana Gowda V",
      role: "Software Engineer",
      image: "/api/placeholder/300/300",
      company: "Schneider",
      linkedinUrl: "#"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mentors.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mentors.length) % mentors.length);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-[hsl(219,79%,37%)] font-medium text-base sm:text-lg lg:text-xl mb-3 sm:mb-4 block">Mentors</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight px-4">
            Learn from those who've been there, done that, and nailed it
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            We don't just teach. We connect you with the best in the industry
          </p>
        </div>

        <div className="relative">
          {/* Navigation buttons for desktop */}
          <button 
            onClick={prevSlide}
            className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 lg:p-3 shadow-lg hover:shadow-xl transition-all"
          >
            <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6 text-gray-600" />
          </button>
          <button 
            onClick={nextSlide}
            className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 lg:p-3 shadow-lg hover:shadow-xl transition-all"
          >
            <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6 text-gray-600" />
          </button>

          {/* Mobile Slider */}
          <div className="sm:hidden relative overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {mentors.map((mentor, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 mx-auto max-w-sm">
                    <div className="aspect-square bg-gray-200 relative">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{mentor.name}</h3>
                      <p className="text-sm text-gray-600 mb-4 leading-relaxed min-h-[2.5rem]">{mentor.role}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-7 h-7 bg-gray-900 rounded text-white text-xs font-bold flex items-center justify-center">
                            {mentor.company}
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-blue-600 text-white border-blue-600 hover:bg-blue-700 text-xs px-3 py-2"
                        >
                          <Linkedin className="h-3 w-3 mr-1" />
                          <span>In</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Mobile Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
            >
              <ChevronLeft className="h-4 w-4 text-gray-600" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
            >
              <ChevronRight className="h-4 w-4 text-gray-600" />
            </button>

            {/* Mobile Dots Indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {mentors.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-[hsl(219,79%,37%)]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop/Tablet Grid - Fixed height cards */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8 lg:px-12">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-scale-in flex flex-col h-full"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-square bg-gray-200 relative">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{mentor.name}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed flex-grow min-h-[3rem]">{mentor.role}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center space-x-2">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-900 rounded text-white text-xs font-bold flex items-center justify-center">
                        {mentor.company}
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-blue-600 text-white border-blue-600 hover:bg-blue-700 text-xs sm:text-sm px-3 py-2"
                    >
                      <Linkedin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                      <span className="hidden sm:inline">LinkedIn</span>
                      <span className="sm:hidden">In</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}