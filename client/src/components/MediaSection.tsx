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
        <div className="overflow-x-auto mb-4 sm:mb-8">
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
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-blue-400 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Contact info */}
          <div className="animate-slide-up">
            <div className="mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Unlox Now!
              </h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-300 mb-4">
                  Unlox endless opportunities
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Join 1 lakh+ today and access AI-powered learning, expert mentorship, and dedicated placements.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300">support@unlox.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300">
                  Head Hub: 17th Cross Road, Sector 4, HSR Layout, Bengaluru, Karnataka 560102
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="91+"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Programs Interested In
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                      />
                      <span className="text-gray-300">Online Learning</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                      />
                      <span className="text-gray-300">Bootcamp Program</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Write your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
