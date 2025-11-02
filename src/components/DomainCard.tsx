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
      <div className="glass-card hover-lift p-8 rounded-2xl h-full flex flex-col border border-border/50 group-hover:border-primary/30 transition-all shadow-md">
        <div className="bg-gradient-primary rounded-xl w-20 h-20 flex items-center justify-center mb-6 shadow-lg">
          <IconComponent className="h-10 w-10 text-white" />
        </div>
        <h3 className="font-heading font-semibold text-2xl mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">{description}</p>
        <Button
          asChild
          className="gradient-primary text-white shadow-md group-hover:shadow-lg transition-all"
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
