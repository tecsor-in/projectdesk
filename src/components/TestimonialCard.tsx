import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  college: string;
  project: string;
  review: string;
  rating: number;
  index: number;
}

const TestimonialCard = ({
  name,
  college,
  project,
  review,
  rating,
  index,
}: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="glass-card p-6 rounded-2xl hover-lift"
    >
      <Quote className="h-8 w-8 text-primary mb-4" />
      <p className="text-foreground mb-4 italic">"{review}"</p>
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <div className="border-t border-border pt-4 mt-4">
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{college}</p>
        <p className="text-xs text-primary mt-1">Project: {project}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
