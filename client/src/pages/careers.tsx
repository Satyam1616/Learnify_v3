import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, Briefcase, Heart, Trophy, Star } from "lucide-react";

export default function CareersPage() {
  const jobOpenings = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote / Bangalore",
      type: "Full-time",
      description: "Help build the next generation of learning platforms with React, TypeScript, and modern web technologies."
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote / Mumbai",
      type: "Full-time",
      description: "Design intuitive and beautiful learning experiences for millions of students worldwide."
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / Hyderabad",
      type: "Full-time",
      description: "Scale our infrastructure to serve millions of learners with reliability and performance."
    },
    {
      title: "Content Creator",
      department: "Education",
      location: "Remote",
      type: "Contract",
      description: "Create engaging educational content for our various learning programs and courses."
    }
  ];

  const benefits = [
    { icon: Heart, title: "Health & Wellness", description: "Comprehensive health insurance and wellness programs" },
    { icon: Users, title: "Great Team", description: "Work with passionate, talented people who care about education" },
    { icon: Trophy, title: "Growth Opportunities", description: "Continuous learning and career advancement opportunities" },
    { icon: Star, title: "Flexible Work", description: "Remote-first culture with flexible working hours" }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Join Our Mission to
                <span className="text-blue-600 block">Transform Education</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Help us make quality education accessible to everyone. Build the future of learning with a team that cares.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                  <benefit.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {job.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {job.type}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Don't See a Perfect Fit?</h2>
            <p className="text-xl text-gray-600 mb-8">
              We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Send Your Resume
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
}