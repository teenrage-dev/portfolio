import React from 'react';
import { motion } from 'framer-motion';

const transitionVariants = {
  initial: {
    x: '100%',
    width: '100%',
  },
  animate: {
    x: '0%',
    width: '0%',
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  },
};

const transitionStyles = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  right: '100%',
  height: '100vh',
  zIndex: '30',
};

export const Transition = ({ children }) => {
  return (
    <>
      <motion.div
        variants={transitionVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
        style={{ ...transitionStyles, backgroundColor: '#2b2e30' }}
      ></motion.div>
      <motion.div
        variants={transitionVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }}
        style={{ ...transitionStyles, backgroundColor: '#212425' }}
      ></motion.div>
      <motion.div
        variants={transitionVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut' }}
        style={{ ...transitionStyles, backgroundColor: '#1a1c1d' }}
      ></motion.div>
      {children}
    </>
  );
};
