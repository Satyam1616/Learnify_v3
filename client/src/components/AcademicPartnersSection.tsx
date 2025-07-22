export default function AcademicPartnersSection() {
  const universities = [
    'IIT Delhi', 'IIT Bombay', 'IIT Madras', 'IIT Kanpur', 'NIT Trichy',
    'BITS Pilani', 'VIT Vellore', 'SRM University', 'Manipal Institute', 'Amity University',
    'Lovely Professional', 'Chandigarh University', 'Thapar Institute', 'PES University', 'KIIT University'
  ];

  return (
    <section className="py-20 bg-[hsl(220,13%,97%)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-48 h-48 border-4 border-[hsl(219,79%,37%)] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-[hsl(219,79%,37%)] to-[hsl(217,91%,60%)] rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="animate-slide-up">
            <div className="text-6xl lg:text-8xl font-black text-[hsl(219,79%,37%)] mb-4">50+</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Academic & Employment Partner
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {universities.map((university, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-20 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center group-hover:from-[hsl(219,79%,37%)] group-hover:to-[hsl(217,91%,60%)] transition-all duration-300">
                <span className="text-gray-700 text-sm font-semibold text-center px-2 group-hover:text-white transition-colors">
                  {university}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional partners text */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <p className="text-xl text-gray-600 font-medium">
            And many more leading institutions across India
          </p>
        </div>
      </div>
    </section>
  );
}
