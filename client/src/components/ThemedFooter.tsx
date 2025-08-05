import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "wouter";
import ThemedNewsletterForm from "./ThemedNewsletterForm";

interface ThemedFooterProps {
  theme: 'purple' | 'teal' | 'rose' | 'emerald' | 'amber' | 'indigo';
}

const themeConfig = {
  purple: {
    primary: 'purple-600',
    secondary: 'violet-600',
    logoGradient: 'from-white to-purple-200',
    logoText: 'text-purple-600',
    headingText: 'text-purple-700',
    hoverText: 'hover:text-purple-700',
    socialHover: 'hover:bg-purple-600',
    gradientText: 'text-purple-700'
  },
  teal: {
    primary: 'teal-600',
    secondary: 'cyan-600',
    logoGradient: 'from-white to-teal-200',
    logoText: 'text-teal-600',
    headingText: 'text-teal-700',
    hoverText: 'hover:text-teal-700',
    socialHover: 'hover:bg-teal-600',
    gradientText: 'text-teal-700'
  },
  rose: {
    primary: 'rose-600',
    secondary: 'pink-600',
    logoGradient: 'from-white to-rose-200',
    logoText: 'text-rose-600',
    headingText: 'text-rose-700',
    hoverText: 'hover:text-rose-700',
    socialHover: 'hover:bg-rose-600',
    gradientText: 'text-rose-700'
  },
  emerald: {
    primary: 'emerald-600',
    secondary: 'green-600',
    logoGradient: 'from-white to-emerald-200',
    logoText: 'text-emerald-600',
    headingText: 'text-emerald-700',
    hoverText: 'hover:text-emerald-700',
    socialHover: 'hover:bg-emerald-600',
    gradientText: 'text-emerald-700'
  },
  amber: {
    primary: 'amber-600',
    secondary: 'yellow-600',
    logoGradient: 'from-white to-amber-200',
    logoText: 'text-amber-600',
    headingText: 'text-amber-700',
    hoverText: 'hover:text-amber-700',
    socialHover: 'hover:bg-amber-600',
    gradientText: 'text-amber-700'
  },
  indigo: {
    primary: 'indigo-600',
    secondary: 'blue-600',
    logoGradient: 'from-white to-indigo-200',
    logoText: 'text-indigo-600',
    headingText: 'text-indigo-700',
    hoverText: 'hover:text-indigo-700',
    socialHover: 'hover:bg-indigo-600',
    gradientText: 'text-indigo-700'
  }
};

export default function ThemedFooter({ theme }: ThemedFooterProps) {
  const config = themeConfig[theme];

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 py-10 sm:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="animate-slide-up mb-8 md:mb-0">
            <div className="flex items-center mb-6">
              <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br ${config.logoGradient} rounded-lg flex items-center justify-center mr-3 shadow-lg`}>
                <span className={`${config.logoText} font-bold text-lg sm:text-xl`}>%</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold">LEARNIFY</span>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
              Making learning easy and accessible for everyone. Join thousands of learners who are transforming their careers with Learnify.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="https://facebook.com/learnify" target="_blank" rel="noopener noreferrer" className={`w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center ${config.socialHover} transition-all duration-300 hover:scale-110`}>
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="https://twitter.com/learnify" target="_blank" rel="noopener noreferrer" className={`w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center ${config.socialHover} transition-all duration-300 hover:scale-110`}>
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="https://linkedin.com/company/learnify" target="_blank" rel="noopener noreferrer" className={`w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center ${config.socialHover} transition-all duration-300 hover:scale-110`}>
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="https://instagram.com/learnify" target="_blank" rel="noopener noreferrer" className={`w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center ${config.socialHover} transition-all duration-300 hover:scale-110`}>
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>
          <div className="animate-slide-up mb-8 md:mb-0" style={{ animationDelay: '0.2s' }}>
            <h3 className={`text-lg sm:text-xl font-bold mb-4 sm:mb-6 ${config.headingText}`}>Programs</h3>
            <ul className="space-y-2 sm:space-y-4">
              <li><Link href="/job-bridge-programs" className={`text-gray-900 ${config.hoverText} hover:translate-x-2 transition-all duration-300 block text-sm sm:text-base`}>Job Bridge Programs</Link></li>
              <li><Link href="/global-internship" className={`text-gray-900 ${config.hoverText} hover:translate-x-2 transition-all duration-300 block text-sm sm:text-base`}>Global Internship</Link></li>
              <li><Link href="/e-learning-courses" className={`text-gray-900 ${config.hoverText} hover:translate-x-2 transition-all duration-300 block text-sm sm:text-base`}>E-Learning Courses</Link></li>
              <li><Link href="/research-paper" className={`text-gray-900 ${config.hoverText} hover:translate-x-2 transition-all duration-300 block text-sm sm:text-base`}>Research Paper</Link></li>
            </ul>
          </div>
          <div className="animate-slide-up mb-8 md:mb-0" style={{ animationDelay: '0.4s' }}>
            <h3 className={`text-lg sm:text-xl font-bold mb-4 sm:mb-6 ${config.headingText}`}>Company</h3>
            <ul className="space-y-2 sm:space-y-4">
              <li><Link href="/about-us" className={`text-gray-900 ${config.hoverText} hover:translate-x-2 transition-all duration-300 block text-sm sm:text-base`}>About Us</Link></li>
              <li><Link href="/contact-us" className={`text-gray-900 ${config.hoverText} hover:translate-x-2 transition-all duration-300 block text-sm sm:text-base`}>Contact Us</Link></li>
              <li><Link href="/careers" className={`text-gray-900 ${config.hoverText} hover:translate-x-2 transition-all duration-300 block text-sm sm:text-base`}>Careers</Link></li>
              <li><Link href="/blog" className={`text-gray-900 ${config.hoverText} hover:translate-x-2 transition-all duration-300 block text-sm sm:text-base`}>Blog</Link></li>
            </ul>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <h3 className={`text-lg sm:text-xl font-bold mb-4 sm:mb-6 ${config.headingText}`}>Support</h3>
            <ul className="space-y-2 sm:space-y-4">
              <li><Link href="/help-center" className={`text-gray-900 ${config.hoverText} hover:translate-x-2 transition-all duration-300 block text-sm sm:text-base`}>Help Center</Link></li>
              <li><Link href="/privacy-policy" className={`text-gray-900 ${config.hoverText} hover:translate-x-2 transition-all duration-300 block text-sm sm:text-base`}>Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className={`text-gray-900 ${config.hoverText} hover:translate-x-2 transition-all duration-300 block text-sm sm:text-base`}>Terms of Service</Link></li>
              <li><Link href="/edu-let" className={`text-gray-900 ${config.hoverText} hover:translate-x-2 transition-all duration-300 block text-sm sm:text-base`}>EDU-LET</Link></li>
            </ul>
          </div>
          <ThemedNewsletterForm theme={theme} />
        </div>
        <div className="border-t border-gray-300 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-gray-700 text-sm sm:text-lg">
            © 2025 LEARNIFY. All rights reserved. <span className={`gradient-text font-semibold ${config.gradientText}`}>Learning Made Easy.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}