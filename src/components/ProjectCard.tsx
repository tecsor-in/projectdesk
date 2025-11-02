import { motion } from "framer-motion";
import { IndianRupee, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  price: number;
  subdomain: string;
  index: number;
}

const ProjectCard = ({
  title,
  description,
  price,
  subdomain,
  index,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      className="group"
    >
      <div className="glass-card hover-lift p-6 rounded-2xl h-full flex flex-col border border-border/50 group-hover:border-primary/30 transition-all shadow-sm hover:shadow-lg">
        <Badge className="w-fit mb-3 bg-primary/10 text-primary border border-primary/20">
          {subdomain}
        </Badge>
        <h3 className="font-heading font-semibold text-xl mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow leading-relaxed">
          {description}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="flex items-center text-primary font-bold text-2xl">
            <IndianRupee className="h-5 w-5" />
            {price}
          </div>
          <Button
            size="sm"
            className="gradient-primary text-white shadow-md hover:shadow-lg transition-shadow"
            onClick={() => {
              window.location.href = "https://forms.gle/ZigELP97DJMmoV8f6";
            }}
          >
            Get This
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
