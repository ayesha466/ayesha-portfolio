import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface FloatingCard {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  delay: number;
  duration: number;
}

interface FloatingShape {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

const PinterestBackground = () => {
  const [floatingCards, setFloatingCards] = useState<FloatingCard[]>([]);
  const [floatingShapes, setFloatingShapes] = useState<FloatingShape[]>([]);

  useEffect(() => {
    // Generate floating cards
    const cards: FloatingCard[] = [];
    for (let i = 0; i < 8; i++) {
      cards.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        width: 60 + Math.random() * 80,
        height: 80 + Math.random() * 120,
        delay: Math.random() * 10,
        duration: 15 + Math.random() * 10,
      });
    }
    setFloatingCards(cards);

    // Generate floating shapes
    const shapes: FloatingShape[] = [];
    for (let i = 0; i < 20; i++) {
      shapes.push({
        id: i,
        x: Math.random() * 100,
        y: 100 + Math.random() * 20, // Start below viewport
        size: 20 + Math.random() * 60,
        delay: Math.random() * 20,
        duration: 20 + Math.random() * 15,
      });
    }
    setFloatingShapes(shapes);
  }, []);

  return (
    <>
      {/* Pinterest Background Base */}
      <div className="pinterest-bg">
        {/* Floating Cards */}
        {floatingCards.map((card) => (
          <motion.div
            key={`card-${card.id}`}
            className="floating-card"
            style={{
              left: `${card.x}%`,
              top: `${card.y}%`,
              width: `${card.width}px`,
              height: `${card.height}px`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [0.8, 1, 0.8],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: card.duration,
              delay: card.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Floating Geometric Shapes */}
        <div className="floating-shapes">
          {floatingShapes.map((shape) => (
            <motion.div
              key={`shape-${shape.id}`}
              className="shape"
              style={{
                left: `${shape.x}%`,
                width: `${shape.size}px`,
                height: `${shape.size}px`,
              }}
              initial={{ y: '100vh', opacity: 0 }}
              animate={{ 
                y: '-100vh',
                opacity: [0, 0.6, 0.8, 0.6, 0],
                scale: [0.5, 1, 1.2, 1, 0.5],
              }}
              transition={{
                duration: shape.duration,
                delay: shape.delay,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Animated Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-[0.02]"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: `
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(180deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Organic Blob Shapes */}
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-portfolio-secondary/10 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 50, -30, 0],
            y: [0, -20, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-20 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-portfolio-accent/10 to-primary/10 blur-xl"
          animate={{
            scale: [1, 0.8, 1.3, 1],
            rotate: [0, -90, -180, -360],
            x: [0, -40, 60, 0],
            y: [0, 40, -20, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-gradient-to-br from-portfolio-secondary/10 to-portfolio-accent/10 blur-lg"
          animate={{
            scale: [1, 1.5, 0.8, 1],
            rotate: [0, 270, 360],
            x: [0, 80, -60, 0],
            y: [0, -50, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </>
  );
};

export default PinterestBackground;