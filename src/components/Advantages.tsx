'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AdvantageCard from "./AdvantageCard";
import { LearnMoreLink } from './design-system/LearnMoreLink';
import { Text, Heading, Badge } from './design-system';

export default function Advantages() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Badge animation
    if (badgeRef.current) {
      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, x: -30 },
        {
          scrollTrigger: {
            trigger: badgeRef.current,
            start: "top 95%",
            toggleActions: "play none none none"
          },
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out"
        }
      );
    }

    // Title animation
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 95%",
            toggleActions: "play none none none"
          },
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.2,
          ease: "power2.out"
        }
      );
    }

    // Subtitle animation
    if (subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 95%",
            toggleActions: "play none none none"
          },
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: 0.3,
          ease: "power2.out"
        }
      );
    }

    // Link animation
    if (linkRef.current) {
      gsap.fromTo(
        linkRef.current,
        { opacity: 0, y: 20 },
        {
          scrollTrigger: {
            trigger: linkRef.current,
            start: "top 95%",
            toggleActions: "play none none none"
          },
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.4,
          ease: "power2.out"
        }
      );
    }

    // Cards container animation - stagger cards
    if (cardsContainerRef.current && cardsContainerRef.current.children.length > 0) {
      gsap.fromTo(
        cardsContainerRef.current.children,
        { opacity: 0, y: 50 },
        {
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: "top 95%",
            toggleActions: "play none none none"
          },
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out"
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="w-full py-16 md:py-24 min-h-screen bg-white relative flex items-center" id="advantages">
      {/* Orange circular gradient blob */}
      <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-primary/70 rounded-full blur-[100px] md:blur-[160px] top-1/3 left-1/2 transform -translate-x-1/2 z-0 animate-pulse-slow overflow-hidden"></div>

      <div className="relative z-10 flex flex-col md:flex-row max-w-6xl mx-auto px-4 md:px-8 w-full gap-12">
        {/* Text section - always on top for mobile, on left for desktop */}
        <div className="w-full md:max-w-[530px] flex flex-col gap-8">
          <Badge ref={badgeRef} className="self-start">
            <Text size="base" className="text-black">Why Choose Us</Text>
          </Badge>

          <Heading
            ref={titleRef}
            level={2}
            className="text-black"
          >
            A healing experience that works
          </Heading>

          <Text
            ref={subtitleRef}
            size="lg"
            className="text-black"
          >
            Arising and shining is our commitment to every single patient. Experience a
            treatment philosophy that respects traditional wisdom while embracing modern
            techniques and delivering measurable results.
          </Text>

          <div className="mt-10">
            <LearnMoreLink
              href="/reviews"
              refProp={linkRef}
              textColor="primary"
            />
          </div>
        </div>

        {/* Cards section - below on mobile, on right for desktop */}
        <div
          ref={cardsContainerRef}
          className="w-full flex flex-col gap-6 md:mt-0 md:pl-12"
        >
          <AdvantageCard
            number="01"
            title="Family-run and values-driven"
            description="Our clinic is run by a dedicated family with a shared vision for compassionate, respectful care. We value integrity, warmth, and long-term relationships with our clients—treating each person as we would a family member."
            index={0}
          />
          <AdvantageCard
            number="02"
            title="Gender-based practitioner choice"
            description="We offer clients the option to choose a practitioner based on gender, ensuring comfort and cultural sensitivity. This approach reflects our commitment to personalised care and respect for individual preferences."
            index={1}
          />
          <AdvantageCard
            number="03"
            title="Modern & Traditional integration"
            description="We blend Traditional Chinese Medicine (TCM) with modern physiotherapy insights and Western diagnostic tools. This integrative approach helps address not just symptoms, but the root causes of pain and imbalance."
            index={2}
          />
          <AdvantageCard
            number="04"
            title="Focused on musculoskeletal and postural care"
            description="Our treatments are especially effective for pain, stiffness, and posture-related issues stemming from daily habits or long-term strain. We take a whole-body approach to restore alignment and prevent recurring discomfort."
            index={3}
          />
          <AdvantageCard
            number="05"
            title="Future expansion to exercise + rehab plans"
            description="We’re preparing to offer corrective exercise and rehabilitation services, enabling clients to take an active role in their recovery. Our vision is to empower long-term wellness through education, movement, and self-care."
            index={4}
          />
        </div>
      </div>
    </section>
  );
} 