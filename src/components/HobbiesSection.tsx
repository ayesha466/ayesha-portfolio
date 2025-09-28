import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Camera, ChefHat, CameraOff, Video, Utensils } from 'lucide-react';

const HobbiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const hobbiesData = [
    {
      id: 1,
      name: "Photography",
      icon: Camera,
      emoji: "📸"
    },
    {
      id: 2,
      name: "Cooking",
      icon: ChefHat,
      emoji: "👩‍🍳"
    },
    {
      id: 3,
      name: "Badminton",
      icon: CameraOff,
      emoji: "🏸"
    },
    {
      id: 4,
      name: "Baking",
      icon: Utensils,
      emoji: "🎂"
    },
    {
      id: 5,
      name: "Video Editing",
      icon: Video,
      emoji: "🎥"
    }
  ];

  return (
    <section id="hobbies" className="py-20">
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
              Hobbies & Interests
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-portfolio-secondary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {hobbiesData.map((hobby, index) => {
            const IconComponent = hobby.icon;
            return (
              <motion.div
                key={hobby.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="portfolio-card pinterest-card p-6 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <IconComponent className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{hobby.name}</h3>
                <span className="text-2xl">{hobby.emoji}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;