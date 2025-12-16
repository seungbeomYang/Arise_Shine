'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Section, Heading, Text, Card } from '@/components/design-system';
import Image from 'next/image';
import Link from 'next/link';
import { BRANCHES } from './data';

export default function BookingPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate content when view changes
    const tl = gsap.timeline();

    if (headerRef.current) {
      tl.fromTo(headerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
    }

    if (contentRef.current) {
      tl.fromTo(contentRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      );
    }
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div ref={headerRef} className="max-w-3xl mx-auto text-center mt-8">
        <Heading level={1} className="mb-4 text-center">
          Select a Branch
        </Heading>
        <Text size="lg" className="text-center mb-8">
          Choose the location most convenient for you.
        </Text>
      </div>

      <Section padding="large" className="pt-0 min-h-[600px]">
        <div ref={contentRef} className="w-full">
          {/* Branch Selection View */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {(Object.entries(BRANCHES) as [string, typeof BRANCHES.sunnyhills][]).map(([key, branch]) => (
              <Link key={key} href={`/book/${key}`} className="block h-full group">
                <Card
                  variant="primary"
                  hover="scale-glow"
                  className="h-[400px] flex flex-col items-center justify-end relative overflow-hidden p-0 border-0"
                >
                  <Image
                    src={branch.image}
                    alt={branch.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="relative z-10 p-8 w-full text-center">
                    <Heading level={2} className="text-white mb-2">{branch.name}</Heading>
                    <Text className="text-white/90 font-medium">Click to Book</Text>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section padding="small" background="secondary">
        <div className="max-w-3xl mx-auto text-center">
          <Heading level={2} className="mb-4">Booking Information</Heading>
          <Text size="base">
            Please note that our calendar shows New Zealand time. We recommend booking at least 24 hours in advance.
            For same-day appointments, please call us directly.
          </Text>
        </div>
      </Section>

      <Footer />
    </main>
  );
}