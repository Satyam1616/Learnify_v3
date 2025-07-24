import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Dialog, DialogTrigger, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="fixed top-0 w-full glass-effect z-50 border-b border-gray-100">
      <nav className="w-full px-4 md:max-w-7xl md:mx-auto md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-[hsl(219,79%,37%)] to-[hsl(217,91%,60%)] rounded-lg flex items-center justify-center mr-2 group-hover:scale-110 group-active:scale-95 transition-transform duration-200">
                <span className="text-white font-bold text-base sm:text-lg">%</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[hsl(219,79%,37%)] transition-colors duration-200">UNLOX</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-6 flex items-baseline space-x-4 lg:space-x-8">
              <Link
                href="/job-bridge-programs"
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 relative group ${location === '/job-bridge-programs'
                  ? 'text-[hsl(219,79%,37%)] font-semibold'
                  : 'text-gray-700 hover:text-[hsl(219,79%,37%)]'
                  }`}
              >
                Job Bridge Programs
                {location === '/job-bridge-programs' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(219,79%,37%)] to-[hsl(217,91%,60%)] rounded-full"></div>
                )}
              </Link>
              <Link
                href="/global-internship"
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 relative group ${location === '/global-internship'
                  ? 'text-[hsl(219,79%,37%)] font-semibold'
                  : 'text-gray-700 hover:text-[hsl(219,79%,37%)]'
                  }`}
              >
                Global Internship
                {location === '/global-internship' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(219,79%,37%)] to-[hsl(217,91%,60%)] rounded-full"></div>
                )}
              </Link>
              <Link
                href="/edu-let"
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 relative group ${location === '/edu-let'
                  ? 'text-[hsl(219,79%,37%)] font-semibold'
                  : 'text-gray-700 hover:text-[hsl(219,79%,37%)]'
                  }`}
              >
                EDU-LET
                {location === '/edu-let' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(219,79%,37%)] to-[hsl(217,91%,60%)] rounded-full"></div>
                )}
              </Link>
              <Link
                href="/about-us"
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 relative group ${location === '/about-us'
                  ? 'text-[hsl(219,79%,37%)] font-semibold'
                  : 'text-gray-700 hover:text-[hsl(219,79%,37%)]'
                  }`}
              >
                About Us
                {location === '/about-us' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(219,79%,37%)] to-[hsl(217,91%,60%)] rounded-full"></div>
                )}
              </Link>
              <Link
                href="/contact-us"
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 relative group ${location === '/contact-us'
                  ? 'text-[hsl(219,79%,37%)] font-semibold'
                  : 'text-gray-700 hover:text-[hsl(219,79%,37%)]'
                  }`}
              >
                Contact Us
                {location === '/contact-us' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(219,79%,37%)] to-[hsl(217,91%,60%)] rounded-full"></div>
                )}
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-[hsl(219,79%,37%)] to-[hsl(217,91%,60%)] text-white px-4 sm:px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-sm sm:text-base">
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
              className="text-gray-700 hover:text-[hsl(219,79%,37%)] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(219,79%,37%)] m-0"
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
              <Link href="/job-bridge-programs" className="text-gray-700 hover:text-[hsl(219,79%,37%)] block px-3 py-2 text-base font-medium">
                Job Bridge Programs
              </Link>
              <Link href="/global-internship" className="text-gray-700 hover:text-[hsl(219,79%,37%)] block px-3 py-2 text-base font-medium">
                Global Internship
              </Link>
              <Link href="/edu-let" className="text-gray-700 hover:text-[hsl(219,79%,37%)] block px-3 py-2 text-base font-medium">
                EDU-LET
              </Link>
              <Link href="/about-us" className="text-gray-700 hover:text-[hsl(219,79%,37%)] block px-3 py-2 text-base font-medium">
                About Us
              </Link>
              <Link href="/contact-us" className="text-gray-700 hover:text-[hsl(219,79%,37%)] block px-3 py-2 text-base font-medium">
                Contact Us
              </Link>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full mt-4 bg-gradient-to-r from-[hsl(219,79%,37%)] to-[hsl(217,91%,60%)] text-white text-base">
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
