import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle, Headphones } from "lucide-react";
import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";

export default function ContactUsPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Support",
      details: "0806977266",
      description: "Call us for immediate assistance",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Support",
      details: "support@learnify.com",
      description: "Get detailed help via email",
      action: "Send Email"
    },
    {
      icon: Mail,
      title: "General Queries",
      details: "query@learnify.com",
      description: "For general information and questions",
      action: "Send Query"
    },
    {
      icon: Headphones,
      title: "Partnership Inquiries",
      details: "partners@learnify.com",
      description: "For business partnerships and collaborations",
      action: "Partner With Us"
    }
  ];

  const offices = [
    {
      city: "Bangalore (HQ)",
      address: "Hustle Hub, 17th Cross Road, Sector 4, HSR Layout, Bengaluru, Karnataka 560102",
      phone: "0806977266",
      email: "support@learnify.com"
    }
  ];

  const faqs = [
    {
      question: "How do I enroll in a program?",
      answer: "You can enroll by clicking 'Enroll Now' on any program page, or contact our counselors for guidance on choosing the right program for you."
    },
    {
      question: "What is included with the Edu-let tablet?",
      answer: "Every student receives an Edu-let tablet with pre-loaded courses, 24/7 internet access, protective case, stylus pen, and 1-year warranty."
    },
    {
      question: "Do you provide job placement assistance?",
      answer: "Yes! We have partnerships with 500+ companies and provide dedicated placement support, interview preparation, and career guidance."
    },
    {
      question: "Can I learn at my own pace?",
      answer: "Absolutely! Our programs are designed for flexible learning with AI mentor Blu providing personalized support 24/7."
    },
    {
      question: "What payment options are available?",
      answer: "We offer flexible payment options including installments, education loans, and various digital payment methods."
    }
  ];

  return (
    <Layout>
      <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full animate-float"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 animate-slide-up">
              Contact Us
            </h1>
            <p className="text-xl lg:text-2xl text-green-100 mb-8 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
              We're here to help you succeed in your learning journey. Get in touch with our expert team for any questions, guidance, or support you need.
            </p>
            <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <Button className="bg-white text-green-600 px-8 py-4 text-lg font-semibold hover:bg-gray-100">
                Get Free Counseling
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the best way to reach us. Our team is available to assist you with all your learning needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((contact, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <contact.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{contact.title}</h3>
                <div className="text-green-600 font-semibold text-lg mb-2">{contact.details}</div>
                <p className="text-gray-600 text-sm mb-4">{contact.description}</p>
                <Button className="w-full bg-green-600 text-white hover:bg-green-700">
                  {contact.action}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours with personalized guidance.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-green-600 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">Response Time</div>
                    <div className="text-gray-600">Within 24 hours</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="h-6 w-6 text-green-600 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">Live Chat</div>
                    <div className="text-gray-600">Available 9 AM - 7 PM IST</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Headphones className="h-6 w-6 text-green-600 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">Phone Support</div>
                    <div className="text-gray-600">Mon-Sat, 9 AM - 7 PM IST</div>
                  </div>
                </div>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Office
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit us at our headquarters in Bangalore for in-person consultations and campus tours.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            {offices.map((office, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg animate-scale-in"
              >
                <div className="flex items-start mb-6">
                  <MapPin className="h-8 w-8 text-green-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{office.city}</h3>
                    <p className="text-gray-600 mb-4">{office.address}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 text-green-600 mr-2" />
                        <span className="text-gray-700">{office.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 text-green-600 mr-2" />
                        <span className="text-gray-700">{office.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">Interactive map would be displayed here</p>
                    <Button className="mt-4 bg-green-600 text-white hover:bg-green-700">
                      Get Directions
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our programs, enrollment, and services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button className="bg-green-600 text-white px-8 py-3 hover:bg-green-700">
              Contact Our Support Team
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                          Don't wait! Contact us today and take the first step towards transforming your career with Learnify Academy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-green-600 px-8 py-4 text-lg font-semibold hover:bg-gray-100">
              Schedule Free Consultation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold">
              Explore Programs
            </Button>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
}