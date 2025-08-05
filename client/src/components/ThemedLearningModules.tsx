interface ThemedLearningModulesProps {
  theme: 'purple' | 'teal' | 'rose' | 'emerald' | 'amber' | 'indigo';
}

const themeConfig = {
  purple: {
    hoverText: 'group-hover:text-purple-600',
    accentText: 'text-purple-600',
    availableBg: 'bg-purple-600',
    availableHover: 'group-hover:bg-purple-700'
  },
  teal: {
    hoverText: 'group-hover:text-teal-600',
    accentText: 'text-teal-600',
    availableBg: 'bg-teal-600',
    availableHover: 'group-hover:bg-teal-700'
  },
  rose: {
    hoverText: 'group-hover:text-rose-600',
    accentText: 'text-rose-600',
    availableBg: 'bg-rose-600',
    availableHover: 'group-hover:bg-rose-700'
  },
  emerald: {
    hoverText: 'group-hover:text-emerald-600',
    accentText: 'text-emerald-600',
    availableBg: 'bg-emerald-600',
    availableHover: 'group-hover:bg-emerald-700'
  },
  amber: {
    hoverText: 'group-hover:text-amber-600',
    accentText: 'text-amber-600',
    availableBg: 'bg-amber-600',
    availableHover: 'group-hover:bg-amber-700'
  },
  indigo: {
    hoverText: 'group-hover:text-indigo-600',
    accentText: 'text-indigo-600',
    availableBg: 'bg-indigo-600',
    availableHover: 'group-hover:bg-indigo-700'
  }
};

export default function ThemedLearningModules({ theme }: ThemedLearningModulesProps) {
  const config = themeConfig[theme];
  
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
    <section className="py-12 sm:py-16 lg:py-20 bg-[hsl(220,13%,97%)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 animate-slide-up leading-tight px-4">
            Learnify the easiest learning modules ever
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {modules.map((module, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2 sm:hover:-translate-y-4 animate-scale-in ${!module.available ? 'grayscale hover:grayscale-0' : ''
                }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4 sm:mb-6 text-center">
                <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 ${config.hoverText} transition-colors leading-tight`}>
                  {module.title}
                </h3>
                <div className="flex items-center justify-center space-x-2">
                  <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${module.available ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                  <p className={`font-semibold text-base sm:text-lg ${module.available ? config.accentText : 'text-gray-500'}`}>
                    {module.subtitle}
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl mb-4 sm:mb-6">
                <img
                  src={module.image}
                  alt={`${module.title} illustration`}
                  className="w-full max-w-full h-32 sm:h-40 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {!module.available && (
                  <div className="absolute inset-0 bg-gray-900/70 flex items-center justify-center">
                    <span className="text-white text-sm sm:text-base lg:text-lg font-bold px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-800 rounded-lg">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>

              <div className="text-center">
                <div className={`inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${module.available
                  ? `${config.availableBg} text-white ${config.availableHover}`
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