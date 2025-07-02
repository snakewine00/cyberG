// /src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="container pt-5 mt-5">
      <h1 className="text-center text-info mb-4">Welcome to CyberG</h1>
      <p className="lead text-center">We offer professional cybersecurity courses, workshops, and awareness sessions.</p>

      <div className="mt-5">
        <h3 className="text-info">Our Vision</h3>
        <p>
          To establish <strong>Cyber-G</strong> as a leading online platform for cybersecurity and ethical hacking education,
          offering a blend of high-quality paid courses, free learning resources, interactive workshops,
          and impactful cyber awareness initiatives.
        </p>

        <h4 className="text-info mt-4">Our Goals</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Provide an intuitive and engaging learning experience for students.</li>
          <li className="list-group-item">Facilitate seamless course sales and enrollment.</li>
          <li className="list-group-item">Enable efficient management and delivery of workshops and free classes.</li>
          <li className="list-group-item">Effectively disseminate cyber awareness content to a broad audience.</li>
          <li className="list-group-item">Showcase <strong>Shakir Ahamed R's</strong> expertise and build a strong brand presence.</li>
        </ul>
      </div>
    </motion.div>
  );
}