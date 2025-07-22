import { Button } from "@/components/ui/button";
import { CheckCircle, Users, BookOpen, Award, Star, ArrowRight } from "lucide-react";

export default function JobBridgeProgramsPage() {
  const programs = [
    {
      title: "Artificial Intelligence",
      duration: "6 Months",
      level: "Beginner to Advanced",
      price: "₹49,999",
      features: ["AI/ML Fundamentals", "Deep Learning", "Computer Vision", "NLP", "Real Projects"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Data Science",
      duration: "6 Months", 
      level: "Beginner to Advanced",
      price: "₹44,999",
      features: ["Python/R", "Statistics", "Machine Learning", "Data Visualization", "Industry Projects"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Web Development",
      duration: "5 Months",
      level: "Beginner to Intermediate", 
      price: "₹39,999",
      features: ["HTML/CSS/JS", "React/Node.js", "Database Design", "Cloud Deployment", "Full-Stack Projects"],
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "UI/UX Design",
      duration: "4 Months",
      level: "Beginner to Intermediate",
      price: "₹34,999", 
      features: ["Design Principles", "Figma/Adobe XD", "Prototyping", "User Research", "Portfolio Projects"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Digital Marketing",
      duration: "4 Months",
      level: "Beginner to Advanced",
      price: "₹29,999",
      features: ["SEO/SEM", "Social Media Marketing", "Content Strategy", "Analytics", "Campaign Management"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Data Analytics", 
      duration: "5 Months",
      level: "Beginner to Advanced",
      price: "₹42,999",
      features: ["Excel/SQL", "Power BI/Tableau", "Statistical Analysis", "Business Intelligence", "Real Datasets"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    }
  ];

  const benefits = [
    { icon: Users, title: "Expert Mentorship", description: "1:1 guidance from industry professionals" },
    { icon: BookOpen, title: "Practical Learning", description: "Hands-on projects with real-world applications" },
    { icon: Award, title: "Industry Certification", description: "Recognized certificates from Unlox Academy" },
    { icon: CheckCircle, title: "Job Assistance", description: "Placement support and career guidance" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(219,79%,37%)] to-[hsl(217,91%,60%)] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full animate-float"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 animate-slide-up">
              Job Bridge Programs
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Transform your career with industry-ready skills. Bridge the gap between education and employment with our comprehensive programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <Button className="bg-white text-[hsl(219,79%,37%)] px-8 py-4 text-lg font-semibold hover:bg-gray-100">
                Explore Programs
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[hsl(219,79%,37%)] px-8 py-4 text-lg font-semibold">
                Talk to Counselor
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our Programs?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Job Bridge Programs are designed to make you industry-ready with practical skills and real experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(219,79%,37%)] to-[hsl(217,91%,60%)] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Domain
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select from our comprehensive range of industry-relevant programs designed for career transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={program.image}
                    alt={program.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                      {program.duration}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.level}</p>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-[hsl(219,79%,37%)] mb-4">{program.price}</div>
                    
                    <ul className="space-y-2">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full bg-[hsl(219,79%,37%)] text-white hover:bg-[hsl(217,91%,60%)] group">
                    Enroll Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-[hsl(219,79%,37%)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of learners who have successfully transitioned to high-paying tech careers with our Job Bridge Programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[hsl(219,79%,37%)] px-8 py-4 text-lg font-semibold hover:bg-gray-100">
              Get Free Counseling
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[hsl(219,79%,37%)] px-8 py-4 text-lg font-semibold">
              Download Syllabus
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}