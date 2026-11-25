
import { ArrowRight, Download } from "lucide-react";
import heroImage from "../assets/images/professional/aakash-hero.png";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">

        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="status-dot" />
            TECHNOLOGY <span>×</span> PRODUCT <span>×</span> EXECUTION
          </div>

          <h1>
            I turn complex ideas into{" "}
            <span>products that work.</span>
          </h1>

          <p className="hero-description">
            A Technical Project Manager with a strong engineering
            foundation, now focusing on Product Management —
            at the intersection of technology, business and AI.
          </p>

          <div className="hero-actions">
            <a href="#experience" className="primary-button">
              Explore My Work <ArrowRight size={18} />
            </a>

            <a href="#resume" className="secondary-button">
              <Download size={18} /> View Resume
            </a>
          </div>

          <div className="hero-note">
            <span className="note-line" />
            Building meaningful digital experiences.
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-circle" />
          <div className="hero-circle-outline" />

          <img
            src={heroImage}
            alt="Aakash Verma, Technical Project Manager"
            className="hero-portrait"
          />

          <div className="floating-card">
            <span className="floating-indicator" />
            Technology × Product × Delivery
          </div>
        </div>

      </div>

      <div className="hero-bottom-decoration">
        <span>MUMBAI, INDIA</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </section>
  );
}
