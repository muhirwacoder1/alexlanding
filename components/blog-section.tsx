"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import styles from '@/styles/blog-section.module.css'
import { BlogModal } from './blog-modal'

const blogPosts = [
  {
    id: 1,
    title: 'Revolutionary Smart Insoles: The Future of Diabetic Care',
    excerpt: 'Discover how our Smart insoles are transforming preventive healthcare for diabetic patients in Rwanda.',
    category: 'Technology',
    image: 'https://wearables.in/cdn/shop/products/nurvv-runn-smart-insoles-2.jpg?crop=center&height=500&v=1664358280&width=600',
    author: {
      name: 'Grace ',
      image: '/images/team/pp.jpg',
      role: 'CEO'
    },
    date: 'July 15, 2025',
    featured: true
  },
  {
    id: 2,
    title: 'Preventing Amputations: Early Detection is Key',
    excerpt: 'Learn about the critical importance of early detection in preventing diabetic foot complications.',
    category: 'Healthcare',
    image: 'https://www.coastalvascular.com/wp-content/uploads/2023/07/AmputationPreventionProgram.jpg',
    author: {
      name: 'Kelly Irakoze',
      image: '/images/team/kelly.jpg',
      role: 'Data Analyst'
    },
    date: 'July 14, 2025'
  },
  {
    id: 3,
    title: 'The Impact of AI in Modern Healthcare',
    excerpt: 'Exploring how artificial intelligence is revolutionizing healthcare delivery in Africa.',
    category: 'Innovation',
    image: 'https://gloriumtech.com/wp-content/uploads/2022/06/Top-5-Use-Cases-for-AI-in-Healthcare.png',
    author: {
      name: 'Rwakayiro David',
      image: '/images/team/rwakayiro david.jpeg',
      role: 'CTO'
    },
    date: 'July 13, 2025'
  },
  {
    id: 4,
    title: 'Bridging Healthcare Gaps: Technology Transforming Rural Healthcare in Rwanda',
    excerpt: 'Exploring how digital health solutions are revolutionizing healthcare delivery in rural Rwanda and creating opportunities for early intervention.',
    category: 'Healthcare Innovation',
    image: 'https://www.newtimes.co.rw/thenewtimes/uploads/images/2023/01/11/thumbs/1200x700/9746.jpg',
    author: {
      name: 'Prisca',
      image: '/images/team/prisca.png',
      role: 'Healthcare Analyst'
    },
    date: 'July 16, 2025'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
}

interface BlogSectionProps {
  showAll?: boolean
}

export function BlogSection({ showAll = false }: BlogSectionProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleReadMore = (postId: number) => {
    setSelectedBlogId(postId)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  // Find the selected blog data
  const selectedBlog = blogPosts.find(post => post.id === selectedBlogId)

  // Show only first 3 posts by default, all posts when showAll is true
  const postsToShow = showAll ? blogPosts : blogPosts.slice(0, 3)

  return (
    <>
      <motion.div
        className={styles.blogGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {postsToShow.map((post) => (
          <motion.article
            key={post.id}
            className={styles.blogCard}
            variants={cardVariants}
            onHoverStart={() => setHoveredId(post.id)}
            onHoverEnd={() => setHoveredId(null)}
          >
            {post.featured && (
              <span className={styles.featuredBadge}>
                ✨ Featured
              </span>
            )}
            <div className={styles.imageContainer}>
              <div className={styles.imageOverlay} />
              <img
                src={post.image}
                alt={post.title}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <span className={styles.category}>
                {post.category}
              </span>
              <h3 className={styles.title}>
                {post.title}
              </h3>
              <p className={styles.excerpt}>
                {post.excerpt}
              </p>
              <div className={styles.footer}>
                <div className={styles.author}>
                  <div className={styles.authorImage}>
                    <img
                      src={post.author.image}
                      alt={post.author.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={styles.authorInfo}>
                    <span className={styles.authorName}>
                      {post.author.name}
                    </span>
                    <span className={styles.date}>
                      {post.date}
                    </span>
                  </div>
                </div>
                <motion.button
                  className={styles.readMore}
                  animate={{
                    x: hoveredId === post.id ? 5 : 0
                  }}
                  onClick={() => handleReadMore(post.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* Blog Modal */}
      <BlogModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        blogId={selectedBlogId}
        blogData={selectedBlog}
      />
    </>
  );
}
