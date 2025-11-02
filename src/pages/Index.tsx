import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles, Zap, Shield, Users, Trophy, Clock, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "95%", label: "Success Rate" },
    { number: "300+", label: "Happy Students" },
    { number: "24/7", label: "Support Available" },
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

  const process = [
    {
      step: "1",
      title: "Choose Your Domain",
      description: "Browse through Web Development, Data Science, or AI projects",
    },
    {
      step: "2",
      title: "Select Your Project",
      description: "Pick from our curated list of project ideas or suggest your own",
    },
    {
      step: "3",
      title: "Get Your Solution",
      description: "Receive complete code, documentation, and presentation materials",
    },
    {
      step: "4",
      title: "Ace Your Defense",
      description: "Present confidently with our comprehensive support",
    },
  ];

  const faqs = [
    {
      question: "What's included in the project package?",
      answer:
        "Each project includes fully functional source code, detailed documentation, project report, presentation slides, and installation guide. We also provide post-delivery support for any queries.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Most projects are delivered within 3-5 days depending on complexity. For urgent requirements, we offer express delivery options at additional cost.",
    },
    {
      question: "Can I request modifications to the project?",
      answer:
        "Yes! We offer free minor modifications within 7 days of delivery. Major changes can be accommodated at a nominal additional cost.",
    },
    {
      question: "Do you provide project explanations?",
      answer:
        "Absolutely! We provide detailed code comments, documentation, and are available to explain any part of the project via call or video chat.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept UPI, bank transfer, and all major payment methods. Payment is typically 50% advance and 50% on delivery.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDdiZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptLTggMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTE2IDBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
<div className="inline-block mb-4">
  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
    🎓 Trusted by 300+ Students Across India
  </span>
</div>

            <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6 leading-tight">
              Struggling with your
              <br />
              <span className="text-primary">Final Year Project?</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Let's turn your idea into reality 💡
              <br />
              Complete support from idea to code, report, and presentation at
              <span className="text-primary font-semibold"> affordable prices</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="gradient-primary text-white font-semibold text-lg h-14 px-8 shadow-lg hover:shadow-xl transition-shadow"
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
  className="
    font-semibold text-base sm:text-lg h-12 sm:h-14 
    px-4 sm:px-6 md:px-8 
    border-2 hover:border-primary
  "
  onClick={() => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }}
>
  Contact Us
</Button>

            </div>
            
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="glass-card p-6 rounded-xl"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
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
                <div className="glass-card hover-lift p-8 rounded-2xl text-center border-2 border-transparent group-hover:border-primary/20 transition-all">
                  <div className={`h-3 w-24 mx-auto mb-6 rounded-full bg-gradient-to-r ${service.color}`}></div>
                  <h3 className="font-heading font-semibold text-2xl mb-3">
                    {service.title}
                  </h3>
                  <p className="text-4xl font-bold text-primary mb-2">
                    {service.price}
                    <span className="text-sm text-muted-foreground font-normal"> onwards</span>
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">Complete package included</p>
                  <Button
                    asChild
                    className="gradient-primary text-white w-full shadow-md group-hover:shadow-lg transition-shadow"
                  >
                    <Link to="/domains">View Projects</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple 4-step process to get your project done
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            {/* <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-30"></div>
             */}
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="bg-gradient-primary text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg relative z-10">
                    {item.step}
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-accent/30">
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
                <div className="glass-card p-8 rounded-2xl hover-lift text-center border border-border/50">
                  <div className="bg-gradient-primary rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <feature.icon className="h-10 w-10 text-primary" />
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
      <section className="py-20 px-4">
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

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Got questions? We've got answers
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pl-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-hero rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMTZjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0tOCAwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMTYgMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
            <div className="relative z-10">
              <Trophy className="h-16 w-16 mx-auto mb-6 opacity-90" />
              <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join 300+ successful students who completed their final year projects with us. Get started today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-semibold text-lg h-14 px-10 shadow-lg"
                >
                  <Link to="/contact">
                    Contact Us Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-primary hover:bg-white/90 hover:text-primary font-semibold text-lg h-14 px-8"
                >
                  <Link to="/domains">Browse Projects</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
