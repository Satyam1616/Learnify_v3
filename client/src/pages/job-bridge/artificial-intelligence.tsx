import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function ArtificialIntelligenceProgram() {
  return (
    <Layout>
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-indigo-700 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 animate-slide-up">
                Artificial Intelligence Program
              </h1>
              <p className="text-xl lg:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Dive deep into AI/ML, deep learning, computer vision, and NLP. Build real AI projects and get mentored by industry experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <Button className="bg-white text-purple-900 px-8 py-4 text-lg font-semibold hover:bg-gray-100">
                  Apply Now
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 text-lg font-semibold">
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Program Overview
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                This program covers AI/ML fundamentals, deep learning, computer vision, NLP, and more. Learn by building real projects and get career support from industry mentors.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Course Structure</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />AI/ML Fundamentals</li>
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Deep Learning</li>
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Computer Vision</li>
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Natural Language Processing</li>
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Real Projects</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What You’ll Learn</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Machine Learning Algorithms</li>
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Neural Networks & Deep Learning</li>
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Image & Speech Recognition</li>
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />NLP & Chatbots</li>
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />AI Project Deployment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose This Program */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Why Choose This Program?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get mentored by AI professionals, work on real projects, and receive job assistance to launch your AI career.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <h3 className="text-xl font-bold text-purple-900 mb-2">Expert Mentorship</h3>
                <p className="text-gray-600">1:1 guidance from AI engineers and data scientists.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <h3 className="text-xl font-bold text-purple-900 mb-2">Hands-on Projects</h3>
                <p className="text-gray-600">Build a portfolio of AI applications to showcase your skills.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <h3 className="text-xl font-bold text-purple-900 mb-2">Career Support</h3>
                <p className="text-gray-600">Resume building, interview prep, and placement assistance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Career Outcomes */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Career Outcomes
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Unlock a variety of job roles after completing the program.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-8 text-center shadow-lg">
                <h3 className="text-xl font-bold text-purple-900 mb-2">AI Engineer</h3>
                <p className="text-gray-600">Design and build intelligent systems and solutions.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-8 text-center shadow-lg">
                <h3 className="text-xl font-bold text-purple-900 mb-2">Machine Learning Engineer</h3>
                <p className="text-gray-600">Develop and deploy ML models for real-world applications.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-8 text-center shadow-lg">
                <h3 className="text-xl font-bold text-purple-900 mb-2">Data Scientist</h3>
                <p className="text-gray-600">Analyze data and extract actionable insights using AI.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Ready to Start Your AI Journey?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Apply now or download the brochure to get started with Unlox Academy’s Artificial Intelligence Program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-purple-900 px-8 py-4 text-lg font-semibold hover:bg-gray-100">
                Apply Now
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 text-lg font-semibold">
                Download Brochure
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 