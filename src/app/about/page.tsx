'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Hero } from '@/components/design-system/Hero';
import { Practitioner } from '@/components/design-system/Practitioner';
import { AdvantageList } from '@/components/design-system/AdvantageList';
import { Heading, Text } from '@/components/design-system/Typography';
import Image from 'next/image';

export default function AboutPage() {
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero text animation
    if (heroTextRef.current) {
      gsap.fromTo(
        heroTextRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out"
        }
      );
    }

    // Hero image animation
    if (heroImageRef.current) {
      gsap.fromTo(
        heroImageRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 0.3,
          ease: "power2.out"
        }
      );
    }

    // Find all practitioner sections and animate them
    const practitioners = document.querySelectorAll('.practitioner-section');
    practitioners.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none"
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <div className="w-full mt-6">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="w-full overflow-hidden relative rounded-[40px] bg-[#EFEADE]">
            <div className="flex flex-col md:flex-row">
              {/* Left side with text */}
              <div ref={heroTextRef} className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-end">
                <Heading
                  level={1}
                  className="font-medium text-4xl md:text-5xl lg:text-6xl mb-4 text-black"
                >
                  Meet Your Practitioners
                </Heading>
                <Text
                  size="lg"
                  weight="medium"
                  className="text-black max-w-xl"
                >
                  Faith-inspired care, clinically grounded — for every body and every background.
                </Text>
              </div>

              {/* Right side with image */}
              <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[500px]">
                <div ref={heroImageRef} className="absolute inset-0 rounded-[40px] overflow-hidden">
                  <Image
                    src="/images/practitioners/about-header.jpeg"
                    alt="Arise & Shine practitioners"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Joseph Yang Section */}
      <div className="practitioner-section">
        <Practitioner
          name="Joseph Yang"
          image="/images/practitioners/joseph.jpeg"
          degrees={[
            "BHS (Acupuncture) – NZ School of Acupuncture & TCM",
            "PGDip (Engineering) – Massey University"
          ]}
          specialties={[
            "Musculoskeletal pain",
            "Korean Saam, Kinetic, and Abdominal acupuncture",
            "Orthopaedic + meridian-based diagnosis"
          ]}
          bio="Joseph blends engineering precision with deep traditional knowledge to create highly individualised care. His transition from engineering to acupuncture brings analytical thinking and structure to his treatments. He has treated hundreds of patients and continues to refine his techniques in both clinical and fitness settings."
        />
      </div>

      {/* Julie Chung Section */}
      <div className="practitioner-section">
        <Practitioner
          name="Julie Chung"
          image="/images/practitioners/julie.jpeg"
          degrees={[
            "BHS (Acupuncture) – NZ School of Acupuncture & TCM",
            "NZ Certificate in Health and Wellbeing – Skills Update Institute"
          ]}
          specialties={[
            "Women's health and hormonal balance",
            "Stress, anxiety, and fatigue",
            "Holistic wellness"
          ]}
          bio="Julie brings a calm, nurturing approach to care. With a background in caregiving, she focuses on both emotional and physical healing. Her treatments combine careful listening with skilled technique, especially for women seeking hormonal balance or relief from fatigue and tension."
          reversed
        />
      </div>

      {/* What We Offer Together Section */}


      <Footer />
    </main>
  );
} 