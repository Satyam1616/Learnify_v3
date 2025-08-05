import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";

interface ThemedStudyAbroadSectionProps {
  theme: 'purple' | 'teal' | 'rose' | 'emerald' | 'amber' | 'indigo';
}

const themeConfig = {
  purple: {
    bulletColor: 'bg-purple-500',
    primaryButton: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700'
  },
  teal: {
    bulletColor: 'bg-teal-500',
    primaryButton: 'from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700'
  },
  rose: {
    bulletColor: 'bg-rose-500',
    primaryButton: 'from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700'
  },
  emerald: {
    bulletColor: 'bg-emerald-500',
    primaryButton: 'from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700'
  },
  amber: {
    bulletColor: 'bg-amber-500',
    primaryButton: 'from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700'
  },
  indigo: {
    bulletColor: 'bg-indigo-500',
    primaryButton: 'from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700'
  }
};

export default function ThemedStudyAbroadSection({ theme }: ThemedStudyAbroadSectionProps) {
  const config = themeConfig[theme];
  
  const destinations = [
    {
      country: "Canada",
      image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=300&fit=crop&crop=center",
      description: "World-class education with post-study work opportunities"
    },
    {
      country: "Australia", 
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center",
      description: "High quality of life and excellent universities"
    },
    {
      country: "UK",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop&crop=center", 
      description: "Historic universities and diverse culture"
    },
    {
      country: "USA",
      image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=400&h=300&fit=crop&crop=center",
      description: "Leading research institutions and innovation hubs"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                Find Your Perfect Study Destination
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                Explore world-class universities and unlock global opportunities. 
                Our expert counselors will guide you through every step of your 
                international education journey.
              </p>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3">
                <div className={`w-2 h-2 ${config.bulletColor} rounded-full flex-shrink-0`}></div>
                <span className="text-sm sm:text-base text-gray-700">Personalized university matching</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className={`w-2 h-2 ${config.bulletColor} rounded-full flex-shrink-0`}></div>
                <span className="text-sm sm:text-base text-gray-700">Visa assistance and documentation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className={`w-2 h-2 ${config.bulletColor} rounded-full flex-shrink-0`}></div>
                <span className="text-sm sm:text-base text-gray-700">Scholarship guidance</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className={`w-2 h-2 ${config.bulletColor} rounded-full flex-shrink-0`}></div>
                <span className="text-sm sm:text-base text-gray-700">Pre-departure support</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button className={`bg-gradient-to-r ${config.primaryButton} text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base`}>
                Start Your Journey
                <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
              <Button variant="outline" className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold border-gray-300 text-gray-700 hover:bg-gray-50 text-sm sm:text-base">
                Book Consultation
              </Button>
            </div>
          </div>

          {/* Right Content - Destination Grid */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 max-w-md sm:max-w-lg mx-auto lg:max-w-none">
              {destinations.map((destination, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg sm:rounded-xl bg-gray-100 aspect-square hover:shadow-lg transition-all duration-300"
                >
                  <img
                    src={destination.image}
                    alt={destination.country}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <div className="flex items-center space-x-2 mb-1 sm:mb-2">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-white flex-shrink-0" />
                      <h3 className="text-white font-bold text-sm sm:text-base lg:text-lg">{destination.country}</h3>
                    </div>
                    <p className="text-white/90 text-xs sm:text-sm leading-tight line-clamp-2">
                      {destination.description}
                    </p>
                  </div>
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}