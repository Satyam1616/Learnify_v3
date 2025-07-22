import { Button } from "@/components/ui/button";
import { Target, Users, Award, Heart, Lightbulb, Globe } from "lucide-react";
import Layout from "@/components/Layout";

export default function AboutUsPage() {
  const values = [
    {
      icon: Target,
      title: "Learning Made Easy",
      description: "Our core belief is that quality education should be accessible, engaging, and effective for everyone."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We leverage cutting-edge technology including AI to create revolutionary learning experiences."
    },
    {
      icon: Users,
      title: "Student-Centric",
      description: "Every decision we make puts our learners at the center, ensuring their success and growth."
    },
    {
      icon: Heart,
      title: "Passion for Excellence",
      description: "We are committed to maintaining the highest standards in education and mentorship."
    }
  ];

  const stats = [
    { number: "50,000+", label: "Students Trained" },
    { number: "98%", label: "Placement Success" },
    { number: "500+", label: "Industry Partners" },
    { number: "100+", label: "Expert Mentors" }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      bio: "Former tech executive with 15+ years in EdTech. Passionate about democratizing quality education.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Priya Sharma",
      role: "Chief Technology Officer",
      bio: "AI/ML expert who previously worked at Google and Microsoft. Leading our technology innovation.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b524?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Dr. Amit Gupta",
      role: "Head of Academics",
      bio: "PhD in Computer Science from IIT Delhi. Former professor with expertise in curriculum design.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Sneha Patel",
      role: "VP of Student Success",
      bio: "Student counselor and career coach. Dedicated to helping students achieve their career goals.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    }
  ];

  const timeline = [
    { year: "2020", title: "Foundation", description: "Unlox Academy was founded with the vision to make learning easy and accessible." },
    { year: "2021", title: "First Milestone", description: "Launched our first AI-integrated courses and reached 1,000 students." },
    { year: "2022", title: "Innovation Launch", description: "Introduced Edu-let, India's first educational tablet." },
    { year: "2023", title: "Global Expansion", description: "Started partnerships with international companies for global internships." },
    { year: "2024", title: "AI Revolution", description: "Launched Blu, our advanced AI mentor, transforming personalized learning." }
  ];

  return (
    <Layout>
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
              About Unlox Academy
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
              We're revolutionizing education with our core belief: <span className="text-yellow-300 font-bold">"Learning Made Easy"</span>. 
              Through innovative AI technology, personalized mentorship, and practical experience, we're bridging the gap between education and employment.
            </p>
            <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <Button className="bg-white text-[hsl(219,79%,37%)] px-8 py-4 text-lg font-semibold hover:bg-gray-100">
                Join Our Mission
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl lg:text-5xl font-bold text-[hsl(219,79%,37%)] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do at Unlox Academy and define how we serve our students.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(219,79%,37%)] to-[hsl(217,91%,60%)] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to India's leading EdTech platform, here's how we've grown over the years.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-[hsl(219,79%,37%)]"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} animate-slide-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`w-full max-w-lg ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                      <div className="text-2xl font-bold text-[hsl(219,79%,37%)] mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[hsl(219,79%,37%)] rounded-full border-4 border-white z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team combines deep industry expertise with a passion for education innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <div className="text-[hsl(219,79%,37%)] font-semibold mb-3">{member.role}</div>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-[hsl(219,79%,37%)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                Our Mission & Vision
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-blue-300 mb-4">Mission</h3>
                  <p className="text-xl text-gray-300">
                    To democratize quality education by making learning easy, accessible, and outcome-focused through innovative technology and personalized mentorship.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-300 mb-4">Vision</h3>
                  <p className="text-xl text-gray-300">
                    To become the world's leading platform for practical, AI-powered education that bridges the gap between learning and employment.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur rounded-3xl p-8">
                <div className="text-center mb-8">
                  <Globe className="h-20 w-20 text-blue-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Global Impact</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-300 rounded-full mr-4"></div>
                    <span>Training students across 15+ countries</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-300 rounded-full mr-4"></div>
                    <span>Partnerships with 500+ global companies</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-300 rounded-full mr-4"></div>
                    <span>AI-powered learning in 10+ languages</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-300 rounded-full mr-4"></div>
                    <span>Recognized by leading education bodies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Become part of the Unlox family and experience education that's designed for real-world success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[hsl(219,79%,37%)] text-white px-8 py-4 text-lg font-semibold hover:bg-[hsl(217,91%,60%)]">
              Start Your Journey
            </Button>
            <Button variant="outline" className="border-[hsl(219,79%,37%)] text-[hsl(219,79%,37%)] hover:bg-[hsl(219,79%,37%)] hover:text-white px-8 py-4 text-lg font-semibold">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
}