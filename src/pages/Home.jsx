import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <Link to="/about#rikkei-academy">Rikkei Academy</Link>
      <Link to="/about#rikkei-education">Rikkei Education</Link>
      <Link to="/about#rikkei-soft">Rikkei Soft</Link>
    </div>
  );
}
