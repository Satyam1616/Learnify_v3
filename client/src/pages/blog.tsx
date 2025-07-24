import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";

export default function BlogPage() {
  const articles = [
    {
      title: "The Future of AI in Education: Transforming Learning Experiences",
      excerpt: "Explore how artificial intelligence is revolutionizing education, from personalized learning paths to intelligent tutoring systems.",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "AI & Technology",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      featured: true
    },
    {
      title: "Building a Career in Data Science: A Complete Roadmap",
      excerpt: "Everything you need to know about starting and advancing your career in data science, including skills, tools, and opportunities.",
      author: "Michael Chen",
      date: "March 12, 2024",
      readTime: "12 min read",
      category: "Career Guidance",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Remote Learning Best Practices: Tips for Success",
      excerpt: "Maximize your learning potential with these proven strategies for effective remote education and online skill development.",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Learning Tips",
      image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Web Development Trends to Watch in 2024",
      excerpt: "Stay ahead of the curve with the latest trends, frameworks, and technologies shaping modern web development.",
      author: "Alex Kumar",
      date: "March 8, 2024",
      readTime: "10 min read",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "The Importance of UI/UX Design in Modern Applications",
      excerpt: "Learn why user experience design is crucial for application success and how to create interfaces that users love.",
      author: "Jessica Park",
      date: "March 5, 2024",
      readTime: "7 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Digital Marketing Strategies for Small Businesses",
      excerpt: "Effective digital marketing techniques that small businesses can implement to grow their online presence and reach.",
      author: "David Thompson",
      date: "March 3, 2024",
      readTime: "9 min read",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    }
  ];

  const categories = ["All", "AI & Technology", "Career Guidance", "Learning Tips", "Web Development", "Design", "Digital Marketing"];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Insights & Knowledge
                <span className="text-purple-600 block">From Industry Experts</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Stay updated with the latest trends, tips, and insights in technology, education, and career development.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={index === 0 ? "bg-purple-600 hover:bg-purple-700" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Featured Article</h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={articles[0].image} 
                    alt={articles[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <span className="inline-block bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full mb-4">
                    {articles[0].category}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{articles[0].title}</h3>
                  <p className="text-gray-600 mb-6">{articles[0].excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{articles[0].author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{articles[0].date}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{articles[0].readTime}</span>
                  </div>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.slice(1).map((article, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-3">
                      {article.category}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{article.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <User className="h-4 w-4 mr-1" />
                      <span className="mr-3">{article.author}</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                    <Button variant="outline" className="w-full">
                      Read More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-xl text-purple-100 mb-8">
              Subscribe to our newsletter and get the latest articles delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-purple-300"
              />
              <Button className="bg-white text-purple-600 hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}