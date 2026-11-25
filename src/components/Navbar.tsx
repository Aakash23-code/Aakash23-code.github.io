
import { useState } from "react";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Case Studies", "#case-studies"],
  ["Product Lab", "#product-lab"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="#home" className="nav-brand">
          AV<span>.</span>
        </a>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={href === "#home" ? "nav-link active" : "nav-link"}
            >
              {label}
            </a>
          ))}

          <a className="resume-button" href="#resume">
            ↓ Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
