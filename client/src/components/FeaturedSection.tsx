export default function FeaturedSection() {
  const companies = [
    { name: "Microsoft", logo: "/api/placeholder/120/60" },
    { name: "Google", logo: "/api/placeholder/120/60" },
    { name: "Amazon", logo: "/api/placeholder/120/60" },
    { name: "Meta", logo: "/api/placeholder/120/60" },
    { name: "Apple", logo: "/api/placeholder/120/60" },
    { name: "Netflix", logo: "/api/placeholder/120/60" },
    { name: "Adobe", logo: "/api/placeholder/120/60" },
    { name: "Salesforce", logo: "/api/placeholder/120/60" }
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-200">
      <div className="w-full px-4 md:max-w-7xl md:mx-auto md:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Featured Across
          </h2>
          <p className="text-gray-600">
            Our students work at leading companies worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
          {companies.map((company, index) => (
            <div
              key={company.name}
              className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}