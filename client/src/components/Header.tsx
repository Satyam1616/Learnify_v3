import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Dialog, DialogTrigger, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [location] = useLocation();

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
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-[hsl(25,95%,53%)] to-[hsl(35,95%,60%)] rounded-lg flex items-center justify-center mr-2 group-hover:scale-110 group-active:scale-95 transition-transform duration-200">
                <span className="text-white font-bold text-base sm:text-lg">%</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[hsl(25,95%,53%)] transition-colors duration-200">LEARNIFY</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-6 flex items-baseline space-x-4 lg:space-x-8">
              <Link
                href="/job-bridge-programs"
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 relative group ${location === '/job-bridge-programs'
                  ? 'text-[hsl(25,95%,53%)] font-semibold'
                  : 'text-gray-700 hover:text-[hsl(25,95%,53%)]'
                  }`}
              >
                Job Bridge Programs
                {location === '/job-bridge-programs' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(25,95%,53%)] to-[hsl(35,95%,60%)] rounded-full"></div>
                )}
              </Link>
              <Link
                href="/global-internship"
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 relative group ${location === '/global-internship'
                  ? 'text-[hsl(25,95%,53%)] font-semibold'
                  : 'text-gray-700 hover:text-[hsl(25,95%,53%)]'
                  }`}
              >
                Global Internship
                {location === '/global-internship' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(25,95%,53%)] to-[hsl(35,95%,60%)] rounded-full"></div>
                )}
              </Link>
              <div className="relative group">
                <button
                  onMouseEnter={() => setIsCoursesDropdownOpen(true)}
                  onMouseLeave={() => setIsCoursesDropdownOpen(false)}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 relative group flex items-center ${location.startsWith('/e-learning')
                    ? 'text-[hsl(25,95%,53%)] font-semibold'
                    : 'text-gray-700 hover:text-[hsl(25,95%,53%)]'
                    }`}
                >
                  E-Learning Courses
                  <ChevronDown className="ml-1 h-4 w-4" />
                  {location.startsWith('/e-learning') && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(25,95%,53%)] to-[hsl(35,95%,60%)] rounded-full"></div>
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
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[hsl(25,95%,53%)] font-medium border-b border-gray-100"
                    >
                      All Courses
                    </Link>
                    {courses.map((course, index) => (
                      <Link
                        key={index}
                        href={course.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[hsl(25,95%,53%)]"
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
                  ? 'text-[hsl(25,95%,53%)] font-semibold'
                  : 'text-gray-700 hover:text-[hsl(25,95%,53%)]'
                  }`}
              >
                About Us
                {location === '/about-us' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(25,95%,53%)] to-[hsl(35,95%,60%)] rounded-full"></div>
                )}
              </Link>
              <Link
                href="/contact-us"
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 relative group ${location === '/contact-us'
                  ? 'text-[hsl(25,95%,53%)] font-semibold'
                  : 'text-gray-700 hover:text-[hsl(25,95%,53%)]'
                  }`}
              >
                Contact Us
                {location === '/contact-us' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(25,95%,53%)] to-[hsl(35,95%,60%)] rounded-full"></div>
                )}
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-[hsl(25,95%,53%)] to-[hsl(35,95%,60%)] text-white px-4 sm:px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-sm sm:text-base">
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
              className="text-gray-700 hover:text-[hsl(25,95%,53%)] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(25,95%,53%)] m-0"
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
              <Link href="/job-bridge-programs" className="text-gray-700 hover:text-[hsl(25,95%,53%)] block px-3 py-2 text-base font-medium">
                Job Bridge Programs
              </Link>
              <Link href="/global-internship" className="text-gray-700 hover:text-[hsl(25,95%,53%)] block px-3 py-2 text-base font-medium">
                Global Internship
              </Link>
              <Link href="/e-learning-courses" className="text-gray-700 hover:text-[hsl(25,95%,53%)] block px-3 py-2 text-base font-medium">
                E-Learning Courses
              </Link>
              <Link href="/about-us" className="text-gray-700 hover:text-[hsl(25,95%,53%)] block px-3 py-2 text-base font-medium">
                About Us
              </Link>
              <Link href="/contact-us" className="text-gray-700 hover:text-[hsl(25,95%,53%)] block px-3 py-2 text-base font-medium">
                Contact Us
              </Link>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full mt-4 bg-gradient-to-r from-[hsl(25,95%,53%)] to-[hsl(35,95%,60%)] text-white text-base">
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
