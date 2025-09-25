"use client"

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Clock, User, Heart, Share2, MessageCircle, ArrowLeft } from 'lucide-react'
import Image from 'next/image'

interface BlogModalProps {
  isOpen: boolean
  onClose: () => void
  blogId: number | null
  blogData: any
}

export function BlogModal({ isOpen, onClose, blogId, blogData }: BlogModalProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement
      const scrollTop = target.scrollTop
      const scrollHeight = target.scrollHeight - target.clientHeight
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0
      setScrollProgress(progress)
    }

    const contentEl = document.getElementById('blog-content')
    if (contentEl) {
      contentEl.addEventListener('scroll', handleScroll)
      return () => contentEl.removeEventListener('scroll', handleScroll)
    }
  }, [isOpen])

  // Prevent body scroll and handle ESC key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose()
      }
      
      document.addEventListener('keydown', handleEsc)
      
      return () => {
        document.body.style.overflow = ''
        document.removeEventListener('keydown', handleEsc)
      }
    }
  }, [isOpen, onClose])

  if (!isOpen || !blogData) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Progress Bar */}
        <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-[10000]">
          <motion.div
            className="h-full bg-blue-600"
            style={{ width: `${scrollProgress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <div className="flex items-center justify-center min-h-screen p-4">
          <motion.div
            className="relative w-full max-w-4xl max-h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 group"
              aria-label="Close modal"
            >
              <X size={16} className="text-gray-700 group-hover:text-gray-900 sm:w-5 sm:h-5" />
            </button>

            {/* Header */}
            <div className="relative h-48 sm:h-56 overflow-hidden flex-shrink-0">
              <Image
                src={blogData.image}
                alt={blogData.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Header Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                <span className="inline-block px-2 py-1 sm:px-3 sm:py-1 bg-blue-600 rounded-full text-xs sm:text-sm font-medium mb-2 sm:mb-3">
                  {blogData.category}
                </span>
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 leading-tight">
                  {blogData.title}
                </h1>
                <p className="text-white/90 text-sm sm:text-base mb-3 sm:mb-4 line-clamp-2">
                  {blogData.excerpt}
                </p>
                
                {/* Author Info */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={blogData.author.image}
                        alt={blogData.author.name}
                        width={32}
                        height={32}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <div className="font-medium">{blogData.author.name}</div>
                      <div className="text-white/70 text-xs">{blogData.author.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-white/80">
                    <Clock size={12} className="sm:w-4 sm:h-4" />
                    <span>{blogData.date}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Scrollable Content */}
            <div 
              id="blog-content"
              className="flex-1 overflow-y-auto"
              style={{ maxHeight: 'calc(85vh - 300px)' }}
            >
              <div className="p-4 sm:p-6">
                {/* Article Content */}
                <article className="max-w-none">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    Revolutionary Healthcare Innovation
                  </h2>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {blogData.excerpt} This comprehensive exploration delves into the cutting-edge 
                    technology that's transforming healthcare delivery and patient outcomes across 
                    the globe. Our innovative approach combines advanced sensor technology with 
                    artificial intelligence to create solutions that save lives.
                  </p>

                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                    The Technology Revolution
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Smart insole technology represents a paradigm shift in preventive healthcare. 
                    By continuously monitoring pressure points, temperature variations, and gait 
                    patterns, our devices can detect early warning signs of complications before 
                    they become serious health issues.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6 rounded-r-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      💡 Key Innovation
                    </h4>
                    <p className="text-blue-800 text-sm leading-relaxed">
                      Our AI-powered monitoring system can predict potential complications up to 
                      2 weeks before they occur, giving patients and healthcare providers crucial 
                      time to intervene and prevent serious outcomes.
                    </p>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                    Real-World Impact
                  </h3>
                  
                  <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                    <li>90% reduction in diabetic foot complications</li>
                    <li>Early detection saves thousands in medical costs</li>
                    <li>Improved quality of life for patients</li>
                    <li>Reduced hospital readmissions by 75%</li>
                  </ul>

                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                    Patient Success Stories
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Since launching our smart insole program, we've helped over 500 patients 
                    across Rwanda avoid serious complications. The technology has proven 
                    particularly effective in rural areas where access to regular medical 
                    checkups is limited.
                  </p>

                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 my-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      🌟 Success Metrics
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-2xl font-bold text-green-600">500+</div>
                        <div className="text-gray-600 text-sm">Patients Helped</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">90%</div>
                        <div className="text-gray-600 text-sm">Complication Reduction</div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                    The Science Behind Prevention
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our smart insoles use a combination of pressure sensors, temperature monitors, 
                    and accelerometers to create a comprehensive picture of foot health. Machine 
                    learning algorithms analyze this data in real-time, identifying patterns that 
                    precede the development of ulcers or other complications.
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6 rounded-r-lg">
                    <h4 className="font-semibold text-yellow-900 mb-2">
                      ⚡ How It Works
                    </h4>
                    <div className="space-y-2 text-yellow-800 text-sm">
                      <p><strong>Step 1:</strong> Continuous monitoring of pressure and temperature</p>
                      <p><strong>Step 2:</strong> AI analysis identifies risk patterns</p>
                      <p><strong>Step 3:</strong> Instant alerts sent to patient and healthcare team</p>
                      <p><strong>Step 4:</strong> Preventive action taken before complications develop</p>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                    Looking Forward
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    As we continue to innovate and expand our reach, we're committed to making 
                    advanced healthcare technology accessible to everyone. Our vision is a world 
                    where preventable complications are truly prevented through smart, proactive 
                    monitoring and care.
                  </p>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      🚀 Get Involved
                    </h4>
                    <p className="text-gray-700 mb-3 leading-relaxed text-sm">
                      Interested in learning more about our technology or exploring partnership 
                      opportunities? We'd love to connect with healthcare providers, researchers, 
                      and organizations committed to improving patient outcomes.
                    </p>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                      Contact Our Team
                    </button>
                  </div>
                </article>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 p-4 bg-gray-50/80 backdrop-blur-sm flex-shrink-0">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                {/* Action Buttons */}
                <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isLiked 
                        ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Heart size={14} fill={isLiked ? 'currentColor' : 'none'} />
                    <span className="hidden sm:inline">{isLiked ? 'Liked' : 'Like'}</span>
                  </button>
                  
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200">
                    <MessageCircle size={14} />
                    <span className="hidden sm:inline">Comment</span>
                  </button>
                  
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200">
                    <Share2 size={14} />
                    <span className="hidden sm:inline">Share</span>
                  </button>
                </div>
                
                {/* Back Button */}
                <button
                  onClick={onClose}
                  className="flex items-center gap-2 px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors duration-200 w-full sm:w-auto justify-center"
                >
                  <ArrowLeft size={14} />
                  Back to Articles
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}