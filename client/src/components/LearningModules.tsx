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
    <section className="py-20 bg-[hsl(220,13%,97%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Unlox the easiest learning modules ever</h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{module.title}</h3>
                <p className={`font-semibold text-lg ${module.available ? 'text-[hsl(219,79%,37%)]' : 'text-gray-500'}`}>
                  {module.subtitle}
                </p>
              </div>
              
              <img 
                src={module.image}
                alt={`${module.title} illustration`}
                className="w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
