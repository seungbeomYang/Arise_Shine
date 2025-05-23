'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Section,
  Heading,
  Text,
  ReviewCard,
  Badge,
  Hero,

} from '@/components/design-system';

// Mock reviews data
const reviews = [
  {
    id: 1,
    name: "Sophie Williams",
    date: "August 2023",
    rating: 5,
    content: "Joseph is a miracle worker! After years of back pain and visits to various specialists, I was skeptical about acupuncture. But after just three sessions, my chronic lower back pain has significantly improved. His calm demeanor and expert knowledge made me feel at ease during every treatment.",
    source: "google"
  },
  {
    id: 2,
    name: "David Chen",
    date: "July 2023",
    rating: 5,
    content: "I came to Julie for help with tension headaches and shoulder pain. Her careful attention to my symptoms and thoughtful approach to treatment has made a world of difference. The clinic is peaceful and clean, and I always leave feeling much better than when I arrived.",
    source: "facebook"
  },
  {
    id: 3,
    name: "Emma Thompson",
    date: "September 2023",
    rating: 4,
    content: "I've been seeing Joseph for my knee pain after a sports injury. The combination of acupuncture and his recommended exercises has helped me regain mobility much faster than expected. Highly recommend this clinic for athletes looking for complementary treatment options.",
    source: "google"
  },
  {
    id: 4,
    name: "Michael Kim",
    date: "June 2023",
    rating: 5,
    content: "Julie has been treating my insomnia and anxiety with acupuncture for the past few months. I'm now sleeping through the night for the first time in years and feeling much more balanced during the day. The peaceful environment of the clinic adds to the therapeutic experience.",
    source: "google"
  },
  {
    id: 5,
    name: "Rebecca Taylor",
    date: "October 2023",
    rating: 5,
    content: "I was referred to Arise & Shine by my physiotherapist for ongoing shoulder pain. Joseph's careful assessment and targeted treatment approach has given me relief I couldn't find elsewhere. Their integration of traditional Chinese medicine with modern health knowledge is impressive.",
    source: "facebook"
  },
  {
    id: 6,
    name: "James Wilson",
    date: "May 2023",
    rating: 5,
    content: "After a car accident left me with chronic neck pain, I tried everything before finding Arise & Shine. Julie's gentle approach and expertise in acupuncture has helped reduce my pain significantly. I appreciate how they take time to explain the treatment process.",
    source: "google"
  },
  {
    id: 7,
    name: "Olivia Lee",
    date: "August 2023",
    rating: 4,
    content: "Been coming here for hormonal balance issues. The improvement in my symptoms has been gradual but significant. Both practitioners are knowledgeable and take a holistic approach to health. The clinic is also conveniently located with easy parking.",
    source: "google"
  },
  {
    id: 8,
    name: "Daniel Jackson",
    date: "September 2023",
    rating: 5,
    content: "I came skeptical but left a believer! Joseph helped me with persistent tennis elbow that wasn't responding to conventional treatments. His skill with both acupuncture and movement advice has made a tremendous difference. Highly recommend giving them a try.",
    source: "facebook"
  },
];

export default function ReviewsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

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

    // Reviews grid animation with stagger
    if (reviewsRef.current && reviewsRef.current.children.length > 0) {
      gsap.fromTo(
        reviewsRef.current.children,
        { opacity: 0, y: 50 },
        {
          scrollTrigger: {
            trigger: reviewsRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          },
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out"
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Calculate overall rating
  const averageRating =
    reviews.reduce((total, review) => total + review.rating, 0) / reviews.length;
  const formattedRating = averageRating.toFixed(1);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <div className="w-full mt-6" ref={heroRef}>
        <Hero
          title="Patient Stories"
          subtitle="Discover how Traditional Chinese Medicine is helping our patients recover from pain, manage stress, and find balance. Here's what they have to say about their experience at Arise & Shine."
          backgroundColor="bg-[#EFEADE]"
          textColor="black"
          height="reduced"
          align="center"
          overlay={false}
          buttonText="Share Your Experience"
          buttonHref="https://maps.app.goo.gl/Nw6wJF415mjqabMM6"
          buttonVariant="primary"
        />
      </div>

      {/* Stats Section */}
      <Section
        padding="large"
        width="default"
        className="text-center"
      >
        <Badge className="self-start mb-6">
          <Text size="base" className="text-black">Patient Satisfaction</Text>
        </Badge>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-3xl mx-auto">
          <div className="flex flex-col items-center">
            <Heading level={2} className="text-[#E5A44D] text-5xl mb-2">{formattedRating}/5</Heading>
            <Text size="lg" weight="medium">Average Rating</Text>
          </div>
          <div className="flex flex-col items-center">
            <Heading level={2} className="text-[#E5A44D] text-5xl mb-2">95%</Heading>
            <Text size="lg" weight="medium">Would Recommend</Text>
          </div>
          <div className="flex flex-col items-center">
            <Heading level={2} className="text-[#E5A44D] text-5xl mb-2">300+</Heading>
            <Text size="lg" weight="medium">Happy Patients</Text>
          </div>
        </div>
      </Section>

      {/* Reviews Grid */}
      <Section padding="large" background="transparent">
        <Heading level={2} align="center" className="mb-12">
          What Our Patients Say
        </Heading>

        <div
          ref={reviewsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              name={review.name}
              date={review.date}
              rating={review.rating}
              content={review.content}
              source={review.source as any}
            />
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      {/* <Section
        background="secondary"
        padding="large"
        buttonText="Book an Appointment"
        buttonHref="/book"
        buttonVariant="primary"
        buttonSize="lg"
      >
        <div className="text-center max-w-3xl mx-auto mb-8">
          <Heading level={2} className="mb-6">
            Ready to Experience the Difference?
          </Heading>
          <Text size="lg">
            Join our community of satisfied patients and discover how Traditional Chinese Medicine can help you on your journey to better health and wellbeing.
          </Text>
        </div>

      </Section> */}

      <Footer />
    </main>
  );
} 