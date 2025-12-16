'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Section, Heading, Text } from '@/components/design-system';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { BRANCHES, BranchKey } from '../data';
import { usePathname } from 'next/navigation';

// We need to use 'use' from react to unwrap params in Next.js 15+ client components if we were using it,
// but for standard client components receiving params via props is still common, key point is it's a Promise in newer Next versions.
// However, since this is a client component, we should strictly follow the Next.js 15 pattern.
// Actually, usually page.tsx receives params.

export default function BranchBookingPage({ params }: { params: Promise<{ branch: string }> }) {
  const headerRef = useRef<HTMLDivElement>(null);
  const iframeContainerRef = useRef<HTMLDivElement>(null);

  // Unwrap params using React.use() or await in async component. 
  // Since this is a client component, we can use React.use() if available, or just useEffect/state.
  // Simplest for now: use `use` hook content or await it if it was server. 
  // As of Next.js 15, params is a Promise. We need to handle that.

  const [branchKey, setBranchKey] = React.useState<BranchKey | null>(null);

  React.useEffect(() => {
    params.then((resolvedParams) => {
      if (resolvedParams.branch && resolvedParams.branch in BRANCHES) {
        setBranchKey(resolvedParams.branch as BranchKey);
      } else {
        // Handle 404 naturally or redirect?
        // for client component, simple null check then notFound() might not work efficiently client-side
      }
    });
  }, [params]);


  useEffect(() => {
    if (!branchKey) return;

    if (headerRef.current) {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
    }
    if (iframeContainerRef.current) {
      gsap.fromTo(iframeContainerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: "power2.out" }
      );
    }
  }, [branchKey]);

  if (branchKey === null) return null; // or loading spinner

  const branch = BRANCHES[branchKey];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div ref={headerRef} className="max-w-3xl mx-auto text-center mt-8">
        <Heading level={1} className="mb-4 text-center">
          Book {branch.name}
        </Heading>
        <Text size="lg" className="text-center mb-8">
          Schedule your session with our expert practitioners.
        </Text>
      </div>

      <Section padding="large" className="pt-0">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/book"
            className="flex items-center gap-2 text-textGray hover:text-primary transition-colors mb-6 font-medium w-fit"
          >
            <ArrowLeft size={20} />
            Back to Branch Selection
          </Link>

          <div
            ref={iframeContainerRef}
            className="w-full bg-white rounded-2xl shadow-md overflow-hidden"
          >
            <div className="w-full h-[800px] md:h-[700px] lg:h-[800px]">
              <iframe
                src={branch.url}
                allow="payment"
                style={{ border: 0, width: '100%', height: '100%' }}
                title={`Arise & Shine Health ${branch.name} Booking System`}
              />
            </div>
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
