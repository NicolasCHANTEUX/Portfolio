import React from "react";

// Try to import framer-motion, fall back to basic components if not available
let motion;
try {
  motion = require("framer-motion").motion;
} catch (err) {
  // Fallback if framer-motion is not available
  const createFallbackComponent = (tag) => {
    return React.forwardRef((props, ref) => {
      // Extract animation props that we don't need in the fallback
      const {
        initial, animate, exit, transition, variants,
        whileHover, whileTap, whileDrag, whileFocus, whileInView,
        ...restProps
      } = props;
      
      return React.createElement(tag, { ...restProps, ref });
    });
  };

  // Create fallback motion components
  motion = {
    div: createFallbackComponent('div'),
    span: createFallbackComponent('span'),
    h1: createFallbackComponent('h1'),
    h2: createFallbackComponent('h2'),
    h3: createFallbackComponent('h3'),
    p: createFallbackComponent('p'),
    a: createFallbackComponent('a'),
    button: createFallbackComponent('button'),
    // Add more as needed
  };
}

// Export the components individually for better tree-shaking
export const MotionDiv = motion.div;
export const MotionSpan = motion.span;
export const MotionH1 = motion.h1;
export const MotionH2 = motion.h2;
export const MotionButton = motion.button;
export const MotionA = motion.a;

// Also export the entire motion object
export { motion };
