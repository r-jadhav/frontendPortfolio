import {
  ExternalLink,
  Github,
  Smartphone,
  Globe,
  Star,
  ArrowRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Brahma Gems",
      description:
        "Built the Brahma Gems platform for Anshul Goel to help users find the right Gemstone or Rudraksha based on their kundli. Delivered a clean, informative, and responsive interface to support guided, astrology-based purchases.",
      image: "brahmagems.jpg",
      technologies: [
        "Laravel",
        "MySQL",
        "PostgreSQL",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Bootstrap5",
      ],
      type: "web",
      liveUrl: "https://brahmagems.com/",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Kaizen Training Solutions (KTS)",
      description:
        "Worked on the Kaizen Training Solutions website, a platform offering a wide range of corporate coaching and training programs tailored to leadership, sales, wellness, and more. Focused on creating a clean, responsive interface to help users easily explore and select the right training solutions.",
      image: "kaizen-training-solutions.jpg",
      technologies: ["PHP", "JavaScript", "HTML5", "CSS3", "Bootstrap5"],
      type: "web",
      liveUrl: "https://kaizentrainingsolutions.com",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Prima Kniha",
      description:
        "Enhanced the frontend of Prima Kniha, optimizing responsiveness and multilingual support for an international audience. Ensured smooth product discovery and secure checkout in multiple currencies.",
      image: "primakniha.jpg",
      technologies: [
        "Laravel",
        "MySQL",
        "PostgreSQL",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Bootstrap5",
      ],
      type: "web",
      liveUrl: "https://primakniha.kartlog.in/",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Cancer Consult India",
      description:
        "Designed and developed the Cancer Consult India website for Dr. Manish Kumar Singhal, a leading cancer specialist in Noida. Focused on presenting cancer-related information in a clean, accessible, and patient-friendly format.",
      image: "cancer-consult.jpg",
      technologies: [
        "Laravel",
        "MySQL",
        "PostgreSQL",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Bootstrap5",
      ],
      type: "web",
      liveUrl: "https://cancerconsultindia.com/",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Joon Blu",
      description:
        "Designed and developed the JoonBlu Shopify store to showcase their collection of tote bags, laptop bags, and mini bags. Focused on clean visuals, seamless shopping experience, and brand storytelling.",
      image: "joonblu.jpg",
      technologies: ["Shopify"],
      type: "web",
      liveUrl: "https://joonblu.com/",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Charbhuja",
      description:
        "Charbhuja Marble & Tile website to showcase their exquisite collection of imported Italian marble, onyx, and exotic natural stones. The site highlights clear product categories, making it easy for users to explore white marble, travertine, and more. ",
      image: "charbhuja.jpg",
      technologies: ["Wordpress", "MySql"],
      type: "web",
      liveUrl: "https://charbhuja.biz/",
      githubUrl: "#",
      featured: true,
    },
  ];

  return (
    <section className="py-24 pt-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Every project is a new challenge and an opportunity to create
            something impactful. These projects highlight my approach to design,
            development, and functionality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group overflow-hidden bg-glass-gradient backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 animate-slide-in-left hover:shadow-2xl hover:shadow-blue-500/20 ${
                project.featured ? "ring-2 ring-blue-500/30" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 flex gap-2">
                  {project.featured && (
                    <div className="p-2 rounded-full bg-yellow-500/20 text-yellow-400 backdrop-blur-sm border border-yellow-400/30">
                      <Star size={16} fill="currentColor" />
                    </div>
                  )}
                  <div
                    className={`p-2 rounded-full backdrop-blur-sm border ${
                      project.type === "mobile"
                        ? "bg-green-500/20 text-green-400 border-green-400/30"
                        : "bg-blue-500/20 text-blue-400 border-blue-400/30"
                    }`}
                  >
                    {project.type === "mobile" ? (
                      <Smartphone size={16} />
                    ) : (
                      <Globe size={16} />
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 text-gray-200 rounded-full text-xs font-medium border border-white/10 hover:border-white/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 w-full"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                  {/* <Button
                    size="sm"
                    variant="outline"
                    className="border-white/20 text-gray-300 hover:bg-white/10 hover:text-white"
                  >
                    <Github size={16} />
                  </Button> */}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/portfolio">
            <Button
              size="lg"
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 rounded-full font-semibold backdrop-blur-sm"
            >
              View All Projects
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
