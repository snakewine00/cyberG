// /src/pages/AdminPanel.jsx
import React from "react";
import { motion } from "framer-motion";

export default function AdminPanel() {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="container pt-5 mt-5">
      <h2 className="text-center text-info mb-4">Admin Panel</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card border-info">
            <div className="card-body">
              <h5 className="card-title">Upload New Course</h5>
              <p className="card-text">Add new cybersecurity courses to the platform.</p>
              <button className="btn btn-info w-100">Upload Course</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card border-info">
            <div className="card-body">
              <h5 className="card-title">Post New Blog</h5>
              <p className="card-text">Create and publish cybersecurity blog content.</p>
              <button className="btn btn-info w-100">Post Blog</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card border-info">
            <div className="card-body">
              <h5 className="card-title">Manage Users</h5>
              <p className="card-text">View or remove registered users and handle permissions.</p>
              <button className="btn btn-info w-100">Manage</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card border-info">
            <div className="card-body">
              <h5 className="card-title">Workshop Reports</h5>
              <p className="card-text">Review and export past and upcoming workshop data.</p>
              <button className="btn btn-info w-100">View Reports</button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

