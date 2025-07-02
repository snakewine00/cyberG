// /src/pages/Courses.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Courses() {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="container pt-5 mt-5">
      <h2 className="text-center text-warning mb-4">Our Courses</h2>
      <div className="row">
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100 border-info">
            <div className="card-body">
              <h5 className="card-title">Ethical Hacking Basics</h5>
              <p className="card-text">
                Learn the fundamentals of ethical hacking and penetration testing tools.
              </p>
              <button className="btn btn-info w-100">Enroll Now</button>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100 border-info">
            <div className="card-body">
              <h5 className="card-title">Network Security Mastery</h5>
              <p className="card-text">
                Deep dive into firewalls, VPNs, intrusion detection systems, and secure protocols.
              </p>
              <button className="btn btn-info w-100">Enroll Now</button>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100 border-info">
            <div className="card-body">
              <h5 className="card-title">Cybersecurity for Beginners</h5>
              <p className="card-text">
                Perfect for non-tech users: learn how to stay safe online and avoid scams.
              </p>
              <button className="btn btn-info w-100">Enroll Now</button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}