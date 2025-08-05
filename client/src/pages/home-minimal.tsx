import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import HomePageSwitcher from "@/components/HomePageSwitcher";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Play, 
  Star, 
  Users, 
  BookOpen, 
  Award, 
  Globe, 
  Zap,
  CheckCircle,
  TrendingUp,
  Brain,
  Target,
  Rocket,
  Shield,
  Clock,
  Heart,
  Code,
  Database,
  Smartphone,
  Camera,
  PieChart,
  Briefcase,
  GraduationCap,
  MapPin,
  Calendar,
  DollarSign,
  Trophy,
  Lightbulb,
  MessageSquare,
  Video,
  FileText,
  Download,
  ChevronRight,
  Building,
  Laptop,
  Headphones,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Quote,
  ChevronLeft,
  Infinity,
  Layers,
  Monitor,
  Palette,
  Settings,
  Wifi,
  Lock,
  Minus,
  Circle,
  Square,
  Triangle
} from "lucide-react";
import { useState } from "react";
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, ScaleOnHover } from "@/components/animations";
import CardSlider from "@/components/sliders/CardSlider";
import ContinuousSlider from "@/components/sliders/ContinuousSlider";

export default function HomeMinimal() {
  const [activeFeature, setActiveFeature] = useState(0);

  const heroStats = [
    { number: "10K+", label: "FOCUSED LEARNERS", description: "Quality over quantity" },
    { number: "99%", label: "CLARITY", description: "Crystal clear content" },
    { number: "0", label: "DISTRACTIONS", description: "Pure learning experience" },
    { number: "∞", label: "SIMPLICITY", description: "Elegantly designed" }
  ];

  const features = [
    {
      icon: Circle,
      title: "Pure Focus",
      description: "Distraction-free learning environment designed for maximum concentration and clarity.",
      color: "from-gray-600 to-gray-800"
    },
    {
      icon: Square,
      title: "Clean Interface",
      description: "Minimalist design that puts content first, removing unnecessary visual clutter.",
      color: "from-slate-600 to-slate-800"
    },
    {
      icon: Triangle,
      title: "Essential Features",
      description: "Only the tools you need, carefully curated for an optimal learning experience.",
      color: "from-zinc-600 to-zinc-800"
    },
    {
      icon: Minus,
      title: "Less is More",
      description: "Simplified navigation and streamlined content delivery for efficient learning.",
      color: "from-neutral-600 to-neutral-800"
    }
  ];

  const courses = [
    {
      title: "Clean Code Principles",
      description: "Master the art of writing simple, readable, and maintainable code.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      category: "Programming",
      duration: "8 weeks",
      students: "1.2K",
      rating: 4.9,
      price: "$199",
      instructor: "John Simple",
      level: "Intermediate"
    },
    {
      title: "Minimalist Design",
      description: "Learn to create beautiful, functional designs with minimal elements.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      category: "Design",
      duration: "6 weeks",
      students: "980",
      rating: 4.8,
      price: "$149",
      instructor: "Jane Clean",
      level: "Beginner"
    },
    {
      title: "Essential Data Science",
      description: "Core data science concepts without the complexity - straight to the point.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      category: "Data",
      duration: "10 weeks",
      students: "1.5K",
      rating: 4.7,
      price: "$249",
      instructor: "Alex Pure",
      level: "Advanced"
    }
  ];

  const testimonials = [
    {
      name: "Emma White",
      role: "Software Developer",
      company: "CleanTech",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b524?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      content: "The minimal interface helped me focus completely on learning. No distractions, just pure knowledge transfer.",
      rating: 5
    },
    {
      name: "David Gray",
      role: "UX Designer",
      company: "Minimal Studios",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      content: "Finally, a learning platform that understands that less is more. The clean design enhanced my learning experience.",
      rating: 5
    },
    {
      name: "Sarah Black",
      role: "Data Analyst",
      company: "Pure Analytics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      content: "The essential data science course was perfectly structured. No fluff, just the core concepts I needed.",
      rating: 5
    }
  ];

  const companyLogos = [
    { name: "CleanTech", logo: "https://via.placeholder.com/120x60/6b7280/ffffff?text=CleanTech" },
    { name: "Minimal", logo: "https://via.placeholder.com/120x60/4b5563/ffffff?text=Minimal" },
    { name: "Pure", logo: "https://via.placeholder.com/120x60/374151/ffffff?text=Pure" },
    { name: "Simple", logo: "https://via.placeholder.com/120x60/1f2937/ffffff?text=Simple" },
    { name: "Essential", logo: "https://via.placeholder.com/120x60/111827/ffffff?text=Essential" },
    { name: "Focus", logo: "https://via.placeholder.com/120x60/030712/ffffff?text=Focus" }
  ];

  return (
    <Layout>
      {/* Minimal Hero Section */}
      <section className="relative min-h-screen bg-white overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-slate-50/50 to-zinc-50/50"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="text-center space-y-12">
            {/* Main Content */}
            <FadeInUp className="space-y-8 max-w-4xl mx-auto">
              <div className="space-y-6">
                <Badge variant="outline" className="border-gray-300 text-gray-600 bg-white">
                  Minimal Learning
                </Badge>
                
                <h1 className="text-6xl lg:text-8xl font-light leading-tight text-gray-900">
                  Less
                  <span className="block font-normal">
                    Distraction
                  </span>
                  <span className="block font-light text-gray-600">
                    More Learning
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                  Experience education in its purest form. Clean, focused, and designed 
                  for those who value clarity over complexity.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <ScaleOnHover>
                  <Button size="lg" className="bg-black text-white hover:bg-gray-800 border-0 px-12 py-4 text-lg font-light">
                    Start Learning
                  </Button>
                </ScaleOnHover>
                
                <ScaleOnHover>
                  <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-12 py-4 text-lg font-light">
                    Explore
                  </Button>
                </ScaleOnHover>
              </div>
            </FadeInUp>

            {/* Hero Stats */}
            <FadeInUp delay={0.3}>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 border-t border-gray-200 max-w-4xl mx-auto">
                {heroStats.map((stat, index) => (
                  <div key={index} className="text-center space-y-2">
                    <div className="text-3xl lg:text-4xl font-light text-gray-900">
                      {stat.number}
                    </div>
                    <div className="text-sm font-medium text-gray-500 tracking-wide">
                      {stat.label}
                    </div>
                    <div className="text-xs text-gray-400">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-20">
            <Badge variant="outline" className="border-gray-300 text-gray-600 bg-white mb-8">
              Core Features
            </Badge>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-8">
              Essential Elements
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Everything you need, nothing you don't. Carefully crafted for optimal learning.
            </p>
          </FadeInUp>

          <CardSlider
            slidesToShow={{ mobile: 1, tablet: 2, desktop: 4 }}
            showArrows={true}
            showDots={true}
            autoPlay={true}
            autoPlayInterval={4000}
          >
            {features.map((feature, index) => (
              <ScaleOnHover key={index}>
                <Card 
                  className="group cursor-pointer transition-all duration-300 hover:shadow-lg border border-gray-200 bg-white h-full"
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <CardContent className="p-10 h-full">
                    <div className="flex flex-col items-center text-center space-y-6">
                      <div className="p-4 rounded-full bg-gray-100 group-hover:bg-gray-900 transition-colors duration-300">
                        <feature.icon className="h-8 w-8 text-gray-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-medium text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 font-light leading-relaxed">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </ScaleOnHover>
            ))}
          </CardSlider>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-20">
            <Badge variant="outline" className="border-gray-300 text-gray-600 bg-white mb-8">
              Curated Courses
            </Badge>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-8">
              Quality Content
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Handpicked courses that focus on essential skills and practical knowledge.
            </p>
          </FadeInUp>

          <CardSlider
            slidesToShow={{ mobile: 1, tablet: 2, desktop: 3 }}
            showArrows={true}
            showDots={true}
            autoPlay={true}
            autoPlayInterval={5000}
          >
            {courses.map((course, index) => (
              <ScaleOnHover key={index}>
                <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200 bg-white h-full">
                  <div className="relative">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-white/90 text-gray-800 border-0">{course.category}</Badge>
                    </div>
                    <div className="absolute top-6 right-6">
                      <Badge variant="outline" className="bg-white/90 border-gray-300">{course.level}</Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-medium text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                          {course.title}
                        </h3>
                        <p className="text-gray-600 font-light leading-relaxed">{course.description}</p>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-6">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {course.duration}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-2" />
                            {course.students}
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-gray-400 mr-1 fill-current" />
                          {course.rating}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                        <div>
                          <div className="text-3xl font-light text-gray-900">{course.price}</div>
                          <div className="text-sm text-gray-500 font-light">by {course.instructor}</div>
                        </div>
                        <Button className="bg-black text-white hover:bg-gray-800 font-light">
                          Enroll
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScaleOnHover>
            ))}
          </CardSlider>
        </div>
      </section>

      {/* Company Partners Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-20">
            <Badge variant="outline" className="border-gray-300 text-gray-600 bg-white mb-8">
              Trusted Partners
            </Badge>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-8">
              Simple Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Partnered with companies that value clean, efficient solutions.
            </p>
          </FadeInUp>

          <ContinuousSlider
            speed={20}
            gap="gap-16"
            pauseOnHover={true}
          >
            {companyLogos.map((company, index) => (
              <div key={index} className="flex items-center justify-center p-8 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 min-w-[200px] h-[120px]">
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </ContinuousSlider>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-20">
            <Badge variant="outline" className="border-gray-300 text-gray-600 bg-white mb-8">
              Student Voices
            </Badge>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-8">
              Pure Feedback
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Honest testimonials from learners who appreciate simplicity.
            </p>
          </FadeInUp>

          <CardSlider
            slidesToShow={{ mobile: 1, tablet: 2, desktop: 3 }}
            showArrows={true}
            showDots={true}
            autoPlay={true}
            autoPlayInterval={6000}
          >
            {testimonials.map((testimonial, index) => (
              <ScaleOnHover key={index}>
                <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-10">
                    <div className="space-y-8">
                      <div className="flex items-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-gray-400 fill-current" />
                        ))}
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed font-light text-lg">
                        "{testimonial.content}"
                      </p>
                      
                      <div className="flex items-center space-x-4 pt-6 border-t border-gray-200">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full border border-gray-200"
                        />
                        <div>
                          <div className="font-medium text-gray-900">{testimonial.name}</div>
                          <div className="text-sm text-gray-600 font-light">{testimonial.role}</div>
                          <div className="text-sm text-gray-500 font-light">{testimonial.company}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScaleOnHover>
            ))}
          </CardSlider>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInUp>
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-5xl md:text-6xl font-light text-white">
                  Start Simple
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                  Begin your learning journey with clarity and focus.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <ScaleOnHover>
                  <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-12 py-4 text-lg font-light">
                    Begin
                  </Button>
                </ScaleOnHover>
                
                <ScaleOnHover>
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-12 py-4 text-lg font-light">
                    Learn More
                  </Button>
                </ScaleOnHover>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      <HomePageSwitcher />
    </Layout>
  );
}