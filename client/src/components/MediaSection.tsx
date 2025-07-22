export default function MediaSection() {
  const mediaOutlets = [
    "Google News", "Yahoo News", "Business Standard", "The Print", 
    "ANI News", "Latestly", "European Sun Times", "Karnataka Live",
    "South Indian News", "Haryana Today", "Himachal Patrika", "Times Now"
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-[hsl(219,79%,37%)] to-[hsl(217,91%,60%)] rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 border-2 border-[hsl(219,79%,37%)] rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-slide-up">Featured In</h2>
        </div>
        
        {/* Media outlets grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
          {mediaOutlets.map((outlet, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-gray-50 to-gray-100 border rounded-xl p-4 h-20 flex items-center justify-center shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-gray-700 font-medium text-sm text-center group-hover:text-[hsl(219,79%,37%)] transition-colors">
                {outlet}
              </span>
            </div>
          ))}
        </div>
        
        {/* Infinite scroll row */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll space-x-6">
            {mediaOutlets.concat(mediaOutlets).map((outlet, index) => (
              <div 
                key={`scroll-${index}`} 
                className="flex-shrink-0 w-48 h-16 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow group"
              >
                <span className="text-gray-700 font-medium text-sm text-center px-3 group-hover:text-[hsl(219,79%,37%)] transition-colors">
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
