'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heading, Text } from '@/components/design-system/Typography';
import { Section } from '@/components/design-system/Section';
import { Button } from '@/components/design-system/Button';
import { ServiceCard } from '@/components/design-system/ServiceCard';
import { TreatmentCard } from '@/components/design-system/TreatmentCard';
import { Hero } from '@/components/design-system/Hero';

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesGridRef = useRef<HTMLDivElement>(null);
  const accTreatmentsRef = useRef<HTMLDivElement>(null);
  const privateAppointmentsRef = useRef<HTMLDivElement>(null);
  const accCardsRef = useRef<HTMLDivElement>(null);
  const privateCardsRef = useRef<HTMLDivElement>(null);

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

    // Services grid animation
    if (servicesGridRef.current) {
      gsap.fromTo(
        servicesGridRef.current,
        { opacity: 0, y: 50 },
        {
          scrollTrigger: {
            trigger: servicesGridRef.current,
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

    // ACC Treatments section animation
    if (accTreatmentsRef.current) {
      gsap.fromTo(
        accTreatmentsRef.current,
        { opacity: 0, y: 50 },
        {
          scrollTrigger: {
            trigger: accTreatmentsRef.current,
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

    // Private Appointments section animation
    if (privateAppointmentsRef.current) {
      gsap.fromTo(
        privateAppointmentsRef.current,
        { opacity: 0, y: 50 },
        {
          scrollTrigger: {
            trigger: privateAppointmentsRef.current,
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

    // ACC Cards staggered animation
    if (accCardsRef.current) {
      gsap.fromTo(
        accCardsRef.current.children,
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: accCardsRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          },
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out"
        }
      );
    }

    // Private Appointment Cards staggered animation
    if (privateCardsRef.current) {
      gsap.fromTo(
        privateCardsRef.current.children,
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: privateCardsRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          },
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
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

      {/* Hero Section */}
      <div className="w-full mt-6" ref={heroRef}>
        <Hero
          title="Comprehensive Acupuncture for Pain, Posture & Wellness"
          subtitle="At Arise & Shine, every treatment is tailored to your condition using a blend of acupuncture, moxibustion, cupping, and Tuina massage. Whether you're recovering from injury, managing stress, or addressing chronic pain, we offer care that brings relief and restores balance — grounded in both Traditional Chinese Medicine and modern diagnostic insight."
          backgroundImage="/images/backgrounds/services-bg.jpg"
          backgroundColor="bg-[#EFEADE]"
          textColor="white"
          height="default"
          align="center"
          overlay={true}
          overlayOpacity="bg-black/50"
          className="vignette"
          buttonText="Book an appointment"
          buttonHref="/book"
          buttonVariant="outline"
        />
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24" ref={servicesGridRef}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            title="Acupuncture"
            description="Precision needling for energy balance, muscle release, and nerve modulation"
            icon="/images/acupuncture.svg"
          />
          <ServiceCard
            title="Moxibustion"
            description="Gentle heat therapy to warm meridians, boost circulation, and reduce pain"
            icon="/images/mox.svg"
          />
          <ServiceCard
            title="Cupping"
            description="Myofascial release that reduces stiffness and promotes tissue healing"
            icon="/images/wellness2.svg"
          />
          <ServiceCard
            title="Tuina Massage"
            description="Therapeutic manual therapy to address specific pain points and tension"
            icon="/images/hand.svg"
          />
        </div>
      </div>

      {/* Pricing Sections */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col gap-24">
          {/* ACC Treatments */}
          <div className="flex flex-col items-center" ref={accTreatmentsRef}>
            <Heading
              level={2}
              className="mb-4 text-center text-[42px] font-semibold"
            >
              ACC Treatments
            </Heading>
            <Text
              size="base"
              className="text-center mb-12 max-w-2xl"
            >
              For injury-related conditions covered by ACC. We'll help you process your claim — no referral needed.
            </Text>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full" ref={accCardsRef}>
              <div>
                <TreatmentCard
                  title="Initial Consultation"
                  duration="60min"
                  description="Full diagnosis, health history review, acupuncture treatment (may include moxa)"
                />
              </div>
              <div>
                <TreatmentCard
                  title="Follow-up Treatment"
                  duration="45min"
                  description="Progress review and focused treatment for your injury/condition"
                />
              </div>
              <div>
                <TreatmentCard
                  title="Extended Session"
                  duration="60min"
                  description="For complex conditions requiring more comprehensive treatment"
                />
              </div>
            </div>
          </div>

          {/* Private Appointments */}
          <div className="flex flex-col items-center" ref={privateAppointmentsRef}>
            <Heading
              level={2}
              className="mb-12 text-center text-[42px] font-semibold"
            >
              Private Appointments
            </Heading>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full" ref={privateCardsRef}>
              <div>
                <TreatmentCard
                  title="Initial Consultation"
                  price="$67.98"
                  duration="60min"
                  description="Thorough assessment, acupuncture, and optional moxa/cupping/Tuina"
                />
              </div>
              <div>
                <TreatmentCard
                  title="Express Treatment"
                  price="$41.96"
                  duration="30min"
                  description="Focused acupuncture session (needling or moxa only)"
                />
              </div>
              <div>
                <TreatmentCard
                  title="Extended Treatment"
                  price="$67.98"
                  duration="60min"
                  description="Ideal for stress relief, chronic conditions, or bodywork integration"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 