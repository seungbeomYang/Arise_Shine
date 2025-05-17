'use client';

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const advantagesRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Hero section animation
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        }
      );
    }

    // About section animation
    if (aboutRef.current) {
      gsap.fromTo(
        aboutRef.current,
        { opacity: 0, y: 50 },
        {
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        }
      );
    }

    // Advantages section animation
    if (advantagesRef.current) {
      gsap.fromTo(
        advantagesRef.current,
        { opacity: 0, y: 50 },
        {
          scrollTrigger: {
            trigger: advantagesRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        }
      );
    }

    // Services section animation
    if (servicesRef.current) {
      gsap.fromTo(
        servicesRef.current,
        { opacity: 0, y: 50 },
        {
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        }
      );
    }

    // Clean up ScrollTrigger instances on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section ref={heroRef}>
        <Hero />
      </section>

      <section ref={aboutRef}>
        <About />
      </section>

      <section ref={advantagesRef}>
        <Advantages />
      </section>

      <section ref={servicesRef}>
        <Services />
      </section>

      <Footer />
    </main>
  );
}
