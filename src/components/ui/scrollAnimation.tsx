import React, { type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children, className = '' }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;