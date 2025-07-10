// /src/pages/Blog.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Blog() {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="container pt-5 mt-5">
      <h2 className="text-center text-info mb-4">Cybersecurity Blog</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card border-info h-100">
            <div className="card-body">
              <h5 className="card-title">Top 10 Cyber Threats in 2025</h5>
              <p className="card-text">Explore the most critical cybersecurity threats and how to protect your systems.</p>
              <button className="btn btn-outline-info">Read More</button>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card border-info h-100">
            <div className="card-body">
              <h5 className="card-title">Phishing Awareness Guide</h5>
              <p className="card-text">Understand how phishing works and learn to recognize suspicious messages.</p>
              <button className="btn btn-outline-info">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}