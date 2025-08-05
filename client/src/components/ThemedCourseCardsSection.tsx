import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

interface ThemedCourseCardsSectionProps {
  theme: 'purple' | 'teal' | 'rose' | 'emerald' | 'amber' | 'indigo';
}

const themeConfig = {
  purple: {
    popularBg: 'bg-purple-500',
    popularRing: 'ring-purple-500',
    primaryGradient: 'from-purple-400 to-purple-600',
    secondaryGradient: 'from-violet-400 to-violet-600',
    primaryButton: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
    secondaryButton: 'from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700'
  },
  teal: {
    popularBg: 'bg-teal-500',
    popularRing: 'ring-teal-500',
    primaryGradient: 'from-teal-400 to-teal-600',
    secondaryGradient: 'from-cyan-400 to-cyan-600',
    primaryButton: 'from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700',
    secondaryButton: 'from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700'
  },
  rose: {
    popularBg: 'bg-rose-500',
    popularRing: 'ring-rose-500',
    primaryGradient: 'from-rose-400 to-rose-600',
    secondaryGradient: 'from-pink-400 to-pink-600',
    primaryButton: 'from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700',
    secondaryButton: 'from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700'
  },
  emerald: {
    popularBg: 'bg-emerald-500',
    popularRing: 'ring-emerald-500',
    primaryGradient: 'from-emerald-400 to-emerald-600',
    secondaryGradient: 'from-green-400 to-green-600',
    primaryButton: 'from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700',
    secondaryButton: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'
  },
  amber: {
    popularBg: 'bg-amber-500',
    popularRing: 'ring-amber-500',
    primaryGradient: 'from-amber-400 to-amber-600',
    secondaryGradient: 'from-yellow-400 to-yellow-600',
    primaryButton: 'from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700',
    secondaryButton: 'from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700'
  },
  indigo: {
    popularBg: 'bg-indigo-500',
    popularRing: 'ring-indigo-500',
    primaryGradient: 'from-indigo-400 to-indigo-600',
    secondaryGradient: 'from-blue-400 to-blue-600',
    primaryButton: 'from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700',
    secondaryButton: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
  }
};

export default function ThemedCourseCardsSection({ theme }: ThemedCourseCardsSectionProps) {
  const config = themeConfig[theme];
  
  const courses = [
    {
      title: "Skip the trial - and - error, your career deserves the shortcut",
      subtitle: "Get Mentorship",
      price: "₹999",
      originalPrice: "₹1999",
      features: [
        "1:1 Mentorship Session",
        "Career Guidance",
        "Industry Insights",
        "Resume Review",
        "Interview Preparation"
      ],
      popular: false,
      color: config.primaryGradient
    },
    {
      title: "Skip the trial - and - error, your career deserves the shortcut", 
      subtitle: "Get Mentorship",
      price: "₹1999",
      originalPrice: "₹3999",
      features: [
        "3 Mentorship Sessions",
        "Career Roadmap",
        "Industry Connections",
        "Portfolio Review",
        "Mock Interviews",
        "Job Referrals"
      ],
      popular: true,
      color: config.secondaryGradient
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight px-4">
            Skip the trial-and-error, your career deserves the shortcut
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Get personalized mentorship from industry experts
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                course.popular ? `ring-2 ${config.popularRing} lg:transform lg:scale-105` : ''
              }`}
            >
              {course.popular && (
                <div className={`absolute top-0 right-0 ${config.popularBg} text-white px-3 sm:px-4 py-1 sm:py-2 rounded-bl-lg`}>
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-current" />
                    <span className="text-xs sm:text-sm font-medium">Most Popular</span>
                  </div>
                </div>
              )}
              
              <div className="p-6 sm:p-8">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${course.color} mb-4 sm:mb-6 flex items-center justify-center`}>
                  <span className="text-white text-xl sm:text-2xl font-bold">M</span>
                </div>
                
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                  {course.subtitle}
                </h3>
                
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                  {course.title}
                </p>
                
                <div className="flex flex-wrap items-baseline mb-4 sm:mb-6 gap-2">
                  <span className="text-2xl sm:text-3xl font-bold text-gray-900">{course.price}</span>
                  <span className="text-base sm:text-lg text-gray-500 line-through">{course.originalPrice}</span>
                  <span className="text-green-600 text-xs sm:text-sm font-medium bg-green-100 px-2 py-1 rounded">50% OFF</span>
                </div>
                
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {course.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-2.5 sm:py-3 rounded-lg font-semibold transition-all text-sm sm:text-base bg-gradient-to-r ${
                    course.popular ? config.secondaryButton : config.primaryButton
                  } text-white`}
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}