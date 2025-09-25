import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ParallaxElements = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Parallax Cards */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 right-10 w-16 h-24 bg-gradient-to-br from-primary/5 to-portfolio-secondary/5 rounded-lg border border-border/30 backdrop-blur-sm"
      />
      
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-40 left-20 w-20 h-16 bg-gradient-to-br from-portfolio-accent/5 to-primary/5 rounded-lg border border-border/30 backdrop-blur-sm"
      />
      
      <motion.div
        style={{ y: y3 }}
        className="absolute top-1/2 right-1/4 w-12 h-20 bg-gradient-to-br from-portfolio-secondary/5 to-portfolio-accent/5 rounded-lg border border-border/30 backdrop-blur-sm"
      />

      {/* Rotating Geometric Shapes */}
      <motion.div
        style={{ rotate }}
        className="absolute top-1/3 left-10 w-8 h-8 border-2 border-primary/20 rounded-sm"
      />
      
      <motion.div
        style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, -180]) }}
        className="absolute bottom-1/3 right-16 w-6 h-6 bg-gradient-to-r from-portfolio-secondary/20 to-transparent rounded-full"
      />

      {/* Floating Dots */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-2/3 left-1/3 w-2 h-2 bg-primary/40 rounded-full"
      />
      
      <motion.div
        animate={{
          y: [0, 15, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-1/4 right-1/3 w-3 h-3 bg-portfolio-accent/40 rounded-full"
      />
    </div>
  );
};

export default ParallaxElements;