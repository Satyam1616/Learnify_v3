import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function DataScienceProgram() {
  return (
    <Layout>
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-900 to-green-600 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 animate-slide-up">
                Data Science Program
              </h1>
              <p className="text-xl lg:text-2xl text-green-100 mb-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Master Python, statistics, machine learning, and data visualization. Build real data projects and get mentored by industry experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <Button className="bg-white text-green-900 px-8 py-4 text-lg font-semibold hover:bg-gray-100">
                  Apply Now
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 text-lg font-semibold">
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
                This program covers Python, statistics, machine learning, data visualization, and more. Learn by building real projects and get career support from industry mentors.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Course Structure</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Python & R</li>
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Statistics & Probability</li>
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Machine Learning</li>
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Data Visualization</li>
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Industry Projects</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What You’ll Learn</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Data Analysis & Cleaning</li>
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Predictive Modeling</li>
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Data Visualization Tools</li>
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Big Data Concepts</li>
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Deployment of Data Solutions</li>
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
                Get mentored by data science professionals, work on real projects, and receive job assistance to launch your data career.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <h3 className="text-xl font-bold text-green-900 mb-2">Expert Mentorship</h3>
                <p className="text-gray-600">1:1 guidance from data scientists and analysts.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <h3 className="text-xl font-bold text-green-900 mb-2">Hands-on Projects</h3>
                <p className="text-gray-600">Build a portfolio of data science projects to showcase your skills.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <h3 className="text-xl font-bold text-green-900 mb-2">Career Support</h3>
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
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8 text-center shadow-lg">
                <h3 className="text-xl font-bold text-green-900 mb-2">Data Scientist</h3>
                <p className="text-gray-600">Analyze and interpret complex data to drive business decisions.</p>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8 text-center shadow-lg">
                <h3 className="text-xl font-bold text-green-900 mb-2">Machine Learning Engineer</h3>
                <p className="text-gray-600">Develop and deploy ML models for data-driven solutions.</p>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8 text-center shadow-lg">
                <h3 className="text-xl font-bold text-green-900 mb-2">Data Analyst</h3>
                <p className="text-gray-600">Extract insights and visualize data for organizations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-900 to-green-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Ready to Start Your Data Science Journey?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Apply now or download the brochure to get started with Learnify Academy’s Data Science Program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-green-900 px-8 py-4 text-lg font-semibold hover:bg-gray-100">
                Apply Now
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 text-lg font-semibold">
                Download Brochure
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 