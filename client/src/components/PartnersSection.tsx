export default function PartnersSection() {
  const companies = [
    'Microsoft', 'Google', 'Amazon', 'Apple', 'Meta', 'Netflix',
    'Adobe', 'Tesla', 'Uber', 'Airbnb', 'Spotify', 'Zoom',
    'Salesforce', 'Oracle', 'IBM', 'Intel'
  ];

  return (
    <section className="py-10 sm:py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Removed blue circle and border background decoration */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-black text-gray-900 leading-tight animate-slide-up">
            <span className="block">Collaborating with the best</span>
            <span className="block gradient-text">to shape your future</span>
          </h2>
        </div>

        {/* First row - left to right */}
        <div className="overflow-x-auto mb-4 sm:mb-8">
          <div className="flex animate-scroll space-x-4 sm:space-x-8">
            {companies.concat(companies).map((company, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 w-28 h-16 sm:w-40 sm:h-24 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-shadow group"
              >
                <span className="text-gray-700 font-semibold text-xs sm:text-sm group-hover:text-[hsl(219,79%,37%)] transition-colors">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Second row - right to left */}
        <div className="overflow-x-auto">
          <div className="flex animate-scroll-reverse space-x-4 sm:space-x-8">
            {companies.concat(companies).map((company, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 w-28 h-16 sm:w-40 sm:h-24 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-shadow group"
              >
                <span className="text-gray-700 font-semibold text-xs sm:text-sm group-hover:text-[hsl(219,79%,37%)] transition-colors">
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
