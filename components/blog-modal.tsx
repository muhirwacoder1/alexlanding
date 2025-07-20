"use client"

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Heart, MessageCircle, Share2, ArrowLeft, Clock, User } from 'lucide-react'
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
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          {/* Modal */}
          <motion.div 
            className={styles.modalContainer}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={onClose}
              className={styles.closeButton}
              aria-label="Close"
            >
              <X size={24} />
            </button>

            {/* Progress bar */}
            <div className={styles.progressBar}>
              <motion.div 
                className={styles.progressIndicator}
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
            
            {/* Header */}
            <div className={styles.modalHeader}>
              <motion.div
                className={styles.imageContainer}
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src={blogData.image} 
                  alt={blogData.title}
                  className={styles.headerImage}
                />
                <div className={styles.imageOverlay} />
              </motion.div>
              
              <motion.div 
                className={styles.headerContent}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className={styles.categoryBadge}>
                  {blogData.category}
                </div>
                <h1 className={styles.title}>{blogData.title}</h1>
                <p className={styles.excerpt}>{blogData.excerpt}</p>
                
                <div className={styles.metaInfo}>
                  <div className={styles.authorSection}>
                    <div className={styles.authorAvatar}>
                      <img 
                        src={blogData.author.image} 
                        alt={blogData.author.name}
                      />
                    </div>
                    <div className={styles.authorDetails}>
                      <span className={styles.authorName}>
                        <User size={16} />
                        {blogData.author.name}
                      </span>
                      <span className={styles.authorRole}>{blogData.author.role}</span>
                    </div>
                  </div>
                  <div className={styles.dateSection}>
                    <Clock size={16} />
                    <span>{blogData.date}</span>
                  </div>
                </div>
              </motion.div>
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
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <BlogContent />
                </motion.div>
              )}
            </div>
            
            {/* Footer */}
            <motion.div 
              className={styles.modalFooter}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className={styles.engagementActions}>
                <motion.button 
                  className={`${styles.actionButton} ${isLiked ? styles.liked : ''}`}
                  onClick={() => setIsLiked(!isLiked)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart 
                    size={20} 
                    fill={isLiked ? 'currentColor' : 'none'} 
                  />
                  <span>{isLiked ? 'Liked' : 'Like'}</span>
                </motion.button>
                
                <motion.button 
                  className={styles.actionButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle size={20} />
                  <span>Comment</span>
                </motion.button>
                
                <motion.button 
                  className={styles.actionButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Share2 size={20} />
                  <span>Share</span>
                </motion.button>
              </div>
              
              <motion.button 
                onClick={onClose}
                className={styles.backToArticles}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ArrowLeft size={18} />
                Back to Articles
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}