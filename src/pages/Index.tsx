import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import testimonialsData from "@/data/testimonials.json";

const Index = () => {
  const services = [
    { title: "Web Development", price: "₹799", color: "from-blue-500 to-cyan-500" },
    { title: "Data Science & Analytics", price: "₹899", color: "from-purple-500 to-pink-500" },
    { title: "Artificial Intelligence", price: "₹999", color: "from-orange-500 to-red-500" },
  ];

  const features = [
    {
      icon: Sparkles,
      title: "Affordable Pricing",
      description: "Quality projects starting at just ₹799 with complete documentation",
    },
    {
      icon: Zap,
      title: "End-to-End Support",
      description: "From idea to code, report, and presentation - we've got you covered",
    },
    {
      icon: Shield,
      title: "Real Working Projects",
      description: "Fully functional projects with clean code and detailed explanations",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10"></div>
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6 leading-tight">
              Struggling with your
              <br />
              <span className="text-primary">Final Year Project?</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Let's turn your idea into reality 💡
              <br />
              Complete support from idea to code, report, and presentation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="gradient-primary text-white font-semibold text-lg h-14 px-8"
                asChild
              >
                <Link to="/domains">
                  Explore Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-semibold text-lg h-14 px-8"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose from our range of specialized domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-card hover-lift p-8 rounded-2xl text-center">
                  <div className={`h-2 w-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${service.color}`}></div>
                  <h3 className="font-heading font-semibold text-2xl mb-3">
                    {service.title}
                  </h3>
                  <p className="text-4xl font-bold text-primary mb-6">
                    {service.price}
                    <span className="text-sm text-muted-foreground">+</span>
                  </p>
                  <Button
                    asChild
                    className="gradient-primary text-white w-full"
                  >
                    <Link to="/domains">View Details</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-muted-foreground">
              We make your final year project journey smooth and successful
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="glass-card p-8 rounded-2xl hover-lift text-center">
                  <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Student Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Hear from students who aced their final year projects with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {testimonialsData.slice(0, 3).map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} {...testimonial} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-semibold"
            >
              <Link to="/testimonials">
                View All Testimonials
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-hero rounded-3xl p-12 text-center text-white"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get in touch with us today and turn your ideas into reality
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold text-lg h-14 px-8"
            >
              <Link to="/contact">
                Contact Us Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
