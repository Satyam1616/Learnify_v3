import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

export default function CourseCardsSection() {
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
      color: "from-green-400 to-green-600"
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
      color: "from-blue-400 to-blue-600"
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
                course.popular ? 'ring-2 ring-blue-500 lg:transform lg:scale-105' : ''
              }`}
            >
              {course.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-bl-lg">
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
                  className={`w-full py-2.5 sm:py-3 rounded-lg font-semibold transition-all text-sm sm:text-base ${
                    course.popular 
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white' 
                      : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white'
                  }`}
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
