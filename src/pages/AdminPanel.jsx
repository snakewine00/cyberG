import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { color, motion } from "framer-motion";

export default function AdminPanel() {
  const navigate = useNavigate();
  const username = localStorage.getItem('admin-user');

  useEffect(() => {
    const isAuth = localStorage.getItem('admin-auth');
    if (!isAuth) {
      navigate('/admin-login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('admin-auth');
    localStorage.removeItem('admin-user');
    navigate('/admin-login');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container pt-5 mt-5"
    >
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="neon-text">Welcome, <span style={{ color: "#08cad8" }}>{username}</span></h2>
        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
      </div>

      <div className="row">
        {[
          {
            title: "Upload New Course",
            text: "Add new cybersecurity courses to the platform. ",
            button: "Upload Course"
          },
          {
            title: "Post New Blog",
            text: "Create and publish cybersecurity blog content.",
            button: "Post Blog"
          },
          {
            title: "Manage Users",
            text: "View or remove registered users and handle permissions.",
            button: "Manage"
          },
          {
            title: "Workshop Reports",
            text: "Review and export past and upcoming workshop data.",
            button: "View Reports"
          }
        ].map((item, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card neon-card h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-white">{item.title}</h5>
                <p className="card-text text-white flex-grow-1">{item.text}</p>
                <button className="btn btn-outline-info mt-3">{item.button}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
