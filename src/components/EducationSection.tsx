import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap } from 'lucide-react';

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const educationData = [
    {
      id: 1,
      degree: "Intermediate",
      period: "2019–2021",
      institution: "Kips College",
      description: "Pre-engineering studies with focus on mathematics and science fundamentals."
    },
    {
      id: 2,
      degree: "B.Sc. Computer Science",
      period: "2021–2025",
      institution: "Lahore Garrison University",
      description: "Fresh Graguate 3.15/4.0 GPA",
    //   current: true
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
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
              Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-portfolio-secondary mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-portfolio-secondary transform -translate-x-1/2"></div>
            
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className={`relative mb-12 flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 top-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <GraduationCap className="h-4 w-4 text-primary-foreground" />
                </div>
                
                {/* Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <div className="portfolio-card pinterest-card p-6">
                    <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-primary/10 text-primary mb-2">
                      {edu.period}
                    </span>
                    <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                    <p className="font-medium text-muted-foreground mb-2">{edu.institution}</p>
                    <p className="text-muted-foreground">{edu.description}</p>
                    {edu.current && (
                      <span className="inline-block mt-2 px-2 py-1 text-xs font-semibold rounded bg-green-500/10 text-green-600 dark:text-green-400">
                        Current
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;