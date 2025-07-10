// /src/pages/Dashboard.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="container pt-5 mt-5 bg-gradient text-light rounded p-4">
      <h2 className="text-center neon-text mb-4">User Dashboard</h2>

        <div className="row">
      <div className="col-md-4">
          <div className="card border-info mb-4">
            <div className="card-body">
              <h5 className="card-title">Enrolled Courses</h5>
              <p className="card-text">See your courses.</p>
              <button className="btn btn-outline-info w-100">View Courses</button>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card border-info mb-4">
            <div className="card-body">
              <h5 className="card-title">Workshop History</h5>
              <p className="card-text">See your attended workshops and upcoming events.</p>
              <button className="btn btn-outline-info w-100">View Workshops</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-info mb-4">
            <div className="card-body">
              <h5 className="card-title">Certificates</h5>
              <p className="card-text">Download your completed course certificates.</p>
              <button className="btn btn-outline-info w-100">Download</button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}