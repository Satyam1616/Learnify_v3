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
  Shield,
  Microscope,
  Dna,
  Activity,
  Zap,
  Eye,
  Heart,
  Cpu,
  Database,
  Network,
  Code,
  Monitor,
  Layers,
  BarChart3,
  PieChart,
  LineChart
} from "lucide-react";
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, ScaleOnHover } from "@/components/animations";
import CardSlider from "@/components/sliders/CardSlider";
import ContinuousSlider from "@/components/sliders/ContinuousSlider";

export default function HomeV4() {
  const heroStats = [
    { number: "$8B+", label: "STUDENT INVESTMENTS", description: "Total funding in student success" },
    { number: "15+", label: "YEARS EXCELLENCE", description: "Leading educational technology" },
    { number: "2M+", label: "STUDENTS TRAINED", description: "Global learning community" },
    { number: "98.5%", label: "SUCCESS RATE", description: "Job placement achievement" }
  ];

  const heroFeatures = [
    { icon: Brain, text: "AI-Powered Learning" },
    { icon: Target, text: "Career-Focused Training" },
    { icon: Users, text: "Expert Mentorship" },
    { icon: Award, text: "Industry Certifications" }
  ];

  const platformMetrics = [
    { value: "500+", label: "Partner Companies", icon: Building },
    { value: "80+", label: "Countries Served", icon: Globe },
    { value: "4.98/5", label: "Student Rating", icon: Star },
    { value: "24/7", label: "Learning Support", icon: Clock }
  ];

  const circularStats = [
    { 
      number: "15", 
      label: "We are education innovators", 
      description: "Years of experience in transforming careers through cutting-edge technology and innovative learning methodologies.",
      percentage: 85,
      color: "from-blue-400 to-cyan-400"
    },
    { 
      number: "2M", 
      label: "Students transformed", 
      description: "Professionals and career changers trained through our advanced learning platforms and mentorship programs.",
      percentage: 92,
      color: "from-green-400 to-emerald-400"
    },
    { 
      number: "500+", 
      label: "Partner companies", 
      description: "Leading tech companies and enterprises trust our platform for training the next generation of professionals.",
      percentage: 78,
      color: "from-purple-400 to-pink-400"
    },
    { 
      number: "80+", 
      label: "Countries served", 
      description: "Global reach spanning across continents, bringing world-class education to learners worldwide.",
      percentage: 95,
      color: "from-orange-400 to-red-400"
    }
  ];

  const expertiseAreas = [
    {
      title: "Medical Simulation",
      description: "Advanced VR/AR medical training simulations for surgical procedures and patient care scenarios.",
      icon: Activity,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      stats: "10K+ procedures simulated"
    },
    {
      title: "Diagnostic Training",
      description: "AI-powered diagnostic training systems for radiology, pathology, and clinical decision making.",
      icon: Eye,
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      stats: "500K+ cases analyzed"
    },
    {
      title: "Surgical Excellence",
      description: "Precision surgical training with haptic feedback and real-time performance analytics.",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      stats: "25K+ surgeons trained"
    },
    {
      title: "Patient Care",
      description: "Comprehensive patient interaction training for bedside manner and communication skills.",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      stats: "1M+ interactions"
    }
  ];

  const technologyStack = [
    {
      category: "Artificial Intelligence",
      technologies: ["Machine Learning", "Computer Vision", "Natural Language Processing", "Predictive Analytics"],
      icon: Brain,
      description: "Advanced AI algorithms powering personalized learning experiences"
    },
    {
      category: "Extended Reality",
      technologies: ["Virtual Reality", "Augmented Reality", "Mixed Reality", "Haptic Feedback"],
      icon: Monitor,
      description: "Immersive training environments for hands-on medical education"
    },
    {
      category: "Data Analytics",
      technologies: ["Real-time Analytics", "Performance Tracking", "Predictive Modeling", "Learning Insights"],
      icon: BarChart3,
      description: "Comprehensive analytics for optimized learning outcomes"
    },
    {
      category: "Cloud Infrastructure",
      technologies: ["Scalable Architecture", "Global CDN", "Security Protocols", "API Integration"],
      icon: Database,
      description: "Robust, secure, and scalable platform infrastructure"
    }
  ];

  const learningPrograms = [
    {
      title: "Full-Stack Development",
      category: "CORE PROGRAM",
      description: "Comprehensive web development training covering modern frameworks, databases, and deployment strategies for building scalable applications.",
      duration: "6-12 months",
      certification: "Full-Stack Developer Certified",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      features: ["React & Node.js", "Database Design", "Cloud Deployment", "Project Portfolio"]
    },
    {
      title: "Data Science & AI",
      category: "SPECIALIZATION",
      description: "Advanced training in machine learning, data analysis, and artificial intelligence with hands-on projects and real-world applications.",
      duration: "8-14 months",
      certification: "Data Science Expert",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      features: ["Machine Learning", "Python & R", "Data Visualization", "AI Model Deployment"]
    },
    {
      title: "Cloud Architecture",
      category: "ADVANCED",
      description: "Enterprise-level cloud solutions training with AWS, Azure, and Google Cloud platforms, focusing on scalability and security.",
      duration: "12-18 months",
      certification: "Cloud Solutions Architect",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      features: ["Multi-Cloud Strategy", "DevOps Integration", "Security Best Practices", "Cost Optimization"]
    },
    {
      title: "Product Management",
      category: "EXECUTIVE",
      description: "Strategic product development, user experience design, and agile methodologies for leading successful product teams.",
      duration: "10-16 months",
      certification: "Senior Product Manager",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      features: ["Product Strategy", "User Research", "Agile Leadership", "Market Analysis"]
    }
  ];

  const techPartners = [
    "Google", "Microsoft", "Amazon", "Meta",
    "Apple", "Netflix", "Tesla", "Spotify"
  ];

  const companyTimeline = [
    {
      year: "2010",
      title: "Foundation",
      description: "Established as an innovative online education platform focused on career transformation."
    },
    {
      year: "2013",
      title: "First Tech Partnerships",
      description: "Partnered with leading tech companies to develop industry-aligned curriculum."
    },
    {
      year: "2016",
      title: "AI-Powered Learning",
      description: "Launched personalized learning paths using artificial intelligence and machine learning."
    },
    {
      year: "2019",
      title: "Global Expansion",
      description: "Expanded to 50+ countries with comprehensive career development programs."
    },
    {
      year: "2022",
      title: "Mentorship Revolution",
      description: "Introduced 1-on-1 expert mentorship and real-world project-based learning."
    },
    {
      year: "2024",
      title: "Industry Leadership",
      description: "Recognized as the leading career transformation platform with 98% job placement rate."
    }
  ];

  const successStories = [
    {
      name: "Sarah Chen",
      role: "Senior Software Engineer at Google",
      story: "The full-stack program completely transformed my career. I went from a marketing role to landing my dream job at Google with a 180% salary increase.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      specialty: "Full-Stack Development",
      improvement: "180% salary increase",
      timeframe: "8 months",
      previousRole: "Marketing Coordinator",
      newSalary: "$165K"
    },
    {
      name: "Michael Rodriguez",
      role: "Data Scientist at Netflix",
      story: "The AI and machine learning curriculum was incredible. I built real projects that impressed Netflix recruiters and secured a senior position.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      specialty: "Data Science & AI",
      improvement: "Career pivot success",
      timeframe: "10 months",
      previousRole: "Business Analyst",
      newSalary: "$185K"
    },
    {
      name: "Emily Johnson",
      role: "Product Manager at Meta",
      story: "The product management track gave me the strategic thinking and leadership skills needed to excel. I'm now leading a team of 15 engineers.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      specialty: "Product Management",
      improvement: "Leadership role achieved",
      timeframe: "12 months",
      previousRole: "Project Coordinator",
      newSalary: "$195K"
    }
  ];

  const learningInnovations = [
    {
      title: "Interactive Code Labs",
      description: "Hands-on coding environments with real-time feedback and collaboration",
      icon: Code,
      applications: ["Live Coding Sessions", "Pair Programming", "Code Reviews", "Project Collaboration"]
    },
    {
      title: "AI Learning Assistant",
      description: "Personalized learning recommendations and intelligent tutoring system",
      icon: Brain,
      applications: ["Personalized Paths", "Smart Recommendations", "Progress Tracking", "Skill Assessment"]
    },
    {
      title: "Industry Simulations",
      description: "Real-world project simulations with actual company scenarios",
      icon: Building,
      applications: ["Startup Simulations", "Enterprise Projects", "Team Collaboration", "Client Presentations"]
    },
    {
      title: "Career Analytics",
      description: "Advanced analytics for career progression and market insights",
      icon: BarChart3,
      applications: ["Salary Insights", "Market Trends", "Skill Demand", "Career Mapping"]
    }
  ];

  const teamMembers = [
    {
      name: "James Wilson",
      role: "Chief Technology Officer",
      experience: "Former Engineering Director at Google",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      linkedin: "#",
      specialization: "Full-Stack Development & Cloud Architecture"
    },
    {
      name: "Lisa Zhang",
      role: "VP of Learning Innovation",
      experience: "Ex-Head of AI Education at Microsoft",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      linkedin: "#",
      specialization: "AI & Machine Learning Education"
    },
    {
      name: "Robert Martinez",
      role: "Head of Curriculum Design",
      experience: "Former Principal Engineer at Netflix",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      linkedin: "#",
      specialization: "Software Engineering & System Design"
    },
    {
      name: "Amanda Foster",
      role: "Director of Career Services",
      experience: "Former VP of Talent at Meta",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      linkedin: "#",
      specialization: "Career Development & Industry Partnerships"
    }
  ];

  const globalPresence = [
    { region: "North America", companies: "150+", students: "500K+", color: "bg-blue-500" },
    { region: "Europe", companies: "200+", students: "600K+", color: "bg-green-500" },
    { region: "Asia Pacific", companies: "180+", students: "700K+", color: "bg-purple-500" },
    { region: "Latin America", companies: "80+", students: "200K+", color: "bg-orange-500" },
    { region: "Middle East & Africa", companies: "60+", students: "150K+", color: "bg-red-500" }
  ];

  const researchAreas = [
    {
      title: "Precision Medicine",
      description: "Developing personalized treatment protocols through genomic analysis and AI-driven insights.",
      progress: 85,
      publications: "120+ papers",
      funding: "$15M"
    },
    {
      title: "Digital Therapeutics",
      description: "Creating evidence-based digital interventions for chronic disease management and prevention.",
      progress: 72,
      publications: "95+ papers",
      funding: "$12M"
    },
    {
      title: "Medical Robotics",
      description: "Advancing surgical robotics and autonomous medical devices for improved patient outcomes.",
      progress: 68,
      publications: "80+ papers",
      funding: "$20M"
    },
    {
      title: "Biomarker Discovery",
      description: "Identifying novel biomarkers for early disease detection and treatment monitoring.",
      progress: 91,
      publications: "150+ papers",
      funding: "$18M"
    }
  ];

  const CircularProgress = ({ percentage, size = 120, strokeWidth = 8, color = "from-blue-400 to-cyan-400" }: {
    percentage: number;
    size?: number;
    strokeWidth?: number;
    color?: string;
  }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;

    return (
      <div className="relative group" style={{ width: size, height: size }}>
        <svg
          className="transform -rotate-90 transition-transform duration-500 group-hover:scale-110"
          width={size}
          height={size}
        >
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#gradient)"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
            style={{
              filter: 'drop-shadow(0 0 8px rgba(34, 211, 238, 0.4))'
            }}
          />
          {/* Glow effect circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#glowGradient)"
            strokeWidth={strokeWidth + 4}
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out opacity-0 group-hover:opacity-40"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" className="text-blue-400" stopColor="currentColor" />
              <stop offset="100%" className="text-cyan-400" stopColor="currentColor" />
            </linearGradient>
            <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
            {percentage}%
          </span>
        </div>
        
        {/* Pulse effect background */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
      </div>
    );
  };

  return (
    <Layout>
      {/* Enhanced Hero Section - Medical Theme */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Medical Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900"></div>
        
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full opacity-40 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-400/10 to-cyan-400/10 rounded-full opacity-25 animate-pulse delay-2000"></div>
          
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-bounce delay-300 opacity-60"></div>
          <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-blue-400 rounded-full animate-bounce delay-700 opacity-50"></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-white rounded-full animate-ping delay-1000 opacity-70"></div>
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-cyan-300 rounded-full animate-ping delay-1500 opacity-60"></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-10 text-white">
              {/* Platform Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-cyan-50/10 border border-cyan-200/20 rounded-full backdrop-blur-sm">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium text-cyan-300">
                  Leading Career Transformation Platform Since 2010
                </span>
              </div>

              <div className="space-y-8">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-tight">
                  <span className="block">Learn.</span>
                  <span className="block font-normal bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Build.
                  </span>
                  <span className="block font-medium">Transform.</span>
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Transforming careers through cutting-edge technology education, 
                  AI-powered learning paths, and immersive project-based experiences that prepare 
                  the next generation of tech professionals.
                </p>
              </div>

              {/* Medical Features */}
              <div className="grid grid-cols-2 gap-4">
                {heroFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="p-2 bg-cyan-100/20 rounded-lg">
                      <feature.icon className="h-5 w-5 text-cyan-400" />
                    </div>
                    <span className="text-sm font-medium text-gray-300">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Start Learning Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl text-lg font-semibold backdrop-blur-sm">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Success Stories
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 pt-8 border-t border-white/10">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=32&h=32" alt="" />
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=32&h=32" alt="" />
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=32&h=32" alt="" />
                  </div>
                  <span className="text-sm text-gray-300">Trusted by 2M+ students worldwide</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm text-gray-300 ml-2">4.98/5 rating</span>
                </div>
              </div>
            </div>

            {/* Right Stats - Enhanced Medical */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                {heroStats.map((stat, index) => (
                  <Card key={index} className="p-6 bg-white/5 backdrop-blur-sm border-white/10 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2 hover:scale-105 group relative overflow-hidden">
                    {/* Animated background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <CardContent className="p-0 text-center relative z-10">
                      <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                        {stat.number}
                      </div>
                      <div className="text-xs text-cyan-400 uppercase tracking-wide mb-2 font-semibold group-hover:text-cyan-300 transition-colors duration-300">
                        {stat.label}
                      </div>
                      <div className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {stat.description}
                      </div>
                    </CardContent>
                    
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-cyan-400/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Bottom glow line */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Card>
                ))}
              </div>

              {/* Platform Metrics */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-6 text-center">
                  Learning Platform Excellence
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {platformMetrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="flex justify-center mb-3">
                        <div className="p-3 bg-cyan-100/20 rounded-full">
                          <metric.icon className="h-6 w-6 text-cyan-400" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                      <div className="text-xs text-gray-400">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Learning Programs Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <Badge className="bg-cyan-100 text-cyan-700 mb-6">
              Career Transformation Programs
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Comprehensive Learning
              <span className="block font-normal text-cyan-600">Program Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-aligned programs designed by tech experts and powered by 
              cutting-edge learning technology and real-world projects.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <CardSlider
              slidesToShow={{ mobile: 1, tablet: 1, desktop: 2 }}
              showArrows={true}
              showDots={true}
              autoPlay={true}
              autoPlayInterval={6000}
              gap="gap-8"
            >
              {learningPrograms.map((program, index) => (
                <ScaleOnHover key={index}>
                  <Card className="overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 border-0 shadow-lg group relative h-full">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                    
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={program.image} 
                        alt={program.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-500"></div>
                      
                      {/* Animated overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-cyan-500/90 text-white group-hover:bg-cyan-400 transition-colors duration-300 shadow-lg">
                          {program.category}
                        </Badge>
                      </div>
                      
                      {/* Floating icon */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full">
                          <ArrowRight className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors duration-300">
                          {program.title}
                        </h3>
                        <div className="flex items-center text-cyan-300 text-sm group-hover:text-cyan-200 transition-colors duration-300">
                          <Clock className="h-4 w-4 mr-1" />
                          {program.duration}
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-8">
                      <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                      
                      <div className="space-y-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <Award className="h-4 w-4 mr-2 text-cyan-500" />
                          {program.certification}
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2">
                          {program.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="h-3 w-3 text-cyan-500 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <Button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 group-hover:scale-100">
                          <span className="flex items-center justify-center">
                            Explore Program
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              ))}
            </CardSlider>
          </FadeInUp>
        </div>
      </section>

      {/* Tech Partners Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 mb-6">
              Hiring Partners
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Leading Tech
              <span className="block font-normal text-blue-600">Companies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partnering with the world's most innovative tech companies 
              to deliver industry-relevant education and guaranteed job placements.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <ContinuousSlider
              speed={30}
              gap="gap-8"
              pauseOnHover={true}
            >
              {techPartners.map((partner, index) => (
                <ScaleOnHover key={index}>
                  <div className="flex items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group cursor-pointer relative overflow-hidden min-w-[200px] h-[80px]">
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Content */}
                    <span className="text-gray-600 font-medium text-center group-hover:text-blue-700 transition-colors duration-300 relative z-10 whitespace-nowrap">
                      {partner}
                    </span>
                    
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-6 h-6 bg-gradient-to-br from-blue-400/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </ScaleOnHover>
              ))}
            </ContinuousSlider>
          </FadeInUp>

          <FadeInUp delay={0.6} className="text-center mt-12">
            <p className="text-gray-600 mb-4">Join 500+ tech companies hiring our graduates</p>
            <ScaleOnHover>
              <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                View All Partners
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </ScaleOnHover>
          </FadeInUp>
        </div>
      </section>

      {/* Circular Stats Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 mb-6">
              Learning Excellence Metrics
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-light mb-6">
              Transforming Careers
              <span className="block font-normal text-cyan-400">Through Education</span>
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <CardSlider
              slidesToShow={{ mobile: 1, tablet: 2, desktop: 4 }}
              showArrows={true}
              showDots={true}
              autoPlay={true}
              autoPlayInterval={4000}
            >
              {circularStats.map((stat, index) => (
                <ScaleOnHover key={index}>
                  <div className="text-center space-y-6 h-full flex flex-col justify-center">
                    <div className="flex justify-center">
                      <CircularProgress 
                        percentage={stat.percentage} 
                        size={140} 
                        color={stat.color}
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <div className="text-4xl font-bold text-white">{stat.number}</div>
                      <h3 className="text-xl font-semibold text-cyan-400">{stat.label}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{stat.description}</p>
                    </div>
                  </div>
                </ScaleOnHover>
              ))}
            </CardSlider>
          </FadeInUp>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <Badge className="bg-green-100 text-green-700 mb-6">
              Student Success Stories
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Transforming Careers,
              <span className="block font-normal text-green-600">Changing Lives</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from students who transformed their careers and 
              landed dream jobs at top tech companies through our programs.
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
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
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
                      <p className="text-xs text-cyan-600 font-medium">{story.specialty}</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                    "{story.story}"
                  </blockquote>
                  
                  <div className="space-y-4 pt-6 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Previous Role:</span>
                      <span className="text-sm font-medium text-gray-700">{story.previousRole}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">New Salary:</span>
                      <span className="text-lg font-bold text-green-600">{story.newSalary}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Training Duration:</span>
                      <span className="text-sm font-medium text-blue-600">{story.timeframe}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            </CardSlider>
          </FadeInUp>

          <FadeInUp delay={0.6} className="text-center mt-12">
            <ScaleOnHover>
              <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 rounded-xl">
                Read More Success Stories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </ScaleOnHover>
          </FadeInUp>
        </div>
      </section>

      {/* Company Timeline Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 mb-6">
              Our Learning Journey
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Pioneering Career Education
              <span className="block font-normal text-purple-600">Innovation</span>
            </h2>
            <p className="text-xl text-gray-600">
              A decade of breakthrough innovations in career transformation technology.
            </p>
          </FadeInUp>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-200"></div>
            
            <StaggerContainer className="space-y-12">
              {companyTimeline.map((milestone, index) => (
                <StaggerItem key={index}>
                  <FadeInLeft delay={index * 0.2} className="relative flex items-start">
                    <ScaleOnHover>
                      <div className="flex-shrink-0 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                        <span className="text-purple-600 font-bold">{milestone.year}</span>
                      </div>
                    </ScaleOnHover>
                    
                    <div className="ml-8 pb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </FadeInLeft>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Learning Innovations Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 mb-6">
              Learning Technology Innovation
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-light mb-6">
              We have deep
              <span className="block font-normal text-cyan-400">technology experience</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive platform covers every aspect of career development, 
              from foundational skills to advanced specialization programs.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <CardSlider
              slidesToShow={{ mobile: 1, tablet: 2, desktop: 4 }}
              showArrows={true}
              showDots={true}
              autoPlay={true}
              autoPlayInterval={4000}
            >
              {learningInnovations.map((innovation, index) => (
                <ScaleOnHover key={index}>
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-white hover:bg-white/10 transition-all duration-300 group h-full">
                    <CardContent className="p-8 text-center">
                      <div className="flex justify-center mb-6">
                        <div className="p-4 bg-cyan-500/20 rounded-2xl group-hover:bg-cyan-500/30 transition-colors duration-300">
                          <innovation.icon className="h-8 w-8 text-cyan-400" />
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-4 text-cyan-400">{innovation.title}</h3>
                      <p className="text-gray-300 text-sm mb-6">{innovation.description}</p>
                      
                      <div className="space-y-2">
                        {innovation.applications.map((application, appIndex) => (
                          <div key={appIndex} className="text-xs text-gray-400 bg-white/5 rounded-full px-3 py-1">
                            {application}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              ))}
            </CardSlider>
          </FadeInUp>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 mb-6">
              Technology Excellence
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-light mb-6">
              We have cultivated a
              <span className="block font-normal text-blue-400">unique set of expertise</span>
              <span className="block font-light">to enable all-around</span>
              <span className="block font-normal text-blue-400">growth of healthcare</span>
              <span className="block font-light">businesses</span>
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <CardSlider
              slidesToShow={{ mobile: 1, tablet: 2, desktop: 4 }}
              showArrows={true}
              showDots={true}
              autoPlay={true}
              autoPlayInterval={4500}
            >
              {technologyStack.map((tech, index) => (
                <ScaleOnHover key={index}>
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-white hover:bg-white/10 transition-all duration-300 group h-full">
                    <CardContent className="p-8 text-center">
                      <div className="flex justify-center mb-6">
                        <div className="p-4 bg-blue-500/20 rounded-2xl group-hover:bg-blue-500/30 transition-colors duration-300">
                          <tech.icon className="h-8 w-8 text-blue-400" />
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-4 text-blue-400">{tech.category}</h3>
                      <p className="text-gray-300 text-sm mb-6">{tech.description}</p>
                      
                      <div className="space-y-2">
                        {tech.technologies.map((technology, techIndex) => (
                          <div key={techIndex} className="text-xs text-gray-400 bg-white/5 rounded-full px-3 py-1">
                            {technology}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              ))}
            </CardSlider>
          </FadeInUp>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 mb-6">
              Research & Innovation
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-light mb-6">
              Advancing Medical Science
              <span className="block font-normal text-purple-400">Through Research</span>
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <CardSlider
              slidesToShow={{ mobile: 1, tablet: 1, desktop: 2 }}
              showArrows={true}
              showDots={true}
              autoPlay={true}
              autoPlayInterval={5000}
            >
              {researchAreas.map((research, index) => (
                <ScaleOnHover key={index}>
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-white hover:bg-white/10 transition-all duration-300 h-full">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold mb-3 text-purple-400">{research.title}</h3>
                          <p className="text-gray-300 leading-relaxed">{research.description}</p>
                        </div>
                        <div className="ml-6">
                          <CircularProgress 
                            percentage={research.progress} 
                            size={80} 
                            strokeWidth={6}
                            color="from-purple-400 to-pink-400"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                        <div>
                          <div className="text-lg font-bold text-white">{research.publications}</div>
                          <div className="text-xs text-gray-400">Publications</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-white">{research.funding}</div>
                          <div className="text-xs text-gray-400">Research Funding</div>
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

      {/* Leadership Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <Badge className="bg-gray-100 text-gray-700 mb-6">
              Leadership Excellence
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Leading Tech
              <span className="block font-normal text-gray-600">Education Experts</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our leadership team combines decades of tech industry experience, educational innovation, 
              and career development expertise to drive student success.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <CardSlider
              slidesToShow={{ mobile: 1, tablet: 2, desktop: 4 }}
              showArrows={true}
              showDots={true}
              autoPlay={true}
              autoPlayInterval={5000}
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
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-cyan-600 font-medium mb-2">{member.role}</p>
                      <p className="text-sm text-gray-600 mb-3">{member.experience}</p>
                      <p className="text-xs text-gray-500 mb-4">{member.specialization}</p>
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

      {/* Global Learning Presence Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <FadeInUp>
              <Badge className="bg-white/20 text-white border-white/30">
                Global Learning Network
              </Badge>
            </FadeInUp>
            
            <FadeInUp delay={0.2}>
              <h2 className="text-4xl lg:text-5xl font-light">
                We transform careers
                <br />
                <span className="font-normal">globally from our innovation hubs</span>
                <br />
                <span className="font-medium">in San Francisco and London</span>
              </h2>
            </FadeInUp>
            
            <FadeInUp delay={0.4}>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Our global network spans across continents, bringing cutting-edge tech education 
                to students worldwide through strategic partnerships and local expertise.
              </p>
            </FadeInUp>

            <StaggerContainer className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 mt-16">
              {globalPresence.map((region, index) => (
                <StaggerItem key={index}>
                  <ScaleOnHover className="text-center">
                    <div className={`w-16 h-16 ${region.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                      <Globe className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{region.region}</h3>
                    <div className="space-y-1">
                      <div className="text-2xl font-bold">{region.companies}</div>
                      <div className="text-sm text-white/80">Partner Companies</div>
                      <div className="text-lg font-semibold text-cyan-200">{region.students}</div>
                      <div className="text-xs text-white/70">Students Trained</div>
                    </div>
                  </ScaleOnHover>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeInUp delay={0.8} className="mt-16 pt-8 border-t border-white/20">
              <StaggerContainer className="grid md:grid-cols-3 gap-8">
                <StaggerItem className="text-center">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-white/80">Partner Companies</div>
                </StaggerItem>
                <StaggerItem className="text-center">
                  <div className="text-3xl font-bold mb-2">2M+</div>
                  <div className="text-white/80">Students Trained</div>
                </StaggerItem>
                <StaggerItem className="text-center">
                  <div className="text-3xl font-bold mb-2">80+</div>
                  <div className="text-white/80">Countries Served</div>
                </StaggerItem>
              </StaggerContainer>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-700 mb-6">
              Learning Program FAQ
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Common Learning
              <span className="block font-normal text-yellow-600">Questions Answered</span>
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our career transformation programs and platform.
            </p>
          </FadeInUp>

          <StaggerContainer className="space-y-8">
            {[
              {
                question: "What makes our programs different from traditional bootcamps?",
                answer: "Our platform combines hands-on projects, AI-powered learning paths, and real-time mentorship with industry experts. This personalized approach provides practical experience with actual company scenarios."
              },
              {
                question: "Are the projects and curriculum industry-validated?",
                answer: "Yes, all our projects are developed in partnership with leading tech companies and validated by industry professionals. They meet the highest standards for current market demands."
              },
              {
                question: "What kind of certifications can I earn?",
                answer: "We offer certifications in Full-Stack Development, Data Science & AI, Cloud Architecture, and Product Management. All certifications are recognized by major tech companies and industry bodies."
              },
              {
                question: "How do you ensure job placement success?",
                answer: "Our career services team provides resume optimization, interview preparation, and direct connections to hiring partners. We maintain a 98.5% job placement rate within 6 months of graduation."
              },
              {
                question: "What support do students receive during the program?",
                answer: "Each student receives 24/7 technical support, weekly 1-on-1 mentorship from industry experts, career guidance, and access to our global community of tech professionals."
              }
            ].map((faq, index) => (
              <StaggerItem key={index}>
                <ScaleOnHover>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
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
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp delay={0.6} className="text-center mt-12">
            <p className="text-gray-600 mb-4">Need more information about our programs?</p>
            <ScaleOnHover>
              <Button variant="outline" className="border-cyan-200 text-cyan-700 hover:bg-cyan-50">
                Contact Learning Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </ScaleOnHover>
          </FadeInUp>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <FadeInUp className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-light text-white">
                Stay Connected with Tech Innovation
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Get the latest updates on tech industry trends, career insights, 
                and exclusive learning opportunities delivered to your inbox.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.3} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-xl border-0 focus:ring-2 focus:ring-white/50 focus:outline-none text-gray-900"
                />
                <ScaleOnHover>
                  <Button className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold">
                    Subscribe
                    <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </ScaleOnHover>
              </div>
              <p className="text-sm text-white/70 mt-3">
                Join 50,000+ tech professionals. No spam, unsubscribe anytime.
              </p>
            </FadeInUp>

            <StaggerContainer className="flex items-center justify-center space-x-8 pt-8">
              <StaggerItem className="flex items-center text-white/80">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Industry Updates</span>
              </StaggerItem>
              <StaggerItem className="flex items-center text-white/80">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Career Opportunities</span>
              </StaggerItem>
              <StaggerItem className="flex items-center text-white/80">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Early Access Programs</span>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <FadeInLeft className="space-y-8">
              <div>
                <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 mb-6">
                  Start Your Learning Journey
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-light mb-6">
                  Ready to Transform
                  <span className="block font-normal text-cyan-400">Your Career?</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Join thousands of students worldwide in transforming their careers 
                  through our advanced learning platform and industry-expert mentorship.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-cyan-500/20 rounded-lg">
                      <Phone className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Student Hotline</div>
                      <div className="text-gray-400">+1 (555) LEARN-NOW</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-cyan-500/20 rounded-lg">
                      <Mail className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Admissions Team</div>
                      <div className="text-gray-400">admissions@learnify.com</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-cyan-500/20 rounded-lg">
                      <MapPin className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Innovation Hubs</div>
                      <div className="text-gray-400">San Francisco & London</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-cyan-500/20 rounded-lg">
                      <Clock className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Learning Support</div>
                      <div className="text-gray-400">24/7 Available</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-8 border-t border-gray-800">
                <p className="text-gray-400 mb-4">Connect with our learning community</p>
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
            </FadeInLeft>
            
            <FadeInRight>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-semibold mb-6">Schedule Learning Consultation</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Smith"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="john.smith@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Current Background</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="e.g., Marketing, Finance, Student"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Career Interest</label>
                  <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white">
                    <option value="">Select a program</option>
                    <option value="fullstack">Full-Stack Development</option>
                    <option value="datascience">Data Science & AI</option>
                    <option value="cloud">Cloud Architecture</option>
                    <option value="product">Product Management</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Career Goals</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Tell us about your career transformation goals and timeline..."
                  ></textarea>
                </div>
                <ScaleOnHover>
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-4 rounded-lg text-lg font-semibold">
                    Schedule Career Consultation
                    <Calendar className="ml-2 h-5 w-5" />
                  </Button>
                </ScaleOnHover>
              </form>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      <HomePageSwitcher />
    </Layout>
  );
}