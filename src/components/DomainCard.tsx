import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code, BarChart3, Brain, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DomainCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  index: number;
}

const iconMap: Record<string, LucideIcon> = {
  Code: Code,
  BarChart3: BarChart3,
  Brain: Brain,
};

const DomainCard = ({ id, title, description, icon, index }: DomainCardProps) => {
  const IconComponent = iconMap[icon] || Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div className="glass-card hover-lift p-8 rounded-2xl h-full flex flex-col">
        <div className="bg-gradient-primary rounded-xl w-16 h-16 flex items-center justify-center mb-6">
          <IconComponent className="h-8 w-8 text-white" />
        </div>
        <h3 className="font-heading font-semibold text-2xl mb-3">{title}</h3>
        <p className="text-muted-foreground mb-6 flex-grow">{description}</p>
        <Button
          asChild
          variant="outline"
          className="group-hover:bg-primary group-hover:text-white transition-all"
        >
          <Link to={`/domains/${id}`} className="flex items-center">
            Explore Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default DomainCard;
