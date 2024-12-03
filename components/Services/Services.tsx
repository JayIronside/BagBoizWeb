// src/pages/Services.tsx

import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => (
  <section id="services" className="services-section">
    <div className="services-header">
      <h4>OUR SERVICES</h4>
      <h3>WHAT WE DO?</h3>
      <p className="services-intro">
        We offer a comprehensive range of services designed to support artists at every stage of their career. From top-notch music production to seamless distribution.
      </p>
    </div>
    <div className="services-grid">
      <div className="service-card">
        <span className="service-icon material-symbols-outlined">person_search</span>
        <h4>Talent Scouting and A&R</h4>
        <p>
          We discover and nurture new talent with personalized artistic development and creative guidance.
        </p>
      </div>
      <div className="service-card">
        <span className="service-icon material-symbols-outlined">headphones</span>
        <h4>Production and Recording</h4>
        <p>
          Access state-of-the-art recording studios, top producers, and skilled engineers to produce your best music.
        </p>
      </div>
      <div className="service-card">
        <span className="service-icon material-symbols-outlined">public</span>
        <h4>Distribution</h4>
        <p>
          Distribution to digital and streaming platforms like Spotify and Apple Music. Localization and regional marketing strategies.
        </p>
      </div>
      <div className="service-card">
        <span className="service-icon material-symbols-outlined">database</span>
        <h4>Trend Analysis</h4>
        <p>
          Advanced data science techniques enable us to identify trends, optimize marketing strategies, and maximize audience engagement.
        </p>
      </div>
    </div>
    <div className="services-link">
      <Link to="/services/expanded" className="view-all-link">
        VIEW ALL SERVICES
      </Link>
    </div>
  </section>
);

export default Services;
