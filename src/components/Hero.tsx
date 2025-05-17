import { Hero as DesignSystemHero } from "@/components/design-system/Hero";

export default function Hero() {
  return (
    <div className="pb-8">
      <DesignSystemHero
        title="Rise above pain. Rediscover balance."
        subtitle={'"Arise, shine; for thy light is come…" – Isaiah 60:1'}
        backgroundImage="/images/backgrounds/hero-bg.png"
        height="full"
        textColor="white"
        align="center"
        titleSize="large"
        overlay={true}
        overlayOpacity="bg-black/50"
        className="vignette"
        buttonText="Book a session"
        buttonHref="/book"
        buttonVariant="outline"
      />
    </div>
  );
} 