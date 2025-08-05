import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Home, Sparkles, Moon, Leaf, Minus, Zap, Palette, ChevronUp, ChevronDown, Heart, Droplets, Flower, TreePine, Sun, Eye } from "lucide-react";
import { Link } from "wouter";
import { useState, useRef, useEffect } from "react";

export default function HomePageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleThemeClick = () => {
    setIsOpen(false);
  };

  // Close panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Main Toggle Button */}
      <div className="relative" ref={containerRef}>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={`bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-2xl rounded-full p-4 h-auto transition-all duration-300 ${
            isOpen ? 'scale-105 shadow-purple-500/25' : 'hover:scale-105'
          }`}
        >
          <Palette className={`h-5 w-5 mr-2 transition-transform duration-300 ${isOpen ? 'rotate-12' : ''}`} />
          Themes
          {isOpen ? (
            <ChevronDown className="h-4 w-4 ml-2 transition-transform duration-300" />
          ) : (
            <ChevronUp className="h-4 w-4 ml-2 transition-transform duration-300" />
          )}
        </Button>

        {/* Theme Options Panel */}
        {isOpen && (
          <Card className="absolute bottom-16 right-0 bg-white/95 backdrop-blur-sm border shadow-2xl w-64 animate-in slide-in-from-bottom-4 fade-in duration-300">
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="text-center">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700 mb-2">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Choose Theme
                  </Badge>
                </div>
                
                <div className="flex flex-col space-y-2 max-h-96 overflow-y-auto">
                  <Link href="/" onClick={handleThemeClick}>
                    <Button variant="outline" size="sm" className="w-full justify-start hover:bg-gray-50">
                      <Home className="h-4 w-4 mr-2" />
                      Original Home
                    </Button>
                  </Link>
              
                  <Link href="/new-home" onClick={handleThemeClick}>
                    <Button variant="outline" size="sm" className="w-full justify-start hover:bg-gray-50">
                      <Sparkles className="h-4 w-4 mr-2" />
                      Modern Home
                    </Button>
                  </Link>
              
                  <Link href="/home-v3" onClick={handleThemeClick}>
                    <Button variant="outline" size="sm" className="w-full justify-start hover:bg-gray-50">
                      <Sparkles className="h-4 w-4 mr-2" />
                      Venture Style
                    </Button>
                  </Link>
              
                  <Link href="/home-v4" onClick={handleThemeClick}>
                    <Button size="sm" className="w-full justify-start bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white">
                      <Sparkles className="h-4 w-4 mr-2" />
                      Medical Tech
                      <ArrowRight className="h-3 w-3 ml-auto" />
                    </Button>
                  </Link>

                  {/* New Themed Pages */}
                  <div className="border-t pt-3 mt-3">
                    <div className="text-xs text-gray-500 mb-2 text-center font-medium">New Themes</div>
                    
                    <Link href="/home-dark" onClick={handleThemeClick}>
                      <Button variant="outline" size="sm" className="w-full justify-start bg-gray-900 text-white hover:bg-gray-800 border-gray-700 transition-all duration-200">
                        <Moon className="h-4 w-4 mr-2" />
                        Dark Theme
                      </Button>
                    </Link>
                    
                    <Link href="/home-nature" onClick={handleThemeClick}>
                      <Button variant="outline" size="sm" className="w-full justify-start bg-green-50 text-green-700 hover:bg-green-100 border-green-200 mt-1 transition-all duration-200">
                        <Leaf className="h-4 w-4 mr-2" />
                        Nature Theme
                      </Button>
                    </Link>
                    
                    <Link href="/home-minimal" onClick={handleThemeClick}>
                      <Button variant="outline" size="sm" className="w-full justify-start bg-gray-50 text-gray-700 hover:bg-gray-100 border-gray-300 mt-1 transition-all duration-200">
                        <Minus className="h-4 w-4 mr-2" />
                        Minimal Theme
                      </Button>
                    </Link>
                    
                    <Link href="/home-cyber" onClick={handleThemeClick}>
                      <Button variant="outline" size="sm" className="w-full justify-start bg-gradient-to-r from-purple-900 to-cyan-900 text-cyan-300 hover:from-purple-800 hover:to-cyan-800 border-cyan-500/50 mt-1 transition-all duration-200">
                        <Zap className="h-4 w-4 mr-2" />
                        Cyber Theme
                      </Button>
                    </Link>
                  </div>

                  {/* Color Themed Pages */}
                  <div className="border-t pt-3 mt-3">
                    <div className="text-xs text-gray-500 mb-2 text-center font-medium">Color Themes</div>
                    
                    <Link href="/home-purple" onClick={handleThemeClick}>
                      <Button variant="outline" size="sm" className="w-full justify-start bg-purple-50 text-purple-700 hover:bg-purple-100 border-purple-200 transition-all duration-200">
                        <Heart className="h-4 w-4 mr-2" />
                        Purple Theme
                      </Button>
                    </Link>
                    
                    <Link href="/home-teal" onClick={handleThemeClick}>
                      <Button variant="outline" size="sm" className="w-full justify-start bg-teal-50 text-teal-700 hover:bg-teal-100 border-teal-200 mt-1 transition-all duration-200">
                        <Droplets className="h-4 w-4 mr-2" />
                        Teal Theme
                      </Button>
                    </Link>
                    
                    <Link href="/home-rose" onClick={handleThemeClick}>
                      <Button variant="outline" size="sm" className="w-full justify-start bg-rose-50 text-rose-700 hover:bg-rose-100 border-rose-200 mt-1 transition-all duration-200">
                        <Flower className="h-4 w-4 mr-2" />
                        Rose Theme
                      </Button>
                    </Link>
                    
                    <Link href="/home-emerald" onClick={handleThemeClick}>
                      <Button variant="outline" size="sm" className="w-full justify-start bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-emerald-200 mt-1 transition-all duration-200">
                        <TreePine className="h-4 w-4 mr-2" />
                        Emerald Theme
                      </Button>
                    </Link>
                    
                    <Link href="/home-amber" onClick={handleThemeClick}>
                      <Button variant="outline" size="sm" className="w-full justify-start bg-amber-50 text-amber-700 hover:bg-amber-100 border-amber-200 mt-1 transition-all duration-200">
                        <Sun className="h-4 w-4 mr-2" />
                        Amber Theme
                      </Button>
                    </Link>
                    
                    <Link href="/home-indigo" onClick={handleThemeClick}>
                      <Button variant="outline" size="sm" className="w-full justify-start bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border-indigo-200 mt-1 transition-all duration-200">
                        <Eye className="h-4 w-4 mr-2" />
                        Indigo Theme
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}