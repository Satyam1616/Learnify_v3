import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Dialog, DialogTrigger, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";

interface ThemedHeaderProps {
  theme: 'purple' | 'teal' | 'rose' | 'emerald' | 'amber' | 'indigo';
}

const themeConfig = {
  purple: {
    primary: 'purple-600',
    primaryHover: 'purple-700',
    secondary: 'violet-600',
    gradient: 'from-purple-600 to-violet-600',
    hoverGradient: 'from-purple-700 to-violet-700',
    logoGradient: 'from-purple-600 to-violet-600',
    text: 'text-purple-600',
    hoverText: 'hover:text-purple-600'
  },
  teal: {
    primary: 'teal-600',
    primaryHover: 'teal-700',
    secondary: 'cyan-600',
    gradient: 'from-teal-600 to-cyan-600',
    hoverGradient: 'from-teal-700 to-cyan-700',
    logoGradient: 'from-teal-600 to-cyan-600',
    text: 'text-teal-600',
    hoverText: 'hover:text-teal-600'
  },
  rose: {
    primary: 'rose-600',
    primaryHover: 'rose-700',
    secondary: 'pink-600',
    gradient: 'from-rose-600 to-pink-600',
    hoverGradient: 'from-rose-700 to-pink-700',
    logoGradient: 'from-rose-600 to-pink-600',
    text: 'text-rose-600',
    hoverText: 'hover:text-rose-600'
  },
  emerald: {
    primary: 'emerald-600',
    primaryHover: 'emerald-700',
    secondary: 'green-600',
    gradient: 'from-emerald-600 to-green-600',
    hoverGradient: 'from-emerald-700 to-green-700',
    logoGradient: 'from-emerald-600 to-green-600',
    text: 'text-emerald-600',
    hoverText: 'hover:text-emerald-600'
  },
  amber: {
    primary: 'amber-600',
    primaryHover: 'amber-700',
    secondary: 'yellow-600',
    gradient: 'from-amber-600 to-yellow-600',
    hoverGradient: 'from-amber-700 to-yellow-700',
    logoGradient: 'from-amber-600 to-yellow-600',
    text: 'text-amber-600',
    hoverText: 'hover:text-amber-600'
  },
  indigo: {
    primary: 'indigo-600',
    primaryHover: 'indigo-700',
    secondary: 'blue-600',
    gradient: 'from-indigo-600 to-blue-600',
    hoverGradient: 'from-indigo-700 to-blue-700',
    logoGradient: 'from-indigo-600 to-blue-600',
    text: 'text-indigo-600',
    hoverText: 'hover:text-indigo-600'
  }
};

export default function ThemedHeader({ theme }: ThemedHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [location] = useLocation();
  const config = themeConfig[theme];

  const courses = [
    { title: "Python Programming", href: "/e-learning/python-programming" },
    { title: "Digital Photography", href: "/e-learning/digital-photography" },
    { title: "Excel Business Analytics", href: "/e-learning/excel-business-analytics" },
    { title: "Graphic Design", href: "/e-learning/graphic-design-photoshop" },
    { title: "Financial Planning", href: "/e-learning/financial-planning" },
    { title: "Content Writing", href: "/e-learning/content-writing" }
  ];

  return (
    <header className="fixed top-0 w-full glass-effect z-50 border-b border-gray-100">
      <nav className="w-full px-4 md:max-w-7xl md:mx-auto md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <div className={`w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br ${config.logoGradient} rounded-lg flex items-center justify-center mr-2 group-hover:scale-110 group-active:scale-95 transition-transform duration-200`}>
                <span className="text-white font-bold text-base sm:text-lg">%</span>
              </div>
              <span className={`text-lg sm:text-xl font-bold text-gray-900 group-hover:${config.text.replace('text-', '')} transition-colors duration-200`}>LEARNIFY</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-6 flex items-baseline space-x-4 lg:space-x-8">
              <Link
                href="/job-bridge-programs"
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 relative group ${location === '/job-bridge-programs'
                  ? `${config.text} font-semibold`
                  : `text-gray-700 ${config.hoverText}`
                  }`}
              >
                Job Bridge Programs
                {location === '/job-bridge-programs' && (
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${config.gradient} rounded-full`}></div>
                )}
              </Link>
              <Link
                href="/global-internship"
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 relative group ${location === '/global-internship'
                  ? `${config.text} font-semibold`
                  : `text-gray-700 ${config.hoverText}`
                  }`}
              >
                Global Internship
                {location === '/global-internship' && (
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${config.gradient} rounded-full`}></div>
                )}
              </Link>
              <div className="relative group">
                <button
                  onMouseEnter={() => setIsCoursesDropdownOpen(true)}
                  onMouseLeave={() => setIsCoursesDropdownOpen(false)}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 relative group flex items-center ${location.startsWith('/e-learning')
                    ? `${config.text} font-semibold`
                    : `text-gray-700 ${config.hoverText}`
                    }`}
                >
                  E-Learning Courses
                  <ChevronDown className="ml-1 h-4 w-4" />
                  {location.startsWith('/e-learning') && (
                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${config.gradient} rounded-full`}></div>
                  )}
                </button>
                
                {isCoursesDropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                    onMouseEnter={() => setIsCoursesDropdownOpen(true)}
                    onMouseLeave={() => setIsCoursesDropdownOpen(false)}
                  >
                    <Link
                      href="/e-learning-courses"
                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 ${config.hoverText} font-medium border-b border-gray-100`}
                    >
                      All Courses
                    </Link>
                    {courses.map((course, index) => (
                      <Link
                        key={index}
                        href={course.href}
                        className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 ${config.hoverText}`}
                      >
                        {course.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/about-us"
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 relative group ${location === '/about-us'
                  ? `${config.text} font-semibold`
                  : `text-gray-700 ${config.hoverText}`
                  }`}
              >
                About Us
                {location === '/about-us' && (
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${config.gradient} rounded-full`}></div>
                )}
              </Link>
              <Link
                href="/contact-us"
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 relative group ${location === '/contact-us'
                  ? `${config.text} font-semibold`
                  : `text-gray-700 ${config.hoverText}`
                  }`}
              >
                Contact Us
                {location === '/contact-us' && (
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${config.gradient} rounded-full`}></div>
                )}
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <Dialog>
              <DialogTrigger asChild>
                <Button className={`bg-gradient-to-r ${config.gradient} hover:${config.hoverGradient} text-white px-4 sm:px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-sm sm:text-base`}>
                  Talk to Expert
                </Button>
              </DialogTrigger>
              <DialogContent>
                <div className="backdrop-blur-md">
                  <ContactForm />
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="md:hidden flex items-center justify-end">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`text-gray-700 ${config.hoverText} p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-${config.primary} m-0`}
              aria-label="Open menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/job-bridge-programs" className={`text-gray-700 ${config.hoverText} block px-3 py-2 text-base font-medium`}>
                Job Bridge Programs
              </Link>
              <Link href="/global-internship" className={`text-gray-700 ${config.hoverText} block px-3 py-2 text-base font-medium`}>
                Global Internship
              </Link>
              <Link href="/e-learning-courses" className={`text-gray-700 ${config.hoverText} block px-3 py-2 text-base font-medium`}>
                E-Learning Courses
              </Link>
              <Link href="/about-us" className={`text-gray-700 ${config.hoverText} block px-3 py-2 text-base font-medium`}>
                About Us
              </Link>
              <Link href="/contact-us" className={`text-gray-700 ${config.hoverText} block px-3 py-2 text-base font-medium`}>
                Contact Us
              </Link>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className={`w-full mt-4 bg-gradient-to-r ${config.gradient} hover:${config.hoverGradient} text-white text-base`}>
                    Talk to Expert
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <div className="backdrop-blur-md">
                    <ContactForm />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}