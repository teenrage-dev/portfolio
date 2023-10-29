import React from 'react';
import { motion } from 'framer-motion';

const BellAnimation = ({ children, isAnimate }) => {
  return (
    <div>
      <motion.div
        initial={{ rotate: 0 }}
        animate={{
          rotate: isAnimate
            ? [
                0, 30, -28, 34, -32, 30, -28, 26, -24, 22, -20, 18, -16, 14,
                -12, 10, -8, 6, -4, 2, -1, 1, 0,
              ]
            : [0],
        }}
        transition={{
          duration: 1,
          repeat: 0,
          ease: 'linear',
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default BellAnimation;
