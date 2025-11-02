import { motion } from "framer-motion";
import { Lightbulb, Code2, FileText, Presentation } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const process = [
    {
      icon: Lightbulb,
      title: "Idea",
      description: "We help you choose the perfect project idea based on your interests and requirements",
    },
    {
      icon: Code2,
      title: "Code",
      description: "Our experts develop clean, well-documented, and fully functional code for your project",
    },
    {
      icon: FileText,
      title: "Report",
      description: "Comprehensive project report with all necessary documentation and explanations",
    },
    {
      icon: Presentation,
      title: "Presentation",
      description: "Professional presentation slides to help you confidently present your project",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 gradient-hero">
        <div className="container mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">
              About Project Desk
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Your trusted partner in turning final year project ideas into reality
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-4xl mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground text-left">
              <p>
                Project Desk was founded with a simple mission: to help students
                complete their final year projects with confidence and excellence.
                We understand the challenges students face - tight deadlines,
                complex requirements, and the pressure to deliver something unique.
              </p>
              <p>
                With years of experience in web development, data science, and
                artificial intelligence, our team has helped hundreds of students
                across India successfully complete their projects. We don't just
                provide code; we provide complete solutions with detailed
                documentation, reports, and presentation materials.
              </p>
              <p>
                What sets us apart is our commitment to affordability without
                compromising on quality. We believe every student deserves access
                to professional project support, which is why we offer competitive
                pricing starting from just ₹799.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground">
              A simple 4-step journey from idea to completion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass-card p-6 rounded-2xl hover-lift text-center">
                  <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-4 -left-4 bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                    {index + 1}
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-heading font-bold text-4xl mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="font-heading font-semibold text-xl mb-3 text-primary">
                  Quality
                </h3>
                <p className="text-muted-foreground">
                  We deliver high-quality, well-tested code with comprehensive
                  documentation
                </p>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="font-heading font-semibold text-xl mb-3 text-primary">
                  Affordability
                </h3>
                <p className="text-muted-foreground">
                  Professional projects at student-friendly prices without hidden
                  costs
                </p>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="font-heading font-semibold text-xl mb-3 text-primary">
                  Support
                </h3>
                <p className="text-muted-foreground">
                  Dedicated support throughout your project journey and beyond
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
