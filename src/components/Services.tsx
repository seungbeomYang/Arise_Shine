'use client';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge, Heading, Text, ServiceCard } from "./design-system";

export default function Services() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Badge animation
    if (badgeRef.current) {
      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20 },
        {
          scrollTrigger: {
            trigger: badgeRef.current,
            start: "top 95%",
            toggleActions: "play none none none"
          },
          opacity: 1,
          y: 0,
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

    // Text animation
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: textRef.current,
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

    // Cards animation with stagger
    if (cardsRef.current && cardsRef.current.children.length > 0) {
      gsap.fromTo(
        cardsRef.current.children,
        { opacity: 0, y: 50 },
        {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 95%",
            toggleActions: "play none none none"
          },
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: "power2.out"
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="w-full py-24 min-h-screen flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex justify-center mb-10">

          <Badge ref={badgeRef} className="self-start">
            <Text size="base" className="text-black">Our services</Text>
          </Badge>
        </div>

        <Heading
          ref={titleRef}
          level={2}
          align="center"
          className="mb-10"
        >
          Personalised Treatments for Real Relief
        </Heading>

        <Text
          ref={textRef}
          size="lg"
          align="center"
          className="max-w-5xl mx-auto mb-16"
        >
          At Arise & Shine, every treatment plan is tailored to your individual needs.
          We combine acupuncture, moxibustion (moxa), cupping, and Tuina to restore balance,
          reduce pain, and support long-term wellness. Whether you're an ACC-covered patient
          or visiting privately, you're in experienced, compassionate hands.
        </Text>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          <ServiceCard
            title="Musculoskeletal & Postural Pain"
            description="We treat back pain, shoulder tension, joint stiffness, sciatica, and poor posture using techniques from both TCM and Western orthopaedic assessment."
            // icon1="/images/body-outline1.svg"
            icon2="/images/acupuncture.svg"
            altText1="Body outline"
            altText2="Acupuncture"
            variant="bottom-right"
            cardVariant="secondary"
          />

          <ServiceCard
            title="Stress, Sleep & Fatigue Recovery"
            description="Restore inner balance and relieve symptoms of burnout, anxiety, poor sleep, and low vitality through gentle, targeted acupuncture."
            icon1="/images/sleep.svg"
            altText1="Sleep icon"
            variant="bottom-right"
            cardVariant="secondary"
          />

          <ServiceCard
            title="Preventative Care & Wellness"
            description="Acupuncture isn't just for pain — it can also support digestion, immunity, mood, and general vitality for long-term health and harmony."
            // icon1="/images/wellness1.svg"
            icon2="/images/wellness2.svg"
            altText1="Wellness icon 1"
            altText2="Wellness icon 2"
            variant="bottom-right"
            cardVariant="secondary"
          />
        </div>
      </div>
    </section>
  );
} 