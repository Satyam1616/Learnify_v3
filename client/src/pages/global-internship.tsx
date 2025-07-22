import { Button } from "@/components/ui/button";
import { MapPin, Clock, Globe, Star, Users, Award } from "lucide-react";
import Layout from "@/components/Layout";

export default function GlobalInternshipPage() {
  const countries = [
    {
      name: "USA",
      flag: "🇺🇸",
      cities: ["New York", "San Francisco", "Austin"],
      domains: ["Tech", "Finance", "Healthcare"],
      duration: "3-6 Months",
      stipend: "$2000-4000"
    },
    {
      name: "UK",
      flag: "🇬🇧", 
      cities: ["London", "Manchester", "Edinburgh"],
      domains: ["Fintech", "AI/ML", "Consulting"],
      duration: "3-6 Months",
      stipend: "£1500-3000"
    },
    {
      name: "Canada",
      flag: "🇨🇦",
      cities: ["Toronto", "Vancouver", "Montreal"],
      domains: ["Software", "Data Science", "Digital Marketing"],
      duration: "4-8 Months", 
      stipend: "CAD 2500-4500"
    },
    {
      name: "Germany",
      flag: "🇩🇪",
      cities: ["Berlin", "Munich", "Hamburg"],
      domains: ["Engineering", "Automotive", "Manufacturing"],
      duration: "3-6 Months",
      stipend: "€1800-3200"
    },
    {
      name: "Dubai",
      flag: "🇦🇪",
      cities: ["Dubai", "Abu Dhabi"],
      domains: ["Business", "Tourism", "Real Estate"],
      duration: "2-4 Months",
      stipend: "AED 3000-6000"
    },
    {
      name: "Singapore",
      flag: "🇸🇬",
      cities: ["Singapore"],
      domains: ["Fintech", "Logistics", "Healthcare"],
      duration: "3-5 Months",
      stipend: "SGD 2000-3500"
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Global Exposure",
      description: "Work with international teams and gain cross-cultural experience"
    },
    {
      icon: Award,
      title: "Industry Recognition", 
      description: "Certificates from renowned global companies"
    },
    {
      icon: Users,
      title: "Networking Opportunities",
      description: "Build professional networks across different countries"
    },
    {
      icon: Star,
      title: "Career Acceleration",
      description: "Fast-track your career with international experience"
    }
  ];

  const process = [
    { step: 1, title: "Application", description: "Submit your profile and preferences" },
    { step: 2, title: "Assessment", description: "Complete skill assessment and interviews" },
    { step: 3, title: "Matching", description: "Get matched with suitable internship opportunities" },
    { step: 4, title: "Visa Support", description: "Complete visa and documentation process" },
    { step: 5, title: "Departure", description: "Begin your global internship journey" }
  ];

  return (
    <Layout>
      <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full animate-float"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="text-6xl mb-8">🌍</div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 animate-slide-up">
              Global Internship
            </h1>
            <div className="text-2xl lg:text-3xl text-yellow-300 font-bold mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Coming Soon
            </div>
            <p className="text-xl lg:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
              Get ready for life-changing international internship experiences. Work with global companies and build your career on a worldwide scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <Button className="bg-white text-purple-900 px-8 py-4 text-lg font-semibold hover:bg-gray-100">
                Register Interest
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 text-lg font-semibold">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Internship Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from prestigious internship opportunities in major global destinations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-xl transition-shadow animate-scale-in border hover:border-purple-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{country.flag}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{country.name}</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <MapPin className="h-4 w-4 text-purple-600 mr-2" />
                      <span className="font-semibold text-gray-700">Cities</span>
                    </div>
                    <p className="text-gray-600 text-sm">{country.cities.join(", ")}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <Globe className="h-4 w-4 text-purple-600 mr-2" />
                      <span className="font-semibold text-gray-700">Domains</span>
                    </div>
                    <p className="text-gray-600 text-sm">{country.domains.join(", ")}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <Clock className="h-4 w-4 text-purple-600 mr-2" />
                      <span className="font-semibold text-gray-700">Duration</span>
                    </div>
                    <p className="text-gray-600 text-sm">{country.duration}</p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-3 mt-4">
                    <div className="font-semibold text-purple-800 text-sm">Stipend Range</div>
                    <div className="text-purple-900 font-bold">{country.stipend}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Global Internships?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              International internships provide unmatched opportunities for personal and professional growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Application Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple 5-step process to secure your global internship opportunity.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0 lg:space-x-4">
            {process.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center max-w-xs">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-purple-200 transform translate-x-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Be the First to Know
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Register your interest now and get early access to our global internship opportunities when they launch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-purple-900 px-8 py-4 text-lg font-semibold hover:bg-gray-100">
              Register Interest
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 text-lg font-semibold">
              Join Waitlist
            </Button>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
}