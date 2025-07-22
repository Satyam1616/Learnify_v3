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
    <section className="py-20 bg-gradient-to-br from-gray-900 to-[hsl(219,79%,37%)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">
            Introducing<br />
            High-Tech<br />
            Smart Labs<br />
            Facility
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern classroom with high-tech equipment and smart boards"
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="High-tech learning environment with computers and digital displays"
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500'];
            
            return (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${colors[index]} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
