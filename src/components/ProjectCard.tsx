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
      <div className="glass-card hover-lift p-6 rounded-2xl h-full flex flex-col">
        <Badge className="w-fit mb-3 bg-accent text-accent-foreground">
          {subdomain}
        </Badge>
        <h3 className="font-heading font-semibold text-xl mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-primary font-bold text-2xl">
            <IndianRupee className="h-5 w-5" />
            {price}
          </div>
          <Button
            size="sm"
            className="gradient-primary text-white"
            onClick={() => {
              window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
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
