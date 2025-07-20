"use client";

import { useEffect, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function AboutNEEM({ onClose }: { onClose?: () => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Add scroll animation effect
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;
    
    if (!gsap || !ScrollTrigger) return;
    
    gsap.registerPlugin(ScrollTrigger);
    
    // Set up ScrollTrigger to work with our scrollable container
    ScrollTrigger.defaults({ 
      scroller: scrollRef.current 
    });
    
    // Animate sections as they come into view - with a slight delay to ensure scrolling works first
    setTimeout(() => {
      gsap.utils.toArray('.about-section').forEach((section: any) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    }, 500);
    
    // Animate the progress bar
    const updateScrollProgress = () => {
      if (!scrollRef.current) return;
      
      const scrollTop = scrollRef.current.scrollTop;
      const scrollHeight = scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      
      const progressBar = document.getElementById('scroll-progress');
      if (progressBar) {
        progressBar.style.width = `${progress}%`;
      }
    };
    
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', updateScrollProgress);
    }
    
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', updateScrollProgress);
      }
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      {/* Progress bar */}
      <div className="h-1 bg-gray-200 w-full sticky top-0 z-50">
        <div id="scroll-progress" className="h-full bg-blue-600 transition-all duration-300 ease-out" style={{ width: '0%' }}></div>
      </div>
      
      {/* Back button */}
      {onClose && (
        <button 
          onClick={onClose}
          className="absolute top-4 left-4 z-50 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg"
        >
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>
      )}
      
      {/* Scrollable content */}
      <div 
        ref={scrollRef} 
        className="flex-1 overflow-y-auto px-4 py-16 md:px-8 scroll-smooth h-full"
        style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Hero section */}
          <div className="about-section mb-20 text-center">
            <div className="inline-block px-6 py-2 bg-blue-100 text-blue-800 rounded-full font-medium mb-6">About NEEM</div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-8">
              Saving Limbs, <span className="text-blue-600">Restoring Lives</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to prevent diabetic amputations through innovative smart insole technology.
            </p>
          </div>
          
          {/* Our Mission */}
          <div className="about-section grid md:grid-cols-2 gap-10 items-center mb-24">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-blue-800 mb-6 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-24 after:h-1 after:bg-blue-500 after:-mb-3">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                NEEM is a Rwandan-based healthtech startup focused on transforming diabetic care through smart, accessible, and life-saving technology. We've developed an innovative smart insole that uses embedded sensors for pressure, temperature, and heart rate to detect early signs of diabetic foot ulcers before they progress to amputation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our solution is non-invasive, affordable, and connected to a real-time monitoring platform, empowering both patients and healthcare providers to act early and prevent irreversible harm.
              </p>
              <blockquote className="text-xl text-blue-800 font-medium border-l-4 border-blue-500 pl-6 py-2 italic bg-blue-50 rounded-r-lg shadow-sm">
                We believe no one should lose a limb to a condition that can be prevented and we're working every day to make that a reality.
              </blockquote>
            </div>
            <div className="relative">
              <img 
                src="/personalized care.jpg" 
                alt="Personalized diabetic care" 
                className="rounded-2xl shadow-2xl transform hover:rotate-2 transition-all duration-500 border-4 border-white"
              />
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-6 py-3 rounded-full font-bold shadow-lg">
                Personalized Care
              </div>
            </div>
          </div>
          
          {/* Our Story */}
          <div className="about-section mb-24">
            <h2 className="text-3xl font-bold text-blue-800 mb-6 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-24 after:h-1 after:bg-blue-500 after:-mb-3">
              Our Story
            </h2>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Born out of Rwanda and built for our communities, we combine affordable health technology with compassionate care to fight a preventable tragedy: diabetic limb loss. Our team of engineers, health experts, and visionaries are committed to making advanced diabetic foot care accessible, personal, and empowering.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The journey began when our founders witnessed firsthand the devastating impact of diabetic amputations in Rwanda. They saw how these preventable complications were destroying lives, families, and livelihoods. Determined to make a difference, they assembled a team of passionate experts to develop a solution that could address this critical healthcare challenge.
              </p>
            </div>
          </div>
          
          {/* Our Impact */}
          <div className="about-section grid md:grid-cols-2 gap-10 items-center mb-24">
            <div className="order-2 md:order-1">
              <img 
                src="/early health alert.jpg" 
                alt="Early Health Alert System" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl font-bold text-blue-800 mb-6 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-24 after:h-1 after:bg-blue-500 after:-mb-3">
                Our Impact
              </h2>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">90%</div>
                  <div className="text-gray-600">Potential reduction in amputations</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600">Continuous monitoring</div>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our smart insole technology has the potential to dramatically reduce the rate of diabetic amputations by detecting problems before they become critical. By providing continuous monitoring and early alerts, we're helping patients maintain their mobility, independence, and quality of life.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Beyond the individual impact, our solution helps reduce healthcare costs and burden on the medical system by preventing expensive hospitalizations and long-term care needs associated with amputations.
              </p>
            </div>
          </div>
          
          {/* Our Values */}
          <div className="about-section mb-24">
            <h2 className="text-3xl font-bold text-blue-800 mb-10 text-center">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Innovation</h3>
                <p className="text-gray-600 text-center">
                  We constantly push boundaries to create accessible, effective healthcare solutions.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Compassion</h3>
                <p className="text-gray-600 text-center">
                  We put people first, designing solutions with empathy and understanding.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Accessibility</h3>
                <p className="text-gray-600 text-center">
                  We're committed to making life-saving technology available to all who need it.
                </p>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="about-section text-center bg-gradient-to-r from-blue-600 to-blue-800 p-10 rounded-2xl shadow-xl text-white">
            <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Together, we can prevent diabetic amputations and improve quality of life for millions of people around the world.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://eu.makeforms.co/bb4hlb3/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg"
              >
                Partner With Us
              </a>
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  onClose && onClose();
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-blue-700 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
