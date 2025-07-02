// /src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5 border-top border-info">
      <div className="container text-center">
        <p className="mb-1">© {new Date().getFullYear()} CYBERG. All rights reserved.</p>
        <small>Empowering people through ethical cybersecurity education.</small>
      </div>
    </footer>
  );
}