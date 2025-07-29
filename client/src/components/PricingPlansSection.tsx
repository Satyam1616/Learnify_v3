import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Crown, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";

export default function PricingPlansSection() {
  const [isYearly, setIsYearly] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const plans = [
    {
      name: "Basic",
      icon: Star,
      description: "Perfect for beginners starting their learning journey",
      monthlyPrice: 999,
      yearlyPrice: 9999,
      features: [
        "Access to 50+ basic courses",
        "Standard video quality",
        "Community forum access",
        "Basic progress tracking",
        "Email support",
        "Mobile app access",
        "Certificate of completion"
      ],
      popular: false,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Pro",
      icon: Zap,
      description: "Most popular choice for serious learners",
      monthlyPrice: 1999,
      yearlyPrice: 19999,
      features: [
        "Access to 200+ courses",
        "HD video quality",
        "Priority community support",
        "Advanced progress analytics",
        "Live Q&A sessions",
        "Downloadable resources",
        "Project-based learning",
        "1-on-1 mentor sessions (2/month)",
        "Industry-recognized certificates"
      ],
      popular: true,
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Enterprise",
      icon: Crown,
      description: "Complete access for professionals and teams",
      monthlyPrice: 3999,
      yearlyPrice: 39999,
      features: [
        "Access to all 500+ courses",
        "4K video quality",
        "24/7 priority support",
        "Advanced analytics dashboard",
        "Weekly live sessions",
        "All downloadable resources",
        "Capstone projects",
        "Unlimited mentor sessions",
        "Industry certifications",
        "Career placement assistance",
        "Custom learning paths",
        "Team collaboration tools"
      ],
      popular: false,
      color: "from-purple-500 to-indigo-600"
    }
  ];

  const nextSlide = () => {
    if (currentSlide < plans.length - 1) {
      setCurrentSlide(currentSlide + 1);
      scrollToSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      scrollToSlide(currentSlide - 1);
    }
  };

  const scrollToSlide = (slideIndex: number) => {
    if (scrollContainerRef.current) {
      const slideWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: slideIndex * slideWidth,
        behavior: 'smooth'
      });
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Learning Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Unlock your potential with our flexible subscription plans. Start learning today and advance your career tomorrow.
          </p>
          
          {/* Toggle */}
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-3 text-sm font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
                isYearly ? 'bg-orange-500' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 text-sm font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Save 17%
              </span>
            )}
          </div>
        </div>

        {/* Desktop Pricing Cards */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                plan.popular ? 'ring-4 ring-orange-500 ring-opacity-50' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} mb-4`}>
                    <plan.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">
                      {formatPrice(isYearly ? plan.yearlyPrice : plan.monthlyPrice)}
                    </span>
                    <span className="text-gray-500 ml-1">
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  </div>
                  {isYearly && (
                    <p className="text-sm text-gray-500 mt-1">
                      {formatPrice(Math.round(plan.yearlyPrice / 12))}/month billed annually
                    </p>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  {plan.popular ? 'Start Free Trial' : 'Get Started'}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Pricing Cards Slider */}
        <div className="md:hidden relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-80 bg-white rounded-3xl shadow-xl overflow-hidden snap-start ${
                  plan.popular ? 'ring-4 ring-orange-500 ring-opacity-50' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <div className="p-6">
                  {/* Plan Header */}
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r ${plan.color} mb-3`}>
                      <plan.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 text-sm">{plan.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold text-gray-900">
                        {formatPrice(isYearly ? plan.yearlyPrice : plan.monthlyPrice)}
                      </span>
                      <span className="text-gray-500 ml-1 text-sm">
                        /{isYearly ? 'year' : 'month'}
                      </span>
                    </div>
                    {isYearly && (
                      <p className="text-xs text-gray-500 mt-1">
                        {formatPrice(Math.round(plan.yearlyPrice / 12))}/month billed annually
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {plan.features.slice(0, 6).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.features.length > 6 && (
                      <p className="text-xs text-gray-500 text-center">
                        +{plan.features.length - 6} more features
                      </p>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl'
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                  >
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all z-10 ${
              currentSlide === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white shadow-lg text-gray-700 hover:bg-gray-50'
            }`}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button
            onClick={nextSlide}
            disabled={currentSlide === plans.length - 1}
            className={`absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all z-10 ${
              currentSlide === plans.length - 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white shadow-lg text-gray-700 hover:bg-gray-50'
            }`}
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Mobile Slide Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {plans.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  scrollToSlide(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? 'bg-orange-500 w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            All plans include a 7-day free trial. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
              Compare All Features
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}