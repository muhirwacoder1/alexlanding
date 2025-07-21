"use client"

import { useEffect } from 'react'

export function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadImage = (src: string) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      document.head.appendChild(link)
    }

    // Preload hero images for better LCP
    const criticalImages = [
      'https://wearables.in/cdn/shop/products/nurvv-runn-smart-insoles-2.jpg?crop=center&height=500&v=1664358280&width=600',
      'https://www.coastalvascular.com/wp-content/uploads/2023/07/AmputationPreventionProgram.jpg'
    ]

    criticalImages.forEach(preloadImage)

    // Prefetch blog content for faster modal loading
    const prefetchBlogContent = () => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          import('./contents blog/smart insole revolution').catch(() => {})
          import('./contents blog/Preventing Amputations').catch(() => {})
        })
      }
    }

    // Delay prefetching to not interfere with critical loading
    setTimeout(prefetchBlogContent, 2000)

    // Performance observer for monitoring
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime)
          }
        }
      })
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] })
    }
  }, [])

  return null
}