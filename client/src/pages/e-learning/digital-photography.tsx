import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import PricingPlansSection from "@/components/PricingPlansSection";
import ReviewsSection from "@/components/ReviewsSection";
import PartnersSection from "@/components/PartnersSection";
import { 
  Clock, Users, Star, BookOpen, Play, Award, 
  CheckCircle, Camera, Image, Aperture, Zap 
} from "lucide-react";

export default function DigitalPhotographyPage() {
  const courseDetails = {
    title: "Digital Photography Masterclass",
    subtitle: "Master the art of photography with professional techniques and composition skills",
    category: "Creative",
    level: "All Levels",
    duration: "6 weeks",
    students: "1,823",
    rating: 4.9,
    reviews: 287,
    price: "₹3,499",
    originalPrice: "₹5,999",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    lessons: 35,
    projects: 12,
    certificate: true,
    instructor: {
      name: "Priya Sharma",
      title: "Professional Photographer & Visual Artist",
      experience: "12+ years",
      students: "8,500+",
      rating: 4.9,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b524?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    }
  };

  const curriculum = [
    {
      module: "Module 1: Camera Fundamentals",
      lessons: 8,
      duration: "2.5 hours",
      topics: [
        "Understanding Your Camera",
        "Camera Types and Features",
        "Essential Camera Settings",
        "Exposure Triangle (Aperture, Shutter, ISO)",
        "Metering and Focus Modes"
      ]
    },
    {
      module: "Module 2: Composition Techniques",
      lessons: 7,
      duration: "2 hours",
      topics: [
        "Rule of Thirds and Beyond",
        "Leading Lines and Patterns",
        "Framing and Perspective",
        "Color Theory in Photography",
        "Light and Shadow Play"
      ]
    },
    {
      module: "Module 3: Lighting Mastery",
      lessons: 8,
      duration: "3 hours",
      topics: [
        "Natural Light Photography",
        "Golden Hour and Blue Hour",
        "Studio Lighting Setup",
        "Flash Photography Techniques",
        "Creative Lighting Effects"
      ]
    },
    {
      module: "Module 4: Genre Specialization",
      lessons: 8,
      duration: "3.5 hours",
      topics: [
        "Portrait Photography",
        "Landscape and Nature",
        "Street Photography",
        "Product and Commercial",
        "Event Photography"
      ]
    },
    {
      module: "Module 5: Post-Processing",
      lessons: 4,
      duration: "2 hours",
      topics: [
        "Adobe Lightroom Basics",
        "Color Correction and Grading",
        "Advanced Editing Techniques",
        "Creating Your Signature Style"
      ]
    }
  ];

  const features = [
    {
      icon: Camera,
      title: "Hands-on Practice",
      description: "Learn by doing with practical shooting assignments and real-world scenarios"
    },
    {
      icon: Image,
      title: "Portfolio Development",
      description: "Build a professional portfolio with 12+ stunning photography projects"
    },
    {
      icon: Aperture,
      title: "Technical Mastery",
      description: "Master camera settings, lighting, and composition for any situation"
    },
    {
      icon: Zap,
      title: "Creative Vision",
      description: "Develop your unique artistic style and creative photography vision"
    }
  ];

  const projects = [
    "Portrait Photography Series",
    "Golden Hour Landscape Collection",
    "Street Photography Documentary",
    "Product Photography Showcase",
    "Creative Self-Portrait Project",
    "Nature and Wildlife Series",
    "Architecture Photography",
    "Event Coverage Project",
    "Black & White Art Series",
    "Food Photography Collection",
    "Travel Photography Journal",
    "Final Portfolio Presentation"
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 via-pink-800 to-orange-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full mr-3">
                    {courseDetails.category}
                  </span>
                  <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                    {courseDetails.level}
                  </span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  {courseDetails.title}
                </h1>
                
                <p className="text-lg sm:text-xl text-purple-100 mb-8 leading-relaxed">
                  {courseDetails.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8 text-purple-100">
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
                  <span className="text-xl text-purple-300 line-through">{courseDetails.originalPrice}</span>
                  <span className="bg-red-500 text-white text-sm px-2 py-1 rounded">42% OFF</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4">
                    Enroll Now
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4">
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
                <BookOpen className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{courseDetails.lessons}</div>
                <div className="text-gray-600">Lessons</div>
              </div>
              <div>
                <Camera className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{courseDetails.projects}</div>
                <div className="text-gray-600">Projects</div>
              </div>
              <div>
                <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{courseDetails.duration}</div>
                <div className="text-gray-600">Duration</div>
              </div>
              <div>
                <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
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
                      <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                        <feature.icon className="h-6 w-6 text-purple-600" />
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
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Projects You'll Create</h2>
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
                          <Play className="h-4 w-4 text-purple-600 mr-3 flex-shrink-0" />
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
                  <p className="text-lg text-purple-600 mb-4">{courseDetails.instructor.title}</p>
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
                    Priya Sharma is an award-winning professional photographer with over 12 years of experience in commercial 
                    and artistic photography. Her work has been featured in National Geographic, Vogue, and numerous international 
                    exhibitions. She specializes in portrait, landscape, and street photography, and has mentored over 8,500 aspiring photographers.
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
        <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Capture Amazing Photos?</h2>
            <p className="text-xl text-purple-100 mb-8">
              Transform your photography skills and create stunning images that tell compelling stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4">
                Enroll Now - {courseDetails.price}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4">
                Download Syllabus
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}