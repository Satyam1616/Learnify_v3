export default function PartnersSection() {
  const companies = [
    'Microsoft', 'Google', 'Amazon', 'Apple', 'Meta', 'Netflix', 
    'Adobe', 'Tesla', 'Uber', 'Airbnb', 'Spotify', 'Zoom',
    'Salesforce', 'Oracle', 'IBM', 'Intel'
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 border border-[hsl(219,79%,37%)] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-br from-[hsl(219,79%,37%)] to-[hsl(217,91%,60%)] rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 leading-tight animate-slide-up">
            <span className="block">Collaborating with the best</span>
            <span className="block gradient-text">to shape your future</span>
          </h2>
        </div>
        
        {/* First row - left to right */}
        <div className="overflow-hidden mb-8">
          <div className="flex animate-scroll space-x-8">
            {companies.concat(companies).map((company, index) => (
              <div 
                key={`row1-${index}`} 
                className="flex-shrink-0 w-40 h-24 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-shadow group"
              >
                <span className="text-gray-700 font-semibold text-sm group-hover:text-[hsl(219,79%,37%)] transition-colors">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Second row - right to left */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll space-x-8" style={{ animationDirection: 'reverse', animationDuration: '40s' }}>
            {companies.slice().reverse().concat(companies.slice().reverse()).map((company, index) => (
              <div 
                key={`row2-${index}`} 
                className="flex-shrink-0 w-40 h-24 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-shadow group"
              >
                <span className="text-gray-700 font-semibold text-sm group-hover:text-[hsl(219,79%,37%)] transition-colors">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
