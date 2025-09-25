import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Lightbulb, Users, MessageCircle, Target } from 'lucide-react';
import ParallaxElements from './ParallaxElements';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technicalSkills = [
    { name: "React.js", level: 90 },
    { name: "React Native", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "Tailwind CSS", level: 95 },
    { name: "HTML/CSS", level: 95 },
    { name: "Figma", level: 90 },
    { name: "Adobe XD", level: 85 },
    { name: "Photoshop", level: 80 },
    { name: "Illustrator", level: 75 }
  ];

  const softSkills = [
    { name: "Creativity", icon: Palette, color: "from-pink-500 to-rose-500" },
    { name: "Problem Solving", icon: Lightbulb, color: "from-yellow-500 to-orange-500" },
    { name: "Teamwork", icon: Users, color: "from-blue-500 to-indigo-500" },
    { name: "Communication", icon: MessageCircle, color: "from-green-500 to-emerald-500" },
    { name: "User Focus", icon: Target, color: "from-purple-500 to-violet-500" },
    { name: "Clean Code", icon: Code, color: "from-cyan-500 to-blue-500" }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
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
              My Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-portfolio-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set combining technical expertise with creative vision and strong soft skills
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                      className="h-full bg-gradient-to-r from-primary to-portfolio-secondary rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-portfolio-secondary opacity-50 blur-sm"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">
              Core Strengths
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="portfolio-card group cursor-pointer pinterest-card"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300`}>
                      <skill.icon className="h-6 w-6 text-white" style={{
                        filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))'
                      }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {skill.name}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;