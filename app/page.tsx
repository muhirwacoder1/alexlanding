"use client"

import { useEffect, useRef, useState } from "react"
import { ModernButton } from "@/components/modern-button"
import { AnimatedCard } from "@/components/animated-card"
import { FloatingElements } from "@/components/floating-elements"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

import { BlogSection } from "@/components/blog-section"
import { CheckCircle } from "lucide-react"
import {
  Heart,
  Shield,
  Smartphone,
  Activity,
  Users,
  Mail,
  Phone,
  MapPin,
  Play,
  AlertTriangle,
  BarChart3,
  DollarSign,
  Star,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Menu,
  X,
  MessageCircle,
  Plus,
} from "lucide-react"
import Link from "next/link"
import Image from 'next/image';
import techStyles from '@/styles/tech-section.module.css';
import teamStyles from '@/styles/team-section.module.css';
import partnerStyles from '@/styles/partners.module.css';
import FAQSection from '@/components/faq-section'

import AboutNEEM from "@/components/about/about";

export default function AppoModernLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showAbout, setShowAbout] = useState(false)
  const [showAllArticles, setShowAllArticles] = useState(true) // Temporarily set to true for debugging
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [showTrafficNotification, setShowTrafficNotification] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [navLinksWhite, setNavLinksWhite] = useState(true) // Track navbar link color

  // Product state
  const [selectedSize, setSelectedSize] = useState('M')
  const [quantity, setQuantity] = useState(1)
  const [showPopup, setShowPopup] = useState(false)
  const [customerName, setCustomerName] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')

  // FAQ state
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [showAllFAQs, setShowAllFAQs] = useState(false)

  const heroRef = useRef<HTMLElement>(null)
  const navRef = useRef<HTMLElement>(null)

  // FAQ data - Using existing FAQs from the original component (12 total)
  const faqData = [
    // Basic Information (8 FAQs)
    {
      question: "What is NEEM's smart insole technology?",
      answer: "NEEM's smart insole is a custom-made medical device that fits inside your shoes to detect early signs of diabetic foot complications. Using advanced sensors and AI, it continuously monitors foot pressure points and temperature changes to prevent ulcers before they form."
    },
    {
      question: "How effective is the NEEM solution?",
      answer: "Our smart insoles have demonstrated a 90% success rate in preventing diabetic foot ulcers. This high efficacy is achieved through real-time monitoring, early detection, and immediate alerts when potential issues are detected."
    },
    {
      question: "Is it painful to wear or use?",
      answer: "Not at all! It's designed for comfort, flexibility, and daily use. The insole is lightweight and fits in most shoes."
    },
    {
      question: "How does the smart insole work?",
      answer: "It uses built-in sensors to monitor foot pressure, temperature, and heart rate. Data is sent to the cloud and alerts you before a problem starts."
    },
    {
      question: "How much does it cost?",
      answer: "$150 per pair, with flexible payment plans. Monthly monitoring subscription is $15. We also offer insurance coverage options."
    },
    {
      question: "Can I use it without a doctor?",
      answer: "Yes, but it's even more effective when shared with your healthcare provider. We provide easy sharing tools for medical professionals."
    },
    {
      question: "How long does the battery last?",
      answer: "The smart insole battery lasts up to 7 days with normal use. It charges wirelessly and takes only 2 hours for a full charge."
    },
    {
      question: "Is my health data secure?",
      answer: "Absolutely. We use bank-level encryption and comply with international healthcare data protection standards. Your data is never shared without permission."
    },
    // Technical Details (2 FAQs)
    {
      question: "How do the smart sensors work?",
      answer: "Our smart sensors use a combination of pressure mapping and temperature monitoring technology. They continuously collect data about your feet's condition, analyze patterns using AI algorithms, and send alerts through our mobile app when they detect concerning changes."
    },
    {
      question: "Is the device water-resistant?",
      answer: "Yes, the NEEM smart insole is designed to be water-resistant for daily use. While it can handle normal foot perspiration and light exposure to water, we recommend removing them before activities involving direct water contact."
    },
    // Costs & Coverage (2 FAQs)
    {
      question: "Is NEEM covered by insurance?",
      answer: "Insurance coverage in Rwanda is coming soon. In the meantime, we offer flexible payment plans to ensure our solution is accessible to those who need it most. Please contact our team for specific details on your payment and coverage options."
    },
    {
      question: "What's included in the NEEM package?",
      answer: "The NEEM package includes custom-fitted smart insoles, access to our mobile monitoring app, regular check-ups, and continuous support from our healthcare team. We also provide replacement insoles as needed."
    }
  ]

  // FAQ handlers
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const handleShowAllFAQs = () => {
    setShowAllFAQs(true)
  }

  // Handle purchase with MoMo payment
  const handlePurchase = () => {
    if (!customerName.trim() || !mobileNumber.trim()) {
      alert('Please fill in all required fields')
      return
    }

    // Calculate total amount
    const totalAmount = 35000 * quantity

    // Create MoMo dial string
    const momoDialString = `*182*1*1*0784131200*${totalAmount}#`

    // Close popup
    setShowPopup(false)

    // Show confirmation and dial
    const confirmMessage = `Order confirmed!\n\nCustomer: ${customerName}\nPhone: ${mobileNumber}\nProduct: NEEM Smart Insole (Size ${selectedSize})\nQuantity: ${quantity}\nTotal: ${totalAmount.toLocaleString()} RWF\n\nYou will now be redirected to dial the MoMo payment code.`
    alert(confirmMessage)

    // Attempt to dial the MoMo code
    try {
      window.location.href = `tel:${momoDialString}`
    } catch (error) {
      // Fallback: copy to clipboard and show instructions
      navigator.clipboard.writeText(momoDialString).then(() => {
        alert(`MoMo code copied to clipboard: ${momoDialString}\n\nPlease dial this code on your phone to complete the payment.`)
      }).catch(() => {
        alert(`Please dial this MoMo code on your phone: ${momoDialString}`)
      })
    }

    // Reset form
    setCustomerName('')
    setMobileNumber('')
    setQuantity(1)
    setSelectedSize('M')
  }

  useEffect(() => {
    if (typeof window === "undefined") return

    const gsap = (window as any).gsap
    const ScrollTrigger = (window as any).ScrollTrigger

    if (!gsap || !ScrollTrigger) return

    gsap.registerPlugin(ScrollTrigger)

    // Team name scroll-triggered shadow/glow animation
    const teamNameEls = document.querySelectorAll(`.${teamStyles.teamCard} .${teamStyles.name}`);
    teamNameEls.forEach((el: Element) => {
      gsap.fromTo(
        el,
        { textShadow: 'none', boxShadow: 'none' },
        {
          textShadow: '0 0 24px rgba(22, 102, 231, 0.5), 0 0 48px rgba(59,130,246,0.25)',
          boxShadow: '0 0 24px 0 rgba(59,130,246,0.25)',
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'top 40%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Hero animations
    const tl = gsap.timeline()
    tl.fromTo(".hero-title", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" })
      .fromTo(".hero-subtitle", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.5")
      .fromTo(".hero-buttons", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.3")
      .fromTo(
        ".hero-dashboard",
        { x: 100, opacity: 0, scale: 0.8 },
        { x: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
        "-=0.8",
      )

    // Animate Why We Exist section paragraphs (simplified)
    gsap.utils.toArray('.why-animate').forEach((el: any, i: number) => {
      gsap.fromTo(el, {
        opacity: 0,
        y: 20
      }, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: i * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          once: true
        },
      })
    })

    // Navbar scroll effect
    ScrollTrigger.create({
      trigger: "body",
      start: "100px top",
      end: "bottom bottom",
      onUpdate: (self) => {
        if (navRef.current) {
          if (self.direction === 1 && self.progress > 0.1) {
            gsap.to(navRef.current, { y: -100, duration: 0.3 })
          } else {
            gsap.to(navRef.current, { y: 0, duration: 0.3 })
          }
        }
      },
    })

    // Parallax effects
    gsap.utils.toArray(".parallax-element").forEach((element: any) => {
      gsap.to(element, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
    })

    // Section animations (simplified) - Faster and play once
    gsap.utils.toArray(".section-animate").forEach((section: any, index) => {
      gsap.fromTo(
        section,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            once: true
          },
        },
      )
    })

    // Team section animations (simplified)


    // Technology section animations with enhanced text effects
    gsap.utils.toArray('.tech-card-animate').forEach((card: any, i: number) => {
      const title = card.querySelector('.tech-title-animate')
      const text = card.querySelector('.tech-text-animate')
      const image = card.querySelector('.tech-image-animate')
      const highlights = card.querySelectorAll('.text-highlight')
      const bolds = card.querySelectorAll('.text-bold')

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none reverse',
        }
      })

      // Card entrance animation
      tl.fromTo(card, {
        opacity: 0,
        y: 60,
        scale: 0.95
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out'
      })

        // Title animation with character splitting
        .fromTo(title.children, {
          opacity: 0,
          y: 20,
          rotateX: -90
        }, {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.03,
          ease: 'back.out(1.7)'
        }, '-=0.4')

        // Text animation with highlight emphasis
        .fromTo(text, {
          opacity: 0,
          y: 30,
          filter: 'blur(2px)'
        }, {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: 'power2.out'
        }, '-=0.4')

        // Highlight words animation
        .fromTo(highlights, {
          backgroundColor: 'rgba(59, 130, 246, 0)',
          color: 'inherit'
        }, {
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          color: '#2563eb',
          duration: 0.4,
          stagger: 0.1,
          ease: 'power2.inOut'
        }, '-=0.4')

        // Bold words emphasis
        .fromTo(bolds, {
          scale: 1,
          fontWeight: 400
        }, {
          scale: 1.05,
          fontWeight: 700,
          duration: 0.3,
          stagger: 0.1,
          ease: 'power2.out'
        }, '-=0.3')

        // Image animation
        .fromTo(image, {
          opacity: 0,
          scale: 0.8,
          rotationY: 15
        }, {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1,
          ease: 'power3.out'
        }, '-=0.7')
    })

    // Enhanced hover animations for tech cards
    gsap.utils.toArray('.tech-card-animate').forEach((card: any) => {
      const image = card.querySelector('.tech-image-animate img')
      const title = card.querySelector('.tech-title-animate')

      card.addEventListener('mouseenter', () => {
        gsap.to(image, {
          scale: 1.1,
          rotation: 2,
          duration: 0.4,
          ease: 'power2.out'
        })
        gsap.to(title, {
          color: '#2563eb',
          x: 10,
          duration: 0.3,
          ease: 'power2.out'
        })
      })

      card.addEventListener('mouseleave', () => {
        gsap.to(image, {
          scale: 1,
          rotation: 0,
          duration: 0.4,
          ease: 'power2.out'
        })
        gsap.to(title, {
          color: '#2563eb',
          x: 0,
          duration: 0.3,
          ease: 'power2.out'
        })
      })
    })

    // Partner logos animation
    gsap.utils.toArray('.partner-logo-animate').forEach((logo: any, i: number) => {
      const image = logo.querySelector('.partner-image')

      // Initial entrance animation
      gsap.fromTo(logo, {
        opacity: 0,
        x: -100,
        rotationY: -30,
        scale: 0.8
      }, {
        opacity: 1,
        x: 0,
        rotationY: 0,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        delay: i * 0.3
      })

      // Continuous floating animation
      gsap.to(logo, {
        y: '-10',
        duration: 1.5,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1
      })
    })



    // Technology Photo Cards Animation - Load all at once with scroll trigger
    let techCardsAnimated = false; // Flag to ensure animation only runs once

    gsap.utils.toArray('.tech-photo-card').forEach((card: any, i: number) => {
      gsap.fromTo(card, {
        opacity: 0,
        y: 60,
        scale: 0.9
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        delay: i * 0.15, // Slightly longer stagger for better visual effect
        scrollTrigger: {
          trigger: '#technology',
          start: 'top 80%',
          once: true, // Only play once, don't repeat on scroll back
          onEnter: () => {
            if (!techCardsAnimated) {
              techCardsAnimated = true;
            }
          }
        }
      })
    })

    // Navbar color change on scroll
    const handleScroll = () => {
      const heroSection = heroRef.current
      const storySection = document.getElementById('story')

      if (heroSection && storySection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        const scrollPosition = window.scrollY + 100 // Add offset for navbar height

        // Change to black when scrolling past hero section
        if (scrollPosition > heroBottom) {
          setNavLinksWhite(false)
        } else {
          setNavLinksWhite(true)
        }
      }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Floating Background Elements */}
      <FloatingElements />

      {/* Modern Circular Navigation */}
      <header ref={navRef} className="fixed top-3 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-2 sm:px-4">
        <nav className="nav-circle px-4 sm:px-6 md:px-8 py-3 sm:py-4 shadow-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="nav-logo-container relative cursor-pointer">
                <img
                  src="/logo neem.png"
                  alt="NEEM Logo"
                  className="h-8 sm:h-10 md:h-12 w-auto object-contain"
                />
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <Link
                href="#story"
                className={`nav-link-glass px-3 xl:px-4 py-2 text-xs xl:text-sm font-medium transition-all duration-300 hover:scale-105 rounded-full relative overflow-hidden ${navLinksWhite
                  ? 'text-white hover:text-blue-300'
                  : 'text-gray-700 hover:text-blue-600'
                  }`}
              >
                Story
              </Link>
              <Link
                href="#technology"
                className={`nav-link-glass px-3 xl:px-4 py-2 text-xs xl:text-sm font-medium transition-all duration-300 hover:scale-105 rounded-full relative overflow-hidden ${navLinksWhite
                  ? 'text-white hover:text-blue-300'
                  : 'text-gray-700 hover:text-blue-600'
                  }`}
              >
                Services
              </Link>
              <Link
                href="#team"
                className={`nav-link-glass px-3 xl:px-4 py-2 text-xs xl:text-sm font-medium transition-all duration-300 hover:scale-105 rounded-full relative overflow-hidden ${navLinksWhite
                  ? 'text-white hover:text-blue-300'
                  : 'text-gray-700 hover:text-blue-600'
                  }`}
              >
                Team
              </Link>
              <Link
                href="#contact"
                className={`nav-link-glass px-3 xl:px-4 py-2 text-xs xl:text-sm font-medium transition-all duration-300 hover:scale-105 rounded-full relative overflow-hidden ${navLinksWhite
                  ? 'text-white hover:text-blue-300'
                  : 'text-gray-700 hover:text-blue-600'
                  }`}
              >
                Contact
              </Link>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="hidden lg:block">
                <a
                  href="https://eu.makeforms.co/bb4hlb3/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ModernButton variant="primary" size="sm">
                    Partner With Us
                  </ModernButton>
                </a>
              </div>
              <button
                className="lg:hidden p-2 sm:p-3 rounded-full liquid-glass-icon transition-all duration-300 relative group"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="relative w-4 h-4 sm:w-5 sm:h-5">
                  <span
                    className={`absolute block h-0.5 w-4 sm:w-5 transform transition-all duration-300 ease-in-out ${navLinksWhite ? 'bg-white' : 'bg-gray-700'
                      } ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`}
                  />
                  <span
                    className={`absolute block h-0.5 w-4 sm:w-5 transform transition-all duration-300 ease-in-out ${navLinksWhite ? 'bg-white' : 'bg-gray-700'
                      } ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                  />
                  <span
                    className={`absolute block h-0.5 w-4 sm:w-5 transform transition-all duration-300 ease-in-out ${navLinksWhite ? 'bg-white' : 'bg-gray-700'
                      } ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`}
                  />
                </div>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Backdrop */}
        {isMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/20 z-40 transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 mt-2 sm:mt-4 transition-all duration-500 ease-in-out transform z-50 ${isMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto scale-100'
            : 'opacity-0 -translate-y-4 pointer-events-none scale-95'
            }`}
        >
          <div className="liquid-glass-menu rounded-xl sm:rounded-2xl overflow-hidden mx-2 sm:mx-0">
            <div className="px-4 sm:px-6 py-4 sm:py-6">
              <div className="space-y-2 sm:space-y-3">
                <Link
                  href="#story"
                  className={`mobile-menu-item liquid-glass liquid-glass-blue liquid-ripple liquid-float flex items-center px-3 sm:px-5 py-3 sm:py-4 text-gray-700 hover:text-blue-600 rounded-xl sm:rounded-2xl transition-all duration-300 group ${isMenuOpen ? 'animate-in' : ''
                    }`}
                  onClick={() => setIsMenuOpen(false)}

                >
                  <div className="liquid-glass-icon w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 transition-all duration-300">
                    <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="flex-1 relative z-10">
                    <span className="font-semibold text-sm sm:text-base text-gray-800 group-hover:text-blue-700 transition-colors">Our Story</span>
                    <p className="text-xs sm:text-sm text-gray-600 mt-0.5 group-hover:text-blue-600 transition-colors">Learn about our mission</p>
                  </div>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-auto opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300 text-blue-600" />
                </Link>

                <Link
                  href="#technology"
                  className={`mobile-menu-item liquid-glass liquid-glass-green liquid-ripple liquid-float flex items-center px-3 sm:px-5 py-3 sm:py-4 text-gray-700 hover:text-green-600 rounded-xl sm:rounded-2xl transition-all duration-300 group ${isMenuOpen ? 'animate-in' : ''
                    }`}
                  onClick={() => setIsMenuOpen(false)}

                >
                  <div className="liquid-glass-icon w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 transition-all duration-300">
                    <Smartphone className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="flex-1 relative z-10">
                    <span className="font-semibold text-sm sm:text-base text-gray-800 group-hover:text-green-700 transition-colors">Services</span>
                    <p className="text-xs sm:text-sm text-gray-600 mt-0.5 group-hover:text-green-600 transition-colors">Smart insole technology</p>
                  </div>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-auto opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300 text-green-600" />
                </Link>

                <Link
                  href="#team"
                  className={`mobile-menu-item liquid-glass liquid-glass-purple liquid-ripple liquid-float flex items-center px-3 sm:px-5 py-3 sm:py-4 text-gray-700 hover:text-purple-600 rounded-xl sm:rounded-2xl transition-all duration-300 group ${isMenuOpen ? 'animate-in' : ''
                    }`}
                  onClick={() => setIsMenuOpen(false)}

                >
                  <div className="liquid-glass-icon w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 transition-all duration-300">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="flex-1 relative z-10">
                    <span className="font-semibold text-sm sm:text-base text-gray-800 group-hover:text-purple-700 transition-colors">Team</span>
                    <p className="text-xs sm:text-sm text-gray-600 mt-0.5 group-hover:text-purple-600 transition-colors">Meet our experts</p>
                  </div>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-auto opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300 text-purple-600" />
                </Link>

                <Link
                  href="#contact"
                  className={`mobile-menu-item liquid-glass liquid-glass-orange liquid-ripple liquid-float flex items-center px-3 sm:px-5 py-3 sm:py-4 text-gray-700 hover:text-orange-600 rounded-xl sm:rounded-2xl transition-all duration-300 group ${isMenuOpen ? 'animate-in' : ''
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="liquid-glass-icon w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 transition-all duration-300">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="flex-1 relative z-10">
                    <span className="font-semibold text-sm sm:text-base text-gray-800 group-hover:text-orange-700 transition-colors">Contact</span>
                    <p className="text-xs sm:text-sm text-gray-600 mt-0.5 group-hover:text-orange-600 transition-colors">Get in touch with us</p>
                  </div>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-auto opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300 text-orange-600" />
                </Link>
              </div>

              {/* Partner With Us Button in Mobile Menu */}
              <div className={`mt-8 pt-6 border-t border-white/20 mobile-menu-item ${isMenuOpen ? 'animate-in' : ''}`}>
                <div className="liquid-glass liquid-ripple rounded-2xl p-1">
                  <a
                    href="https://eu.makeforms.co/bb4hlb3/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <ModernButton
                      variant="primary"
                      size="lg"
                      className="w-full justify-center group hover:scale-105 transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                      <Users className="h-5 w-5 mr-3 group-hover:animate-pulse relative z-10" />
                      <span className="font-semibold relative z-10">Partner With Us</span>
                      <div className="ml-3 w-2 h-2 bg-white rounded-full opacity-75 group-hover:animate-ping relative z-10"></div>
                    </ModernButton>
                  </a>
                </div>
                <p className="text-center text-sm text-gray-400 mt-3 font-medium">
                  Join us in saving lives through innovation ✨
                </p>
              </div>

            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Background Image and Enhanced Design */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Enhanced Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/team/foot.webp"
            alt="Diabetic foot care - Professional medical background"
            className="w-full h-full object-cover object-center transition-transform duration-700"
          />
          {/* Reduced overlay opacity to show background image */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/45"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"></div>
        </div>

        {/* Animated particles overlay */}
        <div className="absolute inset-0 z-5 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse delay-1000"></div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-16 sm:py-20 md:py-32 relative z-10">
          <div className="flex items-center justify-center min-h-[75vh] sm:min-h-[80vh]">
            {/* Centered Content */}
            <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8 lg:space-y-12">
              <div className="space-y-4 sm:space-y-6 lg:space-y-10">

                {/* Main Heading */}
                <h1 className="hero-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.1] tracking-tight px-2">
                  Protecting Diabetic Patients from{" "}
                  <span className="relative inline-block">
                    <span className="text-gradient-animated">
                      Amputation
                    </span>
                    <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 rounded-full shadow-lg hero-glow"></div>
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="hero-subtitle text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed font-light max-w-4xl mx-auto px-4">
                  Our smart insole detects foot ulcers before they begin saving lives, preserving independence, and
                  restoring dignity.
                </p>

                {/* Key Stats */}
                <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 pt-4 sm:pt-6">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400">90%</div>
                    <div className="text-xs sm:text-sm md:text-base text-gray-300">Prevention Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400">24/7</div>
                    <div className="text-xs sm:text-sm md:text-base text-gray-300">Monitoring</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="hero-buttons flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center pt-2 sm:pt-4 px-4">
                <ModernButton
                  onClick={() => window.open("https://www.youtube.com/watch?v=07gVpwzimEA", "_blank")}
                  variant="primary"
                  size="lg"
                  icon={<Play className="h-4 w-4 sm:h-5 sm:w-5" />}
                  className="magnetic-button rounded-full px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg lg:text-xl shadow-2xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 transform hover:scale-105 transition-all duration-300"
                >
                  Patient Story
                </ModernButton>
                <ModernButton
                  variant="outline"
                  size="lg"
                  icon={<ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />}
                  className="magnetic-button rounded-full px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg lg:text-xl shadow-lg learn-more-btn bg-transparent backdrop-blur-sm border-2 border-blue-500/70 text-white hover:bg-blue-500/10 hover:border-blue-400 transform hover:scale-105 transition-all duration-300"
                  onClick={() => setShowAbout(true)}
                >
                  Learn More
                </ModernButton>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center space-y-2 sm:space-y-3 text-white animate-bounce">
            <span className="text-xs sm:text-sm font-medium tracking-wide hidden sm:block">Scroll to explore</span>
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
              <div className="w-0.5 sm:w-1 h-2 sm:h-3 bg-white rounded-full mt-1.5 sm:mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
        {/* Bottom rounded fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-white rounded-t-3xl z-5"></div>
      </section>

      {showAbout && (
        <div
          className="fixed inset-0 bg-black/70 z-50 backdrop-blur-md"
          onClick={(e) => {
            // Close only if clicking the backdrop, not the content
            if (e.target === e.currentTarget) {
              setShowAbout(false);
            }
          }}
        >
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
                <div className="pointer-events-auto w-screen max-w-6xl">
                  <div className="flex h-full flex-col bg-white shadow-xl overflow-hidden">
                    <AboutNEEM onClose={() => setShowAbout(false)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Our Story Section - Sticky Cards Design */}
      <section id="story" className="relative bg-white">
        {/* Section Header */}
        <div className="container px-3 sm:px-4 py-12 sm:py-16">
          <div className="max-w-6xl mx-auto text-center space-y-4 sm:space-y-6">
            <Badge className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base lg:text-lg">
              📖 Our Story: Why We Exist
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight px-2">
              We couldn't accept that <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">1 in 6 diabetic patients</span> in Rwanda risks losing a limb
            </h2>
          </div>
        </div>

        {/* Sticky Cards Container */}
        <div className="relative">
          <div className="container px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* Left Column - Stacked Cards Carousel */}
              <div className="relative max-w-2xl">
                {/* Cards Container */}
                <div className="relative h-[600px] story-cards-container">

                  {/* Card 3 - Bottom Layer (Our Mission + Stats) */}
                  <div className="absolute inset-0 story-card-3" style={{ transform: 'translateY(40px)', zIndex: 1 }}>
                    <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl h-full border border-gray-200">
                      <div className="space-y-8">
                        <h3 className="story-card-text">
                          "We're not just building tech—we're protecting futures."
                        </h3>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6 pt-8">
                          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg border border-blue-200">
                            <div className="text-3xl font-black text-blue-600 mb-2">90%</div>
                            <div className="text-sm font-semibold text-gray-700">Prevention Rate</div>
                          </div>
                          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg border border-blue-200">
                            <div className="text-3xl font-black text-blue-600 mb-2">24/7</div>
                            <div className="text-sm font-semibold text-gray-700">Monitoring</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 - Middle Layer (Our Solution) */}
                  <div className="absolute inset-0 story-card-2" style={{ transform: 'translateY(20px)', zIndex: 2 }}>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 lg:p-12 shadow-xl h-full border border-blue-200">
                      <div className="flex items-center h-full">
                        <h3 className="story-card-text">
                          "At NEEM, we couldn't accept that. That's why we built a smart, affordable, non-invasive insole that can detect ulcers before they develop preventing up to <span className="text-blue-600">90% of amputations</span>."
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Card 1 - Top Layer (The Problem) - Active */}
                  <div className="absolute inset-0 story-card-1" style={{ transform: 'translateY(0px)', zIndex: 3 }}>
                    <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl h-full border border-gray-200">
                      <div className="flex items-center h-full">
                        <h3 className="story-card-text">
                          "When that happens, it's not just a foot that's lost it's mobility, dignity, and income."
                        </h3>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Progress Indicator */}
                <div className="flex justify-center mt-8 space-x-4">
                  <div className="relative w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="absolute top-0 left-0 h-full bg-blue-600 rounded-full story-progress-1"></div>
                  </div>
                  <div className="relative w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="absolute top-0 left-0 h-full bg-blue-600 rounded-full story-progress-2"></div>
                  </div>
                  <div className="relative w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="absolute top-0 left-0 h-full bg-blue-600 rounded-full story-progress-3"></div>
                  </div>
                </div>


              </div>

              {/* Right Column - Sticky Image */}
              <div className="relative lg:sticky lg:top-24">
                <div className="relative group">
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>

                  {/* Main image */}
                  <div className="relative">
                    <img
                      src="/ChatGPT Image Jul 15, 2025, 08_00_14 PM.jpg"
                      alt="NEEM - Preventing Diabetic Amputations"
                      className="rounded-3xl shadow-2xl w-full object-cover h-[600px] lg:h-[700px] transform group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                    {/* Floating badge */}
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg">
                      <span className="text-sm font-semibold text-blue-600">Saving Lives Daily</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Technology Section - Enhanced with Cards */}
      <section id="technology" className="section-animate py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container px-4 relative z-10">
          <div className="text-center space-y-6 mb-20">
            <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200 px-6 py-3 rounded-full text-lg">
              🧪 What We Do
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
              Smart Technology That <span className="text-gradient">Saves Lives</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive solution combines cutting-edge sensors with real-time monitoring to prevent diabetic
              foot complications before they start.
            </p>
          </div>

          {/* Photo Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1 - Smart Insoles */}
            <div className="tech-photo-card group cursor-pointer">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                {/* Background Image */}
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: 'url(/custom%20insole.webp)' }}>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
                </div>

                {/* Default State - Bottom Title */}
                <div className="absolute bottom-6 left-6 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="tech-photo-card-title">
                    Smart Insoles +
                  </h3>
                </div>

                {/* Hover State - Info Panel */}
                <div className="absolute bottom-4 left-0 right-0 mx-4 bg-white p-6 rounded-2xl shadow-xl transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-out">
                  <h3 className="tech-photo-card-hover-title">
                    Smart Insoles, Made Just For You
                  </h3>
                  <p className="tech-photo-card-description">
                    Our experts make a special mold of your feet to create smart insoles that fit you perfectly. Custom-crafted using advanced 3D printing for optimal comfort and effectiveness.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Personal Care */}
            <div className="tech-photo-card group cursor-pointer">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                {/* Background Image */}
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: 'url(/personalized%20care.jpg)' }}>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
                </div>

                {/* Default State - Bottom Title */}
                <div className="absolute bottom-6 left-6 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="tech-photo-card-title">
                    Personal Care +
                  </h3>
                </div>

                {/* Hover State - Info Panel */}
                <div className="absolute bottom-4 left-0 right-0 mx-4 bg-white p-6 rounded-2xl shadow-xl transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-out">
                  <h3 className="tech-photo-card-hover-title">
                    Personal Care for You
                  </h3>
                  <p className="tech-photo-card-description">
                    Everyone is different, so your care should be too. We give you our full attention to understand your health needs, ensuring personalized monitoring and care recommendations.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Early Health Alerts */}
            <div className="tech-photo-card group cursor-pointer">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                {/* Background Image */}
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: 'url(/early%20health%20alert.jpg)' }}>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
                </div>

                {/* Default State - Bottom Title */}
                <div className="absolute bottom-6 left-6 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="tech-photo-card-title">
                    Health Alerts +
                  </h3>
                </div>

                {/* Hover State - Info Panel */}
                <div className="absolute bottom-4 left-0 right-0 mx-4 bg-white p-6 rounded-2xl shadow-xl transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-out">
                  <h3 className="tech-photo-card-hover-title">
                    Early Health Alerts
                  </h3>
                  <p className="tech-photo-card-description">
                    Smart sensors in your insoles watch over your feet all day. They find early signs of problems and send alerts right away, helping you act fast and worry less.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* Request Demo Section - Floating Card */}
      <section className="section-animate py-16 bg-white">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            {/* Floating Demo Card */}
            <div className="relative mx-4 md:mx-8 lg:mx-10">
              <div className="demo-card-floating rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 group">
                {/* Background Image */}
                <div className="relative h-[350px] md:h-[400px] lg:h-[450px]">
                  <img
                    src="/requist demo.webp"
                    alt="Request Demo - NEEM Smart Insole Technology"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20"></div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8 md:px-16">
                    <h2 className="demo-card-title text-white mb-6 leading-tight">
                      A unified ecosystem for<br />
                      customer action
                    </h2>
                    <p className="demo-card-subtitle text-white/90 mb-8 max-w-3xl leading-relaxed">
                      NEEM is a healthcare platform that doubles as both your single source of
                      truth and an everyday patient-centric control centre for your medical,
                      monitoring and prevention teams.
                    </p>
                    <a
                      href="https://eu.makeforms.co/bb4hlb3/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="demo-button group/btn"
                    >
                      <span className="relative z-10 flex items-center">
                        Request a demo
                        <ArrowRight className="ml-3 h-5 w-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="section-animate py-32 bg-gray-50">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="product-card-container bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">

                {/* Product Image Section */}
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-8 lg:p-12 flex items-center justify-center">
                  {/* Size Badge */}
                  <div className="absolute top-6 left-6 z-10">
                    <div className="size-badge">
                      <span className="size-badge-text">Universal</span>
                    </div>
                  </div>

                  {/* Main Product Image */}
                  <div className="relative w-full max-w-md mx-auto">
                    <img
                      src="/4.webp"
                      alt="NEEM Smart Insole"
                      className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500"
                    />

                    {/* Rotation Indicator */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="rotation-indicator">
                        <div className="rotation-dot"></div>
                        <span className="rotation-text">Rotate</span>
                      </div>
                    </div>
                  </div>

                  {/* Product Thumbnails */}
                  <div className="absolute bottom-6 left-6 flex space-x-3">
                    <div className="thumbnail-container active">
                      <img src="/4.webp" alt="View 1" className="thumbnail-image" />
                    </div>
                    <div className="thumbnail-container">
                      <img src="/4.webp" alt="View 2" className="thumbnail-image opacity-60" />
                    </div>
                    <div className="thumbnail-container">
                      <img src="/4.webp" alt="View 3" className="thumbnail-image opacity-60" />
                    </div>
                  </div>
                </div>

                {/* Product Details Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">

                    {/* Product Category */}
                    <div className="product-category">
                      PREMIUM INSOLES
                    </div>

                    {/* Product Title */}
                    <h2 className="product-title">
                      NEEM Silicone Insole
                    </h2>

                    {/* Reviews */}
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <span className="product-rating">4.5/5</span>
                      <span className="product-reviews">12 Reviews</span>
                    </div>

                    {/* Product Description */}
                    <p className="product-description">
                      Our silicon insole is specially designed for diabetic patients to reduce the risk of foot complications,
                      while also providing lasting comfort and relief for anyone experiencing foot pain.
                    </p>

                    {/* Size Options */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="size-label">Available Sizes</span>

                      </div>
                      <div className="flex space-x-3">
                        {['S', 'M', 'L', 'XL'].map((size) => (
                          <div
                            key={size}
                            className={`size-option ${selectedSize === size ? 'active' : ''}`}
                            onClick={() => setSelectedSize(size)}
                            style={{ cursor: 'pointer' }}
                          >
                            {size}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Price */}
                    <div className="product-price">
                      {(35000 * quantity).toLocaleString()} RWF
                    </div>

                    {/* Quantity and Buy Button */}
                    <div className="flex items-center space-x-4">
                      <div className="quantity-selector">
                        <button
                          className="quantity-btn"
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        >
                          -
                        </button>
                        <span className="quantity-value">{quantity}</span>
                        <button
                          className="quantity-btn"
                          onClick={() => setQuantity(quantity + 1)}
                        >
                          +
                        </button>
                      </div>

                      <button
                        className="buy-button group"
                        onClick={() => setShowPopup(true)}
                      >
                        <span className="relative z-10">Buy Now</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="section-animate py-32 section-bg">
        <div className="container px-4">
          <div className="text-center space-y-6 mb-20">
            <Badge className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-6 py-3 rounded-full text-lg">
              🤝 Our Trusted Partners
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
              Backed by <span className="text-gradient">Leading Institutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proudly supported by Rwanda's best institutions.
            </p>
          </div>

          {/* Partners Grid */}
          <div className="partners-grid-container">
            <div className="partners-grid">
              {/* University of Rwanda */}
              <div className="partner-card partner-logo-animate">
                <div className="partner-card-inner">
                  <Image
                    src="/university-of-rwanda-logo.png"
                    alt="University of Rwanda"
                    width={120}
                    height={80}
                    className="partner-logo-img"
                  />
                </div>
                <div className="partner-grid-overlay"></div>
              </div>

              {/* ALX */}
              <div className="partner-card partner-logo-animate">
                <div className="partner-card-inner">
                  <Image
                    src="/alx logo.webp"
                    alt="ALX"
                    width={120}
                    height={80}
                    className="partner-logo-img"
                  />
                </div>
                <div className="partner-grid-overlay"></div>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-animate py-32 section-bg">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-700 px-6 py-3 rounded-full text-lg mb-12">
              💬 What Our Users Say
            </Badge>

            <AnimatedCard className="bg-gradient-to-br from-blue-50 via-white to-blue-50 p-12">
              <div className="flex justify-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 text-yellow-400 fill-current mx-1" />
                ))}
              </div>
              <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
                "I've already lost one leg. NEEM's insole is helping me protect the other. Every diabetic patient should
                have one."
              </blockquote>
              <div className="flex items-center justify-center space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">CP</span>
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-900 text-lg">CHUK Patient</p>
                  <p className="text-gray-600">Video Available</p>
                </div>
              </div>
              <ModernButton
                variant="primary"
                size="lg"
                icon={<Play className="h-5 w-5" />}
                className="mt-8"
                onClick={() => window.open("https://www.youtube.com/watch?v=07gVpwzimEA", "_blank")}
              >
                Watch Testimonial
              </ModernButton>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-animate py-32 bg-white">
        <div className="container px-4">
          <div className="text-center space-y-6 mb-20">
            <Badge className="bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 px-6 py-3 rounded-full text-lg">
              📚 Latest Insights
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
              Healthcare <span className="text-gradient">Innovation</span> Blog
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest insights on diabetic care, healthcare technology, and our mission to save
              lives.
            </p>
          </div>

          <BlogSection showAll={showAllArticles} />

          {!showAllArticles && (
            <div className="text-center mt-6">
              <ModernButton
                variant="outline"
                size="lg"
                icon={<ArrowRight className="h-5 w-5 text-white" />}
                className="bg-blue-600 text-white hover:bg-blue-700"
                onClick={() => setShowAllArticles(true)}
              >
                View All Articles
              </ModernButton>
            </div>
          )}

          {showAllArticles && (
            <div className="text-center mt-6">
              <ModernButton
                variant="outline"
                size="lg"
                className="bg-gray-600 text-white hover:bg-gray-700"
                onClick={() => setShowAllArticles(false)}
              >
                Show Less
              </ModernButton>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-animate py-32 bg-gray-50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            {/* FAQ Title */}
            <h2 className="faq-main-title">
              Frequently Asked Questions
            </h2>

            {/* FAQ Items */}
            <div className="faq-items-container">
              {(showAllFAQs ? faqData : faqData.slice(0, 4)).map((faq, index) => (
                <div key={index} className={`faq-item-minimal ${openFAQ === index ? 'active' : ''}`}>
                  <div className="faq-question-row" onClick={() => toggleFAQ(index)}>
                    <span className="faq-question-text">{faq.question}</span>
                    <button className="faq-toggle-btn">
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                  {openFAQ === index && (
                    <div className="faq-answer-content">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Read More Button */}
            {!showAllFAQs && (
              <div className="faq-read-more-container">
                <button className="faq-read-more-btn" onClick={handleShowAllFAQs}>
                  Read more FAQs
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-animate py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%23ffffff" fillOpacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
          }}
        />

        <div className="container px-4 relative">
          <div className="text-center space-y-12 text-white">
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              💼 Join Our <span className="text-blue-200">Mission</span>
            </h2>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Are you a healthcare provider, hospital, investor, or Institutions ? Join our mission to stop preventable
              amputations across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://eu.makeforms.co/bb4hlb3/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ModernButton variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transition-all duration-300">
                  📌 Partner With Us
                </ModernButton>
              </a>
              <a
                href="https://eu.makeforms.co/tqvhwn7/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ModernButton
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300"
                >
                  📩 Ask Question
                </ModernButton>
              </a>
              <a
                href="https://eu.makeforms.co/awyaduf/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ModernButton
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300"
                >
                  📈 Investor Inquiry
                </ModernButton>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Traffic Notification */}
      {showTrafficNotification && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-lg shadow-lg animate-bounce-once">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-amber-800">Form Submission Failed</h3>
                <div className="mt-2 text-sm text-amber-700">
                  <p>Your form was not submitted due to high traffic on this form. Please use the Ask Form on the Join Us section instead.</p>
                </div>
                <div className="mt-4">
                  <div className="-mx-2 -my-1.5 flex">
                    <a
                      href="https://eu.makeforms.co/bb4hlb3/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md bg-amber-100 px-2 py-1.5 text-sm font-medium text-amber-800 hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 focus:ring-offset-amber-50"
                    >
                      Go to Join Us Form
                    </a>
                    <button
                      type="button"
                      onClick={() => setShowTrafficNotification(false)}
                      className="ml-3 rounded-md bg-amber-50 px-2 py-1.5 text-sm font-medium text-amber-800 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 focus:ring-offset-amber-50"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modern Contact Section */}
      <section id="contact" className="section-animate py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container px-4">
          <div className="text-center space-y-6 mb-20">
            <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-6 py-3 rounded-full text-lg">
              📬 Get In Touch
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
              Contact <span className="text-gradient">Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform diabetic care? Let's discuss how we can work together to save lives.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">

            {/* Contact Form */}
            <div className="space-y-8">
              <AnimatedCard delay={0.1} className="contact-form-glass p-8 rounded-3xl">
                <div className="space-y-6">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Send us a Message</h3>
                    <p className="text-gray-600">We'll get back to you within 24 hours</p>
                  </div>

                  <form className="space-y-6">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 flex items-center">
                        <Users className="h-4 w-4 mr-2 text-blue-600" />
                        Full Name *
                      </label>
                      <Input
                        placeholder="Enter your full name"
                        className="contact-input rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 h-12"
                        required
                      />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-green-600" />
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        className="contact-input rounded-2xl border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 h-12"
                        required
                      />
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 flex items-center">
                        <MessageCircle className="h-4 w-4 mr-2 text-purple-600" />
                        Message *
                      </label>
                      <Textarea
                        placeholder="Tell us about your inquiry, partnership opportunity, or how we can help..."
                        rows={6}
                        className="contact-input rounded-2xl border-2 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 resize-none"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsSubmitting(true);

                          // Show notification after 3 seconds
                          setTimeout(() => {
                            setIsSubmitting(false);
                            setShowTrafficNotification(true);

                            // Hide notification after 5 seconds
                            setTimeout(() => {
                              setShowTrafficNotification(false);
                            }, 5000);
                          }, 3000);
                        }}
                        disabled={isSubmitting}
                        className="w-full h-14 text-lg font-semibold rounded-2xl group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                        <div className="flex items-center justify-center">
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                              <span className="relative z-10">Submitting...</span>
                            </>
                          ) : (
                            <>
                              <Mail className="h-5 w-5 mr-3 group-hover:animate-pulse relative z-10" />
                              <span className="relative z-10">Send Message</span>
                              <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                            </>
                          )}
                        </div>
                      </button>
                    </div>

                    <div className="text-center text-sm text-gray-500 pt-2">
                      We respect your privacy and will never share your information.
                    </div>
                  </form>
                </div>
              </AnimatedCard>
            </div>

            {/* Map and Contact Info */}
            <div className="space-y-8">

              {/* Contact Information Cards */}
              <div className="grid gap-4">
                <AnimatedCard delay={0.2} className="contact-info-glass p-6 rounded-2xl flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Location</h4>
                    <p className="text-gray-600">Norrsken House Kigali, Rwanda</p>
                  </div>
                </AnimatedCard>

                <AnimatedCard delay={0.3} className="contact-info-glass p-6 rounded-2xl flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Email</h4>
                    <a href="mailto:neemgroup@outlook.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                      neemgroup@outlook.com
                    </a>
                  </div>
                </AnimatedCard>
              </div>

              {/* Embedded Map */}
              <AnimatedCard delay={0.4} className="map-container rounded-3xl overflow-hidden shadow-2xl">
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold text-gray-800">Norrsken House Kigali</span>
                      </div>
                    </div>
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5050469965067!2d30.059993200000008!3d-1.9511718999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca5a86d814c61%3A0x7d3b83e12b1c11a9!2sNorrsken%20House%20Kigali!5e0!3m2!1sen!2srw!4v1752854416001!5m2!1sen!2srw"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-3xl"
                  />
                </div>
              </AnimatedCard>


            </div>
          </div>
        </div>
      </section>

      {/* Simplified Footer */}
      <footer className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
        {/* Main Footer Content */}
        <div className="relative z-10 py-12">
          <div className="container px-4">
            {/* Main Section */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">

              {/* Brand Section */}
              <div className="space-y-6">
                <div className="footer-glass-card p-6 rounded-2xl">
                  <div className="flex items-center space-x-3 mb-4">
                    <img
                      src="/logo neem.png"
                      alt="NEEM Logo"
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Saving Limbs. <span className="text-blue-600">Restoring Lives.</span>
                  </h3>

                  {/* Mission Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 rounded-xl bg-blue-100 border border-blue-200">
                      <div className="text-xl font-bold text-blue-600">90%</div>
                      <div className="text-xs text-gray-600">Prevention</div>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-blue-100 border border-blue-200">
                      <div className="text-xl font-bold text-blue-600">24/7</div>
                      <div className="text-xs text-gray-600">Monitoring</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-6">
                <div className="footer-glass-card p-6 rounded-2xl">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Links</h3>
                  <div className="space-y-2">
                    <Link
                      href="#story"
                      className="footer-link-simple block text-gray-600 hover:text-blue-600 transition-colors py-1"
                    >
                      Our Story
                    </Link>
                    <Link
                      href="#technology"
                      className="footer-link-simple block text-gray-600 hover:text-blue-600 transition-colors py-1"
                    >
                      Services
                    </Link>
                    <Link
                      href="#team"
                      className="footer-link-simple block text-gray-600 hover:text-blue-600 transition-colors py-1"
                    >
                      Team
                    </Link>
                    <Link
                      href="#contact"
                      className="footer-link-simple block text-gray-600 hover:text-blue-600 transition-colors py-1"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="space-y-6">
                <div className="footer-glass-card p-6 rounded-2xl">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Get In Touch</h3>

                  <div className="space-y-3">
                    <a
                      href="mailto:neemgroup@outlook.com"
                      className="footer-contact-simple flex items-center p-3 rounded-xl transition-all duration-300 group hover:bg-blue-50"
                    >
                      <div className="w-8 h-8 rounded-lg bg-red-500 flex items-center justify-center mr-3">
                        <img src="/gmail.png" alt="Gmail" className="w-4 h-4" />
                      </div>
                      <div className="text-sm text-gray-600 group-hover:text-gray-800">
                        neemgroup@outlook.com
                      </div>
                    </a>

                    <a
                      href="https://www.linkedin.com/company/appo-health/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-contact-simple flex items-center p-3 rounded-xl transition-all duration-300 group hover:bg-blue-50"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center mr-3">
                        <img src="/linkedin.png" alt="LinkedIn" className="w-4 h-4" />
                      </div>
                      <div className="text-sm text-gray-600 group-hover:text-gray-800">
                        LinkedIn
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="footer-glass-card p-4 rounded-2xl">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
                <div className="text-gray-600 text-sm">
                  &copy; {new Date().getFullYear()} <span className="font-semibold text-gray-800">NEEM</span>. All rights reserved.
                </div>

                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span>Made with</span>
                  <Heart className="h-3 w-3 text-red-500" />
                  <span>in Rwanda</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Purchase Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 relative">
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Popup Header */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Order Summary</h3>
              <p className="text-gray-600">Complete your purchase</p>
            </div>

            {/* Order Details */}
            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 rounded-2xl p-4">
                <div className="flex items-center space-x-4">
                  <img src="/4.webp" alt="NEEM Smart Insole" className="w-16 h-16 object-contain rounded-lg" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">NEEM Smart Insole</h4>
                    <p className="text-sm text-gray-600">Size: {selectedSize} • Qty: {quantity}</p>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">Total:</span>
                    <span className="text-xl font-bold text-gray-900">{(30000 * quantity).toLocaleString()} RWF</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Information Form */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number (MoMo) <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  placeholder="078XXXXXXX"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
            </div>

            {/* Payment Info */}
            <div className="bg-blue-50 rounded-2xl p-4 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-900">MoMo Payment</p>
                  <p className="text-xs text-blue-700">You'll be redirected to dial the payment code</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <button
                onClick={() => setShowPopup(false)}
                className="flex-1 py-3 px-4 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handlePurchase}
                disabled={!customerName.trim() || !mobileNumber.trim()}
                className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                Pay with MoMo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
