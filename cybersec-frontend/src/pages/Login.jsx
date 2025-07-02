// /src/pages/Login.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Login() {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className="container pt-5 mt-5">
      <h2 className="text-center text-info mb-4">Login</h2>
      <form className="mx-auto" style={{ maxWidth: "400px" }}>
        <div className="form-group mb-3">
          <label>Email</label>
          <input type="email" className="form-control" required />
        </div>
        <div className="form-group mb-3">
          <label>Password</label>
          <input type="password" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-info w-100">Login</button>
      </form>
    </motion.div>
  );
}