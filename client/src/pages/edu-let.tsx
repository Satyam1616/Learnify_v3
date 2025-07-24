import { Button } from "@/components/ui/button";
import { Tablet, Wifi, BookOpen, Clock, Shield, Headphones } from "lucide-react";
import Layout from "@/components/Layout";

export default function EduLetPage() {
  const features = [
    {
      icon: Tablet,
      title: "Dedicated Learning Device",
      description: "Every student receives a premium educational tablet designed specifically for distraction-free learning."
    },
    {
      icon: Wifi,
      title: "24/7 Connectivity",
      description: "Always-on internet access ensures you never miss a learning opportunity, anywhere, anytime."
    },
    {
      icon: BookOpen,
      title: "Pre-loaded Content",
      description: "All course materials, videos, and resources are pre-installed and regularly updated."
    },
    {
      icon: Clock,
      title: "Offline Access",
      description: "Continue learning even without internet connection with offline-capable content."
    },
    {
      icon: Shield,
      title: "Secure & Safe",
      description: "Built-in parental controls and safe browsing ensure a secure learning environment."
    },
    {
      icon: Headphones,
      title: "Audio Enhancement",
      description: "High-quality audio output with noise-cancellation support for immersive learning."
    }
  ];

  const specifications = [
    { label: "Display", value: "10.1 inch Full HD IPS" },
    { label: "Processor", value: "Octa-core ARM Cortex" },
    { label: "RAM", value: "4GB LPDDR4" },
    { label: "Storage", value: "64GB eMMC + MicroSD" },
    { label: "Battery", value: "8000mAh (12+ hours)" },
    { label: "OS", value: "Android 12 (Education Edition)" },
    { label: "Connectivity", value: "WiFi 6, Bluetooth 5.0, 4G LTE" },
    { label: "Camera", value: "8MP Rear, 5MP Front" }
  ];

  const apps = [
    { name: "Learnify Academy", description: "Main learning platform with AI assistant Blu" },
    { name: "Virtual Labs", description: "Hands-on practice environments for coding and design" },
    { name: "Assessment Center", description: "Regular quizzes, tests, and progress tracking" },
    { name: "Study Planner", description: "AI-powered study schedule and goal management" },
    { name: "Peer Connect", description: "Collaborate with fellow students and mentors" },
    { name: "Resource Library", description: "Access to thousands of books, papers, and videos" }
  ];

  return (
    <Layout>
      <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full animate-float"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 animate-slide-up">
                <span className="text-white">Edu-let</span>
                <br />
                <span className="text-blue-300">India's First</span>
                <br />
                <span className="text-blue-300">Educational Tablet</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Revolutionizing education with dedicated learning devices. Experience distraction-free learning with 24/7 access to premium educational content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <Button className="bg-white text-blue-900 px-8 py-4 text-lg font-semibold hover:bg-gray-100">
                  Get Your Edu-let
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold">
                  Watch Demo
                </Button>
              </div>
            </div>
            
            <div className="relative animate-float">
              <div className="bg-black rounded-3xl p-8 shadow-2xl">
                {/* Tablet mockup */}
                <div className="bg-gray-900 rounded-2xl p-4">
                  {/* Interactive screen */}
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl p-6 mb-4 relative min-h-[250px] flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                        <div className="w-0 h-0 border-l-8 border-r-8 border-b-12 border-transparent border-b-white"></div>
                      </div>
                      <div className="text-white text-lg font-bold mb-2">Welcome to Learnify</div>
                      <div className="text-blue-100 text-sm">Your learning journey starts here</div>
                    </div>
                  </div>
                  
                  {/* Home screen */}
                  <div className="bg-gray-800 rounded-xl p-6 relative min-h-[200px]">
                    <div className="text-center">
                      <div className="text-white text-2xl font-bold mb-2">11:36</div>
                      <div className="text-white text-xl font-bold mb-4">LEARNIFY</div>
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {["📚", "🎓", "📊", "💬", "⚙️", "📱"].map((icon, i) => (
                          <div key={i} className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center text-lg">
                            {icon}
                          </div>
                        ))}
                      </div>
                      <div className="text-gray-400 text-xs">Edu-let by Learnify Academy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Edu-let is Revolutionary
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed specifically for education, Edu-let provides the perfect learning environment without distractions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-xl transition-shadow animate-scale-in border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Technical Specifications
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Edu-let is powered by cutting-edge technology to ensure smooth performance and reliability for your learning needs.
              </p>
              
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div 
                    key={index}
                    className="flex justify-between items-center p-4 bg-white rounded-xl border animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="font-semibold text-gray-700">{spec.label}</span>
                    <span className="text-gray-900 font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">What's Included</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 text-sm">✓</span>
                    </div>
                    Edu-let Tablet (10.1 inch)
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 text-sm">✓</span>
                    </div>
                    Protective Case & Screen Guard
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 text-sm">✓</span>
                    </div>
                    Fast Charging Adapter
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 text-sm">✓</span>
                    </div>
                    Premium Stylus Pen
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 text-sm">✓</span>
                    </div>
                    1 Year Warranty
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 text-sm">✓</span>
                    </div>
                    24/7 Technical Support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Pre-installed Learning Apps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Edu-let comes with a comprehensive suite of educational applications designed for effective learning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apps.map((app, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{app.name}</h3>
                <p className="text-gray-600">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Transform Your Learning Experience
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of students already using Edu-let to accelerate their learning journey. Get your educational tablet today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-900 px-8 py-4 text-lg font-semibold hover:bg-gray-100">
              Order Edu-let Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
}