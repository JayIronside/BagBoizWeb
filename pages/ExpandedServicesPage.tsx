// src/pages/ExpandedServicesPage.tsx

import { useNavigate } from 'react-router-dom';
import '../styles/ExpandedServicesPage.css';

const ExpandedServicesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="expanded-services slide-down">
      <h1>Explore All Our Services</h1>
      <p className="intro">
        Our services are tailored to meet the unique needs of artists, ensuring they have the resources to succeed in the competitive music industry. Here’s a deep dive into everything we offer:
      </p>

      <div className="service-detail">
        <h3>Talent Scouting and A&R</h3>
        <p>
          We go beyond the usual talent scouting by offering strategic guidance and mentorship. Our A&R (Artists & Repertoire) team ensures that artists are equipped with the tools to grow, from songwriting workshops to personalized branding strategies. We foster creativity while connecting talent with industry opportunities.
        </p>
      </div>

      <div className="service-detail">
        <h3>Production and Recording</h3>
        <p>
          Our state-of-the-art studios are equipped with cutting-edge technology to meet the demands of modern music production. Collaborate with experienced producers and engineers who understand your vision. Whether it’s crafting beats, mixing, mastering, or experimenting with sound design, we help you bring your ideas to life.
        </p>
      </div>

      <div className="service-detail">
        <h3>Distribution</h3>
        <p>
          Reach your audience with ease. We handle all the logistics of music distribution, ensuring your songs are available on platforms like Spotify, Apple Music, and YouTube Music. Our tailored regional marketing strategies ensure that your music resonates locally and globally, creating a stronger connection with listeners.
        </p>
      </div>

      <div className="service-detail">
        <h3>Trend Analysis</h3>
        <p>
          Data-driven insights are at the core of our operations. By leveraging advanced analytics, we help you understand audience behavior, track engagement metrics, and adapt to the latest industry trends. This enables you to make informed decisions that maximize your reach and impact.
        </p>
      </div>

      <button className="back-button" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};

export default ExpandedServicesPage;
