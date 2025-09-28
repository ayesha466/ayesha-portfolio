import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award } from 'lucide-react';

const CertificatesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certificatesData = [
    {
      id: 1,
      title: "Full Stack Development Certificate",
      issuer: "LGU",
      year: "2024"
    },
    {
      id: 2,
      title: "Graphic Designing Certificate",
      issuer: "NS Training",
      year: "2024"
    },
    {
      id: 3,
      title: "Freelancing Certificate",
      issuer: "NS Training",
      year: "2024"
    },
    {
      id: 4,
      title: "Robotics Workshop",
      issuer: "LGU",
      year: "2023"
    },
    {
      id: 5,
      title: "Scholarship Award",
      issuer: "",
      year: "2019"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-muted/30">
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
              Certificates & Awards
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-portfolio-secondary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="portfolio-card pinterest-card p-6 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
              {(cert.issuer || cert.year) && (
                <p className="text-muted-foreground">
                  {cert.issuer && <span>{cert.issuer}</span>}
                  {cert.issuer && cert.year && <span> • </span>}
                  {cert.year && <span>{cert.year}</span>}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;