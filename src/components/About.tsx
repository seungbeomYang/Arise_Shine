'use client';

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge, Heading, Text, LearnMoreLink } from "./design-system";

export default function About() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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
            start: "top 85%",
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
        { opacity: 0, x: -30 },
        {
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          opacity: 1,
          x: 0,
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
            start: "top 85%",
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
            start: "top 85%",
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

    // Image animation
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.9 },
        {
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.5,
          ease: "power2.out"
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="w-full py-20 bg-secondary">
      <div className="flex flex-col md:flex-row items-center gap-[90px] max-w-6xl mx-auto px-4 md:px-8">
        <div className="w-full md:w-1/2 flex flex-col gap-[55px]">
          <div className="flex flex-col gap-14">
            <Badge ref={badgeRef} className="self-start">
              <Text size="base">About the Clinic</Text>
            </Badge>

            <Heading
              ref={titleRef}
              level={2}
            >
              Rooted in tradition. Focused on your future.
            </Heading>

            <Text
              ref={textRef}
              size="base"
            >
              At Arise & Shine Acupuncture Clinic, we bring together the wisdom of Traditional Chinese Medicine
              and the precision of modern movement science to help you overcome pain and rediscover balance.
              As a husband-and-wife team based in Sunnyhills, East Auckland, we offer professional,
              culturally respectful care tailored to your individual health journey. Whether you're recovering
              from injury, managing chronic pain, or seeking holistic wellness, we're here to help you rise and shine.
            </Text>
          </div>

          <div>
            <LearnMoreLink
              href="/about"
              refProp={linkRef}
              textColor="black"
            />
          </div>
        </div>

        <div ref={imageRef} className="w-full md:w-1/2 h-[550px] rounded-[59px] overflow-hidden relative">
          <Image
            src="/images/uploads/arise.jpg"
            alt="Arise & Shine Acupuncture Clinic"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-[59px]"
          />
        </div>
      </div>
    </section>
  );
} 