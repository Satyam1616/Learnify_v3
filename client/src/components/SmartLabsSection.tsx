import { Cloud, Wrench, FolderOpen } from "lucide-react";

export default function SmartLabsSection() {
  const features = [
    {
      icon: Cloud,
      title: "Cloud-Powered High-Performance System",
      description: "No laptops? No problem. Access top-end machines remotely from your tablet or any devices. All you need is the internet. No setup, no installation. Just login and start building."
    },
    {
      icon: Wrench,
      title: "Pre-Installed Industry Tools",
      description: "Everything you need - from python to AutoCAD, MATLAB to Android Studio, is already set up. Software licenses come included. Forget the expensive subscription."
    },
    {
      icon: FolderOpen,
      title: "Real-world Project Execution",
      description: "Complete mentor-assigned and industry-mapped projects using real environments."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-[hsl(219,79%,37%)] text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full animate-float"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-bounce-slow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="animate-slide-up">
            <span className="text-lg font-medium text-blue-200 mb-4 block tracking-wider">Facility</span>
            <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight">
              <span className="block">Introducing</span>
              <span className="block gradient-text">High-Tech</span>
              <span className="block">Smart Labs</span>
              <span className="block text-blue-300">Facility</span>
            </h2>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Modern classroom with high-tech equipment and smart boards"
                className="rounded-2xl shadow-2xl w-full h-auto group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-20 blur-xl"></div>
            </div>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="High-tech learning environment with computers and digital displays"
                className="rounded-2xl shadow-2xl w-full h-auto group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500'];
            
            return (
              <div 
                key={index} 
                className="text-center animate-scale-in group"
                style={{ animationDelay: `${0.9 + index * 0.2}s` }}
              >
                <div className={`w-20 h-20 ${colors[index]} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 group-hover:text-blue-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
