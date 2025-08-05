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
  Lock
} from "lucide-react";
import { useState } from "react";
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, ScaleOnHover } from "@/components/animations";
import CardSlider from "@/components/sliders/CardSlider";
import ContinuousSlider from "@/components/sliders/ContinuousSlider";

export default function NewHome() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Personalized learning paths powered by advanced AI technology",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Global Opportunities",
      description: "Access to international internships and study abroad programs",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Career-Focused",
      description: "Industry-aligned curriculum designed for real-world success",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Certified Programs",
      description: "Industry-recognized certifications from top institutions",
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { number: "50K+", label: "Students Enrolled", icon: Users },
    { number: "95%", label: "Job Placement Rate", icon: TrendingUp },
    { number: "200+", label: "Industry Partners", icon: Award },
    { number: "4.9/5", label: "Student Rating", icon: Star }
  ];

  const courses = [
    {
      title: "Full Stack Development",
      category: "Technology",
      duration: "6 months",
      level: "Beginner to Advanced",
      students: "12,450",
      rating: 4.9,
      price: "₹49,999",
      originalPrice: "₹79,999",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      tags: ["React", "Node.js", "MongoDB"],
      instructor: "Rajesh Kumar",
      lessons: 120,
      certificate: true
    },
    {
      title: "Data Science & AI",
      category: "Technology",
      duration: "8 months",
      level: "Intermediate",
      students: "8,920",
      rating: 4.8,
      price: "₹59,999",
      originalPrice: "₹89,999",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      tags: ["Python", "Machine Learning", "TensorFlow"],
      instructor: "Dr. Priya Sharma",
      lessons: 150,
      certificate: true
    },
    {
      title: "Digital Marketing",
      category: "Marketing",
      duration: "4 months",
      level: "Beginner",
      students: "15,680",
      rating: 4.7,
      price: "₹29,999",
      originalPrice: "₹49,999",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      tags: ["SEO", "Social Media", "Analytics"],
      instructor: "Amit Patel",
      lessons: 80,
      certificate: true
    },
    {
      title: "UI/UX Design",
      category: "Design",
      duration: "5 months",
      level: "Beginner to Intermediate",
      students: "9,340",
      rating: 4.8,
      price: "₹39,999",
      originalPrice: "₹59,999",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      tags: ["Figma", "Adobe XD", "Prototyping"],
      instructor: "Sneha Gupta",
      lessons: 95,
      certificate: true
    },
    {
      title: "Mobile App Development",
      category: "Technology",
      duration: "7 months",
      level: "Intermediate",
      students: "6,780",
      rating: 4.6,
      price: "₹54,999",
      originalPrice: "₹79,999",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      tags: ["React Native", "Flutter", "iOS"],
      instructor: "Vikram Singh",
      lessons: 110,
      certificate: true
    },
    {
      title: "Cybersecurity",
      category: "Technology",
      duration: "6 months",
      level: "Advanced",
      students: "4,560",
      rating: 4.9,
      price: "₹64,999",
      originalPrice: "₹94,999",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      tags: ["Ethical Hacking", "Network Security", "Penetration Testing"],
      instructor: "Arjun Mehta",
      lessons: 130,
      certificate: true
    }
  ];

  const skillCategories = [
    {
      icon: Code,
      title: "Programming",
      description: "Master modern programming languages",
      courses: 25,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "Design",
      description: "Create stunning visual experiences",
      courses: 18,
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: PieChart,
      title: "Business",
      description: "Develop entrepreneurial skills",
      courses: 22,
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Camera,
      title: "Creative",
      description: "Express your artistic vision",
      courses: 15,
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Analyze and interpret complex data",
      courses: 20,
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Smartphone,
      title: "Mobile",
      description: "Build next-generation mobile apps",
      courses: 12,
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const achievements = [
    {
      icon: Trophy,
      number: "500+",
      label: "Awards Won",
      description: "Recognition for excellence in education"
    },
    {
      icon: Building,
      number: "50+",
      label: "Corporate Partners",
      description: "Leading companies trust our training"
    },
    {
      icon: MapPin,
      number: "25+",
      label: "Countries",
      description: "Global reach and impact"
    },
    {
      icon: Infinity,
      number: "∞",
      label: "Possibilities",
      description: "Unlimited career opportunities"
    }
  ];

  const learningPaths = [
    {
      title: "Frontend Developer",
      duration: "6-8 months",
      courses: ["HTML/CSS", "JavaScript", "React", "TypeScript"],
      salary: "₹6-12 LPA",
      jobs: "15,000+",
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Data Scientist",
      duration: "8-10 months",
      courses: ["Python", "Statistics", "Machine Learning", "Deep Learning"],
      salary: "₹8-18 LPA",
      jobs: "12,000+",
      color: "from-green-400 to-green-600"
    },
    {
      title: "Digital Marketer",
      duration: "4-6 months",
      courses: ["SEO", "Social Media", "Analytics", "Content Marketing"],
      salary: "₹4-10 LPA",
      jobs: "20,000+",
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "UI/UX Designer",
      duration: "5-7 months",
      courses: ["Design Principles", "Figma", "User Research", "Prototyping"],
      salary: "₹5-14 LPA",
      jobs: "8,000+",
      color: "from-pink-400 to-pink-600"
    }
  ];

  const companyLogos = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
    { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" }
  ];

  const blogPosts = [
    {
      title: "The Future of AI in Education",
      excerpt: "Discover how artificial intelligence is revolutionizing the way we learn and teach.",
      author: "Dr. Sarah Johnson",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      category: "Technology"
    },
    {
      title: "Building a Successful Career in Tech",
      excerpt: "Essential tips and strategies for launching and advancing your technology career.",
      author: "Rahul Sharma",
      date: "Dec 12, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      category: "Career"
    },
    {
      title: "Remote Learning Best Practices",
      excerpt: "Maximize your online learning experience with these proven techniques and tools.",
      author: "Priya Patel",
      date: "Dec 10, 2024",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      category: "Education"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer at Google",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b524?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      content: "Learnify transformed my career completely. The AI-powered learning approach helped me land my dream job at Google.",
      rating: 5
    },
    {
      name: "Rahul Gupta",
      role: "Data Scientist at Microsoft",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      content: "The practical approach and industry mentorship made all the difference. Highly recommend to anyone serious about their career.",
      rating: 5
    },
    {
      name: "Sneha Patel",
      role: "Marketing Manager at Flipkart",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      content: "The digital marketing course was comprehensive and up-to-date. I got promoted within 3 months of completion!",
      rating: 5
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <FadeInUp delay={0.2}>
              <Badge variant="secondary" className="bg-purple-500/20 text-purple-200 border-purple-500/30 px-4 py-2 text-sm">
                🚀 Next-Gen Learning Platform
              </Badge>
            </FadeInUp>
            
            <div className="space-y-6">
              <FadeInUp delay={0.4}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
                  Learn.
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                    {" "}Grow.
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                    Succeed.
                  </span>
                </h1>
              </FadeInUp>
              
              <FadeInUp delay={0.6}>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
                  Transform your career with AI-powered learning, global opportunities, and industry-focused programs designed for the future.
                </p>
              </FadeInUp>
            </div>

            <FadeInUp delay={0.8} className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <ScaleOnHover>
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300">
                  Start Learning Today
                  <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
                </Button>
              </ScaleOnHover>
              
              <ScaleOnHover>
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold backdrop-blur-sm">
                  <Play className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                  Watch Demo
                </Button>
              </ScaleOnHover>
            </FadeInUp>

            {/* Stats */}
            <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-white/10 px-4">
              {stats.map((stat, index) => (
                <StaggerItem key={index} className="text-center">
                  <div className="flex justify-center mb-2 sm:mb-3">
                    <stat.icon className="h-6 sm:h-8 w-6 sm:w-8 text-purple-400" />
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="bg-purple-100 text-purple-700 mb-4">
              Why Choose Learnify
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revolutionizing Education
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of learning with our cutting-edge platform designed to accelerate your career growth.
            </p>
          </div>

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
                  <CardContent className="bg-white m-0 p-8 rounded-lg h-full">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className={`p-4 rounded-full bg-gradient-to-br ${feature.color} text-white`}>
                        <feature.icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </ScaleOnHover>
            ))}
          </CardSlider>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 mb-4">
              Popular Courses
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Master In-Demand Skills
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our carefully curated courses designed by industry experts and powered by AI.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <CardSlider
              slidesToShow={{ mobile: 1, tablet: 2, desktop: 3 }}
              showArrows={true}
              showDots={true}
              autoPlay={true}
              autoPlayInterval={5000}
            >
              {courses.map((course, index) => (
                <ScaleOnHover key={index}>
                  <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg h-full">
                    <div className="relative">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 text-gray-800">{course.category}</Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center bg-white/90 rounded-full px-2 py-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium ml-1">{course.rating}</span>
                        </div>
                      </div>
                      {course.certificate && (
                        <div className="absolute bottom-4 left-4">
                          <Badge className="bg-green-500 text-white">
                            <Award className="h-3 w-3 mr-1" />
                            Certificate
                          </Badge>
                        </div>
                      )}
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
                          <p className="text-sm text-gray-600 mb-3">by {course.instructor}</p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {course.tags.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1 flex-shrink-0" />
                            <span className="truncate">{course.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1 flex-shrink-0" />
                            <span className="truncate">{course.students}</span>
                          </div>
                          <div className="flex items-center">
                            <BookOpen className="h-4 w-4 mr-1 flex-shrink-0" />
                            <span className="truncate">{course.lessons} lessons</span>
                          </div>
                          <div className="flex items-center">
                            <Target className="h-4 w-4 mr-1 flex-shrink-0" />
                            <span className="truncate">{course.level}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex flex-col">
                            <div className="flex items-center space-x-2">
                              <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                              {course.originalPrice && (
                                <span className="text-sm text-gray-500 line-through">{course.originalPrice}</span>
                              )}
                            </div>
                            {course.originalPrice && (
                              <span className="text-xs text-green-600 font-medium">
                                Save {Math.round((1 - parseInt(course.price.replace(/[₹,]/g, '')) / parseInt(course.originalPrice.replace(/[₹,]/g, ''))) * 100)}%
                              </span>
                            )}
                          </div>
                          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 text-sm">
                            Enroll Now
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              ))}
            </CardSlider>
          </FadeInUp>

          <FadeInUp delay={0.6} className="text-center mt-12">
            <ScaleOnHover>
              <Button variant="outline" size="lg" className="border-purple-200 text-purple-700 hover:bg-purple-50">
                View All Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </ScaleOnHover>
          </FadeInUp>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-4">
              Success Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of successful professionals who transformed their careers with Learnify.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <CardSlider
              slidesToShow={{ mobile: 1, tablet: 2, desktop: 3 }}
              showArrows={true}
              showDots={true}
              autoPlay={true}
              autoPlayInterval={4000}
            >
              {testimonials.map((testimonial, index) => (
                <ScaleOnHover key={index}>
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 h-full">
                    <CardContent className="p-8">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        
                        <p className="text-gray-200 leading-relaxed">
                          "{testimonial.content}"
                        </p>
                        
                        <div className="flex items-center space-x-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <div className="font-semibold">{testimonial.name}</div>
                            <div className="text-sm text-gray-300">{testimonial.role}</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              ))}
            </CardSlider>
          </FadeInUp>
        </div>
      </section>

      {/* Skill Categories Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="bg-indigo-100 text-indigo-700 mb-4">
              Skill Categories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Explore Learning Paths
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from diverse skill categories and start your journey towards expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${category.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <BookOpen className="h-4 w-4" />
                    <span>{category.courses} courses available</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 mb-4">
              Career Paths
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Structured Learning Journeys
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow our expertly designed learning paths to achieve your career goals faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningPaths.map((path, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${path.color}`}></div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{path.title}</h3>
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <Clock className="h-4 w-4 mr-1" />
                        {path.duration}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800">Core Skills:</h4>
                      <div className="flex flex-wrap gap-1">
                        {path.courses.map((course, courseIndex) => (
                          <Badge key={courseIndex} variant="secondary" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2 pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Avg. Salary:</span>
                        <span className="font-semibold text-green-600">{path.salary}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Job Openings:</span>
                        <span className="font-semibold text-blue-600">{path.jobs}</span>
                      </div>
                    </div>
                    
                    <Button className={`w-full bg-gradient-to-r ${path.color} hover:opacity-90 text-white`}>
                      Start Path
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Partners Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="bg-gray-100 text-gray-700 mb-4">
              Trusted By Industry Leaders
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Students Work At
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of professionals working at top companies worldwide.
            </p>
          </div>

          <ContinuousSlider
            speed={35}
            gap="gap-8"
            pauseOnHover={true}
          >
            {companyLogos.map((company, index) => (
              <div key={index} className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 min-w-[150px] h-[80px]">
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </ContinuousSlider>

          <div className="mt-16">
            <CardSlider
              slidesToShow={{ mobile: 2, tablet: 2, desktop: 4 }}
              showArrows={true}
              showDots={true}
              autoPlay={true}
              autoPlayInterval={3500}
            >
              {achievements.map((achievement, index) => (
                <ScaleOnHover key={index}>
                  <div className="text-center h-full flex flex-col justify-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full text-white">
                        <achievement.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                    <div className="text-lg font-semibold text-gray-800 mb-1">{achievement.label}</div>
                    <div className="text-sm text-gray-600">{achievement.description}</div>
                  </div>
                </ScaleOnHover>
              ))}
            </CardSlider>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-4">
              Platform Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive platform provides all the tools and resources for your learning journey.
            </p>
          </div>

          <CardSlider
            slidesToShow={{ mobile: 1, tablet: 2, desktop: 3 }}
            showArrows={true}
            showDots={true}
            autoPlay={true}
            autoPlayInterval={4500}
          >
            {[
              {
                icon: Video,
                title: "HD Video Lectures",
                description: "Crystal clear video content with multiple quality options and offline viewing."
              },
              {
                icon: FileText,
                title: "Interactive Assignments",
                description: "Hands-on projects and assignments that reinforce your learning."
              },
              {
                icon: MessageSquare,
                title: "Live Q&A Sessions",
                description: "Direct interaction with instructors and peer-to-peer learning."
              },
              {
                icon: Award,
                title: "Industry Certifications",
                description: "Earn recognized certificates that boost your career prospects."
              },
              {
                icon: Laptop,
                title: "Coding Playground",
                description: "Practice coding directly in your browser with our integrated IDE."
              },
              {
                icon: Headphones,
                title: "24/7 Support",
                description: "Get help whenever you need it with our dedicated support team."
              },
              {
                icon: Download,
                title: "Offline Access",
                description: "Download content and learn anywhere, even without internet."
              },
              {
                icon: Trophy,
                title: "Gamified Learning",
                description: "Earn points, badges, and compete with peers to stay motivated."
              },
              {
                icon: Wifi,
                title: "Live Streaming",
                description: "Join live classes and workshops from anywhere in the world."
              }
            ].map((feature, index) => (
              <ScaleOnHover key={index}>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              </ScaleOnHover>
            ))}
          </CardSlider>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="bg-green-100 text-green-700 mb-4">
              Latest Insights
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              From Our Blog
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, tips, and insights from the world of technology and education.
            </p>
          </div>

          <CardSlider
            slidesToShow={{ mobile: 1, tablet: 2, desktop: 3 }}
            showArrows={true}
            showDots={true}
            autoPlay={true}
            autoPlayInterval={5000}
          >
            {blogPosts.map((post, index) => (
              <ScaleOnHover key={index}>
                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg h-full">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-800">{post.category}</Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <Button variant="outline" className="w-full group-hover:bg-purple-50 group-hover:border-purple-200">
                      Read More
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
                </Card>
              </ScaleOnHover>
            ))}
          </CardSlider>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-purple-200 text-purple-700 hover:bg-purple-50">
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 mb-4">
              Got Questions?
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our platform and courses.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long do I have access to the courses?",
                answer: "You get lifetime access to all course materials, including future updates and new content additions."
              },
              {
                question: "Are the certificates industry-recognized?",
                answer: "Yes, our certificates are recognized by leading companies and can be verified online. Many of our partners accept our certifications for hiring."
              },
              {
                question: "Can I learn at my own pace?",
                answer: "Absolutely! Our courses are self-paced, allowing you to learn according to your schedule. You can pause, rewind, and revisit content anytime."
              },
              {
                question: "Do you offer job placement assistance?",
                answer: "Yes, we provide comprehensive career support including resume reviews, interview preparation, and direct connections with our hiring partners."
              },
              {
                question: "What if I'm not satisfied with a course?",
                answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied, we'll refund your payment, no questions asked."
              },
              {
                question: "Are there any prerequisites for the courses?",
                answer: "Most of our beginner courses have no prerequisites. For advanced courses, we clearly list the required background knowledge and skills."
              }
            ].map((faq, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
              <MessageSquare className="mr-2 h-4 w-4" />
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Stay Updated
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Get the latest updates on new courses, industry trends, and exclusive offers delivered to your inbox.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 focus:outline-none"
                />
                <Button className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold">
                  Subscribe
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-white/70 mt-3">
                No spam, unsubscribe at any time.
              </p>
            </div>

            <div className="flex items-center justify-center space-x-6 pt-8">
              <div className="flex items-center text-white/80">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Weekly Updates</span>
              </div>
              <div className="flex items-center text-white/80">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Exclusive Content</span>
              </div>
              <div className="flex items-center text-white/80">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Early Access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Ready to Transform Your Career?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Join over 50,000 students who have already started their journey to success. Your future starts today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold shadow-2xl">
                <Rocket className="mr-2 h-5 w-5" />
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold">
                <Heart className="mr-2 h-5 w-5" />
                Talk to Advisor
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 pt-8">
              <div className="flex items-center text-white/80">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center text-white/80">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>14-Day Free Trial</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HomePageSwitcher />
    </Layout>
  );
}