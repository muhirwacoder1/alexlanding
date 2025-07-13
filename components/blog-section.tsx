"use client"

import { AnimatedCard } from "@/components/animated-card"
import { ModernButton } from "@/components/modern-button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"

const blogPosts = [
  {
    title: "The Hidden Crisis: Diabetic Foot Ulcers in Rwanda",
    excerpt:
      "Understanding the scope of diabetic complications in East Africa and why prevention is crucial for saving lives and reducing healthcare costs.",
    category: "Healthcare",
    readTime: "5 min read",
    date: "Dec 15, 2024",
    author: "Dr. Grace Nyirarukundo",
    featured: true,
    gradient: "from-blue-600 to-blue-700",
  },
  {
    title: "How Smart Insoles Are Revolutionizing Diabetic Care",
    excerpt:
      "A deep dive into the technology behind our smart insole sensors and how they detect problems before they become serious.",
    category: "Technology",
    readTime: "7 min read",
    date: "Dec 10, 2024",
    author: "David Rwakayiro",
    gradient: "from-purple-600 to-purple-700",
  },
  {
    title: "Patient Success Story: From Amputation Risk to Active Life",
    excerpt:
      "Meet John, a 45-year-old teacher who avoided amputation thanks to early detection and intervention with APPO technology.",
    category: "Success Stories",
    readTime: "4 min read",
    date: "Dec 5, 2024",
    author: "Prisca Nikuze",
    gradient: "from-green-600 to-green-700",
  },
  {
    title: "Building Healthcare Tech in Rwanda: Challenges & Opportunities",
    excerpt:
      "The journey of creating locally-relevant healthcare solutions and the unique challenges of the East African market.",
    category: "Innovation",
    readTime: "6 min read",
    date: "Nov 28, 2024",
    author: "Alex Muhirwa",
    gradient: "from-orange-600 to-orange-700",
  },
]

export function BlogSection() {
  const featuredPost = blogPosts[0]
  const regularPosts = blogPosts.slice(1)

  return (
    <div className="space-y-12">
      {/* Featured Post */}
      <AnimatedCard
        className={`bg-gradient-to-br ${featuredPost.gradient} text-white p-8 lg:p-12 relative overflow-hidden`}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

        <div className="relative z-10">
          <div className="flex items-center space-x-4 mb-6">
            <Badge className="bg-white/20 text-white hover:bg-white/30">⭐ Featured</Badge>
            <Badge className="bg-white/20 text-white hover:bg-white/30">{featuredPost.category}</Badge>
          </div>

          <h3 className="text-3xl lg:text-4xl font-black mb-4 leading-tight">{featuredPost.title}</h3>

          <p className="text-blue-100 text-lg mb-8 leading-relaxed">{featuredPost.excerpt}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6 text-blue-100">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span className="text-sm">{featuredPost.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">{featuredPost.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm">{featuredPost.readTime}</span>
              </div>
            </div>

            <ModernButton
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              Read More
            </ModernButton>
          </div>
        </div>
      </AnimatedCard>

      {/* Regular Posts Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {regularPosts.map((post, index) => (
          <AnimatedCard
            key={post.title}
            className="group cursor-pointer hover:shadow-xl transition-all duration-300"
            delay={index * 0.1}
          >
            <div className="p-6 space-y-4">
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-xs">
                  {post.category}
                </Badge>
              </div>

              <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                {post.title}
              </h4>

              <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <span className="text-sm text-gray-500">{post.readTime}</span>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </div>
  )
}
