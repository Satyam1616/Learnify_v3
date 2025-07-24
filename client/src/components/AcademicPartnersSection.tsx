export default function AcademicPartnersSection() {
  const universities = [
    'IIT Delhi', 'IIT Bombay', 'IIT Madras', 'IIT Kanpur', 'NIT Trichy',
    'BITS Pilani', 'VIT Vellore', 'SRM University', 'Manipal Institute', 'Amity University',
    'Lovely Professional', 'Chandigarh University', 'Thapar Institute', 'PES University', 'KIIT University'
  ];

  return (
    <section className="py-10 sm:py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Removed blue circle and border background decoration */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <div className="animate-slide-up">
            <div className="text-3xl sm:text-6xl lg:text-8xl font-black text-[hsl(219,79%,37%)] mb-2 sm:mb-4">50+</div>
            <h2 className="text-xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">
              Academic & Employment Partner
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-8 sm:mb-12 w-full">
          {universities.map((university, index) => (
            <div
              key={index}
              className="bg-white p-3 sm:p-6 rounded-xl shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-10 sm:h-20 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center group-hover:from-[hsl(219,79%,37%)] group-hover:to-[hsl(217,91%,60%)] transition-all duration-300">
                <span className="text-gray-700 text-xs sm:text-sm font-semibold text-center px-1 sm:px-2 group-hover:text-white transition-colors">
                  {university}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional partners text */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <p className="text-base sm:text-xl text-gray-600 font-medium">
            And many more leading institutions across India
          </p>
        </div>
      </div>
    </section>
  );
}
