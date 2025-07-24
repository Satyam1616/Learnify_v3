import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "wouter";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 py-10 sm:py-16 relative overflow-hidden">
      {/* Removed blue circle and border background decoration */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="animate-slide-up mb-8 md:mb-0">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-white to-blue-200 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                <span className="text-[hsl(219,79%,37%)] font-bold text-lg sm:text-xl">%</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold">LEARNIFY</span>
            </div>
                          <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                Making learning easy and accessible for everyone. Join thousands of learners who are transforming their careers with Learnify.
              </p>
                          <div className="flex space-x-3 sm:space-x-4">
                <a href="https://facebook.com/learnify" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110">
                  <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
                <a href="https://twitter.com/learnify" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-all duration-300 hover:scale-110">
                  <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
                <a href="https://linkedin.com/company/learnify" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110">
                  <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
                <a href="https://instagram.com/learnify" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all duration-300 hover:scale-110">
                  <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </div>
          </div>
          <div className="animate-slide-up mb-8 md:mb-0" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-blue-700">Programs</h3>
            <ul className="space-y-2 sm:space-y-4">
              <li><Link href="/job-bridge-programs" className="text-gray-900 hover:text-blue-700 hover:translate-x-2 transition-all duration-300 block text-sm sm:text-base">Job Bridge Programs</Link></li>
              <li><Link href="/global-internship" className="text-gray-900 hover:text-blue-700 hover:translate-x-2 transition-all duration-300 block text-sm sm:text-base">Global Internship</Link></li>
              <li><Link href="/e-learning-courses" className="text-gray-900 hover:text-blue-700 hover:translate-x-2 transition-all duration-300 block text-sm sm:text-base">E-Learning Courses</Link></li>
              <li><Link href="/research-paper" className="text-gray-900 hover:text-blue-700 hover:translate-x-2 transition-all duration-300 block text-sm sm:text-base">Research Paper</Link></li>
            </ul>
          </div>
          <div className="animate-slide-up mb-8 md:mb-0" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-blue-700">Company</h3>
            <ul className="space-y-2 sm:space-y-4">
              <li><Link href="/about-us" className="text-gray-900 hover:text-blue-700 hover:translate-x-2 transition-all duration-300 block text-sm sm:text-base">About Us</Link></li>
              <li><Link href="/contact-us" className="text-gray-900 hover:text-blue-700 hover:translate-x-2 transition-all duration-300 block text-sm sm:text-base">Contact Us</Link></li>
              <li><Link href="/careers" className="text-gray-900 hover:text-blue-700 hover:translate-x-2 transition-all duration-300 block text-sm sm:text-base">Careers</Link></li>
              <li><Link href="/blog" className="text-gray-900 hover:text-blue-700 hover:translate-x-2 transition-all duration-300 block text-sm sm:text-base">Blog</Link></li>
            </ul>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-blue-700">Support</h3>
            <ul className="space-y-2 sm:space-y-4">
              <li><Link href="/help-center" className="text-gray-900 hover:text-blue-700 hover:translate-x-2 transition-all duration-300 block text-sm sm:text-base">Help Center</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-900 hover:text-blue-700 hover:translate-x-2 transition-all duration-300 block text-sm sm:text-base">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-gray-900 hover:text-blue-700 hover:translate-x-2 transition-all duration-300 block text-sm sm:text-base">Terms of Service</Link></li>
              <li><Link href="/edu-let" className="text-gray-900 hover:text-blue-700 hover:translate-x-2 transition-all duration-300 block text-sm sm:text-base">EDU-LET</Link></li>
            </ul>
          </div>
          <NewsletterForm />
        </div>
        <div className="border-t border-gray-300 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-gray-700 text-sm sm:text-lg">
            © 2025 LEARNIFY. All rights reserved. <span className="gradient-text font-semibold text-blue-700">Learning Made Easy.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
