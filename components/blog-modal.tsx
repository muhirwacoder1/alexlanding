"use client"

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Heart, MessageCircle, Share2 } from 'lucide-react'
import dynamic from 'next/dynamic'
import styles from '@/styles/blog-modal.module.css'

// Blog post content mapping
const blogContentMap: Record<number, any> = {
  1: dynamic(() => import('./contents blog/smart insole revolution')),
  2: dynamic(() => import('./contents blog/Preventing Amputations')),
  3: dynamic(() => import('./contents blog/AI in health')),
  4: dynamic(() => import('./contents blog/prisca-blog'))
}

interface BlogModalProps {
  isOpen: boolean
  onClose: () => void
  blogId: number | null
  blogData: any
}

export function BlogModal({ isOpen, onClose, blogId, blogData }: BlogModalProps) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  
  // Handle scroll progress for progress bar
  useEffect(() => {
    if (!isOpen) return
    
    const handleScroll = () => {
      const modalContent = document.getElementById('blog-modal-content')
      if (!modalContent) return
      
      const scrollTop = modalContent.scrollTop
      const scrollHeight = modalContent.scrollHeight - modalContent.clientHeight
      const progress = scrollTop / scrollHeight
      setScrollProgress(progress)
    }
    
    const modalContent = document.getElementById('blog-modal-content')
    if (modalContent) {
      modalContent.addEventListener('scroll', handleScroll)
    }
    
    return () => {
      if (modalContent) {
        modalContent.removeEventListener('scroll', handleScroll)
      }
    }
  }, [isOpen])
  
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Get the correct blog content component
  const BlogContent = blogId ? blogContentMap[blogId] : null

  return (
    <AnimatePresence>
      {isOpen && blogId && blogData && (
        <motion.div 
          className={styles.modalOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal */}
          <motion.div 
            className={styles.modalContainer}
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Progress bar */}
            <div className={styles.progressBar}>
              <motion.div 
                className={styles.progressIndicator}
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
            
            {/* Header */}
            <div className={styles.modalHeader}>
              <motion.img 
                src={blogData.image} 
                alt={blogData.title}
                className={styles.headerImage}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
              />
              <div className={styles.headerOverlay} />
              
              <div className={styles.headerContent}>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className={styles.category}>
                    {blogData.category}
                  </span>
                  <h2 className={styles.title}>{blogData.title}</h2>
                  
                  <div className={styles.authorInfo}>
                    <div className={styles.authorImage}>
                      <img 
                        src={blogData.author.image} 
                        alt={blogData.author.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className={styles.authorName}>{blogData.author.name}</p>
                      <p className={styles.date}>{blogData.date}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Close button */}
              <button 
                onClick={onClose}
                className={styles.closeButton}
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Content */}
            <div 
              id="blog-modal-content"
              className={styles.modalContent}
            >
              {BlogContent && (
                <motion.div
                  className={styles.blogContent}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <BlogContent />
                </motion.div>
              )}
            </div>
            
            {/* Footer */}
            <div className={styles.modalFooter}>
              <div className={styles.footerActions}>
                <button 
                  className={styles.actionButton}
                  onClick={() => setIsLiked(!isLiked)}
                  style={{ color: isLiked ? '#ef4444' : undefined }}
                >
                  <Heart 
                    size={20} 
                    fill={isLiked ? '#ef4444' : 'none'} 
                    className={isLiked ? 'animate-pulse' : ''}
                  />
                  <span>Like</span>
                </button>
                <button className={styles.actionButton}>
                  <MessageCircle size={20} />
                  <span>Comment</span>
                </button>
                <button className={styles.actionButton}>
                  <Share2 size={20} />
                  <span>Share</span>
                </button>
              </div>
              <button 
                onClick={onClose}
                className={styles.closeFooterButton}
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}