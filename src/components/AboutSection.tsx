import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, BookOpen, Heart, Users } from 'lucide-react';
import ParallaxElements from './ParallaxElements';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    {
      icon: BookOpen,
      title: "CS Graduate",
      description: "Computer Science degree with focus on UI/UX and development"
    },
    {
      icon: Award,
      title: "Multi-Disciplinary",
      description: "Expertise in design, development, and creative graphics"
    },
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "Passionate about creating beautiful, functional experiences"
    },
    {
      icon: Users,
      title: "User-Centered",
      description: "Always putting user needs and experiences first"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      <ParallaxElements />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-portfolio-secondary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-portfolio-secondary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-lg leading-relaxed">
                Hello! I'm <strong className="text-primary">Ayesha Shabbir</strong>, a passionate Computer Science graduate 
                with a unique blend of technical expertise and creative vision. I specialize in creating 
                <strong className="text-portfolio-secondary"> user-friendly, aesthetic, and functional digital experiences</strong> 
                that bridge the gap between beautiful design and seamless functionality.
              </p>
              <p className="text-lg leading-relaxed">
                With expertise spanning <strong className="text-portfolio-accent">UI/UX design, frontend development, and graphic design</strong>, 
                I bring a holistic approach to every project. My goal is to create digital solutions that not only 
                look stunning but also provide intuitive, meaningful experiences for users.
              </p>
              <p className="text-lg leading-relaxed">
                I believe that great design is invisible – it works so well that users don't have to think about it. 
                Whether I'm designing a mobile app interface, developing a responsive website, or creating compelling 
                visual graphics, I'm always focused on solving real problems through thoughtful, user-centered design.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="skill-badge">Creative Problem Solving</div>
              <div className="skill-badge">User-Centered Design</div>
              <div className="skill-badge">Cross-Platform Development</div>
              <div className="skill-badge">Visual Storytelling</div>
            </div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="portfolio-card group pinterest-card"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-primary/10 to-portfolio-secondary/10 group-hover:from-primary/20 group-hover:to-portfolio-secondary/20 transition-all duration-300">
                    <achievement.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;