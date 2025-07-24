import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Search, Filter, Calendar, Users, FileText } from "lucide-react";

export default function ResearchPaperPage() {
  const papers = [
    {
      title: "The Impact of AI-Powered Learning Systems on Student Engagement and Performance",
      authors: ["Dr. Sarah Johnson", "Prof. Michael Chen", "Dr. Emily Rodriguez"],
      journal: "International Journal of Educational Technology",
      year: "2024",
      category: "Educational Technology",
      abstract: "This study examines how artificial intelligence integration in learning management systems affects student engagement metrics and academic performance across diverse educational settings.",
      downloadUrl: "#",
      citationCount: 127,
      tags: ["AI", "Learning Systems", "Student Engagement", "Performance Analysis"]
    },
    {
      title: "Blockchain Technology in Academic Credential Verification: A Comprehensive Study",
      authors: ["Prof. David Kumar", "Dr. Lisa Wang", "Dr. James Smith"],
      journal: "Journal of Digital Education",
      year: "2024",
      category: "Blockchain Technology",
      abstract: "An in-depth analysis of blockchain implementation for secure, transparent, and immutable academic credential verification systems in higher education institutions.",
      downloadUrl: "#",
      citationCount: 89,
      tags: ["Blockchain", "Credentials", "Security", "Higher Education"]
    },
    {
      title: "Remote Learning Effectiveness: A Meta-Analysis of Post-Pandemic Educational Outcomes",
      authors: ["Dr. Maria Garcia", "Prof. John Thompson", "Dr. Alex Park"],
      journal: "Educational Research Quarterly",
      year: "2023",
      category: "Remote Learning",
      abstract: "A comprehensive meta-analysis examining the effectiveness of remote learning methodologies and their long-term impact on educational outcomes across different demographics.",
      downloadUrl: "#",
      citationCount: 234,
      tags: ["Remote Learning", "Meta-Analysis", "Educational Outcomes", "Pandemic Impact"]
    },
    {
      title: "Gamification in Professional Skill Development: Engagement and Retention Analysis",
      authors: ["Dr. Jennifer Lee", "Prof. Robert Brown", "Dr. Monica Patel"],
      journal: "Training and Development Research",
      year: "2023",
      category: "Gamification",
      abstract: "This research investigates the effectiveness of gamification elements in professional skill development programs and their impact on learner engagement and knowledge retention.",
      downloadUrl: "#",
      citationCount: 156,
      tags: ["Gamification", "Professional Development", "Engagement", "Retention"]
    },
    {
      title: "Machine Learning Algorithms for Personalized Learning Path Optimization",
      authors: ["Dr. Kevin Zhang", "Prof. Anna Williams", "Dr. Marcus Johnson"],
      journal: "Computers & Education",
      year: "2023",
      category: "Machine Learning",
      abstract: "Development and evaluation of machine learning algorithms designed to create personalized learning paths based on individual student performance and learning preferences.",
      downloadUrl: "#",
      citationCount: 178,
      tags: ["Machine Learning", "Personalized Learning", "Algorithms", "Optimization"]
    },
    {
      title: "Virtual Reality in Technical Education: Implementation Challenges and Solutions",
      authors: ["Prof. Sandra Miller", "Dr. Thomas Anderson", "Dr. Rachel Kim"],
      journal: "Journal of Technical Education",
      year: "2022",
      category: "Virtual Reality",
      abstract: "Comprehensive study on implementing VR technology in technical education programs, including challenges faced and practical solutions for effective integration.",
      downloadUrl: "#",
      citationCount: 203,
      tags: ["Virtual Reality", "Technical Education", "Implementation", "Challenges"]
    }
  ];

  const categories = ["All", "Educational Technology", "Blockchain Technology", "Remote Learning", "Gamification", "Machine Learning", "Virtual Reality"];
  const years = ["All Years", "2024", "2023", "2022", "2021"];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-50 to-purple-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Research
                <span className="text-indigo-600 block">Publications</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Explore cutting-edge research in educational technology, learning methodologies, 
                and innovation in digital education from our academic partners and faculty.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <input
                  type="text"
                  placeholder="Search research papers..."
                  className="w-full px-6 py-4 pl-12 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700">
                  Search
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
                <div className="text-3xl font-bold text-indigo-600 mb-2">150+</div>
                <div className="text-gray-600">Published Papers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">50+</div>
                <div className="text-gray-600">Research Partners</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">1,200+</div>
                <div className="text-gray-600">Total Citations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">25</div>
                <div className="text-gray-600">Journal Partners</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <Filter className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Filter by:</span>
                </div>
                <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                  {categories.map((category, index) => (
                    <option key={index}>{category}</option>
                  ))}
                </select>
                <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                  {years.map((year, index) => (
                    <option key={index}>{year}</option>
                  ))}
                </select>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export List
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Research Papers */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {papers.map((paper, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">
                          {paper.category}
                        </span>
                        <span className="text-sm text-gray-500">{paper.year}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{paper.title}</h3>
                      
                      <div className="flex items-center text-sm text-gray-600 mb-4">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{paper.authors.join(", ")}</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-600 mb-4">
                        <FileText className="h-4 w-4 mr-1" />
                        <span className="font-medium">{paper.journal}</span>
                      </div>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">{paper.abstract}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {paper.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="text-sm text-gray-500">
                        <span className="font-medium">{paper.citationCount}</span> citations
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-3 lg:w-48">
                      <Button className="bg-indigo-600 hover:bg-indigo-700" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Online
                      </Button>
                      <Button variant="outline" size="sm">
                        Cite Paper
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Load More */}
            <div className="text-center mt-12">
              <Button size="lg" variant="outline">
                Load More Papers
              </Button>
            </div>
          </div>
        </section>

        {/* Research Collaboration */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Research Collaboration</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We collaborate with leading universities and research institutions worldwide to advance 
                the field of educational technology and digital learning.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Publish With Us</h3>
                <p className="text-gray-600">Submit your research for peer review and publication in our partner journals.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Join Research</h3>
                <p className="text-gray-600">Collaborate on ongoing research projects with our academic partners.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Access Resources</h3>
                <p className="text-gray-600">Get access to research databases, tools, and collaboration platforms.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-indigo-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Contribute to Research</h2>
            <p className="text-xl text-indigo-100 mb-8">
              Join our research community and help shape the future of digital education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                Submit Research
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600">
                Become a Partner
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}