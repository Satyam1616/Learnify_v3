import Layout from "@/components/Layout";

export default function TermsOfServicePage() {
  return (
    <Layout>
      <div className="min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: March 2024
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <p className="text-blue-800 font-medium">
                Welcome to UNLOX. By accessing or using our platform, you agree to be bound by these Terms of Service. 
                Please read them carefully before using our services.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-600">
                By accessing and using UNLOX services, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Description of Service</h2>
              <p className="text-gray-600 mb-4">
                UNLOX provides online educational services including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>Online courses and training programs</li>
                <li>Job Bridge Programs</li>
                <li>Global Internship opportunities</li>
                <li>Educational content and resources</li>
                <li>Career guidance and support services</li>
                <li>Certification programs</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">User Accounts</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Registration</h3>
                  <p className="text-gray-600">
                    To access certain features of our platform, you must register for an account. You agree to provide 
                    accurate, current, and complete information during registration and to update such information to 
                    keep it accurate, current, and complete.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Account Responsibility</h3>
                  <p className="text-gray-600">
                    You are responsible for safeguarding your account credentials and for all activities that occur 
                    under your account. You agree to immediately notify us of any unauthorized use of your account.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Course Fees</h3>
                  <p className="text-gray-600">
                    Course fees are clearly displayed on each course page. Payment is required in full before access 
                    to course materials is granted, unless otherwise specified.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Refund Policy</h3>
                  <p className="text-gray-600">
                    We offer a 30-day money-back guarantee for most courses. Refunds must be requested within 30 days 
                    of purchase and are subject to our refund policy terms.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Content</h3>
                  <p className="text-gray-600">
                    All content provided on our platform, including courses, videos, text, graphics, logos, and software, 
                    is the property of UNLOX or its content suppliers and is protected by intellectual property laws.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">User Content</h3>
                  <p className="text-gray-600">
                    You retain ownership of any content you submit to our platform. However, by submitting content, 
                    you grant us a non-exclusive, worldwide, royalty-free license to use, modify, and display such content.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Prohibited Uses</h2>
              <p className="text-gray-600 mb-4">You may not use our service:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>For any unlawful purpose or to solicit others to act unlawfully</li>
                <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
                <li>To impersonate or attempt to impersonate another user, person, or entity</li>
                <li>To share course content with unauthorized parties</li>
                <li>To use automated scripts or bots to access the platform</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer of Warranties</h2>
              <p className="text-gray-600">
                The information on this platform is provided on an "as is" basis. To the fullest extent permitted by law, 
                this Company excludes all representations, warranties, conditions and terms relating to our platform and your use of it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600">
                In no event shall UNLOX, nor its directors, employees, partners, agents, suppliers, or affiliates, 
                be liable for any indirect, incidental, special, consequential, or punitive damages, including without 
                limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
              <p className="text-gray-600">
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason 
                whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use 
                the service will end immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-600">
                These Terms shall be interpreted and governed by the laws of India, without regard to its conflict of law provisions. 
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-600">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> legal@unlox.com</p>
                <p className="text-gray-700"><strong>Phone:</strong> +91-XXXX-XXXX-XX</p>
                <p className="text-gray-700"><strong>Address:</strong> UNLOX Legal Department, [Address]</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}