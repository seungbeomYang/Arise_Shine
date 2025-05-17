import { Card } from "@/components/design-system/Card";
import { Text } from "@/components/design-system/Typography";

interface AdvantageCardProps {
  number: string;
  title: string;
  description: string;
  index?: number;
}

export default function AdvantageCard({
  number,
  title,
  description,
  index = 0
}: AdvantageCardProps) {
  return (
    <Card
      variant="outline"
      hover="scale-glow"
      className="rounded-[14px] p-5 flex gap-16 group"
    >
      <Text
        size="xl"
        weight="semibold"
        className="min-w-[40px] transition-colors duration-300 group-hover:text-[#E5A44D]"
      >
        {number}
      </Text>
      <div className="flex flex-col gap-3">
        <Text
          size="lg"
          weight="semibold"
          className="transition-colors duration-300 group-hover:text-[#E5A44D]"
        >
          {title}
        </Text>
        <Text size="base" className="transition-colors duration-300">
          {description}
        </Text>
      </div>
    </Card>
  );
} 