import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function UIUXDesignProgram() {
  return (
    <Layout>
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-pink-700 to-indigo-400 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 animate-slide-up">
                UI/UX Design Program
              </h1>
              <p className="text-xl lg:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Master design principles, prototyping, and user research. Build a portfolio of real UI/UX projects with expert mentorship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <Button className="bg-white text-pink-700 px-8 py-4 text-lg font-semibold hover:bg-gray-100">
                  Apply Now
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-pink-700 px-8 py-4 text-lg font-semibold">
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
                This program covers design principles, Figma/Adobe XD, prototyping, user research, and more. Learn by building real projects and get career support from industry mentors.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Course Structure</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Design Principles</li>
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Figma & Adobe XD</li>
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Prototyping</li>
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />User Research</li>
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Portfolio Projects</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What You’ll Learn</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />User-Centered Design</li>
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Wireframing & Prototyping</li>
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Usability Testing</li>
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Interaction Design</li>
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Design Systems</li>
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
                Get mentored by design professionals, work on real projects, and receive job assistance to launch your UI/UX career.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <h3 className="text-xl font-bold text-pink-700 mb-2">Expert Mentorship</h3>
                <p className="text-gray-600">1:1 guidance from UI/UX designers and product leads.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <h3 className="text-xl font-bold text-pink-700 mb-2">Hands-on Projects</h3>
                <p className="text-gray-600">Build a portfolio of UI/UX projects to showcase your skills.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <h3 className="text-xl font-bold text-pink-700 mb-2">Career Support</h3>
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
              <div className="bg-gradient-to-br from-indigo-100 to-pink-100 rounded-2xl p-8 text-center shadow-lg">
                <h3 className="text-xl font-bold text-pink-700 mb-2">UI Designer</h3>
                <p className="text-gray-600">Design visually appealing and user-friendly interfaces.</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-100 to-pink-100 rounded-2xl p-8 text-center shadow-lg">
                <h3 className="text-xl font-bold text-pink-700 mb-2">UX Researcher</h3>
                <p className="text-gray-600">Conduct user research and usability testing for products.</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-100 to-pink-100 rounded-2xl p-8 text-center shadow-lg">
                <h3 className="text-xl font-bold text-pink-700 mb-2">Product Designer</h3>
                <p className="text-gray-600">Work on end-to-end product design and development.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-pink-700 to-indigo-400 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Ready to Start Your UI/UX Design Journey?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Apply now or download the brochure to get started with Unlox Academy’s UI/UX Design Program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-pink-700 px-8 py-4 text-lg font-semibold hover:bg-gray-100">
                Apply Now
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-pink-700 px-8 py-4 text-lg font-semibold">
                Download Brochure
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 