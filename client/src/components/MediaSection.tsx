import ContactForm from "@/components/ContactForm";

export default function MediaSection() {
  const mediaOutlets = [
    "Google News", "Yahoo News", "Business Standard", "The Print",
    "ANI News", "Latestly", "European Sun Times", "Karnataka Live",
    "South Indian News", "Haryana Today", "Himachal Patrika", "Times Now"
  ];

  return (
    <section className="py-10 sm:py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Removed blue circle and border background decoration */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-slide-up">Featured In</h2>
        </div>

        {/* Media outlets grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-6 mb-8 sm:mb-12">
          {mediaOutlets.map((outlet, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 border rounded-xl p-2 sm:p-4 h-14 sm:h-20 flex items-center justify-center shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-gray-700 font-medium text-xs sm:text-sm text-center group-hover:text-[hsl(219,79%,37%)] transition-colors">
                {outlet}
              </span>
            </div>
          ))}
        </div>

        {/* Infinite scroll row */}
        <div className="overflow-hidden mb-4 sm:mb-8">
          <div className="flex animate-scroll space-x-4 sm:space-x-8">
            {mediaOutlets.concat(mediaOutlets).map((outlet, index) => (
              <div
                key={`scroll-${index}`}
                className="flex-shrink-0 w-32 h-10 sm:w-48 sm:h-16 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow group"
              >
                <span className="text-gray-700 font-medium text-xs sm:text-sm text-center px-2 sm:px-3 group-hover:text-[hsl(219,79%,37%)] transition-colors">
                  {outlet}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Form Component
export function ContactFormSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left side - Contact info */}
          <div className="animate-slide-up order-2 lg:order-1">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                Start Your Journey
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-orange-400 mb-3 sm:mb-4">
                  Transform your career today
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                  Join thousands of students who have already transformed their careers with our expert mentorship and industry-relevant programs.
                </p>
              </div>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0 mt-2"></div>
                <span className="text-sm sm:text-base text-gray-300">support@learnify.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0 mt-2"></div>
                <span className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Head Hub: 17th Cross Road, Sector 4, HSR Layout, Bengaluru, Karnataka 560102
                </span>
              </div>
            </div>
          </div>
          {/* Right side - Contact form */}
          <div className="animate-slide-up order-1 lg:order-2" style={{ animationDelay: '0.3s' }}>
            <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-700">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
