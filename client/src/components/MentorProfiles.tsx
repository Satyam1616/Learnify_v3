import { Button } from "@/components/ui/button";
import { Linkedin, ChevronLeft, ChevronRight } from "lucide-react";

export default function MentorProfiles() {
  const mentors = [
    {
      name: "Samrat Tomar",
      title: "Senior Software Engineer at Oracle",
      company: "Oracle",
      image: "/api/placeholder/150/150",
      linkedin: "#"
    },
    {
      name: "Apurva Donda",
      title: "Senior Business Manager",
      company: "DRONA AVIATION",
      image: "/api/placeholder/150/150", 
      linkedin: "#"
    },
    {
      name: "Meghana Gowda V",
      title: "Software Engineer",
      company: "Schneider Electric",
      image: "/api/placeholder/150/150",
      linkedin: "#"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="w-full px-4 md:max-w-7xl md:mx-auto md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-orange-600 font-medium text-lg mb-4">Mentors</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
            Learn from those who've
            <br />
            been there, done that,
            <br />
            and nailed it
          </h2>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {mentors.map((mentor, index) => (
              <div
                key={mentor.name}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-2xl mx-auto mb-6 overflow-hidden">
                    <img 
                      src={mentor.image} 
                      alt={mentor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{mentor.name}</h3>
                  <p className="text-gray-600 mb-1">{mentor.title}</p>
                  <div className="flex items-center justify-center space-x-3 mb-6">
                    <span className="text-sm font-medium text-gray-500">{mentor.company}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 hover:bg-blue-50"
                    >
                      <Linkedin className="h-4 w-4 text-blue-600" />
                    </Button>
                  </div>
                  <div className="w-full h-8 bg-gray-900 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-medium">{mentor.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="w-12 h-12 rounded-full p-0"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="w-12 h-12 rounded-full p-0"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}