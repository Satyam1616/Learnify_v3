import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-[hsl(219,79%,37%)] text-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full animate-float"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="animate-slide-up">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-white to-blue-200 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                <span className="text-[hsl(219,79%,37%)] font-bold text-xl">%</span>
              </div>
              <span className="text-2xl font-bold">UNLOX</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Making learning easy and accessible for everyone. Join thousands of learners who are transforming their careers with Unlox.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-all duration-300 hover:scale-110">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all duration-300 hover:scale-110">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold mb-6 text-blue-200">Programs</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">Job Bridge Programs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">Global Internship</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">E-Learning Courses</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">Research Paper</a></li>
            </ul>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-bold mb-6 text-blue-200">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">Blog</a></li>
            </ul>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-xl font-bold mb-6 text-blue-200">Support</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">EDU-LET</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-gray-300 text-lg">
            © 2025 UNLOX. All rights reserved. <span className="gradient-text font-semibold">Learning Made Easy.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
