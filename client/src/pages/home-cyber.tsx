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
  Cpu,
  HardDrive,
  Network,
  Binary,
  Gamepad2,
  Radar,
  Satellite,
  Fingerprint
} from "lucide-react";
import { useState } from "react";
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, ScaleOnHover } from "@/components/animations";
import CardSlider from "@/components/sliders/CardSlider";
import ContinuousSlider from "@/components/sliders/ContinuousSlider";

export default function HomeCyber() {
  const [activeFeature, setActiveFeature] = useState(0);

  const heroStats = [
    { number: "2077", label: "FUTURE READY", description: "Next-gen learning tech" },
    { number: "∞", label: "NEURAL LINKS", description: "Connected knowledge" },
    { number: "100%", label: "DIGITAL", description: "Pure cyber experience" },
    { number: "24/7", label: "ONLINE", description: "Always connected" }
  ];

  const features = [
    {
      icon: Cpu,
      title: "Neural Processing",
      description: "AI-powered learning algorithms that adapt to your cognitive patterns in real-time.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Network,
      title: "Quantum Networks",
      description: "Connect with learners across the digital matrix through advanced networking protocols.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Radar,
      title: "Data Streams",
      description: "Real-time knowledge feeds and continuous learning data synchronization.",
      color: "from-green-400 to-cyan-400"
    },
    {
      icon: Fingerprint,
      title: "Biometric Auth",
      description: "Secure access to your learning profile with advanced biometric authentication.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const courses = [
    {
      title: "Cybersecurity Matrix",
      description: "Navigate the digital underworld and master advanced cybersecurity protocols.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      category: "Security",
      duration: "12 weeks",
      students: "5.2K",
      rating: 4.9,
      price: "$399",
      instructor: "Neo Cipher",
      level: "Advanced"
    },
    {
      title: "AI Neural Networks",
      description: "Build artificial minds and neural architectures for the digital future.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      category: "AI/ML",
      duration: "16 weeks",
      students: "4.8K",
      rating: 4.8,
      price: "$499",
      instructor: "Trinity Code",
      level: "Expert"
    },
    {
      title: "Blockchain Protocols",
      description: "Master decentralized systems and cryptocurrency technologies of tomorrow.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      category: "Blockchain",
      duration: "10 weeks",
      students: "3.6K",
      rating: 4.7,
      price: "$349",
      instructor: "Morpheus Chain",
      level: "Intermediate"
    }
  ];

  const testimonials = [
    {
      name: "Zara Neon",
      role: "Cyber Security Specialist",
      company: "NeoTech Corp",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b524?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      content: "The cyberpunk learning environment is incredibly immersive. I felt like I was training in the matrix itself.",
      rating: 5
    },
    {
      name: "Kai Digital",
      role: "AI Engineer",
      company: "Quantum Systems",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      content: "The neural network course was mind-blowing. The neon interface kept me engaged throughout the entire program.",
      rating: 5
    },
    {
      name: "Raven Byte",
      role: "Blockchain Developer",
      company: "CyberChain Labs",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      content: "Learning blockchain in this cyberpunk environment made complex concepts feel like an exciting game.",
      rating: 5
    }
  ];

  const companyLogos = [
    { name: "NeoTech", logo: "https://via.placeholder.com/120x60/00ffff/000000?text=NeoTech" },
    { name: "CyberCorp", logo: "https://via.placeholder.com/120x60/ff00ff/000000?text=CyberCorp" },
    { name: "QuantumSys", logo: "https://via.placeholder.com/120x60/00ff00/000000?text=QuantumSys" },
    { name: "MatrixLab", logo: "https://via.placeholder.com/120x60/ffff00/000000?text=MatrixLab" },
    { name: "NeonCode", logo: "https://via.placeholder.com/120x60/ff6600/000000?text=NeonCode" },
    { name: "DigitalEdge", logo: "https://via.placeholder.com/120x60/ff0066/000000?text=DigitalEdge" }
  ];

  return (
    <Layout>
      {/* Cyberpunk Hero Section */}
      <section className="relative min-h-screen bg-black text-white overflow-hidden">
        {/* Animated Cyber Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-purple-900/10 to-pink-900/10"></div>
          
          {/* Neon Glows */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          {/* Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
            {/* Left Content */}
            <FadeInLeft className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/50 animate-pulse">
                  <Zap className="w-4 h-4 mr-2" />
                  Neural Interface Active
                </Badge>
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                    JACK INTO
                  </span>
                  <span className="block text-white">
                    THE MATRIX
                  </span>
                  <span className="block text-2xl lg:text-3xl font-normal text-cyan-400 mt-4">
                    of Knowledge
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Enter the digital realm where learning transcends reality. Experience education 
                  through neural interfaces, quantum processing, and cybernetic enhancement.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <ScaleOnHover>
                  <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 px-8 py-4 text-lg shadow-lg shadow-cyan-500/25">
                    Initialize Connection
                    <Zap className="ml-2 h-5 w-5" />
                  </Button>
                </ScaleOnHover>
                
                <ScaleOnHover>
                  <Button size="lg" variant="outline" className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 px-8 py-4 text-lg">
                    <Play className="mr-2 h-5 w-5" />
                    Neural Demo
                  </Button>
                </ScaleOnHover>
              </div>

              {/* Hero Stats */}
              <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-cyan-500/20">
                {heroStats.map((stat, index) => (
                  <StaggerItem key={index} delay={index * 0.1}>
                    <div className="text-center">
                      <div className="text-2xl lg:text-3xl font-bold text-cyan-400 mb-1 animate-pulse">
                        {stat.number}
                      </div>
                      <div className="text-xs font-semibold text-purple-400 mb-1">
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

            {/* Right Content - Cyber Visual */}
            <FadeInRight className="relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-3xl animate-pulse"></div>
                <div className="relative bg-black/80 backdrop-blur-sm rounded-3xl p-8 border border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
                  <div className="space-y-6">
                    {/* Terminal Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                      </div>
                      <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/50">
                        <Monitor className="w-3 h-3 mr-1" />
                        NEURAL_LINK.exe
                      </Badge>
                    </div>
                    
                    {/* Code Lines */}
                    <div className="space-y-3 font-mono text-sm">
                      <div className="text-cyan-400">&gt; Initializing neural connection...</div>
                      <div className="text-purple-400">&gt; Loading quantum algorithms...</div>
                      <div className="text-pink-400">&gt; Syncing knowledge matrix...</div>
                      <div className="text-green-400">&gt; Connection established ✓</div>
                    </div>
                    
                    {/* Progress Bars */}
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-cyan-400">
                          <span>Neural Processing</span>
                          <span>98%</span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full animate-pulse" style={{ width: '98%' }}></div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-purple-400">
                          <span>Data Sync</span>
                          <span>87%</span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" style={{ width: '87%' }}></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Cyber Icons */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-900/50 rounded-lg p-4 border border-cyan-500/30">
                        <Cpu className="w-8 h-8 text-cyan-400 mb-2 animate-pulse" />
                        <div className="text-sm text-cyan-300">Neural Core</div>
                      </div>
                      <div className="bg-gray-900/50 rounded-lg p-4 border border-purple-500/30">
                        <Network className="w-8 h-8 text-purple-400 mb-2 animate-pulse" />
                        <div className="text-sm text-purple-300">Quantum Net</div>
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
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/50 mb-6 animate-pulse">
              <Satellite className="w-4 h-4 mr-2" />
              System Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Neural Enhancements
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Advanced learning protocols designed for the digital age. Experience education through cybernetic interfaces.
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
                  className={`group cursor-pointer transition-all duration-300 hover:shadow-2xl border-0 bg-gradient-to-br ${feature.color} p-1 h-full hover:shadow-cyan-500/25`}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <CardContent className="bg-gray-800 m-0 p-8 rounded-lg h-full border border-gray-700">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className={`p-4 rounded-full bg-gradient-to-br ${feature.color} text-white shadow-lg`}>
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
            <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/50 mb-6 animate-pulse">
              <Code className="w-4 h-4 mr-2" />
              Neural Programs
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Matrix Curriculum
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Download skills directly to your brain. Master tomorrow's technologies today.
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
                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gray-800 h-full hover:shadow-cyan-500/25">
                  <div className="relative">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-cyan-500/90 text-white border-0 animate-pulse">{course.category}</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-purple-500/90 text-white border-0">{course.level}</Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 bg-gray-800 border-t border-cyan-500/20">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {course.title}
                        </h3>
                        <p className="text-gray-400 line-clamp-2">{course.description}</p>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1 text-cyan-400" />
                            {course.duration}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1 text-purple-400" />
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
                          <div className="text-2xl font-bold text-cyan-400">{course.price}</div>
                          <div className="text-sm text-gray-500">by {course.instructor}</div>
                        </div>
                        <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white shadow-lg shadow-cyan-500/25">
                          Download
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
            <Badge className="bg-pink-500/20 text-pink-300 border-pink-500/50 mb-6 animate-pulse">
              <Building className="w-4 h-4 mr-2" />
              Corporate Networks
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Connected Corporations
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Interfacing with the most advanced tech corporations in the digital realm.
            </p>
          </FadeInUp>

          <ContinuousSlider
            speed={35}
            gap="gap-8"
            pauseOnHover={true}
          >
            {companyLogos.map((company, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-black rounded-lg border border-cyan-500/30 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 min-w-[200px] h-[100px]">
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
            <Badge className="bg-green-500/20 text-green-300 border-green-500/50 mb-6 animate-pulse">
              <Quote className="w-4 h-4 mr-2" />
              Neural Feedback
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                User Testimonials
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Direct neural feedback from users who've jacked into our learning matrix.
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
                <Card className="bg-gray-800 border border-cyan-500/30 hover:border-cyan-500/60 hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                        ))}
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed italic">
                        "{testimonial.content}"
                      </p>
                      
                      <div className="flex items-center space-x-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full border-2 border-cyan-500/50"
                        />
                        <div>
                          <div className="font-semibold text-white">{testimonial.name}</div>
                          <div className="text-sm text-cyan-400">{testimonial.role}</div>
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
      <section className="py-24 bg-gradient-to-r from-purple-900 via-blue-900 to-cyan-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <FadeInUp>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    READY TO JACK IN?
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Initialize your neural connection and enter the learning matrix. The future awaits.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ScaleOnHover>
                  <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 text-lg font-semibold shadow-lg shadow-cyan-500/25">
                    Initialize Connection
                    <Zap className="ml-2 h-5 w-5" />
                  </Button>
                </ScaleOnHover>
                
                <ScaleOnHover>
                  <Button size="lg" variant="outline" className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 px-8 py-4 text-lg">
                    Neural Demo
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