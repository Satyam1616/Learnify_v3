import { Button } from "@/components/ui/button";
import { CheckCircle, Users, BookOpen, Award, Star, ArrowRight, Bot, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import PricingPlansSection from "@/components/PricingPlansSection";
import ReviewsSection from "@/components/ReviewsSection";
import PartnersSection from "@/components/PartnersSection";
import { useLocation } from "wouter";
import { useState, useRef } from "react";

export default function JobBridgeProgramsPage() {
  const [, setLocation] = useLocation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const programs = [
    {
      title: "Artificial Intelligence",
      slug: "artificial-intelligence",
      duration: "6 Months",
      level: "Beginner to Advanced",
      price: "₹49,999",
      features: ["AI/ML Fundamentals", "Deep Learning", "Computer Vision", "NLP", "Real Projects"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Data Science",
      slug: "data-science",
      duration: "6 Months",
      level: "Beginner to Advanced",
      price: "₹44,999",
      features: ["Python/R", "Statistics", "Machine Learning", "Data Visualization", "Industry Projects"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Web Development",
      slug: "web-development",
      duration: "5 Months",
      level: "Beginner to Intermediate",
      price: "₹39,999",
      features: ["HTML/CSS/JS", "React/Node.js", "Database Design", "Cloud Deployment", "Full-Stack Projects"],
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "UI/UX Design",
      slug: "ui-ux-design",
      duration: "4 Months",
      level: "Beginner to Intermediate",
      price: "₹34,999",
      features: ["Design Principles", "Figma/Adobe XD", "Prototyping", "User Research", "Portfolio Projects"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Digital Marketing",
      slug: "digital-marketing",
      duration: "4 Months",
      level: "Beginner to Advanced",
      price: "₹29,999",
      features: ["SEO/SEM", "Social Media Marketing", "Content Strategy", "Analytics", "Campaign Management"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Drone Engineering",
      slug: "drone-engineering",
      duration: "5 Months",
      level: "Beginner to Advanced",
      price: "₹42,999",
      features: ["Excel/SQL", "Power BI/Tableau", "Statistical Analysis", "Business Intelligence", "Real Datasets"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Dedicated 24/7 AI Mentor",
      slug: "blu-mentor",
      duration: "Always Available",
      level: "All Levels",
      price: "Free",
      features: ["Resume Feedback", "Interview Practice", "Career Guidance", "Skill Gap Analysis", "24/7 Support"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      special: true,
      tagline: "Get 24/7 guidance for your career from Blu – your personal AI mentor.",
      icon: Bot
    }
  ];

  const benefits = [
    { icon: Users, title: "Expert Mentorship", description: "1:1 guidance from industry professionals" },
    { icon: BookOpen, title: "Practical Learning", description: "Hands-on projects with real-world applications" },
    { icon: Award, title: "Industry Certification", description: "Recognized certificates from Learnify Academy" },
    { icon: CheckCircle, title: "Job Assistance", description: "Placement support and career guidance" }
  ];

  const nextSlide = () => {
    if (currentSlide < programs.length - 1) {
      setCurrentSlide(currentSlide + 1);
      scrollToSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      scrollToSlide(currentSlide - 1);
    }
  };

  const scrollToSlide = (slideIndex: number) => {
    if (scrollContainerRef.current) {
      const slideWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: slideIndex * slideWidth,
        behavior: 'smooth'
      });
    }
  };

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
                  className="bg-white rounded-2xl p-8 text-center shadow-lg hover-lift animate-scale-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
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

        {/* Learnify Learning Perks Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-lg text-[hsl(219,79%,37%)] font-semibold mb-4">
                Benefits of our Job Bridge Program
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                The Learnify Learning Perks
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* AI Mentor Card */}
              <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer hover-lift">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400')`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2">A dedicated 24/7 AI mentor</h3>
                    <div className="flex justify-end">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <ArrowRight className="w-5 h-5 text-gray-900" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Smart Labs Card */}
              <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer hover-lift">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400')`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2">A dedicated high-tech smart labs</h3>
                    <div className="flex justify-end">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <ArrowRight className="w-5 h-5 text-gray-900" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Edu-let Device Card */}
              <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer hover-lift">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400')`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 4h10v11H7V4z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2">A dedicated learning device - Edu-let</h3>
                    <div className="flex justify-end">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <ArrowRight className="w-5 h-5 text-gray-900" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Career Support Card */}
              <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer hover-lift">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400')`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.82 2.82 0 0 0 17.39 7c-.8 0-1.54.46-1.89 1.18l-2.3 4.59-2.89-7.19c-.34-.84-1.16-1.38-2.08-1.38-.92 0-1.74.54-2.08 1.38L2.16 18.84c-.22.55.06 1.16.61 1.38.55.22 1.16-.06 1.38-.61l2.63-6.58L8 16h2v6h4z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2">A dedicated career guidance</h3>
                    <div className="flex justify-end">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <ArrowRight className="w-5 h-5 text-gray-900" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Choose Your Domain
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Select from our comprehensive range of industry-relevant programs designed for career transformation.
              </p>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className={`${program.special ? 'bg-gradient-to-br from-[hsl(219,79%,37%)] to-[hsl(217,91%,60%)] text-white' : 'bg-white border border-gray-200'} rounded-2xl overflow-hidden shadow-lg hover-lift animate-scale-in group cursor-pointer`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                  onClick={() => setLocation(program.special ? `/blu-mentor` : `/job-bridge/${program.slug}`)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={e => { if (e.key === 'Enter') setLocation(program.special ? `/blu-mentor` : `/job-bridge/${program.slug}`); }}
                >
                  <div className="relative overflow-hidden">
                    {program.special ? (
                      <div className="h-48 flex items-center justify-center bg-gradient-to-br from-white/10 to-white/20 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/20 to-blue-300/20 animate-pulse"></div>
                        {program.icon && <program.icon className="h-24 w-24 text-white/90 animate-breathing-glow" />}
                        <div className="absolute top-4 left-4">
                          <div className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-white">
                            AI Powered
                          </div>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-48 object-cover group-hover:scale-105 smooth-transition"
                      />
                    )}
                    {!program.special && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                          {program.duration}
                        </div>
                      </div>
                    )}
                    {program.special && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-white">
                          {program.duration}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className={`text-2xl font-bold mb-2 ${program.special ? 'text-white' : 'text-gray-900'}`}>
                      {program.title}
                    </h3>
                    {program.special && program.tagline ? (
                      <p className="text-white/90 mb-4 text-sm leading-relaxed">{program.tagline}</p>
                    ) : (
                      <p className={`mb-4 ${program.special ? 'text-white/90' : 'text-gray-600'}`}>{program.level}</p>
                    )}

                    <div className="mb-6">
                      <div className={`text-3xl font-bold mb-4 ${program.special ? 'text-white' : 'text-[hsl(219,79%,37%)]'}`}>
                        {program.price}
                      </div>

                      <ul className="space-y-2">
                        {program.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className={`flex items-center ${program.special ? 'text-white/90' : 'text-gray-600'}`}>
                            <CheckCircle className={`h-4 w-4 mr-2 flex-shrink-0 ${program.special ? 'text-white/90' : 'text-green-500'}`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      className={`w-full group ${program.special
                        ? 'bg-white text-[hsl(219,79%,37%)] hover:bg-gray-100'
                        : 'bg-[hsl(219,79%,37%)] text-white hover:bg-[hsl(217,91%,60%)]'
                        }`}
                      onClick={e => {
                        e.stopPropagation();
                        setLocation(program.special ? `/blu-mentor` : `/job-bridge/${program.slug}`);
                      }}
                    >
                      {program.special ? 'Meet Blu' : 'Enroll Now'}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Slider */}
            <div className="md:hidden relative">
              <div 
                ref={scrollContainerRef}
                className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {programs.map((program, index) => (
                  <div
                    key={index}
                    className={`flex-shrink-0 w-80 ${program.special ? 'bg-gradient-to-br from-[hsl(219,79%,37%)] to-[hsl(217,91%,60%)] text-white' : 'bg-white border border-gray-200'} rounded-2xl overflow-hidden shadow-lg hover-lift group cursor-pointer snap-start`}
                    onClick={() => setLocation(program.special ? `/blu-mentor` : `/job-bridge/${program.slug}`)}
                  >
                    <div className="relative overflow-hidden">
                      {program.special ? (
                        <div className="h-48 flex items-center justify-center bg-gradient-to-br from-white/10 to-white/20 relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/20 to-blue-300/20 animate-pulse"></div>
                          {program.icon && <program.icon className="h-20 w-20 text-white/90 animate-breathing-glow" />}
                          <div className="absolute top-4 left-4">
                            <div className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-white">
                              AI Powered
                            </div>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={program.image}
                          alt={program.title}
                          className="w-full h-48 object-cover group-hover:scale-105 smooth-transition"
                        />
                      )}
                      {!program.special && (
                        <div className="absolute top-4 right-4">
                          <div className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                            {program.duration}
                          </div>
                        </div>
                      )}
                      {program.special && (
                        <div className="absolute top-4 right-4">
                          <div className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-white">
                            {program.duration}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <h3 className={`text-xl font-bold mb-2 ${program.special ? 'text-white' : 'text-gray-900'}`}>
                        {program.title}
                      </h3>
                      {program.special && program.tagline ? (
                        <p className="text-white/90 mb-4 text-sm leading-relaxed">{program.tagline}</p>
                      ) : (
                        <p className={`mb-4 text-sm ${program.special ? 'text-white/90' : 'text-gray-600'}`}>{program.level}</p>
                      )}

                      <div className="mb-6">
                        <div className={`text-2xl font-bold mb-4 ${program.special ? 'text-white' : 'text-[hsl(219,79%,37%)]'}`}>
                          {program.price}
                        </div>

                        <ul className="space-y-2">
                          {program.features.slice(0, 4).map((feature, featureIndex) => (
                            <li key={featureIndex} className={`flex items-center text-sm ${program.special ? 'text-white/90' : 'text-gray-600'}`}>
                              <CheckCircle className={`h-4 w-4 mr-2 flex-shrink-0 ${program.special ? 'text-white/90' : 'text-green-500'}`} />
                              {feature}
                            </li>
                          ))}
                          {program.features.length > 4 && (
                            <p className={`text-xs ${program.special ? 'text-white/70' : 'text-gray-500'} text-center`}>
                              +{program.features.length - 4} more features
                            </p>
                          )}
                        </ul>
                      </div>

                      <Button
                        className={`w-full group text-sm ${program.special
                          ? 'bg-white text-[hsl(219,79%,37%)] hover:bg-gray-100'
                          : 'bg-[hsl(219,79%,37%)] text-white hover:bg-[hsl(217,91%,60%)]'
                          }`}
                        onClick={e => {
                          e.stopPropagation();
                          setLocation(program.special ? `/blu-mentor` : `/job-bridge/${program.slug}`);
                        }}
                      >
                        {program.special ? 'Meet Blu' : 'Enroll Now'}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Navigation Arrows */}
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className={`absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all z-10 ${
                  currentSlide === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white shadow-lg text-gray-700 hover:bg-gray-50'
                }`}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <button
                onClick={nextSlide}
                disabled={currentSlide === programs.length - 1}
                className={`absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all z-10 ${
                  currentSlide === programs.length - 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white shadow-lg text-gray-700 hover:bg-gray-50'
                }`}
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Mobile Slide Indicators */}
              <div className="flex justify-center mt-6 gap-2">
                {programs.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index);
                      scrollToSlide(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? 'bg-blue-500 w-6' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <PricingPlansSection />

        {/* Reviews */}
        <ReviewsSection />

        {/* Partners */}
        <PartnersSection />

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
    </Layout>
  );
}