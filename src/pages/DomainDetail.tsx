import { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import domainsData from "@/data/domains.json";
import projectsData from "@/data/projects.json";

const DomainDetail = () => {
  const { domainId } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const domain = domainsData.find((d) => d.id === domainId);
  const projects = projectsData[domainId as keyof typeof projectsData] || [];

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  if (!domain) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl">Domain not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-32 pb-12 px-4 gradient-hero">
        <div className="container mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-heading font-bold text-5xl md:text-6xl mb-4">
              {domain.title}
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              {domain.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Subdomains */}
      <section className="py-12 px-4 bg-accent/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-8"
          >
            <h2 className="font-heading font-semibold text-2xl mb-6">
              Subdomains We Cover
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {domain.subdomains.map((subdomain) => (
                <Badge
                  key={subdomain}
                  className="text-base py-2 px-4 bg-primary text-white"
                >
                  {subdomain}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-12"
          >
            <h2 className="font-heading font-bold text-4xl mb-4 text-center">
              Project Ideas
            </h2>
            <p className="text-center text-muted-foreground text-lg">
              {projects.length} amazing projects to choose from
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {currentProjects.map((project, index) => (
              <ProjectCard key={project.id} {...project} index={index} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2">
              {[...Array(totalPages)].map((_, index) => (
                <Button
                  key={index}
                  variant={currentPage === index + 1 ? "default" : "outline"}
                  onClick={() => setCurrentPage(index + 1)}
                  className={
                    currentPage === index + 1
                      ? "gradient-primary text-white"
                      : ""
                  }
                >
                  {index + 1}
                </Button>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DomainDetail;
