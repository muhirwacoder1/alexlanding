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
} from "lucide-react"
import Link from "next/link"
import styles from '@/styles/tech-section.module.css'

import techStyles from '@/styles/tech-section.module.css';
import teamStyles from '@/styles/team-section.module.css';
import partnerStyles from '@/styles/partners.module.css';
import Image from 'next/image';
import FAQSection from '@/components/faq-section'

import AboutNEEM from "@/components/about/about";

export default function AppoModernLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showAbout, setShowAbout] = useState(false)
  const [showAllArticles, setShowAllArticles] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const navRef = useRef<HTMLElement>(null)

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

    // Animate Why We Exist section paragraphs (not header)
    gsap.utils.toArray('.why-animate').forEach((el: any, i: number) => {
      gsap.fromTo(el, {
        opacity: 0,
        y: 40,
        filter: 'blur(8px)'
      }, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1,
        delay: 0.2 + i * 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
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

    // Section animations
    gsap.utils.toArray(".section-animate").forEach((section: any, index) => {
      gsap.fromTo(
        section,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )
    })

    // Team section animations
    gsap.utils.toArray('.team-card-animate').forEach((card: any, i: number) => {
      const image = card.querySelector('img')
      const content = card.querySelector('.team-content')
      const socialLinks = card.querySelectorAll('a')
      
      gsap.set(card, { opacity: 0, y: 50 })
      
      ScrollTrigger.create({
        trigger: card,
        start: 'top 85%',
        onEnter: () => {
          gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            delay: i * 0.2
          })
          
          gsap.from(image, {
            scale: 1.2,
            rotation: 5,
            duration: 1.5,
            ease: 'power3.out',
            delay: i * 0.2
          })
        }
      })
    })

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
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Floating Background Elements */}
      <FloatingElements />

      {/* Modern Circular Navigation */}
      <header ref={navRef} className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">
        <nav className="nav-circle px-8 py-4 shadow-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="nav-logo-container relative cursor-pointer">
                <img 
                  src="/logo neem.png" 
                  alt="NEEM Logo" 
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-2">
              <Link
                href="#story"
                className="nav-link-glass px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 rounded-full relative overflow-hidden"
              >
                Story
              </Link>
              <Link
                href="#technology"
                className="nav-link-glass px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 rounded-full relative overflow-hidden"
              >
                Services
              </Link>
              <Link
                href="#team"
                className="nav-link-glass px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 rounded-full relative overflow-hidden"
              >
                Team
              </Link>
              <Link
                href="#contact"
                className="nav-link-glass px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 rounded-full relative overflow-hidden"
              >
                Contact
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:block">
                <ModernButton variant="primary" size="sm">
                  Partner With Us
                </ModernButton>
              </div>
              <button
                className="md:hidden p-3 rounded-full liquid-glass-icon transition-all duration-300 relative group"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="relative w-5 h-5">
                  <span 
                    className={`absolute block h-0.5 w-5 bg-gray-700 transform transition-all duration-300 ease-in-out ${
                      isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
                    }`}
                  />
                  <span 
                    className={`absolute block h-0.5 w-5 bg-gray-700 transform transition-all duration-300 ease-in-out ${
                      isMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <span 
                    className={`absolute block h-0.5 w-5 bg-gray-700 transform transition-all duration-300 ease-in-out ${
                      isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Backdrop */}
        {isMenuOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black/20 z-40 transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden absolute top-full left-0 right-0 mt-4 transition-all duration-500 ease-in-out transform z-50 ${
            isMenuOpen 
              ? 'opacity-100 translate-y-0 pointer-events-auto scale-100' 
              : 'opacity-0 -translate-y-4 pointer-events-none scale-95'
          }`}
        >
          <div className="liquid-glass-menu rounded-2xl overflow-hidden">
            <div className="px-6 py-6">
              <div className="space-y-3">
                <Link
                  href="#story"
                  className={`mobile-menu-item liquid-glass liquid-glass-blue liquid-ripple liquid-float flex items-center px-5 py-4 text-gray-700 hover:text-blue-600 rounded-2xl transition-all duration-300 group ${
                    isMenuOpen ? 'animate-in' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}

                >
                  <div className="liquid-glass-icon w-12 h-12 rounded-2xl flex items-center justify-center mr-4 transition-all duration-300">
                    <Heart className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="flex-1 relative z-10">
                    <span className="font-semibold text-base text-gray-800 group-hover:text-blue-700 transition-colors">Our Story</span>
                    <p className="text-sm text-gray-600 mt-0.5 group-hover:text-blue-600 transition-colors">Learn about our mission</p>
                  </div>
                  <ArrowRight className="h-5 w-5 ml-auto opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300 text-blue-600" />
                </Link>
                
                <Link
                  href="#technology"
                  className={`mobile-menu-item liquid-glass liquid-glass-green liquid-ripple liquid-float flex items-center px-5 py-4 text-gray-700 hover:text-green-600 rounded-2xl transition-all duration-300 group ${
                    isMenuOpen ? 'animate-in' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}

                >
                  <div className="liquid-glass-icon w-12 h-12 rounded-2xl flex items-center justify-center mr-4 transition-all duration-300">
                    <Smartphone className="h-6 w-6 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="flex-1 relative z-10">
                    <span className="font-semibold text-base text-gray-800 group-hover:text-green-700 transition-colors">Services</span>
                    <p className="text-sm text-gray-600 mt-0.5 group-hover:text-green-600 transition-colors">Smart insole technology</p>
                  </div>
                  <ArrowRight className="h-5 w-5 ml-auto opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300 text-green-600" />
                </Link>
                
                <Link
                  href="#team"
                  className={`mobile-menu-item liquid-glass liquid-glass-purple liquid-ripple liquid-float flex items-center px-5 py-4 text-gray-700 hover:text-purple-600 rounded-2xl transition-all duration-300 group ${
                    isMenuOpen ? 'animate-in' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}

                >
                  <div className="liquid-glass-icon w-12 h-12 rounded-2xl flex items-center justify-center mr-4 transition-all duration-300">
                    <Users className="h-6 w-6 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="flex-1 relative z-10">
                    <span className="font-semibold text-base text-gray-800 group-hover:text-purple-700 transition-colors">Team</span>
                    <p className="text-sm text-gray-600 mt-0.5 group-hover:text-purple-600 transition-colors">Meet our experts</p>
                  </div>
                  <ArrowRight className="h-5 w-5 ml-auto opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300 text-purple-600" />
                </Link>
                
                <Link
                  href="#contact"
                  className={`mobile-menu-item liquid-glass liquid-glass-orange liquid-ripple liquid-float flex items-center px-5 py-4 text-gray-700 hover:text-orange-600 rounded-2xl transition-all duration-300 group ${
                    isMenuOpen ? 'animate-in' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="liquid-glass-icon w-12 h-12 rounded-2xl flex items-center justify-center mr-4 transition-all duration-300">
                    <Mail className="h-6 w-6 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="flex-1 relative z-10">
                    <span className="font-semibold text-base text-gray-800 group-hover:text-orange-700 transition-colors">Contact</span>
                    <p className="text-sm text-gray-600 mt-0.5 group-hover:text-orange-600 transition-colors">Get in touch with us</p>
                  </div>
                  <ArrowRight className="h-5 w-5 ml-auto opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300 text-orange-600" />
                </Link>
              </div>
              
              {/* Partner With Us Button in Mobile Menu */}
              <div className={`mt-8 pt-6 border-t border-white/20 mobile-menu-item ${isMenuOpen ? 'animate-in' : ''}`}>
                <div className="liquid-glass liquid-ripple rounded-2xl p-1">
                  <ModernButton 
                    variant="primary" 
                    size="lg" 
                    className="w-full justify-center group hover:scale-105 transition-all duration-300 relative overflow-hidden"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                    <Users className="h-5 w-5 mr-3 group-hover:animate-pulse relative z-10" />
                    <span className="font-semibold relative z-10">Partner With Us</span>
                    <div className="ml-3 w-2 h-2 bg-white rounded-full opacity-75 group-hover:animate-ping relative z-10"></div>
                  </ModernButton>
                </div>
                <p className="text-center text-sm text-gray-400 mt-3 font-medium">
                  Join us in saving lives through innovation ✨
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Advanced Animations */}
      <section ref={heroRef} className="relative min-h-screen flex items-center hero-bg overflow-hidden">
        <div className="container px-4 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="hero-title bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 hover:from-blue-200 hover:to-blue-300 transition-all duration-300 transform hover:scale-105 px-4 py-2 rounded-full">
                  🚀 Saving Limbs. Restoring Lives.
                </Badge>
                <h1 className="hero-title text-5xl md:text-7xl font-black text-gray-900 leading-tight">
                  Protecting Diabetic Patients from{" "}
                  <span className="text-gradient relative">
                    Amputation
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
                  </span>
                </h1>
                <p className="hero-subtitle text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                  Our smart insole detects foot ulcers before they begin—saving lives, preserving independence, and
                  restoring dignity.
                </p>
              </div>
              <div className="hero-buttons flex flex-col sm:flex-row gap-6">
                <ModernButton
    onClick={() => window.open("https://www.youtube.com/watch?v=07gVpwzimEA", "_blank")}
  variant="primary"
  size="lg"
  icon={<Play className="h-5 w-5" />}
  className="magnetic-button rounded-full px-10 py-5 text-xl shadow-xl"
>
  Watch Patient Story
</ModernButton>
                <ModernButton
  variant="outline"
  size="lg"
  icon={<ArrowRight className="h-5 w-5" />}
  className="magnetic-button rounded-full px-10 py-5 text-xl shadow-xl learn-more-btn"
  onClick={() => setShowAbout(true)}
>
  Learn More
</ModernButton>
              </div>
            </div>

            {/* Advanced Dashboard Mockup */}
            <div className="hero-dashboard relative flex items-center justify-center">
  <img src="/demo1.png" alt="Smart Insole Demo" className="rounded-3xl shadow-2xl w-full max-w-md object-cover" />
</div>
          </div>
        </div>
      </section>

      {showAbout && (
  <div className="flex justify-center items-center w-full bg-white/80 z-50 fixed top-0 left-0 min-h-screen overflow-auto p-8" style={{backdropFilter: 'blur(8px)'}}>
    <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
      <button className="absolute top-4 right-4 text-gray-500 hover:text-blue-600 text-2xl font-bold" onClick={() => setShowAbout(false)} aria-label="Close About">
        &times;
      </button>
      <AboutNEEM />
    </div>
  </div>
)}

{/* Our Story Section */}
      <section id="story" className="section-animate py-32 section-bg">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-20">
              <Badge className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 px-6 py-3 rounded-full text-lg">
                📖 Our Story: Why We Exist
              </Badge>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
                We couldn't accept that <span className="text-gradient">1 in 6 diabetic patients</span> in Rwanda risks
                losing a limb
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-6 text-lg leading-relaxed font-semibold why-exist-animate">
                  <p className="text-gray-700 why-animate">
                    When that happens, it's not just a foot that's lost—it's mobility, dignity, and income.
                  </p>
                  <p className="text-gray-700 why-animate">
                    At Neem , we couldn't accept that. That's why we built a smart, affordable, non-invasive insole
                    that can detect ulcers before they develop—preventing up to{" "}
                    <span className="font-bold text-blue-600 text-2xl">90% of amputations</span>.
                  </p>
                  <p className="text-2xl font-bold text-gray-900 why-animate">
                    We're not just building tech—we're protecting futures.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-black text-blue-600">90%</div>
                    <div className="text-sm text-gray-600">Prevention Rate</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-black text-purple-600">24/7</div>
                    <div className="text-sm text-gray-600">Monitoring</div>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-center">
                <img
                  src="/ChatGPT Image Jul 15, 2025, 08_00_14 PM.jpg"
                  alt="Why We Exist - Prevention"
                  className="rounded-3xl shadow-2xl w-full max-w-md object-cover"
                />
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

          <div className="space-y-16">
            {/* Card 1: Smart Insoles, Made Just For You */}
            <div className="flex flex-col md:flex-row items-stretch gap-8 tech-card-animate min-h-[600px]">
              <div className="flex-1 space-y-4 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4 tech-title-animate">Smart Insoles, Made Just For You</h3>
                <p className="text-gray-800 leading-relaxed text-lg text-justify tech-text-animate">
                  Our <span className="text-bold">experts</span> make a <span className="text-highlight">special mold of your feet</span> to create smart insoles that fit you perfectly. You get <span className="text-bold">amazing comfort</span> and <span className="text-highlight">support with every step</span> you take. Each insole is <span className="text-bold">custom-crafted</span> using <span className="text-highlight">advanced casting and 3Dprinting</span> to ensure optimal fit and maximum effectiveness in detecting early signs of foot complications.
                </p>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl w-full h-full flex items-center justify-center shadow-lg overflow-hidden tech-image-animate group">
                  <img src="/insole%20implint.jpg" alt="Smart Insoles" className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110" />
                </div>
              </div>
            </div>
            
            {/* Card 2: Personal Care for You */}
            <div className="flex flex-col md:flex-row-reverse items-stretch gap-8 tech-card-animate min-h-[600px]">
              <div className="flex-1 space-y-4 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4 tech-title-animate">Personal Care for You</h3>
                <p className="text-gray-800 leading-relaxed text-lg text-justify tech-text-animate">
                  Everyone is different, so your care should be too. We give you our <span className="text-highlight">full attention</span> to understand your <span className="text-bold">health needs</span>, and we always keep your information <span className="text-bold">safe and private</span>. Our <span className="text-highlight">personalized approach</span> ensures that each patient receives <span className="text-bold">tailored monitoring</span> and care recommendations based on their <span className="text-highlight">unique health profile</span> and lifestyle.
                </p>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl w-full h-full flex items-center justify-center shadow-lg overflow-hidden tech-image-animate group">
                  <img src="/personalized%20care.jpg" alt="Personalized Care" className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110" />
                </div>
              </div>
            </div>
            
            {/* Card 3: Early Health Alerts */}
            <div className="flex flex-col md:flex-row items-stretch gap-8 tech-card-animate min-h-[600px]">
              <div className="flex-1 space-y-4 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4 tech-title-animate">Early Health Alerts</h3>
                <p className="text-gray-800 leading-relaxed text-lg text-justify tech-text-animate">
                  The <span className="text-highlight">smart sensors</span> in your insoles <span className="text-bold">watch over your feet</span> all day. They find <span className="text-highlight">early signs of problems</span>, like diabetic foot ulcers, and send an <span className="text-bold">alert right away</span>. This lets you <span className="text-highlight">act fast</span> and helps you worry less. Our <span className="text-bold">advanced Data processing</span> continuously analyzing <span className="text-highlight">pressure patterns and temperature changes</span> to provide real-time health insights.
                </p>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl w-full h-full flex items-center justify-center shadow-lg overflow-hidden tech-image-animate group">
                  <img src="/early%20health%20alert.jpg" alt="Early Health Alerts" className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Why Choose Us Section - Enhanced */}
      <section className="section-animate py-32 bg-white">
        <div className="container px-4">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900">
              Why Choose <span className="text-gradient">NEEM</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedCard delay={0.1} className="relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  Made for Rwandans, by Rwandans
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We understand the local healthcare challenges and build for real needs, ensuring cultural relevance
                  and accessibility.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Local healthcare expertise
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Cultural understanding
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Community-focused approach
                  </div>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2} className="relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                  Affordable & Accessible
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Unlike international alternatives, our solution is low-cost and available in Rwanda with flexible
                  payment options.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Flexible payment plans
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Insurance coverage options
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Local availability
                  </div>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.3} className="relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                  Prevents Amputation, Saves Lives
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-justify">
                Scientifically designed to stop ulcers before they start. Real results. Real people. Real impact.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    90% prevention rate
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Clinically tested
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Proven results
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className={teamStyles.teamSection}>
        <div className="container px-4">
          <div className="text-center space-y-6 mb-20">
            <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-6 py-3 rounded-full text-lg animate-pulse">
              👨‍🔬 Meet Our Visionaries
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
              Passionate <span className={teamStyles.animateGradient}>Innovators</span> Saving Lives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts is united by one mission: preventing amputations and transforming lives.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {[
              { 
                name: "Grace Nyirarukundo", 
                role: "CEO", 
                img: "/images/team/pp.jpg", 
                twitter: "#", 
                linkedin: "linkedin.com/in/grace-nyirarukundo-19841925a",
                gradient: "from-blue-400 to-blue-600",
                bio: "Driving our mission with passion and purpose"
              },
              { 
                name: "Prisca Nikuze", 
                role: "COO", 
                img: "/images/team/prisca.png", 
                twitter: "#", 
                linkedin: "",
                gradient: "from-purple-400 to-purple-600",
                bio: "Innovating the future of preventive healthcare"
              },
              { 
                name: "Rwakayiro David", 
                role: "CTO", 
                img: "/images/team/rwakayiro david.jpeg", 
                twitter: "#", 
                linkedin: "linkedin.com/in/jean-david-rwakayiro-61718a344",
                gradient: "from-green-400 to-green-600",
                bio: "Architecting smart solutions that save lives"
              },
              { 
                name: "Alex MUHIRWA", 
                role: "Product Designer", 
                img: "/images/team/alex.jpeg", 
                twitter: "#", 
                linkedin: "linkedin.com/in/muhirwa-alex-64aa2b268",
                gradient: "from-pink-400 to-pink-600",
                bio: "Creating intuitive experiences for better care"
              },
              { 
                name: "Kelly Irakoze", 
                role: "Data Analyst", 
                img: "/images/team/kelly.jpg", 
                twitter: "#", 
                linkedin: "linkedin.com/in/irakoze-ntawigenga-kelly-bb194a287",
                gradient: "from-yellow-400 to-yellow-600",
                bio: "Transforming data into life-saving insights"
              },
            ].map((member, idx) => (
              <div
                key={member.name}
                className={`${teamStyles.teamCard} team-card-animate`}
              >
                <div className={teamStyles.imageContainer}>
                  <div className={teamStyles.overlay}></div>
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className={teamStyles.image}
                  />
                  <div className={teamStyles.content}>
                    <div className="space-y-3">
                      <h3 className={teamStyles.name}>
                        {member.name}
                      </h3>
                      <div className={teamStyles.divider}></div>
                      <p className={teamStyles.role}>
                        {member.role}
                      </p>
                      <p className={teamStyles.bio}>
                        {member.bio}
                      </p>
                      <div className={teamStyles.socialLinks}>
                        <a 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={teamStyles.socialLink}
                          title={`Connect with ${member.name} on LinkedIn`}
                          aria-label={`Connect with ${member.name} on LinkedIn`}
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a 
                          href={member.twitter} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={teamStyles.socialLink}
                          title={`Follow ${member.name} on Twitter`}
                          aria-label={`Follow ${member.name} on Twitter`}
                        >
                          <Twitter className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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

          <div className={partnerStyles.logoContainer}>
            {/* University of Rwanda Logo */}
            <div className={`${partnerStyles.partnerLogo} partner-logo-animate`}>
               <Image
    src="/university-of-rwanda-logo.png"
    alt="University of Rwanda Logo"
    width={300} // or larger, depending on your needs
    height={200} // adjust for aspect ratio
    className="w-auto h-[300px] md:h-[400px] lg:h-[500px] object-contain"
    priority
  />
</div> 
              <div className="flex justify-center items-center w-full py-8 bg-white">
 
            </div>

            {/* ALX Logo */}
            <div className={`${partnerStyles.partnerLogo} partner-logo-animate`}>
              <div className={partnerStyles.imageWrapper}>
                <Image 
                  src="/alx logo.webp" 
                  alt="ALX Logo" 
                  width={250}
                  height={100}
                  className="object-contain partner-image"
                />
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
              <blockquote className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-relaxed">
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
      <section className="section-animate py-32 relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
        </div>
        
        <div className="container px-4 relative">
          <div className="text-center space-y-6 mb-20">
            <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-6 py-3 rounded-full text-lg">
              ❓ Got Questions?
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about NEEM's smart insole technology, costs, and healthcare impact.
            </p>
          </div>

          <FAQSection />
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
              <ModernButton variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                📌 Partner With Us
              </ModernButton>
              <ModernButton
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                📩 Ask question
              </ModernButton>
              <ModernButton
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                📈 Investor Inquiry
              </ModernButton>
            </div>
          </div>
        </div>
      </section>

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
                      <ModernButton 
                        variant="primary" 
                        size="lg" 
                        className="w-full h-14 text-lg font-semibold rounded-2xl group relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                        <Mail className="h-5 w-5 mr-3 group-hover:animate-pulse relative z-10" />
                        <span className="relative z-10">Send Message</span>
                        <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                      </ModernButton>
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
                    <a href="mailto:appoltd8@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                      appoltd8@gmail.com
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

              {/* Call to Action */}
              <AnimatedCard delay={0.5} className="contact-cta-glass p-8 rounded-3xl text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                    <Heart className="h-8 w-8 text-white animate-pulse" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Ready to Save Lives?</h4>
                  <p className="text-gray-600">
                    Join us in revolutionizing diabetic care and preventing amputations across Africa.
                  </p>
                  <ModernButton 
                    variant="outline" 
                    size="lg" 
                    className="group hover:scale-105 transition-all duration-300"
                  >
                    <Users className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                    Partner With Us
                  </ModernButton>
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
                      href="mailto:appoltd8@gmail.com"
                      className="footer-contact-simple flex items-center p-3 rounded-xl transition-all duration-300 group hover:bg-blue-50"
                    >
                      <div className="w-8 h-8 rounded-lg bg-red-500 flex items-center justify-center mr-3">
                        <img src="/gmail.png" alt="Gmail" className="w-4 h-4" />
                      </div>
                      <div className="text-sm text-gray-600 group-hover:text-gray-800">
                        appoltd8@gmail.com
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
                  &copy; {new Date().getFullYear()} <span className="font-semibold text-gray-800">APPO LTD</span>. All rights reserved.
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
    </div>
  )
}
