import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function DroneEngineeringProgram() {
  return (
    <Layout>
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-800 to-blue-400 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 animate-slide-up">
                Drone Engineering Program
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Learn drone design, electronics, flight control, and aerial robotics. Build and fly real drones with expert mentorship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <Button className="bg-white text-gray-800 px-8 py-4 text-lg font-semibold hover:bg-gray-100">
                  Apply Now
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 text-lg font-semibold">
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
                This program covers drone design, electronics, flight control, aerial robotics, and more. Learn by building and flying real drones and get career support from industry mentors.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Course Structure</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Drone Design & Assembly</li>
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Electronics & Sensors</li>
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Flight Control Systems</li>
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Aerial Robotics</li>
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Field Projects</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What You’ll Learn</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Aerodynamics & Propulsion</li>
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Embedded Systems</li>
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Flight Programming</li>
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Aerial Data Collection</li>
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Drone Safety & Regulations</li>
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
                Get mentored by drone engineers, work on real projects, and receive job assistance to launch your drone tech career.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Mentorship</h3>
                <p className="text-gray-600">1:1 guidance from drone engineers and robotics experts.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Hands-on Projects</h3>
                <p className="text-gray-600">Build and fly real drones as part of your learning.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Career Support</h3>
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
              <div className="bg-gradient-to-br from-blue-100 to-gray-100 rounded-2xl p-8 text-center shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Drone Engineer</h3>
                <p className="text-gray-600">Design, build, and test drones for various applications.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-gray-100 rounded-2xl p-8 text-center shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Aerial Robotics Specialist</h3>
                <p className="text-gray-600">Work on robotics and automation for aerial vehicles.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-gray-100 rounded-2xl p-8 text-center shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-2">UAV Pilot/Technician</h3>
                <p className="text-gray-600">Operate and maintain drones for industry use.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-gray-800 to-blue-400 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Ready to Start Your Drone Engineering Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Apply now or download the brochure to get started with Unlox Academy’s Drone Engineering Program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-gray-800 px-8 py-4 text-lg font-semibold hover:bg-gray-100">
                Apply Now
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 text-lg font-semibold">
                Download Brochure
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 