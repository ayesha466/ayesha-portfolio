import { motion } from 'framer-motion';
import { ArrowDown, Download, Eye } from 'lucide-react';
import PinterestBackground from './PinterestBackground';

const HeroSection = () => {
  const handleDownloadCV = () => {
    // Create a downloadable CV link
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual CV file path
    link.download = 'Ayesha_Shabbir_CV.pdf';
    link.click();
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Pinterest-Inspired Animated Background */}
      <div className="absolute inset-0 animated-bg">
        <PinterestBackground />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-primary via-portfolio-secondary to-portfolio-accent bg-clip-text text-transparent">
              Ayesha Shabbir
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium"
          >
            UI/UX Designer | Frontend Developer | Graphic Designer
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-foreground/80 mb-12 italic max-w-3xl mx-auto leading-relaxed"
          >
            "Design is not just what it looks like and feels like. Design is how it works."
            <footer className="text-primary font-semibold mt-2">— Steve Jobs</footer>
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.button
              onClick={scrollToProjects}
              className="btn-hero group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              View My Work
            </motion.button>
            <motion.button
              onClick={handleDownloadCV}
              className="btn-outline group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Download CV
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={scrollToProjects}
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <ArrowDown className="h-6 w-6 text-foreground" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;