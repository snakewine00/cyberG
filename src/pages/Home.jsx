import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  const goals = [
    "Provide an intuitive and engaging learning experience for students.",
    "Facilitate seamless course sales and enrollment.",
    "Enable efficient management and delivery of workshops and free classes.",
    "Effectively disseminate cyber awareness content to a broad audience.",
    "Showcase Shakir Ahamed R's expertise and build a strong brand presence."
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="container pt-5 mt-5"
    >
      <h1 className="text-center neon-text mb-4">Welcome to CyberG</h1>
      <p className="lead text-center">We offer professional cybersecurity courses, workshops, and awareness sessions.</p>

      <div className="mt-5">
        <h3 className="neon-text">Our Vision</h3>
        <p style={{ color: '#e0e0e0' }}>
  To establish <strong>Cyber-G</strong> as a leading online platform for cybersecurity and ethical hacking education,
  offering a blend of high-quality paid courses, free learning resources, interactive workshops,
  and impactful cyber awareness initiatives.
      </p>


        <h4 className="neon-text mt-4">Our Goals</h4>
        <ul className="neon-list">
          {goals.map((goal, index) => (
            <motion.li
              key={index}
              className="neon-list-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              {goal}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
