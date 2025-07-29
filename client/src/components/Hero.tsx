import { Button } from "@/components/ui/button";
import { GraduationCap, Globe, Briefcase, BookOpen, Heart } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-16 pb-20 sm:pt-20 sm:pb-32 bg-gradient-to-br from-orange-50 via-white to-orange-50 min-h-[90vh] lg:min-h-[100vh] flex flex-col justify-center overflow-hidden">
      <div className="w-full px-4 md:max-w-7xl md:mx-auto md:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8 w-full">
            <div className="inline-flex items-center bg-orange-100 text-[hsl(25,95%,53%)] px-4 py-2 rounded-full text-xs sm:text-sm font-medium animate-fade-in">
              Exclusively Curated Programs
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-gray-900 animate-text-reveal">
                  Your Global
                </h1>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight gradient-text animate-text-reveal" style={{ animationDelay: '0.2s' }}>
                  Career Starts Here
                </h1>
              </div>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed animate-slide-up" style={{ animationDelay: '0.6s' }}>
                We offer industry-leading & career-focused training to enhance your skills, secure a meaningful career, and bring your study-abroad dream a reality.
              </p>
            </div>
            <Button className="w-full sm:w-auto bg-[hsl(25,95%,53%)] hover:bg-[hsl(25,95%,48%)] text-white px-8 py-4 rounded-xl font-semibold text-base sm:text-lg hover-lift animate-scale-in" style={{ animationDelay: '0.8s' }}>
              Start Your Journey
            </Button>
          </div>
          
          {/* Right side - Program Cards Grid */}
          <div className="relative w-full mt-8 lg:mt-0">
            {/* Decorative dots */}
            <div className="absolute -top-4 sm:-top-6 lg:-top-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[hsl(25,95%,53%)] rounded-full"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[hsl(25,95%,53%)] rounded-full"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[hsl(25,95%,53%)] rounded-full"></div>
            </div>
            
            {/* Mobile: 2x2 grid, Tablet: 2 columns, Desktop: 2x2 grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:gap-4 max-w-sm sm:max-w-lg lg:max-w-2xl mx-auto">
              {/* Study Abroad Card */}
              <div className="bg-gradient-to-br from-green-300 to-green-400 rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-5 lg:p-6 relative overflow-hidden animate-slide-up min-h-[160px] sm:min-h-[200px] lg:min-h-[220px]" style={{ animationDelay: '0.4s' }}>
                <div className="relative z-10">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 mb-1 sm:mb-2 leading-tight">Study<br />Abroad</h3>
                  <p className="text-[10px] sm:text-xs lg:text-sm text-gray-700 mb-2 sm:mb-4 leading-relaxed line-clamp-3 sm:line-clamp-4 lg:line-clamp-none">
                    Comprehensive support and expert guidance for top university admissions. Personalized mentorship and strategic application support to achieve your international study goals.
                  </p>
                </div>
                <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 flex items-center space-x-1 sm:space-x-2">
                  <div className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[10px] sm:text-xs font-bold text-blue-600">🇺🇸</span>
                  </div>
                  <div className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[10px] sm:text-xs font-bold text-red-600">🇬🇧</span>
                  </div>
                </div>
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-8 h-10 sm:w-14 sm:h-16 lg:w-16 lg:h-20 bg-white/20 rounded-lg flex items-center justify-center">
                  <Globe className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-gray-700" />
                </div>
              </div>

              {/* Career Launchpad Card */}
              <div className="bg-gradient-to-br from-blue-300 to-blue-400 rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-5 lg:p-6 relative overflow-hidden animate-slide-up min-h-[160px] sm:min-h-[200px] lg:min-h-[220px]" style={{ animationDelay: '0.6s' }}>
                <div className="relative z-10">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 mb-1 sm:mb-2 leading-tight">Career<br />Launchpad</h3>
                  <p className="text-[10px] sm:text-xs lg:text-sm text-gray-700 mb-2 sm:mb-4 leading-relaxed line-clamp-3 sm:line-clamp-4 lg:line-clamp-none">
                    Connect with top companies and experienced professionals to help you launch your career and accelerate your growth.
                  </p>
                </div>
                <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 flex items-center space-x-1">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[7px] sm:text-[8px] lg:text-xs font-bold text-blue-600">Uber</span>
                  </div>
                  <div className="w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[7px] sm:text-[8px] lg:text-xs font-bold text-blue-600">Meta</span>
                  </div>
                  <div className="w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[7px] sm:text-[8px] lg:text-xs font-bold text-blue-600">IBM</span>
                  </div>
                </div>
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-8 h-10 sm:w-14 sm:h-16 lg:w-16 lg:h-20 bg-white/20 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-gray-700" />
                </div>
              </div>

              {/* Professional Courses Card */}
              <div className="bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-5 lg:p-6 relative overflow-hidden animate-slide-up min-h-[160px] sm:min-h-[200px] lg:min-h-[220px]" style={{ animationDelay: '0.8s' }}>
                <div className="relative z-10">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 mb-1 sm:mb-2 leading-tight">Professional<br />Courses</h3>
                  <p className="text-[10px] sm:text-xs lg:text-sm text-gray-700 mb-2 sm:mb-4 leading-relaxed line-clamp-3 sm:line-clamp-4 lg:line-clamp-none">
                    Explore our various SaaS career training programs for a head-start in your sales career.
                  </p>
                </div>
                <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 flex items-center space-x-1 sm:space-x-2">
                  <div className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[7px] sm:text-[8px] lg:text-xs font-bold text-blue-600">HubSpot</span>
                  </div>
                  <div className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[7px] sm:text-[8px] lg:text-xs font-bold text-blue-600">LinkedIn</span>
                  </div>
                </div>
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-8 h-10 sm:w-14 sm:h-16 lg:w-16 lg:h-20 bg-white/20 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-gray-700" />
                </div>
              </div>

              {/* HealthCare Jobs Abroad Card */}
              <div className="bg-gradient-to-br from-pink-300 to-pink-400 rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-5 lg:p-6 relative overflow-hidden animate-slide-up min-h-[160px] sm:min-h-[200px] lg:min-h-[220px]" style={{ animationDelay: '1s' }}>
                <div className="relative z-10">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 mb-1 sm:mb-2 leading-tight">HealthCare Jobs<br />Abroad</h3>
                  <p className="text-[10px] sm:text-xs lg:text-sm text-gray-700 mb-2 sm:mb-4 leading-relaxed line-clamp-3 sm:line-clamp-4 lg:line-clamp-none">
                    Explore international opportunities in the healthcare sector with expert guidance to help you find the right path, adapt to new environments, and advance your career overseas.
                  </p>
                </div>
                <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-[10px] sm:text-xs font-bold">🇩🇪</span>
                </div>
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-8 h-10 sm:w-14 sm:h-16 lg:w-16 lg:h-20 bg-white/20 rounded-lg flex items-center justify-center">
                  <Heart className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-gray-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
