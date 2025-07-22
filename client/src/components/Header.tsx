import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full glass-effect z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-[hsl(219,79%,37%)] to-[hsl(217,91%,60%)] rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-lg">%</span>
              </div>
              <span className="text-xl font-bold text-gray-900">UNLOX</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/job-bridge-programs" className="text-gray-700 hover:text-[hsl(219,79%,37%)] px-3 py-2 text-sm font-medium transition-colors">
                Job Bridge Programs
              </Link>
              <Link href="/global-internship" className="text-gray-700 hover:text-[hsl(219,79%,37%)] px-3 py-2 text-sm font-medium transition-colors">
                Global Internship
              </Link>
              <Link href="/edu-let" className="text-gray-700 hover:text-[hsl(219,79%,37%)] px-3 py-2 text-sm font-medium transition-colors">
                EDU-LET
              </Link>
              <Link href="/about-us" className="text-gray-700 hover:text-[hsl(219,79%,37%)] px-3 py-2 text-sm font-medium transition-colors">
                About Us
              </Link>
              <Link href="/contact-us" className="text-gray-700 hover:text-[hsl(219,79%,37%)] px-3 py-2 text-sm font-medium transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-[hsl(219,79%,37%)] to-[hsl(217,91%,60%)] text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
              Talk to Expert
            </Button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[hsl(219,79%,37%)]"
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
              <Button className="w-full mt-4 bg-gradient-to-r from-[hsl(219,79%,37%)] to-[hsl(217,91%,60%)] text-white">
                Talk to Expert
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
