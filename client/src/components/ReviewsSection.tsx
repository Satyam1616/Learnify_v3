import { Star, ThumbsUp, MessageCircle, Filter, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, ScaleOnHover } from "@/components/animations";
import CardSlider from "@/components/sliders/CardSlider";

export default function ReviewsSection() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Software Developer",
      company: "TCS",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b524?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      rating: 5,
      date: "2 weeks ago",
      course: "Python Programming Fundamentals",
      review: "This course completely transformed my programming skills. The instructor's teaching style is exceptional, and the hands-on projects really helped me understand complex concepts. I was able to apply what I learned immediately at my job. The community support is also fantastic - whenever I had questions, I got helpful responses within hours.",
      helpful: 24,
      verified: true,
      tags: ["Beginner Friendly", "Great Projects", "Excellent Support"]
    },
    {
      id: 2,
      name: "Rahul Gupta",
      role: "Marketing Manager",
      company: "Flipkart",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      rating: 5,
      date: "1 month ago",
      course: "Digital Marketing Masterclass",
      review: "Outstanding content quality and practical insights. The course covers everything from SEO to social media marketing with real-world case studies. I've already implemented several strategies from this course and seen a 40% increase in our campaign performance. Worth every penny!",
      helpful: 31,
      verified: true,
      tags: ["Practical", "Up-to-date", "Results-driven"]
    },
    {
      id: 3,
      name: "Sneha Patel",
      role: "Data Analyst",
      company: "Infosys",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      rating: 4,
      date: "3 weeks ago",
      course: "Excel for Business Analytics",
      review: "Great course for intermediate Excel users. The advanced functions and pivot table sections were particularly helpful. However, I wish there were more practice datasets. The instructor is knowledgeable and explains concepts clearly. The certificate is recognized by my company.",
      helpful: 18,
      verified: true,
      tags: ["Intermediate Level", "Clear Explanations", "Industry Recognized"]
    },
    {
      id: 4,
      name: "Vikram Singh",
      role: "Freelance Designer",
      company: "Self-employed",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      rating: 5,
      date: "1 week ago",
      course: "Graphic Design with Photoshop",
      review: "This course is a game-changer for anyone serious about graphic design. The step-by-step tutorials are easy to follow, and the creative projects pushed me out of my comfort zone. I've already landed two new clients based on the portfolio I built during this course. Highly recommended!",
      helpful: 27,
      verified: true,
      tags: ["Creative Projects", "Portfolio Building", "Career Impact"]
    },
    {
      id: 5,
      name: "Anita Reddy",
      role: "Financial Advisor",
      company: "HDFC Bank",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      rating: 5,
      date: "2 months ago",
      course: "Financial Planning & Investment",
      review: "Excellent comprehensive course on personal finance and investment strategies. The content is well-structured and covers both basic and advanced topics. The real-world examples and case studies make it easy to understand complex financial concepts. This has helped me advise my clients better.",
      helpful: 22,
      verified: true,
      tags: ["Comprehensive", "Real Examples", "Professional Growth"]
    },
    {
      id: 6,
      name: "Karan Mehta",
      role: "Content Writer",
      company: "Zomato",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      rating: 4,
      date: "1 month ago",
      course: "Content Writing & Copywriting",
      review: "Solid course with practical writing techniques and frameworks. The copywriting section is particularly strong with great examples from successful campaigns. The only downside is that some modules could be more interactive. Overall, it's helped me improve my writing significantly.",
      helpful: 15,
      verified: true,
      tags: ["Practical Techniques", "Good Examples", "Writing Improvement"]
    }
  ];

  const stats = {
    totalReviews: 2847,
    averageRating: 4.8,
    ratingDistribution: [
      { stars: 5, count: 2156, percentage: 76 },
      { stars: 4, count: 512, percentage: 18 },
      { stars: 3, count: 142, percentage: 5 },
      { stars: 2, count: 28, percentage: 1 },
      { stars: 1, count: 9, percentage: 0 }
    ]
  };

  const filters = [
    { id: "all", label: "All Reviews", count: stats.totalReviews },
    { id: "5", label: "5 Stars", count: stats.ratingDistribution[0].count },
    { id: "4", label: "4 Stars", count: stats.ratingDistribution[1].count },
    { id: "verified", label: "Verified", count: 2234 },
    { id: "recent", label: "Recent", count: 156 }
  ];

  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 3);

  const nextSlide = () => {
    if (currentSlide < reviews.length - 1) {
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

  const renderStars = (rating: number, size: string = "h-4 w-4") => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${size} ${
              star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeInUp className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real reviews from real students who have transformed their careers with our courses.
          </p>
        </FadeInUp>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Stats & Filters */}
          <FadeInLeft className="lg:col-span-1">
            {/* Overall Rating */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stats.averageRating}
                </div>
                {renderStars(Math.floor(stats.averageRating), "h-5 w-5")}
                <p className="text-gray-600 mt-2">
                  Based on {stats.totalReviews.toLocaleString()} reviews
                </p>
              </div>

              {/* Rating Distribution */}
              <div className="space-y-2">
                {stats.ratingDistribution.map((item) => (
                  <div key={item.stars} className="flex items-center text-sm">
                    <span className="w-8 text-gray-600">{item.stars}★</span>
                    <div className="flex-1 mx-2 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <span className="w-12 text-gray-600 text-right">
                      {item.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Filters */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <Filter className="h-5 w-5 text-gray-600 mr-2" />
                <h3 className="font-semibold text-gray-900">Filter Reviews</h3>
              </div>
              <div className="space-y-2">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedFilter === filter.id
                        ? "bg-orange-100 text-orange-700 font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{filter.label}</span>
                      <span className="text-xs">({filter.count})</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </FadeInLeft>

          {/* Right Content - Reviews */}
          <FadeInRight className="lg:col-span-3">
            <CardSlider
              slidesToShow={{ mobile: 1, tablet: 1, desktop: 1 }}
              showArrows={true}
              showDots={true}
              autoPlay={true}
              autoPlayInterval={6000}
            >
              {reviews.map((review) => (
                <ScaleOnHover key={review.id}>
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow h-full"
                  >
                  {/* Review Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <div className="flex items-center">
                          <h4 className="font-semibold text-gray-900 mr-2">
                            {review.name}
                          </h4>
                          {review.verified && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Verified
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">
                          {review.role} at {review.company}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Completed: {review.course}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      {renderStars(review.rating)}
                      <p className="text-xs text-gray-500 mt-1">{review.date}</p>
                    </div>
                  </div>

                  {/* Review Content */}
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {review.review}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {review.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Review Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <button className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      Helpful ({review.helpful})
                    </button>
                    <button className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      Reply
                    </button>
                  </div>
                  </div>
                </ScaleOnHover>
              ))}
            </CardSlider>

            {/* Write Review CTA */}
            <FadeInUp delay={0.3} className="mt-12 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Share Your Experience
              </h3>
              <p className="text-gray-600 mb-6">
                Help other students by sharing your learning journey and course experience.
              </p>
              <ScaleOnHover>
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                  Write a Review
                </Button>
              </ScaleOnHover>
            </FadeInUp>
          </FadeInRight>
        </div>

        {/* Mobile Layout with Slider */}
        <div className="lg:hidden">
          {/* Mobile Stats Summary */}
          <FadeInUp className="bg-gray-50 rounded-2xl p-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stats.averageRating}
              </div>
              {renderStars(Math.floor(stats.averageRating), "h-5 w-5")}
              <p className="text-gray-600 mt-2 text-sm">
                Based on {stats.totalReviews.toLocaleString()} reviews
              </p>
            </div>
          </FadeInUp>

          {/* Mobile Filters */}
          <FadeInUp delay={0.2} className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {filters.slice(0, 4).map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedFilter === filter.id
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </FadeInUp>

          {/* Mobile Reviews Slider */}
          <FadeInUp delay={0.4}>
            <CardSlider
              slidesToShow={{ mobile: 1, tablet: 1, desktop: 1 }}
              showArrows={true}
              showDots={true}
              autoPlay={true}
              autoPlayInterval={5000}
            >
              {reviews.map((review) => (
                <ScaleOnHover key={review.id}>
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full"
                  >
                  {/* Review Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <div className="flex items-center">
                          <h4 className="font-semibold text-gray-900 text-sm mr-2">
                            {review.name}
                          </h4>
                          {review.verified && (
                            <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              ✓
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-600">
                          {review.role}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {review.course}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      {renderStars(review.rating, "h-3 w-3")}
                      <p className="text-xs text-gray-500 mt-1">{review.date}</p>
                    </div>
                  </div>

                  {/* Review Content */}
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed line-clamp-4">
                    {review.review}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {review.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Review Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <button className="flex items-center text-xs text-gray-600 hover:text-gray-900 transition-colors">
                      <ThumbsUp className="h-3 w-3 mr-1" />
                      {review.helpful}
                    </button>
                    <button className="flex items-center text-xs text-gray-600 hover:text-gray-900 transition-colors">
                      <MessageCircle className="h-3 w-3 mr-1" />
                      Reply
                    </button>
                  </div>
                  </div>
                </ScaleOnHover>
              ))}
            </CardSlider>
          </FadeInUp>

          {/* Mobile Write Review CTA */}
          <FadeInUp delay={0.6} className="mt-12 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Share Your Experience
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              Help other students by sharing your learning journey.
            </p>
            <ScaleOnHover>
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-sm px-6 py-2">
                Write a Review
              </Button>
            </ScaleOnHover>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}