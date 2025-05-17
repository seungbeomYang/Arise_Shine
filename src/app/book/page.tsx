'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Section, Heading, Text, Button } from '@/components/design-system';

export default function BookingPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const iframeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        }
      );
    }

    // Iframe container animation
    if (iframeContainerRef.current) {
      gsap.fromTo(
        iframeContainerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.3,
          ease: "power2.out"
        }
      );
    }
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />



      <div ref={headerRef} className="max-w-3xl mx-auto text-center mt-8 ">
        <Heading level={1} className="mb-4 text-center  ">Book Your Appointment</Heading>
        <Text size="lg" className=" text-center">
          Schedule your acupuncture or wellness session with our expert practitioners.
        </Text>

      </div>
      <Section padding="large" className="pt-0">
        <div
          ref={iframeContainerRef}
          className="w-full bg-white rounded-2xl shadow-md overflow-hidden"
        >
          <div className="w-full h-[800px] md:h-[700px] lg:h-[800px]">
            <iframe
              src="https://www.halaxy.com/book/widget/arise-shine-health/location/1314327"
              allow="payment"
              style={{ border: 0, width: '100%', height: '100%' }}
              title="Arise & Shine Health Booking System"
            />
          </div>
        </div>
      </Section>

      <Section padding="small" background="secondary">
        <div className="max-w-3xl mx-auto text-center">
          <Heading level={2} className="mb-4">Booking Information</Heading>
          <Text size="base" className="mb-6">
            Please note that our calendar shows New Zealand time. We recommend booking at least 24 hours in advance.
            For same-day appointments, please call us directly.
          </Text>
          <Text size="base" className="font-semibold">
            Our clinic is located in Sunnyhills, Auckland. The exact address will be shared upon booking confirmation.
          </Text>
        </div>
      </Section>

      <Footer />
    </main>
  );
} 