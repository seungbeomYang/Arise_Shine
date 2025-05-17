# Arise & Shine Design System

This directory contains reusable UI components that make up the Arise & Shine design system. The goal is to maintain consistency across the website and make it easier to implement UI changes.

## Components

### Card
A versatile card component with configurable variants and hover effects:
- `variant`: primary, secondary, outline 
- `hover`: scale, glow, scale-glow, none

### Badge
A badge component for displaying labels:
- `variant`: default, primary, outline

### Typography
Text components for consistent typography:
- `Heading`: For headings (h1-h6) with configurable color and alignment
- `Text`: For paragraphs and other text with configurable size, weight, color, and alignment

### LearnMoreLink
A consistent "Learn More" link component with built-in hover animation.

### Button
A button component with configurable variants, sizes and icons.

### ServiceCard
A specialized card component for displaying services.

### TreatmentCard
A specialized card component for displaying treatments.

## Usage

Import components from the design system:

```tsx
import { Card, Badge, Text, Heading, LearnMoreLink, Button } from '@/components/design-system';
```

## Examples

### Card with Badge and Text
```tsx
<Card variant="primary" hover="scale-glow" className="p-6">
  <Badge variant="default" className="mb-4">
    <Text size="sm">Featured</Text>
  </Badge>
  <Heading level={3}>Card Title</Heading>
  <Text size="base">Card description text goes here.</Text>
  <LearnMoreLink href="/learn-more" />
</Card>
```

### Button with icon
```tsx
<Button 
  variant="primary" 
  size="md" 
  icon="/images/arrow-right.svg" 
  iconAlt="Arrow right"
>
  Get Started
</Button>
``` 