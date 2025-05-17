import React from 'react';
import { Button } from '@/components/design-system/Button';
import { Heading, Text } from '@/components/design-system/Typography';
import { Section } from '@/components/design-system/Section';
import { colors, typography, spacing, borderRadius, shadows } from '@/styles/design-system';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function DesignSystem() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <Heading level={1} className="mb-8">Design System</Heading>
        <Text size="lg" className="mb-16">This page documents all design elements used across the Arise & Shine website.</Text>

        {/* Typography Section */}
        <Section padding="large" className="mb-16">
          <Heading level={2} className="mb-8">Typography</Heading>

          <div className="mb-8">
            <Heading level={3} className="mb-4">Headings</Heading>
            <div className="flex flex-col gap-4">
              <Heading level={1}>Heading 1</Heading>
              <Heading level={2}>Heading 2</Heading>
              <Heading level={3}>Heading 3</Heading>
              <Heading level={4}>Heading 4</Heading>
              <Heading level={5}>Heading 5</Heading>
              <Heading level={6}>Heading 6</Heading>
            </div>
          </div>

          <div>
            <Heading level={3} className="mb-4">Body Text</Heading>
            <div className="flex flex-col gap-4">
              <Text size="xs">Text Extra Small</Text>
              <Text size="sm">Text Small</Text>
              <Text size="base">Text Base</Text>
              <Text size="lg">Text Large</Text>
              <div className="text-xl font-raleway">Text Extra Large (Custom)</div>
            </div>
          </div>
        </Section>

        {/* Colors Section */}
        <Section padding="large" className="mb-16">
          <Heading level={2} className="mb-8">Colors</Heading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(colors).map(([name, value]) => (
              <div key={name} className="flex flex-col gap-2">
                <div
                  className="h-24 w-full rounded-lg border border-gray-200"
                  style={{ backgroundColor: value }}
                />
                <Text size="base" className="font-medium">{name}</Text>
                <Text size="sm" className="text-gray-600">{value}</Text>
              </div>
            ))}
          </div>
        </Section>

        {/* Buttons Section */}
        <Section padding="large" className="mb-16">
          <Heading level={2} className="mb-8">Buttons</Heading>

          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="sm">Small Button</Button>
            <Button variant="primary" size="md">Medium Button</Button>
            <Button variant="primary" size="lg">Large Button</Button>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="primary">Primary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="text">Text Button</Button>
            <div className="inline-flex items-center justify-center gap-2 font-raleway font-semibold transition-colors bg-transparent text-black text-lg py-2 px-6">
              Ghost Button (Custom)
            </div>
          </div>
        </Section>

        {/* Spacing Section */}
        <Section padding="large" className="mb-16">
          <Heading level={2} className="mb-8">Spacing</Heading>
          <div className="flex flex-col gap-4">
            {Object.entries(spacing).map(([name, value]) => (
              <div key={name} className="flex items-center gap-4">
                <div
                  className="bg-primary h-8"
                  style={{ width: value }}
                />
                <Text size="base">{name}: {value}</Text>
              </div>
            ))}
          </div>
        </Section>

        {/* Border Radius Section */}
        <Section padding="large" className="mb-16">
          <Heading level={2} className="mb-8">Border Radius</Heading>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(borderRadius).map(([name, value]) => (
              <div key={name} className="flex flex-col items-center gap-2">
                <div
                  className="h-16 w-16 bg-primary border border-gray-200"
                  style={{ borderRadius: value }}
                />
                <Text size="sm" className="text-center">{name}: {value}</Text>
              </div>
            ))}
          </div>
        </Section>

        {/* Shadows Section */}
        <Section padding="large">
          <Heading level={2} className="mb-8">Shadows</Heading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(shadows).map(([name, value]) => (
              <div
                key={name}
                className="h-24 bg-white rounded-lg p-4 flex items-center justify-center"
                style={{ boxShadow: value }}
              >
                <Text size="base">{name}</Text>
              </div>
            ))}
          </div>
        </Section>
      </div>
      <Footer />
    </main>
  );
} 