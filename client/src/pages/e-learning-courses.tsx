import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star, BookOpen, Play, Award } from "lucide-react";

export default function ELearningCoursesPage() {
  const courses = [
    {
      title: "Python Programming Fundamentals",
      category: "Programming",
      level: "Beginner",
      duration: "8 weeks",
      students: "2,547",
      rating: 4.8,
      price: "₹2,999",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      lessons: 42,
      description: "Learn Python from scratch with hands-on projects and real-world applications."
    },
    {
      title: "Digital Photography Masterclass",
      category: "Creative",
      level: "All Levels",
      duration: "6 weeks",
      students: "1,823",
      rating: 4.9,
      price: "₹3,499",
      image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      lessons: 35,
      description: "Master the art of photography with professional techniques and composition skills."
    },
    {
      title: "Excel for Business Analytics",
      category: "Business",
      level: "Intermediate",
      duration: "4 weeks",
      students: "3,912",
      rating: 4.7,
      price: "₹1,999",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      lessons: 28,
      description: "Learn advanced Excel functions, pivot tables, and data analysis techniques."
    },
    {
      title: "Graphic Design with Photoshop",
      category: "Design",
      level: "Beginner",
      duration: "10 weeks",
      students: "1,567",
      rating: 4.6,
      price: "₹4,499",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      lessons: 48,
      description: "Create stunning graphics and learn professional Photoshop techniques."
    },
    {
      title: "Financial Planning & Investment",
      category: "Finance",
      level: "All Levels",
      duration: "5 weeks",
      students: "892",
      rating: 4.8,
      price: "₹2,799",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      lessons: 32,
      description: "Learn personal finance management and smart investment strategies."
    },
    {
      title: "Content Writing & Copywriting",
      category: "Marketing",
      level: "Beginner",
      duration: "6 weeks",
      students: "2,134",
      rating: 4.7,
      price: "₹2,299",
      image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      lessons: 38,
      description: "Master the art of persuasive writing for web, marketing, and business."
    }
  ];

  const categories = ["All", "Programming", "Design", "Business", "Marketing", "Creative", "Finance"];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                E-Learning
                <span className="text-green-600 block">Courses</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Expand your skills with our comprehensive collection of online courses. 
                Learn at your own pace with expert-led content and hands-on projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Browse All Courses
                </Button>
                <Button size="lg" variant="outline">
                  Free Trial
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-gray-600">Courses Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">50,000+</div>
                <div className="text-gray-600">Students Enrolled</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-gray-600">Completion Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">4.8</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={index === 0 ? "bg-green-600 hover:bg-green-700" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold">Featured Courses</h2>
              <div className="flex gap-4">
                <select className="px-4 py-2 border border-gray-300 rounded-lg">
                  <option>Sort by: Popularity</option>
                  <option>Sort by: Rating</option>
                  <option>Sort by: Price</option>
                  <option>Sort by: Duration</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        {course.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white text-gray-800 text-xs px-2 py-1 rounded-full font-semibold">
                        {course.level}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <Button className="bg-white text-gray-900 hover:bg-gray-100">
                        <Play className="mr-2 h-4 w-4" />
                        Preview
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-1" />
                        {course.lessons} lessons
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {course.students}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium">{course.rating}</span>
                      </div>
                      <div className="text-2xl font-bold text-green-600">{course.price}</div>
                    </div>
                    
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Enroll Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our E-Learning Platform?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <Award className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Industry Experts</h3>
                <p className="text-gray-600">Learn from professionals with real-world experience in their fields.</p>
              </div>
              <div className="text-center p-6">
                <Play className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Interactive Content</h3>
                <p className="text-gray-600">Engage with videos, quizzes, and hands-on projects for better learning.</p>
              </div>
              <div className="text-center p-6">
                <BookOpen className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Lifetime Access</h3>
                <p className="text-gray-600">Access your courses anytime, anywhere with no expiration date.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Start Learning Today</h2>
            <p className="text-xl text-green-100 mb-8">
              Join thousands of learners who are advancing their careers with our expert-led courses.
            </p>
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Get Started for Free
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
}