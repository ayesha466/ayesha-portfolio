import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div 
      className="flex items-center space-x-2"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="relative">
        <motion.div 
          className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-portfolio-secondary flex items-center justify-center"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-white font-bold text-lg">A</span>
        </motion.div>
        <motion.div 
          className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-portfolio-secondary border-2 border-background"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        />
      </div>
      <motion.span 
        className="text-xl font-bold bg-gradient-to-r from-primary to-portfolio-secondary bg-clip-text text-transparent"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        Ayesha Shabbir
      </motion.span>
    </motion.div>
  );
};

export default Logo;