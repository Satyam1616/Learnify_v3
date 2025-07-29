export default function StatsSection() {
  const stats = [
    {
      number: "20+",
      label: "Job Seekers",
      description: "Successfully placed"
    },
    {
      number: "30+",
      label: "Students",
      description: "Currently enrolled"
    },
    {
      number: "100+",
      label: "Companies",
      description: "Hiring partners"
    },
    {
      number: "500+",
      label: "Jobs",
      description: "Available positions"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-scale-in p-4 sm:p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-2 sm:mb-3">
                {stat.number}
              </div>
              <div className="text-base sm:text-lg lg:text-xl font-semibold text-blue-300 mb-1 sm:mb-2">
                {stat.label}
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-400 leading-relaxed">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}