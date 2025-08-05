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
  Leaf,
  TreePine,
  Flower,
  Sun,
  Wind,
  Droplets,
  Sprout,
  Mountain
} from "lucide-react";
import { useState } from "react";
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, ScaleOnHover } from "@/components/animations";
import CardSlider from "@/components/sliders/CardSlider";
import ContinuousSlider from "@/components/sliders/ContinuousSlider";

export default function HomeNature() {
  const [activeFeature, setActiveFeature] = useState(0);

  const heroStats = [
    { number: "100K+", label: "ECO LEARNERS", description: "Students growing sustainably" },
    { number: "Carbon-", label: "NEUTRAL", description: "Environmentally conscious learning" },
    { number: "98%", label: "SATISFACTION", description: "Happy with green learning" },
    { number: "24/7", label: "GROWTH", description: "Continuous natural development" }
  ];

  const features = [
    {
      icon: Leaf,
      title: "Organic Learning",
      description: "Natural learning paths that grow with your understanding, like a tree branching out.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Sprout,
      title: "Sustainable Growth",
      description: "Build knowledge that lasts, with eco-friendly digital practices and mindful learning.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Sun,
      title: "Bright Future",
      description: "Illuminate your career path with renewable knowledge and sustainable skills.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Mountain,
      title: "Peak Performance",
      description: "Reach new heights in your learning journey with nature-inspired methodologies.",
      color: "from-blue-500 to-green-500"
    }
  ];

  const courses = [
    {
      title: "Sustainable Web Development",
      description: "Learn to build eco-friendly websites with minimal carbon footprint and maximum impact.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      category: "Green Tech",
      duration: "10 weeks",
      students: "3.2K",
      rating: 4.9,
      price: "$249",
      instructor: "Dr. Forest Green",
      level: "Intermediate"
    },
    {
      title: "Environmental Data Science",
      description: "Analyze climate data and environmental patterns using advanced data science techniques.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      category: "Data Science",
      duration: "14 weeks",
      students: "2.8K",
      rating: 4.8,
      price: "$349",
      instructor: "River Stone",
      level: "Advanced"
    },
    {
      title: "Renewable Energy Systems",
      description: "Master the technology behind solar, wind, and other renewable energy solutions.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      category: "Clean Energy",
      duration: "12 weeks",
      students: "2.1K",
      rating: 4.7,
      price: "$299",
      instructor: "Solar Wind",
      level: "Beginner"
    }
  ];

  const testimonials = [
    {
      name: "Sage Meadow",
      role: "Environmental Engineer",
      company: "GreenTech Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b524?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      content: "The nature-inspired learning approach helped me connect with the material on a deeper level. The sustainable web development course was transformative.",
      rating: 5
    },
    {
      name: "River Oak",
      role: "Data Scientist",
      company: "EcoAnalytics",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      content: "Learning in this green environment reduced my stress and improved focus. The environmental data science program exceeded expectations.",
      rating: 5
    },
    {
      name: "Willow Branch",
      role: "Renewable Energy Specialist",
      company: "SolarWind Corp",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      content: "The organic learning approach felt natural and intuitive. I completed my renewable energy certification while feeling connected to nature.",
      rating: 5
    }
  ];

  const companyLogos = [
    { name: "GreenTech", logo: "https://via.placeholder.com/120x60/22c55e/ffffff?text=GreenTech" },
    { name: "EcoSoft", logo: "https://via.placeholder.com/120x60/16a34a/ffffff?text=EcoSoft" },
    { name: "NatureLab", logo: "https://via.placeholder.com/120x60/15803d/ffffff?text=NatureLab" },
    { name: "SolarWind", logo: "https://via.placeholder.com/120x60/059669/ffffff?text=SolarWind" },
    { name: "EarthCode", logo: "https://via.placeholder.com/120x60/047857/ffffff?text=EarthCode" },
    { name: "BioCorp", logo: "https://via.placeholder.com/120x60/065f46/ffffff?text=BioCorp" }
  ];

  return (
    <Layout>
      {/* Nature Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 via-emerald-100/30 to-teal-100/30"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
            {/* Left Content */}
            <FadeInLeft className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-green-100 text-green-700 border-green-200">
                  <Leaf className="w-4 h-4 mr-2" />
                  Organic Learning
                </Badge>
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-gray-900">
                  Grow Your
                  <span className="block bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Natural Potential
                  </span>
                </h1>
                
                <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
                  Experience learning that grows organically with you. Our nature-inspired platform 
                  nurtures your skills like a gardener tends to their plants - with patience, care, and wisdom.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <ScaleOnHover>
                  <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white border-0 px-8 py-4 text-lg">
                    Start Growing
                    <Sprout className="ml-2 h-5 w-5" />
                  </Button>
                </ScaleOnHover>
                
                <ScaleOnHover>
                  <Button size="lg" variant="outline" className="border-green-300 text-green-700 hover:bg-green-50 px-8 py-4 text-lg">
                    <Play className="mr-2 h-5 w-5" />
                    Nature Tour
                  </Button>
                </ScaleOnHover>
              </div>

              {/* Hero Stats */}
              <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-green-200">
                {heroStats.map((stat, index) => (
                  <StaggerItem key={index} delay={index * 0.1}>
                    <div className="text-center">
                      <div className="text-2xl lg:text-3xl font-bold text-green-600 mb-1">
                        {stat.number}
                      </div>
                      <div className="text-xs font-semibold text-gray-600 mb-1">
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
                <div className="absolute inset-0 bg-gradient-to-r from-green-200/50 to-emerald-200/50 rounded-3xl blur-3xl"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-green-200 shadow-xl">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                      </div>
                      <Badge className="bg-green-100 text-green-700">
                        <Leaf className="w-3 h-3 mr-1" />
                        Growing
                      </Badge>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="h-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
                      <div className="h-4 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full w-4/5"></div>
                      <div className="h-4 bg-gradient-to-r from-teal-400 to-green-400 rounded-full w-3/5"></div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                        <TreePine className="w-8 h-8 text-green-600 mb-2" />
                        <div className="text-sm text-gray-700">Organic Growth</div>
                      </div>
                      <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                        <Sun className="w-8 h-8 text-emerald-600 mb-2" />
                        <div className="text-sm text-gray-700">Bright Future</div>
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <Badge className="bg-green-100 text-green-700 border-green-200 mb-6">
              <Flower className="w-4 h-4 mr-2" />
              Natural Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Learning That Grows Naturally
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience education that follows nature's principles - organic, sustainable, and beautifully interconnected.
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
      <section className="py-24 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Green Curriculum
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sustainable Skills for Tomorrow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master technologies that make a positive impact on our planet while growing your career naturally.
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
                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white h-full">
                  <div className="relative">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-green-500/90 text-white">{course.category}</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-gray-800">{course.level}</Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                          {course.title}
                        </h3>
                        <p className="text-gray-600 line-clamp-2">{course.description}</p>
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
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div>
                          <div className="text-2xl font-bold text-green-600">{course.price}</div>
                          <div className="text-sm text-gray-500">by {course.instructor}</div>
                        </div>
                        <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white">
                          Plant Seed
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <Badge className="bg-teal-100 text-teal-700 border-teal-200 mb-6">
              <Building className="w-4 h-4 mr-2" />
              Green Partners
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Eco-Conscious Companies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join professionals from organizations committed to sustainable practices and environmental responsibility.
            </p>
          </FadeInUp>

          <ContinuousSlider
            speed={30}
            gap="gap-12"
            pauseOnHover={true}
          >
            {companyLogos.map((company, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-green-50 rounded-lg border border-green-200 hover:border-green-400 hover:shadow-lg transition-all duration-300 min-w-[180px] h-[100px]">
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </ContinuousSlider>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <Badge className="bg-green-100 text-green-700 border-green-200 mb-6">
              <Quote className="w-4 h-4 mr-2" />
              Growth Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Seeds of Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from learners who've grown their careers through our nature-inspired education.
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
                <Card className="bg-white border-green-200 hover:border-green-400 hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed italic">
                        "{testimonial.content}"
                      </p>
                      
                      <div className="flex items-center space-x-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full border-2 border-green-200"
                        />
                        <div>
                          <div className="font-semibold text-gray-900">{testimonial.name}</div>
                          <div className="text-sm text-gray-600">{testimonial.role}</div>
                          <div className="text-sm text-green-600">{testimonial.company}</div>
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
      <section className="py-24 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInUp>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Ready to Plant Your Future?
                </h2>
                <p className="text-xl text-green-100 max-w-2xl mx-auto">
                  Join our growing community of eco-conscious learners and cultivate skills that make a difference.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ScaleOnHover>
                  <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 px-8 py-4 text-lg font-semibold">
                    Start Growing
                    <Sprout className="ml-2 h-5 w-5" />
                  </Button>
                </ScaleOnHover>
                
                <ScaleOnHover>
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg">
                    Explore Courses
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