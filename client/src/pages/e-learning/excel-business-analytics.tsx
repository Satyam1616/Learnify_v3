import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import PricingPlansSection from "@/components/PricingPlansSection";
import ReviewsSection from "@/components/ReviewsSection";
import PartnersSection from "@/components/PartnersSection";
import { 
  Clock, Users, Star, BookOpen, Play, Award, 
  CheckCircle, BarChart3, TrendingUp, Calculator, Zap 
} from "lucide-react";

export default function ExcelBusinessAnalyticsPage() {
  const courseDetails = {
    title: "Excel for Business Analytics",
    subtitle: "Learn advanced Excel functions, pivot tables, and data analysis techniques",
    category: "Business",
    level: "Intermediate",
    duration: "4 weeks",
    students: "3,912",
    rating: 4.7,
    reviews: 456,
    price: "₹1,999",
    originalPrice: "₹3,499",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    lessons: 28,
    projects: 6,
    certificate: true,
    instructor: {
      name: "Amit Gupta",
      title: "Business Analytics Expert & Excel MVP",
      experience: "8+ years",
      students: "12,000+",
      rating: 4.8,
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    }
  };

  const curriculum = [
    {
      module: "Module 1: Excel Fundamentals Review",
      lessons: 6,
      duration: "1.5 hours",
      topics: [
        "Excel Interface and Navigation",
        "Data Types and Formatting",
        "Basic Formulas and Functions",
        "Cell References and Ranges",
        "Data Validation Techniques"
      ]
    },
    {
      module: "Module 2: Advanced Functions",
      lessons: 8,
      duration: "2.5 hours",
      topics: [
        "VLOOKUP, HLOOKUP, and INDEX-MATCH",
        "IF, AND, OR, and Nested Functions",
        "TEXT Functions and Data Cleaning",
        "DATE and TIME Functions",
        "Array Formulas and Dynamic Arrays"
      ]
    },
    {
      module: "Module 3: Data Analysis Tools",
      lessons: 6,
      duration: "2 hours",
      topics: [
        "Pivot Tables and Pivot Charts",
        "Data Tables and Scenario Analysis",
        "Goal Seek and Solver",
        "Statistical Functions",
        "Regression Analysis"
      ]
    },
    {
      module: "Module 4: Visualization & Dashboards",
      lessons: 5,
      duration: "1.5 hours",
      topics: [
        "Advanced Charting Techniques",
        "Interactive Dashboards",
        "Conditional Formatting",
        "Sparklines and Data Bars",
        "Dashboard Design Principles"
      ]
    },
    {
      module: "Module 5: Business Applications",
      lessons: 3,
      duration: "1 hour",
      topics: [
        "Financial Modeling",
        "Sales and Marketing Analytics",
        "Automation with Macros"
      ]
    }
  ];

  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Master complex data analysis techniques and statistical functions"
    },
    {
      icon: TrendingUp,
      title: "Business Intelligence",
      description: "Create powerful dashboards and reports for business decision-making"
    },
    {
      icon: Calculator,
      title: "Financial Modeling",
      description: "Build sophisticated financial models and forecasting tools"
    },
    {
      icon: Zap,
      title: "Automation Skills",
      description: "Automate repetitive tasks with macros and advanced formulas"
    }
  ];

  const projects = [
    "Sales Performance Dashboard",
    "Financial Budget Model",
    "Customer Analytics Report",
    "Inventory Management System",
    "Marketing ROI Calculator",
    "Executive Summary Dashboard"
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-900 via-emerald-800 to-teal-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full mr-3">
                    {courseDetails.category}
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">
                    {courseDetails.level}
                  </span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  {courseDetails.title}
                </h1>
                
                <p className="text-lg sm:text-xl text-green-100 mb-8 leading-relaxed">
                  {courseDetails.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8 text-green-100">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    {courseDetails.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    {courseDetails.students} students
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 mr-2 text-yellow-400" />
                    {courseDetails.rating} ({courseDetails.reviews} reviews)
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-8">
                  <span className="text-3xl font-bold">{courseDetails.price}</span>
                  <span className="text-xl text-green-300 line-through">{courseDetails.originalPrice}</span>
                  <span className="bg-red-500 text-white text-sm px-2 py-1 rounded">43% OFF</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4">
                    Enroll Now
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-900 px-8 py-4">
                    <Play className="mr-2 h-5 w-5" />
                    Preview Course
                  </Button>
                </div>
              </div>

              <div className="relative">
                <img 
                  src={courseDetails.image}
                  alt={courseDetails.title}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl flex items-center justify-center">
                  <Button size="lg" className="bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white hover:bg-opacity-30">
                    <Play className="mr-2 h-6 w-6" />
                    Watch Preview
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Stats */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{courseDetails.lessons}</div>
                <div className="text-gray-600">Lessons</div>
              </div>
              <div>
                <BarChart3 className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{courseDetails.projects}</div>
                <div className="text-gray-600">Projects</div>
              </div>
              <div>
                <Clock className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{courseDetails.duration}</div>
                <div className="text-gray-600">Duration</div>
              </div>
              <div>
                <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">Certificate</div>
                <div className="text-gray-600">Included</div>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">What You'll Learn</h2>
                <div className="grid gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                        <feature.icon className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Projects You'll Build</h2>
                <div className="space-y-3">
                  {projects.map((project, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{project}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Course Curriculum</h2>
            <div className="space-y-6">
              {curriculum.map((module, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900">{module.module}</h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="mr-4">{module.lessons} lessons</span>
                      <span>{module.duration}</span>
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <ul className="space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center text-gray-700">
                          <Play className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Instructor */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Your Instructor</h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <img 
                  src={courseDetails.instructor.avatar}
                  alt={courseDetails.instructor.name}
                  className="w-32 h-32 rounded-full"
                />
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{courseDetails.instructor.name}</h3>
                  <p className="text-lg text-green-600 mb-4">{courseDetails.instructor.title}</p>
                  <div className="flex flex-col sm:flex-row gap-6 mb-6 justify-center md:justify-start">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{courseDetails.instructor.experience}</div>
                      <div className="text-gray-600">Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{courseDetails.instructor.students}</div>
                      <div className="text-gray-600">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{courseDetails.instructor.rating}</div>
                      <div className="text-gray-600">Rating</div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Amit Gupta is a Microsoft Excel MVP and business analytics expert with over 8 years of experience in 
                    corporate finance and data analysis. He has helped Fortune 500 companies optimize their business processes 
                    through advanced Excel solutions and has trained over 12,000 professionals worldwide.
                  </p>
                </div>
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

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Master Excel Analytics?</h2>
            <p className="text-xl text-green-100 mb-8">
              Transform your data analysis skills and become the Excel expert your organization needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4">
                Enroll Now - {courseDetails.price}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4">
                Download Syllabus
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}