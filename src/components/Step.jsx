import React from "react";
import { motion } from "framer-motion";

const Step = ({ title, description, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="step"
    >
      {icon}
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default Step;
