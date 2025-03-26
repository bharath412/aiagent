import React, { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

interface SolutionCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
  gradient: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  title,
  description,
  icon,
  href,
  gradient,
}) => {
  return (
    <Card className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100 h-full">
      <div className={`h-48 bg-gradient-to-r ${gradient} flex items-center justify-center p-6 text-white`}>
        {icon}
      </div>
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <a
          href={href}
          className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
        >
          Learn more
          <ChevronRight className="ml-1 h-4 w-4" />
        </a>
      </CardContent>
    </Card>
  );
};

export default SolutionCard;
