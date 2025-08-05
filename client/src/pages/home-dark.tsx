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
  Sparkles,
  Moon,
  Stars
} from "lucide-react";
import { useState } from "react";
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, ScaleOnHover } from "@/components/animations";
import CardSlider from "@/components/sliders/CardSlider";
import ContinuousSlider from "@/components/sliders/ContinuousSlider";

export default function HomeDark() {
  const [activeFeature, setActiveFeature] = useState(0);

  const heroStats = [
    { number: "50K+", label: "NIGHT OWLS", description: "Students learning after dark" },
    { number: "24/7", label: "ALWAYS ON", description: "Round-the-clock learning support" },
    { number: "95%", label: "COMPLETION RATE", description: "In our dark mode courses" },
    { number: "∞", label: "POSSIBILITIES", description: "Unlimited learning potential" }
  ];

  const features = [
    {
      icon: Moon,
      title: "Dark Mode Learning",
      description: "Optimized for late-night study sessions with eye-friendly dark interfaces.",
      color: "from-purple-600 to-indigo-600"
    },
    {
      icon: Brain,
      title: "Neural Networks",
      description: "AI-powered learning paths that adapt to your nocturnal learning patterns.",
      color: "from-indigo-600 to-blue-600"
    },
    {
      icon: Sparkles,
      title: "Midnight Magic",
      description: "Unlock special achievements and rewards for night-time learning streaks.",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: Stars,
      title: "Stellar Progress",
      description: "Track your learning journey across the digital constellation of knowledge.",
      color: "from-cyan-600 to-teal-600"
    }
  ];

  const courses = [
    {
      title: "Cybersecurity Mastery",
      description: "Master the dark arts of digital security and ethical hacking.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      category: "Security",
      duration: "12 weeks",
      students: "2.5K",
      rating: 4.9,
      price: "$299",
      instructor: "Alex Shadow",
      level: "Advanced"
    },
    {
      title: "Data Science in the Dark",
      description: "Illuminate insights from data using advanced analytics and machine learning.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      category: "Data Science",
      duration: "16 weeks",
      students: "3.2K",
      rating: 4.8,
      price: "$399",
      instructor: "Dr. Luna Code",
      level: "Intermediate"
    },
    {
      title: "Blockchain & Crypto",
      description: "Navigate the mysterious world of decentralized technologies and digital currencies.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      category: "Blockchain",
      duration: "10 weeks",
      students: "1.8K",
      rating: 4.7,
      price: "$349",
      instructor: "Satoshi Night",
      level: "Beginner"
    }
  ];

  const testimonials = [
    {
      name: "Marcus Void",
      role: "Security Analyst",
      company: "CyberGuard Inc.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      content: "The dark theme learning environment helped me focus during my late-night study sessions. The cybersecurity course was incredibly comprehensive.",
      rating: 5
    },
    {
      name: "Raven Storm",
      role: "Data Scientist",
      company: "NightTech Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b524?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      content: "Learning in dark mode reduced eye strain significantly. The AI-powered recommendations were spot-on for my learning style.",
      rating: 5
    },
    {
      name: "Shadow Walker",
      role: "Blockchain Developer",
      company: "CryptoNight Labs",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      content: "The midnight learning rewards kept me motivated. Completed my blockchain certification while working night shifts.",
      rating: 5
    }
  ];

  const companyLogos = [
    { name: "NightTech", logo: "https://via.placeholder.com/120x60/1a1a1a/ffffff?text=NightTech" },
    { name: "DarkCode", logo: "https://via.placeholder.com/120x60/1a1a1a/ffffff?text=DarkCode" },
    { name: "ShadowSoft", logo: "https://via.placeholder.com/120x60/1a1a1a/ffffff?text=ShadowSoft" },
    { name: "MidnightAI", logo: "https://via.placeholder.com/120x60/1a1a1a/ffffff?text=MidnightAI" },
    { name: "VoidSystems", logo: "https://via.placeholder.com/120x60/1a1a1a/ffffff?text=VoidSystems" },
    { name: "EclipseTech", logo: "https://via.placeholder.com/120x60/1a1a1a/ffffff?text=EclipseTech" }
  ];

  return (
    <Layout>
      {/* Dark Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-indigo-900/10 to-blue-900/10"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
            {/* Left Content */}
            <FadeInLeft className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <Moon className="w-4 h-4 mr-2" />
                  Dark Mode Learning
                </Badge>
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Learn in the
                  <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                    Digital Night
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Embrace the darkness and unlock your potential with our night-optimized learning platform. 
                  Perfect for night owls, shift workers, and anyone who learns best after dark.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <ScaleOnHover>
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0 px-8 py-4 text-lg">
                    Start Night Learning
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </ScaleOnHover>
                
                <ScaleOnHover>
                  <Button size="lg" variant="outline" className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10 px-8 py-4 text-lg">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </Button>
                </ScaleOnHover>
              </div>

              {/* Hero Stats */}
              <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-purple-500/20">
                {heroStats.map((stat, index) => (
                  <StaggerItem key={index} delay={index * 0.1}>
                    <div className="text-center">
                      <div className="text-2xl lg:text-3xl font-bold text-purple-400 mb-1">
                        {stat.number}
                      </div>
                      <div className="text-xs font-semibold text-gray-400 mb-1">
                        {stat.label}
                      </div>
                      <div className="text-xs text-gray-500">
                        {stat.description}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </FadeInLeft>

            {/* Right Content - Visual */}
            <FadeInRight className="relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <Badge className="bg-purple-500/20 text-purple-300">
                        <Moon className="w-3 h-3 mr-1" />
                        Dark Mode
                      </Badge>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="h-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
                      <div className="h-4 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full w-4/5"></div>
                      <div className="h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-3/5"></div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-700/50 rounded-lg p-4 border border-purple-500/20">
                        <Brain className="w-8 h-8 text-purple-400 mb-2" />
                        <div className="text-sm text-gray-300">AI Learning</div>
                      </div>
                      <div className="bg-gray-700/50 rounded-lg p-4 border border-indigo-500/20">
                        <Stars className="w-8 h-8 text-indigo-400 mb-2" />
                        <div className="text-sm text-gray-300">Progress Tracking</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Dark Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Designed for Night Learning
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience learning optimized for the digital night with features that enhance focus and reduce eye strain.
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
                  className={`group cursor-pointer transition-all duration-300 hover:shadow-2xl border-0 bg-gradient-to-br ${feature.color} p-1 h-full`}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <CardContent className="bg-gray-800 m-0 p-8 rounded-lg h-full">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className={`p-4 rounded-full bg-gradient-to-br ${feature.color} text-white`}>
                        <feature.icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </ScaleOnHover>
            ))}
          </CardSlider>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30 mb-6">
              <Code className="w-4 h-4 mr-2" />
              Dark Curriculum
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Master the Dark Arts of Tech
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Dive deep into advanced technologies with our night-optimized courses designed for serious learners.
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
                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gray-800 h-full">
                  <div className="relative">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-purple-500/90 text-white">{course.category}</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-black/70 text-white">{course.level}</Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                          {course.title}
                        </h3>
                        <p className="text-gray-400 line-clamp-2">{course.description}</p>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {course.duration}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {course.students}
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1 fill-current" />
                          {course.rating}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                        <div>
                          <div className="text-2xl font-bold text-purple-400">{course.price}</div>
                          <div className="text-sm text-gray-500">by {course.instructor}</div>
                        </div>
                        <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white">
                          Enroll Now
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
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <Badge className="bg-gray-700 text-gray-300 mb-6">
              <Building className="w-4 h-4 mr-2" />
              Night Shift Partners
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by Night Workers
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join professionals from companies that operate around the clock.
            </p>
          </FadeInUp>

          <ContinuousSlider
            speed={25}
            gap="gap-12"
            pauseOnHover={true}
          >
            {companyLogos.map((company, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300 min-w-[180px] h-[100px]">
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="h-8 w-auto object-contain filter brightness-75 hover:brightness-100 transition-all duration-300"
                />
              </div>
            ))}
          </ContinuousSlider>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-6">
              <Quote className="w-4 h-4 mr-2" />
              Night Learner Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Night Owls Say
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real feedback from learners who've mastered their skills in the digital darkness.
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
                <Card className="bg-gray-800 border-gray-700 hover:border-purple-500/50 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed italic">
                        "{testimonial.content}"
                      </p>
                      
                      <div className="flex items-center space-x-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full border-2 border-purple-500/30"
                        />
                        <div>
                          <div className="font-semibold text-white">{testimonial.name}</div>
                          <div className="text-sm text-gray-400">{testimonial.role}</div>
                          <div className="text-sm text-purple-400">{testimonial.company}</div>
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
      <section className="py-24 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInUp>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Ready to Learn in the Dark?
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Join thousands of night learners who've discovered the power of dark mode education.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ScaleOnHover>
                  <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                    Start Free Trial
                    <Moon className="ml-2 h-5 w-5" />
                  </Button>
                </ScaleOnHover>
                
                <ScaleOnHover>
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg">
                    Schedule Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
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