import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import PricingPlansSection from "@/components/PricingPlansSection";
import ReviewsSection from "@/components/ReviewsSection";
import PartnersSection from "@/components/PartnersSection";
import { 
  Clock, Users, Star, BookOpen, Play, Award, 
  CheckCircle, Code, Database, Globe, Zap 
} from "lucide-react";

export default function PythonProgrammingPage() {
  const courseDetails = {
    title: "Python Programming Fundamentals",
    subtitle: "Master Python from scratch with hands-on projects and real-world applications",
    category: "Programming",
    level: "Beginner",
    duration: "8 weeks",
    students: "2,547",
    rating: 4.8,
    reviews: 324,
    price: "₹2,999",
    originalPrice: "₹4,999",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    lessons: 42,
    projects: 8,
    certificate: true,
    instructor: {
      name: "Dr. Rajesh Kumar",
      title: "Senior Python Developer & Data Scientist",
      experience: "10+ years",
      students: "15,000+",
      rating: 4.9,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    }
  };

  const curriculum = [
    {
      module: "Module 1: Python Basics",
      lessons: 8,
      duration: "2 hours",
      topics: [
        "Introduction to Python and Setup",
        "Variables and Data Types",
        "Operators and Expressions",
        "Input/Output Operations",
        "Comments and Documentation"
      ]
    },
    {
      module: "Module 2: Control Structures",
      lessons: 6,
      duration: "1.5 hours",
      topics: [
        "Conditional Statements (if, elif, else)",
        "Loops (for, while)",
        "Break and Continue",
        "Nested Loops",
        "Loop Optimization"
      ]
    },
    {
      module: "Module 3: Data Structures",
      lessons: 10,
      duration: "3 hours",
      topics: [
        "Lists and List Methods",
        "Tuples and Sets",
        "Dictionaries",
        "String Manipulation",
        "Data Structure Selection"
      ]
    },
    {
      module: "Module 4: Functions",
      lessons: 8,
      duration: "2.5 hours",
      topics: [
        "Function Definition and Calling",
        "Parameters and Arguments",
        "Return Statements",
        "Lambda Functions",
        "Scope and Lifetime"
      ]
    },
    {
      module: "Module 5: Object-Oriented Programming",
      lessons: 10,
      duration: "3.5 hours",
      topics: [
        "Classes and Objects",
        "Inheritance",
        "Polymorphism",
        "Encapsulation",
        "Special Methods"
      ]
    }
  ];

  const features = [
    {
      icon: Code,
      title: "Hands-on Coding",
      description: "Practice with real code examples and interactive exercises"
    },
    {
      icon: Database,
      title: "Project-Based Learning",
      description: "Build 8 real-world projects to strengthen your portfolio"
    },
    {
      icon: Globe,
      title: "Industry Applications",
      description: "Learn how Python is used in web development, data science, and automation"
    },
    {
      icon: Zap,
      title: "Fast-Track Learning",
      description: "Accelerated curriculum designed for quick skill acquisition"
    }
  ];

  const projects = [
    "Personal Finance Calculator",
    "Weather Data Analyzer",
    "Web Scraping Tool",
    "Task Management System",
    "Data Visualization Dashboard",
    "Simple Web Application",
    "Automation Scripts",
    "Mini Game Development"
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mr-3">
                    {courseDetails.category}
                  </span>
                  <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                    {courseDetails.level}
                  </span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  {courseDetails.title}
                </h1>
                
                <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
                  {courseDetails.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8 text-blue-100">
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

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-8">
                  <span className="text-2xl sm:text-3xl font-bold">{courseDetails.price}</span>
                  <span className="text-lg sm:text-xl text-blue-300 line-through">{courseDetails.originalPrice}</span>
                  <span className="bg-red-500 text-white text-xs sm:text-sm px-2 py-1 rounded w-fit">40% OFF</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base">
                    Enroll Now
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base">
                    <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
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
        <section className="py-8 sm:py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
              <div>
                <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-xl sm:text-2xl font-bold text-gray-900">{courseDetails.lessons}</div>
                <div className="text-sm sm:text-base text-gray-600">Lessons</div>
              </div>
              <div>
                <Code className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-xl sm:text-2xl font-bold text-gray-900">{courseDetails.projects}</div>
                <div className="text-sm sm:text-base text-gray-600">Projects</div>
              </div>
              <div>
                <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-xl sm:text-2xl font-bold text-gray-900">{courseDetails.duration}</div>
                <div className="text-sm sm:text-base text-gray-600">Duration</div>
              </div>
              <div>
                <Award className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-xl sm:text-2xl font-bold text-gray-900">Certificate</div>
                <div className="text-sm sm:text-base text-gray-600">Included</div>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">What You'll Learn</h2>
                <div className="grid gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <feature.icon className="h-6 w-6 text-blue-600" />
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
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Projects You'll Build</h2>
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
                          <Play className="h-4 w-4 text-blue-600 mr-3 flex-shrink-0" />
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
                  <p className="text-lg text-blue-600 mb-4">{courseDetails.instructor.title}</p>
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
                    Dr. Rajesh Kumar is a seasoned Python developer and data scientist with over 10 years of industry experience. 
                    He has worked with leading tech companies and has trained over 15,000 students worldwide. His expertise spans 
                    web development, data analysis, machine learning, and automation.
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
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Python Journey?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of students who have mastered Python programming with our comprehensive course.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4">
                Enroll Now - {courseDetails.price}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4">
                Download Syllabus
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}