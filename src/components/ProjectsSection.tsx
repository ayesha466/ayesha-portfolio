import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Figma, Smartphone, Globe, Palette } from 'lucide-react';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Smart Skills E-book Maker App",
      description: "React Native mobile application for creating and managing digital e-books with interactive features and user-friendly interface.",
      category: "frontend",
      tools: ["React Native", "JavaScript", "Mobile UI"],
      image: "/api/placeholder/400/250",
      liveDemo: "#",
      github: "#",
      type: "mobile"
    },
    {
      id: 2,
      title: "E-commerce Web Application",
      description: "Full-stack e-commerce platform with modern UI, payment integration, and responsive design optimized for conversions.",
      category: "frontend",
      tools: ["React.js", "Tailwind CSS", "JavaScript"],
      image: "/api/placeholder/400/250",
      liveDemo: "#",
      github: "#",
      type: "web"
    },
    {
      id: 3,
      title: "Nexus Platform Interface",
      description: "Modern dashboard and platform interface design focusing on user experience and clean, intuitive navigation.",
      category: "frontend",
      tools: ["React.js", "CSS", "UI/UX"],
      image: "/api/placeholder/400/250",
      liveDemo: "#",
      github: "#",
      type: "web"
    },
    {
      id: 4,
      title: "Mobile App Wireframes & Prototypes",
      description: "Complete wireframing and prototyping suite for various mobile applications with focus on user flow and interaction design.",
      category: "uiux",
      tools: ["Figma", "Adobe XD", "Prototyping"],
      image: "/api/placeholder/400/250",
      figmaLink: "#",
      type: "design"
    },
    {
      id: 5,
      title: "App Design System",
      description: "Comprehensive design system including components, typography, color schemes, and design guidelines for consistent app interfaces.",
      category: "uiux",
      tools: ["Figma", "Design Systems", "UI Components"],
      image: "/api/placeholder/400/250",
      figmaLink: "#",
      type: "design"
    },
    {
      id: 6,
      title: "Brand Identity & Logo Collection",
      description: "Creative logo designs and brand identity packages for various clients, showcasing versatility in graphic design.",
      category: "graphics",
      tools: ["Illustrator", "Photoshop", "Branding"],
      image: "/api/placeholder/400/250",
      behanceLink: "#",
      type: "graphics"
    },
    {
      id: 7,
      title: "Social Media Graphics Suite",
      description: "Eye-catching social media graphics, posts, and promotional materials designed for maximum engagement and brand consistency.",
      category: "graphics",
      tools: ["Photoshop", "Illustrator", "Social Media"],
      image: "/api/placeholder/400/250",
      behanceLink: "#",
      type: "graphics"
    },
    {
      id: 8,
      title: "Game UI Panels & Assets",
      description: "Gaming interface panels, HUD elements, and digital assets designed for immersive gaming experiences.",
      category: "graphics",
      tools: ["Photoshop", "Game Design", "UI Assets"],
      image: "/api/placeholder/400/250",
      behanceLink: "#",
      type: "graphics"
    }
  ];

  const filters = [
    { id: 'all', name: 'All Projects', icon: Globe },
    { id: 'uiux', name: 'UI/UX Design', icon: Smartphone },
    { id: 'frontend', name: 'Frontend Development', icon: Globe },
    { id: 'graphics', name: 'Graphic Design', icon: Palette }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getProjectIcon = (type: string) => {
    switch (type) {
      case 'mobile': return <Smartphone className="h-5 w-5" />;
      case 'web': return <Globe className="h-5 w-5" />;
      case 'design': return <Figma className="h-5 w-5" />;
      case 'graphics': return <Palette className="h-5 w-5" />;
      default: return <Globe className="h-5 w-5" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-portfolio-secondary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-portfolio-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my expertise across UI/UX design, frontend development, and creative graphics
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'bg-card hover:bg-muted border border-border hover:scale-105'
              }`}
            >
              <filter.icon className="h-4 w-4" />
              <span>{filter.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="portfolio-card group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-4 bg-gradient-to-br from-primary/10 to-portfolio-secondary/10">
                <div className="aspect-video flex items-center justify-center bg-muted/50">
                  {getProjectIcon(project.type)}
                  <span className="ml-2 text-sm text-muted-foreground">Project Preview</span>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-5 w-5 text-white" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5 text-white" />
                    </a>
                  )}
                  {project.figmaLink && (
                    <a
                      href={project.figmaLink}
                      className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Figma className="h-5 w-5 text-white" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="skill-badge text-xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;