import React from "react";

// Ce composant simule les propriétés de motion.div mais sans animation
// Utiliser ce composant en remplacement temporaire de motion.div pour le déploiement
export const MotionDiv = ({ children, initial, animate, transition, whileInView, viewport, className, ...props }) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

export const AnimationProvider = {
  MotionDiv
};

export default AnimationProvider;
