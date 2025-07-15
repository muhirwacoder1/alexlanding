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
  className="magnetic-button rounded-full px-10 py-5 text-xl shadow-xl"
>
  Watch Patient Story
</ModernButton>
                <ModernButton
  variant="outline"
  size="lg"
  icon={<ArrowRight className="h-5 w-5" />}
  className="magnetic-button rounded-full px-10 py-5 text-xl shadow-xl learn-more-btn"
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
                    At APPO LTD, we couldn't accept that. That's why we built a smart, affordable, non-invasive insole
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
                    <div className="text-3xl font-black text-green-600">1000+</div>
                    <div className="text-sm text-gray-600">Lives Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-purple-600">24/7</div>
                    <div className="text-sm text-gray-600">Monitoring</div>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-center">
                <img
                  src="/ChatGPT Image Jul 15, 2025, 08_00_14 PM.png"
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
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">Smart Insoles, Made Just For You</h3>
                <p className="text-gray-800 leading-relaxed">
                  Our experts make a special mold of your feet to create smart insoles that fit you perfectly. You get amazing comfort and support with every step you take.
                </p>
              </div>
              <div className="flex-1">
                <div className="bg-gray-100 rounded-xl w-full h-40 md:h-48 flex items-center justify-center">
                  <img src="/insole%20implint.png" alt="Smart Insoles" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            {/* Card 2: Personal Care for You */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">Personal Care for You</h3>
                <p className="text-gray-800 leading-relaxed">
                  Everyone is different, so your care should be too. We give you our full attention to understand your health needs, and we always keep your information safe and private.
                </p>
              </div>
              <div className="flex-1">
                <div className="bg-gray-100 rounded-xl w-full h-40 md:h-48 flex items-center justify-center">
                  {/* Placeholder for image */}
                </div>
              </div>
            </div>
            {/* Card 3: Early Health Alerts */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">Early Health Alerts</h3>
                <p className="text-gray-800 leading-relaxed">
                  The smart sensors in your insoles watch over your feet all day. They find early signs of problems, like diabetic foot ulcers, and send an alert right away. This lets you act fast and helps you worry less.
                </p>
              </div>
              <div className="flex-1">
                <div className="bg-gray-100 rounded-xl w-full h-40 md:h-48 flex items-center justify-center">
                  {/* Placeholder for image */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Behind the Mission */}
      <section className="section-animate py-32 bg-gradient-to-br from-purple-50 via-white to-blue-50" id="team">
        <div className="container px-4">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 flex items-center justify-center gap-3">
              👨‍🔬 <span>Meet the Team Behind the Mission</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {[
              { name: "Grace Uwase", role: "Co-Founder & COO", img: "/images/team/pp.jpg", twitter: "#", linkedin: "#" },
              { name: "Prisca Mukamana", role: "Lead Engineer", img: "/images/team/prisca.png", twitter: "#", linkedin: "#" },
              { name: "Rwakayiro David", role: "CTO", img: "/images/team/rwakayiro%20david.jpeg", twitter: "#", linkedin: "#" },
              { name: "Alex Nshimiyimana", role: "Product Designer", img: "/images/team/alex.jpeg", twitter: "#", linkedin: "#" },
              { name: "Kelly Iradukunda", role: "Data Scientist", img: "/images/team/kelly.jpg", twitter: "#", linkedin: "#" },
            ].map((member, idx) => (
              <div
                key={member.name}
                className="group rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                style={{ gridColumn: idx < 2 ? "span 1 / span 1" : undefined }}
              >
                <div className="relative w-full h-72">
                  <img src={member.img} alt={member.name} className="object-cover w-full h-full" />
                  {/* Overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-black/0 p-4 flex flex-col">
                    <div>
                      <h3 className="text-white font-bold text-lg">{member.name}</h3>
                      <p className="text-white text-sm opacity-80">{member.role}</p>
                    </div>
                    <div className="flex items-center gap-4 mt-2">
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
