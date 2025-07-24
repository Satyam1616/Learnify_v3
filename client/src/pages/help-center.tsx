import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Search, MessageCircle, Mail, Phone, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function HelpCenterPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I enroll in a course?",
      answer: "You can enroll in any course by visiting the course page and clicking the 'Enroll Now' button. You'll be guided through the payment process and will get instant access to course materials."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, UPI, net banking, and digital wallets. We also offer EMI options for courses above ₹20,000."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "Yes, we offer a 30-day money-back guarantee for all our courses. If you're not satisfied within the first 30 days, you can request a full refund."
    },
    {
      question: "Do I get a certificate after completing the course?",
      answer: "Yes, you'll receive a verified certificate of completion for all our courses. These certificates are industry-recognized and can be shared on LinkedIn and other platforms."
    },
    {
      question: "How long do I have access to the course content?",
      answer: "You get lifetime access to all course materials, including any future updates. You can learn at your own pace without any time restrictions."
    },
    {
      question: "Are there any prerequisites for the courses?",
      answer: "Most of our courses are designed for beginners, but some advanced courses may have prerequisites. All requirements are clearly mentioned on the course page."
    },
    {
      question: "Do you provide job placement assistance?",
      answer: "Yes, we offer job placement assistance through our Job Bridge programs. This includes resume review, interview preparation, and connecting you with our hiring partners."
    },
    {
      question: "Can I download the course videos?",
      answer: "Course videos can be downloaded through our mobile app for offline viewing. However, downloadable content is not available on the web platform for security reasons."
    }
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team",
      action: "Start Chat",
      available: "24/7"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us an email",
      action: "Send Email",
      available: "Response within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call our support team",
      action: "Call Now",
      available: "Mon-Fri, 9 AM - 7 PM"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                How Can We
                <span className="text-blue-600 block">Help You?</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Find answers to common questions or get in touch with our support team.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <input
                  type="text"
                  placeholder="Search for help..."
                  className="w-full px-6 py-4 pl-12 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Get Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="text-center p-8 border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow">
                  <channel.icon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{channel.title}</h3>
                  <p className="text-gray-600 mb-4">{channel.description}</p>
                  <p className="text-sm text-gray-500 mb-6">{channel.available}</p>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    {channel.action}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    {expandedFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Still Need Help?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Can't find what you're looking for? Our support team is here to help you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Contact Support
              </Button>
              <Button size="lg" variant="outline">
                Schedule a Call
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}