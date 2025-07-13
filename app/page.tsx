"use client"

import { useEffect, useRef } from "react"
import { ModernButton } from "@/components/modern-button"
import { AnimatedCard } from "@/components/animated-card"
import { FloatingElements } from "@/components/floating-elements"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { FAQAccordion } from "@/components/faq-accordion"
import { TrustedPartners } from "@/components/trusted-partners"
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
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function AppoModernLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const gsap = (window as any).gsap
    const ScrollTrigger = (window as any).ScrollTrigger

    if (!gsap || !ScrollTrigger) return

    gsap.registerPlugin(ScrollTrigger)

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
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center shadow-lg pulse-glow">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">APPO</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#story"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105"
              >
                Story
              </Link>
              <Link
                href="#technology"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105"
              >
                Technology
              </Link>
              <Link
                href="#team"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105"
              >
                Team
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105"
              >
                Contact
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <ModernButton variant="primary" size="sm">
                Partner With Us
              </ModernButton>
              <button
                className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </nav>
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
                  variant="primary"
                  size="lg"
                  icon={<Play className="h-5 w-5" />}
                  className="magnetic-button"
                >
                  Watch Patient Story
                </ModernButton>
                <ModernButton
                  variant="outline"
                  size="lg"
                  icon={<ArrowRight className="h-5 w-5" />}
                  className="magnetic-button"
                >
                  Learn More
                </ModernButton>
              </div>
            </div>

            {/* Advanced Dashboard Mockup */}
            <div className="hero-dashboard relative">
              <div className="relative">
                {/* Floating background elements */}
                <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-400 rounded-full opacity-10 float-animation"></div>
                <div
                  className="absolute -bottom-10 -right-10 w-16 h-16 bg-blue-500 rounded-full opacity-15 float-animation"
                  style={{ animationDelay: "2s" }}
                ></div>

                {/* Main dashboard */}
                <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500">
                  <div className="glass-morphism rounded-2xl p-6 space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-gray-900 text-lg">Smart Insole Dashboard</h3>
                      <Badge className="bg-green-100 text-green-700 animate-pulse">Live</Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 card-hover-effect">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                            <Activity className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <span className="text-sm font-medium text-gray-700">Pressure</span>
                            <p className="text-xl font-bold text-blue-600">Normal</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 card-hover-effect">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                            <Heart className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <span className="text-sm font-medium text-gray-700">Heart Rate</span>
                            <p className="text-xl font-bold text-green-600">72 BPM</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 card-hover-effect">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                          <AlertTriangle className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <span className="text-sm font-medium text-gray-700">Temperature Alert</span>
                          <p className="text-sm text-orange-600 mt-1">Slight elevation detected - monitoring</p>
                        </div>
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Daily Activity</span>
                        <span className="text-gray-900 font-medium">78%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-blue-400 h-2 rounded-full"
                          style={{ width: "78%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-gray-700">
                    When that happens, it's not just a foot that's lost—it's mobility, dignity, and income.
                  </p>
                  <p className="text-gray-700">
                    At APPO LTD, we couldn't accept that. That's why we built a smart, affordable, non-invasive insole
                    that can detect ulcers before they develop—preventing up to{" "}
                    <span className="font-bold text-blue-600 text-2xl">90% of amputations</span>.
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    We're not just building tech—we're protecting futures.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-black text-blue-600">90%</div>
                    <div className="text-sm text-gray-600">Prevention Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-green-600">1000+</div>
                    <div className="text-sm text-gray-600">Lives Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-purple-600">24/7</div>
                    <div className="text-sm text-gray-600">Monitoring</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="parallax-element">
                  <AnimatedCard className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8">
                    <div className="text-center space-y-6">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                        <Shield className="h-10 w-10 text-white" />
                      </div>
                      <div>
                        <h3 className="text-4xl font-black mb-2">90%</h3>
                        <p className="text-blue-100">Amputation Prevention Rate</p>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-white h-2 rounded-full" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                  </AnimatedCard>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedCard
              delay={0.1}
              className="bg-white/80 backdrop-blur-xl border-2 border-blue-100 p-8 group hover:border-blue-300 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-blue-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  Instant Savings
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Get immediate cost savings on every healthcare intervention, powered by AI to optimize your treatment
                  plans and reduce unnecessary expenses.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard
              delay={0.2}
              className="bg-white/80 backdrop-blur-xl border-2 border-purple-100 p-8 group hover:border-purple-300 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-purple-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  Real-Time Insights
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Make smarter decisions with live data and actionable insights, delivered in real-time to stay ahead of
                  potential complications.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard
              delay={0.3}
              className="bg-white/80 backdrop-blur-xl border-2 border-green-100 p-8 group hover:border-green-300 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-green-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Activity className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                  Flexible Plans
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Choose plans that adapt to your healthcare needs, offering unparalleled scalability and
                  cost-effectiveness for every patient.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard
              delay={0.4}
              className="bg-white/80 backdrop-blur-xl border-2 border-red-100 p-8 group hover:border-red-300 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-red-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                  Secure Transactions
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Prioritize safety with cutting-edge encryption and robust security features for every health data
                  interaction and transaction.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard
              delay={0.5}
              className="bg-white/80 backdrop-blur-xl border-2 border-orange-100 p-8 group hover:border-orange-300 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-orange-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  Adaptive Features
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Leverage AI-driven features that evolve with your healthcare needs, ensuring efficiency and innovation
                  at every step.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard
              delay={0.6}
              className="bg-white/80 backdrop-blur-xl border-2 border-cyan-100 p-8 group hover:border-cyan-300 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-cyan-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors duration-300">
                  Dedicated Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Access expert assistance 24/7 to ensure you're never alone on your healthcare journey with
                  comprehensive support services.
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Enhanced */}
      <section className="section-animate py-32 bg-white">
        <div className="container px-4">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900">
              Why Choose <span className="text-gradient">APPO</span>
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
                <p className="text-gray-600 leading-relaxed mb-6">
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
      <section id="team" className="section-animate py-32 bg-white">
        <div className="container px-4">
          <div className="text-center space-y-6 mb-20">
            <Badge className="bg-gradient-to-r from-green-100 to-green-200 text-green-700 px-6 py-3 rounded-full text-lg">
              👨‍🔬 Meet the Team Behind the Mission
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
              Passionate <span className="text-gradient">Innovators</span> Saving Lives
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCard delay={0.1} className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-white font-bold text-2xl">NG</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Nyirarukundo Grace</h3>
              <p className="text-blue-600 font-medium mb-4">CEO</p>
              <p className="text-sm text-gray-600 mb-6">Leading the vision with a passion for impact.</p>
              <div className="flex justify-center space-x-3">
                <ModernButton variant="ghost" size="sm">
                  <Linkedin className="h-4 w-4" />
                </ModernButton>
                <ModernButton variant="ghost" size="sm">
                  <Twitter className="h-4 w-4" />
                </ModernButton>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2} className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-white font-bold text-2xl">NP</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Nikuze Prisca</h3>
              <p className="text-green-600 font-medium mb-4">COO</p>
              <p className="text-sm text-gray-600 mb-6">Operations expert driving scale and efficiency.</p>
              <div className="flex justify-center space-x-3">
                <ModernButton variant="ghost" size="sm">
                  <Linkedin className="h-4 w-4" />
                </ModernButton>
                <ModernButton variant="ghost" size="sm">
                  <Twitter className="h-4 w-4" />
                </ModernButton>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.3} className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-white font-bold text-2xl">RD</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Rwakayiro David</h3>
              <p className="text-purple-600 font-medium mb-4">CTO</p>
              <p className="text-sm text-gray-600 mb-6">Engineering smart, reliable insole hardware.</p>
              <div className="flex justify-center space-x-3">
                <ModernButton variant="ghost" size="sm">
                  <Linkedin className="h-4 w-4" />
                </ModernButton>
                <ModernButton variant="ghost" size="sm">
                  <Twitter className="h-4 w-4" />
                </ModernButton>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.4} className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-white font-bold text-2xl">MA</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Muhirwa Alex</h3>
              <p className="text-orange-600 font-medium mb-4">Software Developer</p>
              <p className="text-sm text-gray-600 mb-6">Architecting real-time monitoring and web dashboard.</p>
              <div className="flex justify-center space-x-3">
                <ModernButton variant="ghost" size="sm">
                  <Linkedin className="h-4 w-4" />
                </ModernButton>
                <ModernButton variant="ghost" size="sm">
                  <Twitter className="h-4 w-4" />
                </ModernButton>
              </div>
            </AnimatedCard>
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
              We collaborate with Rwanda's top healthcare and innovation partners to deliver world-class solutions.
            </p>
          </div>

          <TrustedPartners />
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
                "I've already lost one leg. APPO's insole is helping me protect the other. Every diabetic patient should
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
              <ModernButton variant="primary" size="lg" icon={<Play className="h-5 w-5" />} className="mt-8">
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest insights on diabetic care, healthcare technology, and our mission to save
              lives.
            </p>
          </div>

          <BlogSection />

          <div className="text-center mt-12">
            <ModernButton variant="outline" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
              View All Articles
            </ModernButton>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-animate py-32 bg-white">
        <div className="container px-4">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </div>

          <FAQAccordion />
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
              Are you a healthcare provider, hospital, investor, or supporter? Join our mission to stop preventable
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
                📩 Volunteer or Collaborate
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

      {/* Contact Section */}
      <section id="contact" className="section-animate py-32 bg-white">
        <div className="container px-4">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900">
              📬 Contact <span className="text-gradient">Us</span>
            </h2>
            <p className="text-xl text-gray-600">We'd love to hear from you.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            <div className="space-y-12">
              <div className="space-y-8">
                <AnimatedCard delay={0.1} className="flex items-center space-x-6 p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Location</h3>
                    <p className="text-gray-600">📍 Kigali, Rwanda</p>
                  </div>
                </AnimatedCard>

                <AnimatedCard delay={0.2} className="flex items-center space-x-6 p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Email</h3>
                    <p className="text-gray-600">📧 info@appoltd.com</p>
                  </div>
                </AnimatedCard>

                <AnimatedCard delay={0.3} className="flex items-center space-x-6 p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Phone</h3>
                    <p className="text-gray-600">📞 +250 XXX XXX XXX</p>
                  </div>
                </AnimatedCard>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">📰 In the News</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline" className="px-4 py-2 text-sm">
                    ACEIoT Innovation Grant Winners
                  </Badge>
                  <Badge variant="outline" className="px-4 py-2 text-sm">
                    University of Rwanda HealthTech Showcase
                  </Badge>
                  <Badge variant="outline" className="px-4 py-2 text-sm">
                    CHUK Hospital Pilot Project
                  </Badge>
                </div>
              </div>
            </div>

            <AnimatedCard delay={0.4} className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Send a Message</h3>
                  <p className="text-gray-600">Get in touch with our team for partnerships, support, or inquiries.</p>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">First Name</label>
                      <Input placeholder="Your first name" className="rounded-xl border-2 focus:border-blue-500" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Last Name</label>
                      <Input placeholder="Your last name" className="rounded-xl border-2 focus:border-blue-500" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      className="rounded-xl border-2 focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Subject</label>
                    <Input placeholder="What's this about?" className="rounded-xl border-2 focus:border-blue-500" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Message</label>
                    <Textarea
                      placeholder="Tell us more about your inquiry..."
                      rows={4}
                      className="rounded-xl border-2 focus:border-blue-500"
                    />
                  </div>
                  <ModernButton variant="primary" size="lg" className="w-full">
                    Send Message
                  </ModernButton>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center shadow-lg">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <span className="text-2xl font-bold">APPO LTD</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Saving limbs. Restoring lives. Protecting futures through smart healthcare technology.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="font-bold text-lg">Company</h3>
              <div className="space-y-3">
                <Link href="#story" className="block text-gray-400 hover:text-white transition-colors">
                  Our Story
                </Link>
                <Link href="#technology" className="block text-gray-400 hover:text-white transition-colors">
                  Technology
                </Link>
                <Link href="#team" className="block text-gray-400 hover:text-white transition-colors">
                  Team
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-bold text-lg">Resources</h3>
              <div className="space-y-3">
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  📖 Blog Articles
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  📰 News Coverage
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  📄 Research Papers
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-bold text-lg">Connect</h3>
              <div className="flex space-x-4">
                <ModernButton variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </ModernButton>
                <ModernButton variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </ModernButton>
                <ModernButton variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </ModernButton>
                <ModernButton variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Youtube className="h-5 w-5" />
                </ModernButton>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} APPO LTD. All rights reserved. Saving lives through innovation.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
