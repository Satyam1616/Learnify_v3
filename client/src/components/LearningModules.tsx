export default function LearningModules() {
  const modules = [
    {
      title: "E-Learning Program",
      subtitle: "21 Courses",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      available: true
    },
    {
      title: "Global Internship",
      subtitle: "Coming Soon",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      available: false
    },
    {
      title: "Research Paper",
      subtitle: "Coming Soon",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      available: false
    }
  ];

  return (
    <section className="py-10 sm:py-16 md:py-20 bg-[hsl(220,13%,97%)] relative overflow-hidden">
      {/* Removed blue circle and border background pattern */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-slide-up">
            Unlox the easiest learning modules ever
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
          {modules.map((module, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-4 animate-scale-in ${!module.available ? 'grayscale hover:grayscale-0' : ''
                }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6 text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-[hsl(219,79%,37%)] transition-colors">
                  {module.title}
                </h3>
                <div className="flex items-center justify-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${module.available ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                  <p className={`font-semibold text-lg ${module.available ? 'text-[hsl(219,79%,37%)]' : 'text-gray-500'}`}>
                    {module.subtitle}
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={module.image}
                  alt={`${module.title} illustration`}
                  className="w-full max-w-full h-40 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {!module.available && (
                  <div className="absolute inset-0 bg-gray-900/70 flex items-center justify-center">
                    <span className="text-white text-lg font-bold px-4 py-2 bg-gray-800 rounded-lg">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>

              <div className="text-center">
                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${module.available
                  ? 'bg-[hsl(219,79%,37%)] text-white group-hover:bg-[hsl(217,91%,60%)]'
                  : 'bg-gray-200 text-gray-500'
                  }`}>
                  {module.available ? 'Available Now' : 'Coming Soon'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
