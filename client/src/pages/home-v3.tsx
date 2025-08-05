import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import HomePageSwitcher from "@/components/HomePageSwitcher";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Users, 
  BookOpen, 
  Award, 
  Globe, 
  TrendingUp,
  Target,
  Rocket,
  CheckCircle,
  Calendar,
  DollarSign,
  Building,
  GraduationCap,
  Star,
  Clock,
  Play,
  ChevronRight,
  Briefcase,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  ExternalLink,
  Brain,
  Shield
} from "lucide-react";
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, ScaleOnHover } from "@/components/animations";
import CardSlider from "@/components/sliders/CardSlider";
import ContinuousSlider from "@/components/sliders/ContinuousSlider";

export default function HomeV3() {
  const stats = [
    { number: "$8B+", label: "IN INVESTMENTS", description: "Total funding raised by our graduates" },
    { number: "25+", label: "YEARS TRACK RECORD", description: "Proven success in education" },
    { number: "50K+", label: "STUDENTS GRADUATED", description: "Global alumni network" },
    { number: "98%", label: "SUCCESS RATE", description: "Job placement within 6 months" }
  ];

  const heroFeatures = [
    { icon: TrendingUp, text: "Industry-Leading Growth" },
    { icon: Award, text: "Award-Winning Platform" },
    { icon: Globe, text: "Global Recognition" },
    { icon: Users, text: "Expert Community" }
  ];

  const metrics = [
    { value: "500+", label: "Fortune 500 Partners", icon: Building },
    { value: "150+", label: "Countries Served", icon: Globe },
    { value: "4.9/5", label: "Student Rating", icon: Star },
    { value: "24/7", label: "Support Available", icon: Clock }
  ];

  const platformFeatures = [
    {
      title: "Seed-Early Stage",
      description: "Foundational courses designed to get you started in your tech career journey with comprehensive beginner-friendly content."
    },
    {
      title: "Mid Stage",
      description: "Intermediate level programs that bridge the gap between basic knowledge and advanced expertise in your chosen field."
    },
    {
      title: "Late Stage",
      description: "Advanced specialization courses for experienced professionals looking to master cutting-edge technologies and methodologies."
    },
    {
      title: "Exit Buyouts",
      description: "Career transition programs designed to help professionals successfully move into leadership roles and entrepreneurship."
    }
  ];

  const portfolioCompanies = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
    { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    { name: "Uber", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" },
    { name: "Airbnb", logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg" }
  ];

  const timelineEvents = [
    {
      year: "2010",
      title: "Pioneering Since the Beginning",
      description: "Founded with a vision to democratize quality education and make world-class learning accessible to everyone, everywhere. Started with just 5 courses and 100 students.",
      highlight: true
    },
    {
      year: "2015",
      title: "Global Expansion",
      description: "Expanded internationally with localized content in 15 languages. Reached 10,000+ students across 25 countries.",
      highlight: false
    },
    {
      year: "2018",
      title: "AI Integration",
      description: "Introduced AI-powered personalized learning paths and adaptive assessments. Student success rates improved by 40%.",
      highlight: false
    },
    {
      year: "2020",
      title: "Remote Learning Revolution",
      description: "Pivoted to fully remote learning during the pandemic. Scaled to serve 100,000+ students with 99.9% uptime.",
      highlight: false
    },
    {
      year: "2022",
      title: "Industry Partnerships",
      description: "Established direct hiring partnerships with Fortune 500 companies. 85% job placement rate within 6 months.",
      highlight: false
    },
    {
      year: "2024",
      title: "Next Generation Platform",
      description: "Launched immersive VR/AR learning experiences and blockchain-verified certifications. Leading the future of education.",
      highlight: true
    }
  ];

  const investmentHighlights = [
    {
      title: "Full-Stack Development Bootcamp",
      description: "Comprehensive 24-week program covering modern web technologies",
      status: "PORTFOLIO",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      title: "Data Science & AI Specialization",
      description: "Advanced machine learning and artificial intelligence curriculum",
      status: "PORTFOLIO",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      title: "Cybersecurity Professional Track",
      description: "Enterprise-grade security training with hands-on labs",
      status: "PORTFOLIO",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      experience: "Former VP of Engineering at Google",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      linkedin: "#"
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      experience: "Ex-Principal Engineer at Microsoft",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      linkedin: "#"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Curriculum",
      experience: "Former Stanford CS Professor",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      linkedin: "#"
    },
    {
      name: "David Park",
      role: "VP of Partnerships",
      experience: "Former Director at Amazon",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      linkedin: "#"
    }
  ];

  const successStories = [
    {
      name: "Alex Thompson",
      role: "Senior Software Engineer at Google",
      story: "From retail worker to Google engineer in 8 months. Learnify's comprehensive curriculum and mentorship program changed my life completely.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      company: "Google",
      salary: "$180K",
      timeframe: "8 months"
    },
    {
      name: "Maria Garcia",
      role: "Data Scientist at Microsoft",
      story: "The AI specialization track gave me the skills I needed to transition from marketing to data science. The hands-on projects were invaluable.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      company: "Microsoft",
      salary: "$165K",
      timeframe: "10 months"
    },
    {
      name: "James Wilson",
      role: "Product Manager at Meta",
      story: "The business track combined with technical knowledge helped me land my dream PM role. The career support was exceptional.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      company: "Meta",
      salary: "$195K",
      timeframe: "6 months"
    }
  ];

  const industryPartners = [
    {
      name: "Technology Giants",
      companies: ["Google", "Microsoft", "Amazon", "Apple"],
      description: "Direct hiring partnerships with leading tech companies",
      icon: Rocket
    },
    {
      name: "Financial Services",
      companies: ["Goldman Sachs", "JPMorgan", "Morgan Stanley", "BlackRock"],
      description: "Fintech and quantitative finance opportunities",
      icon: TrendingUp
    },
    {
      name: "Consulting Firms",
      companies: ["McKinsey", "BCG", "Bain", "Deloitte"],
      description: "Strategy and technology consulting roles",
      icon: Briefcase
    },
    {
      name: "Startups & Scale-ups",
      companies: ["Stripe", "Airbnb", "Uber", "Spotify"],
      description: "High-growth startup opportunities",
      icon: Target
    }
  ];

  const platformCapabilities = [
    {
      title: "AI-Powered Learning Paths",
      description: "Personalized curriculum that adapts to your learning style and pace",
      icon: Brain,
      features: ["Adaptive assessments", "Smart recommendations", "Progress tracking"]
    },
    {
      title: "Live Industry Projects",
      description: "Work on real projects from our partner companies",
      icon: Building,
      features: ["Real-world experience", "Portfolio building", "Industry exposure"]
    },
    {
      title: "1:1 Mentorship",
      description: "Personal guidance from industry experts and career coaches",
      icon: Users,
      features: ["Weekly sessions", "Career guidance", "Technical support"]
    },
    {
      title: "Job Guarantee Program",
      description: "Get hired within 6 months or receive a full refund",
      icon: Shield,
      features: ["Money-back guarantee", "Interview preparation", "Salary negotiation"]
    }
  ];

  const globalPresence = [
    { region: "North America", students: "25,000+", offices: "5 cities" },
    { region: "Europe", students: "18,000+", offices: "8 cities" },
    { region: "Asia Pacific", students: "15,000+", offices: "6 cities" },
    { region: "Latin America", students: "8,000+", offices: "3 cities" },
    { region: "Middle East & Africa", students: "4,000+", offices: "2 cities" }
  ];

  return (
    <Layout>
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-green-100 to-emerald-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-200 rounded-full opacity-15 animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <FadeInLeft className="space-y-10">
              {/* Badge */}
              <FadeInUp delay={0.2}>
                <div className="inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-sm font-medium text-green-700">
                    Leading Education Innovation Since 2010
                  </span>
                </div>
              </FadeInUp>

              <div className="space-y-8">
                <FadeInUp delay={0.4}>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 leading-tight">
                    <span className="block">Collaborative.</span>
                    <span className="block font-normal bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      Flexible.
                    </span>
                    <span className="block font-medium">Innovative.</span>
                  </h1>
                </FadeInUp>
                
                <FadeInUp delay={0.6}>
                  <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                    Building the next generation of tech professionals through 
                    innovative learning experiences. Our comprehensive platform 
                    combines cutting-edge curriculum with industry partnerships 
                    to deliver exceptional outcomes.
                  </p>
                </FadeInUp>
              </div>

              {/* Hero Features */}
              <StaggerContainer className="grid grid-cols-2 gap-4">
                {heroFeatures.map((feature, index) => (
                  <StaggerItem key={index}>
                    <ScaleOnHover className="flex items-center space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:bg-white/80 transition-all duration-300">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <feature.icon className="h-5 w-5 text-green-600" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                    </ScaleOnHover>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* CTA Buttons */}
              <FadeInUp delay={0.8} className="flex flex-col sm:flex-row gap-4">
                <ScaleOnHover>
                  <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </ScaleOnHover>
                
                <ScaleOnHover>
                  <Button variant="outline" size="lg" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-xl text-lg font-semibold backdrop-blur-sm">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Our Story
                  </Button>
                </ScaleOnHover>
              </FadeInUp>

              {/* Trust Indicators */}
              <FadeInUp delay={1.0} className="flex items-center space-x-6 pt-8 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=32&h=32" alt="" />
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=32&h=32" alt="" />
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=32&h=32" alt="" />
                  </div>
                  <span className="text-sm text-gray-600">Trusted by 50,000+ students</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">4.9/5 rating</span>
                </div>
              </FadeInUp>
            </FadeInLeft>

            {/* Right Stats - Enhanced */}
            <FadeInRight className="space-y-8">
              <StaggerContainer className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <StaggerItem key={index}>
                    <ScaleOnHover>
                      <Card className="p-6 bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-0 text-center">
                          <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                            {stat.number}
                          </div>
                          <div className="text-xs text-gray-600 uppercase tracking-wide mb-2 font-semibold">
                            {stat.label}
                          </div>
                          <div className="text-xs text-gray-500 leading-relaxed">
                            {stat.description}
                          </div>
                        </CardContent>
                      </Card>
                    </ScaleOnHover>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Additional Metrics */}
              <FadeInUp delay={0.6}>
                <ScaleOnHover className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">
                    Platform Excellence
                  </h3>
                  <StaggerContainer className="grid grid-cols-2 gap-6">
                    {metrics.map((metric, index) => (
                      <StaggerItem key={index} className="text-center">
                        <div className="flex justify-center mb-3">
                          <div className="p-3 bg-green-100 rounded-full">
                            <metric.icon className="h-6 w-6 text-green-600" />
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                        <div className="text-xs text-gray-600">{metric.label}</div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </ScaleOnHover>
              </FadeInUp>
            </FadeInRight>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Platform Lifecycle Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Complete Platform Across Learning
              <br />
              <span className="font-normal">Career Lifecycle</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learnify Ventures' comprehensive development strategies allow us to 
              be a partner for both students and employers across the entire 
              career journey, from foundational learning to advanced specialization 
              and leadership development.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-green-500"></div>
            
            <div className="space-y-12">
              {platformFeatures.map((feature, index) => (
                <div key={index} className="relative flex items-start space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-4 h-4 bg-green-500 rounded-full relative z-10"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Investment Highlights
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our portfolio showcases some specialized venture capital leaders, 
              enabling access to top-tier opportunities.
            </p>
            <ScaleOnHover>
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">
                Explore Our Investments
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </ScaleOnHover>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <CardSlider
              slidesToShow={{ mobile: 1, tablet: 2, desktop: 3 }}
              showArrows={true}
              showDots={true}
              autoPlay={true}
              autoPlayInterval={4000}
            >
              {investmentHighlights.map((investment, index) => (
                <ScaleOnHover key={index}>
                  <Card className="overflow-hidden border-0 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full">
                    <div className="relative">
                      <img 
                        src={investment.image} 
                        alt={investment.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-green-500 text-white text-xs">
                          {investment.status}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        {investment.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {investment.description}
                      </p>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              ))}
            </CardSlider>
          </FadeInUp>
        </div>
      </section>

      {/* Portfolio Companies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Where Our Graduates Work
            </h2>
            <p className="text-lg text-gray-600">
              Our alumni have been hired by leading technology companies worldwide
            </p>
          </div>

          <ContinuousSlider
            speed={25}
            gap="gap-12"
            pauseOnHover={true}
          >
            {portfolioCompanies.map((company, index) => (
              <div key={index} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 min-w-[120px] h-[60px]">
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="h-8 w-auto object-contain"
                />
              </div>
            ))}
          </ContinuousSlider>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block">
              <div className="w-px h-16 bg-green-500 mx-auto mb-4"></div>
              <p className="text-sm text-gray-600 uppercase tracking-wide">
                Learn. Grow. Lead the Future.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-300"></div>
            
            <div className="space-y-16">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start space-x-8">
                    <div className="flex-shrink-0">
                      <div className={`w-4 h-4 rounded-full relative z-10 ${
                        event.highlight ? 'bg-green-500' : 'bg-gray-400'
                      }`}></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-gray-500 mb-2">{event.year}</div>
                      <h3 className="text-2xl font-light text-gray-900 mb-4">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed max-w-2xl">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Capabilities Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-6">
              Platform Excellence
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-light mb-6">
              Next-Generation Learning
              <span className="block font-normal text-green-400">Infrastructure</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our cutting-edge platform combines AI, real-world projects, and personalized mentorship 
              to deliver unparalleled learning outcomes.
            </p>
          </FadeInUp>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platformCapabilities.map((capability, index) => (
              <StaggerItem key={index}>
                <ScaleOnHover>
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-white hover:bg-white/10 transition-all duration-300 group h-full">
                    <CardContent className="p-8">
                      <div className="flex justify-center mb-6">
                        <div className="p-4 bg-green-500/20 rounded-2xl group-hover:bg-green-500/30 transition-colors duration-300">
                          <capability.icon className="h-8 w-8 text-green-400" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-4 text-center">{capability.title}</h3>
                      <p className="text-gray-300 text-center mb-6">{capability.description}</p>
                      <div className="space-y-2">
                        {capability.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 mb-6">
              Student Success
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Transforming Careers,
              <span className="block font-normal text-blue-600">Changing Lives</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from our graduates who landed their dream jobs at top companies.
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
              {successStories.map((story, index) => (
                <ScaleOnHover key={index}>
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <img 
                          src={story.image} 
                          alt={story.name}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{story.name}</h3>
                          <p className="text-sm text-gray-600">{story.role}</p>
                        </div>
                      </div>
                      
                      <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                        "{story.story}"
                      </blockquote>
                      
                      <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-600">{story.salary}</div>
                          <div className="text-xs text-gray-500">Starting Salary</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-600">{story.timeframe}</div>
                          <div className="text-xs text-gray-500">Time to Hire</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-purple-600">{story.company}</div>
                          <div className="text-xs text-gray-500">Company</div>
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
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl">
                Read More Success Stories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </ScaleOnHover>
          </FadeInUp>
        </div>
      </section>

      {/* Industry Partners Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 mb-6">
              Industry Network
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Direct Access to
              <span className="block font-normal text-purple-600">Top Employers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our exclusive partnerships provide direct pathways to career opportunities 
              at the world's most innovative companies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryPartners.map((partner, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-purple-100 rounded-2xl">
                      <partner.icon className="h-8 w-8 text-purple-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{partner.name}</h3>
                  <p className="text-gray-600 mb-6">{partner.description}</p>
                  <div className="space-y-2">
                    {partner.companies.map((company, companyIndex) => (
                      <div key={companyIndex} className="text-sm text-gray-500 bg-gray-100 rounded-full px-3 py-1 inline-block mr-2 mb-2">
                        {company}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-700 mb-6">
              Global Impact
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Worldwide Learning
              <span className="block font-normal text-green-600">Community</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a global network of learners and professionals across five continents.
            </p>
          </div>

          <CardSlider
            slidesToShow={{ mobile: 1, tablet: 3, desktop: 5 }}
            showArrows={true}
            showDots={true}
            autoPlay={true}
            autoPlayInterval={4000}
          >
            {globalPresence.map((region, index) => (
              <ScaleOnHover key={index}>
                <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-sm h-full">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-green-100 rounded-full">
                        <Globe className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{region.region}</h3>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-green-600">{region.students}</div>
                      <div className="text-sm text-gray-500">Active Students</div>
                      <div className="text-sm text-gray-600">{region.offices}</div>
                    </div>
                  </CardContent>
                </Card>
              </ScaleOnHover>
            ))}
          </CardSlider>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-green-50 rounded-full">
              <MapPin className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-green-700 font-medium">Available in 150+ countries worldwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <Badge className="bg-gray-100 text-gray-700 mb-6">
              Leadership Excellence
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Visionary Leadership
              <span className="block font-normal text-gray-600">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry veterans with decades of combined experience leading innovation 
              in education and technology.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <CardSlider
              slidesToShow={{ mobile: 1, tablet: 2, desktop: 4 }}
              showArrows={true}
              showDots={true}
              autoPlay={true}
              autoPlayInterval={6000}
            >
              {teamMembers.map((member, index) => (
                <ScaleOnHover key={index}>
                  <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg group h-full">
                    <CardContent className="p-8">
                      <div className="mb-6 relative">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-24 h-24 rounded-full mx-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-green-600 font-medium mb-2">{member.role}</p>
                      <p className="text-sm text-gray-600 mb-4">{member.experience}</p>
                      <ScaleOnHover>
                        <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-100">
                          <Linkedin className="h-4 w-4 mr-2" />
                          Connect
                        </Button>
                      </ScaleOnHover>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              ))}
            </CardSlider>
          </FadeInUp>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-700 mb-6">
              Frequently Asked
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Common Questions
              <span className="block font-normal text-yellow-600">Answered</span>
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our programs and platform.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "What makes Learnify different from other learning platforms?",
                answer: "Our unique combination of AI-powered personalization, real industry projects, 1:1 mentorship, and job guarantee sets us apart. We focus on outcomes, not just content delivery."
              },
              {
                question: "How does the job guarantee program work?",
                answer: "If you complete our program and don't land a job within 6 months, we provide a full refund. Our career services team works with you throughout the process to ensure success."
              },
              {
                question: "What kind of support do students receive?",
                answer: "Students get 24/7 technical support, weekly 1:1 mentorship sessions, career coaching, interview preparation, and access to our global community of learners and alumni."
              },
              {
                question: "Are the programs suitable for beginners?",
                answer: "Yes! Our programs are designed for all skill levels. We start with fundamentals and gradually build up to advanced concepts, with personalized pacing based on your progress."
              },
              {
                question: "What is the time commitment required?",
                answer: "Most programs require 15-20 hours per week and can be completed in 6-12 months. We offer flexible scheduling to accommodate working professionals."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button variant="outline" className="border-green-200 text-green-700 hover:bg-green-50">
              Contact Our Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-light text-white">
                Stay Connected
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Get the latest updates on new programs, industry insights, and exclusive opportunities 
                delivered to your inbox.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-xl border-0 focus:ring-2 focus:ring-white/50 focus:outline-none text-gray-900"
                />
                <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold">
                  Subscribe
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-white/70 mt-3">
                Join 100,000+ professionals. No spam, unsubscribe anytime.
              </p>
            </div>

            <div className="flex items-center justify-center space-x-8 pt-8">
              <div className="flex items-center text-white/80">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Weekly Insights</span>
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

      {/* Enhanced Contact Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-6">
                  Get In Touch
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-light mb-6">
                  Ready to Transform
                  <span className="block font-normal text-green-400">Your Career?</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Join thousands of professionals who have successfully transitioned to high-paying 
                  tech careers. Start your journey today.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-green-500/20 rounded-lg">
                      <Phone className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Call Us</div>
                      <div className="text-gray-400">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-green-500/20 rounded-lg">
                      <Mail className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Email Us</div>
                      <div className="text-gray-400">hello@learnify.com</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-green-500/20 rounded-lg">
                      <MapPin className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Visit Us</div>
                      <div className="text-gray-400">San Francisco, CA</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-green-500/20 rounded-lg">
                      <Clock className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Support Hours</div>
                      <div className="text-gray-400">24/7 Available</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-8 border-t border-gray-800">
                <p className="text-gray-400 mb-4">Follow us on social media</p>
                <div className="flex space-x-4">
                  <div className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors">
                    <Linkedin className="h-5 w-5 text-gray-400 hover:text-white" />
                  </div>
                  <div className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors">
                    <Twitter className="h-5 w-5 text-gray-400 hover:text-white" />
                  </div>
                  <div className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors">
                    <Facebook className="h-5 w-5 text-gray-400 hover:text-white" />
                  </div>
                  <div className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors">
                    <Instagram className="h-5 w-5 text-gray-400 hover:text-white" />
                  </div>
                  <div className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors">
                    <Youtube className="h-5 w-5 text-gray-400 hover:text-white" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Tell us about your career goals..."
                  ></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-4 rounded-lg text-lg font-semibold">
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <HomePageSwitcher />
    </Layout>
  );
}