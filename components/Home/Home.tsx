import './Home.css';
import { useState } from 'react';

const Home = () => {
  const [view, setView] = useState<'home' | 'about'>('home'); // State to toggle between views
  const [isContactOpen, setIsContactOpen] = useState(false); // State to toggle the contact box visibility

  const handleExploreClick = () => setView('about'); // Switch to About Page

  // Toggle contact box visibility
  const toggleContactBox = () => {
    setIsContactOpen(prevState => !prevState);
  };

  return (
    <section className="home">
      {view === 'home' ? (
        <div className="hero">
          <h1 className="hero-title">Welcome to Bag Boiz Empire</h1>
          <p className="hero-subtitle">
            Discover incredible services and explore the talents of our amazing artistes.
          </p>
          <button className="explore-button" onClick={handleExploreClick}>
            Explore Now
          </button>

          {/* Featured Videos Section */}
          <section id="videos" className="video-section">
            <h2>Featured Videos</h2>
            <div className="videos-container">
              <iframe
                className="youtube"
                width="500"
                height="315"
                src="https://www.youtube.com/embed/h0nmAOSYjsA?si=U7dFTOvTcjUEgCL9"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <iframe
                className="youtube"
                width="500"
                height="315"
                src="https://www.youtube.com/embed/9sxgJ9CLhGA?si=8EAJ-sSpWG0g1KZX"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </section>
        </div>
      ) : (
        <div className="about">
          <h1>About Bag Boiz Empire</h1>
          <p>
            Bag Boiz Empire is a dynamic music record label based in Lagos, Nigeria, renowned for its vibrant contribution
            to the African music scene. Founded with a vision to nurture and promote homegrown talent, Bag Boiz Empire has
            quickly become a hub for innovative and influential artists in the industry.
          </p>
          <p>
            With a deep commitment to artistic development and an ever-expanding network of collaborators, we have shaped
            the sound of modern African music. Bag Boiz Empire continues to push boundaries, foster creativity, and celebrate
            the culture that inspires our work.
          </p>
          <button className="back-button" onClick={() => setView('home')}>
            Back to Home
          </button>
        </div>
      )}

      {/* Contact Us Section */}
      <section className="contact-us">
        <button className="contact-button" onClick={toggleContactBox}>
          Contact Us
        </button>
        <div className={`contact-expanded ${isContactOpen ? 'show' : ''}`}>
          <div className="contact-details">
            <p><strong>Email:</strong> bagboizempire@gmail.com</p>
            <p><strong>Phone 1:</strong> +234 9139235956</p>
            <p><strong>Phone 2:</strong> +234 8135812353</p>
          </div>
          <p>Follow us on social media for updates!</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/iamrazorblade" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://x.com/callme_razor?s=11&t=fsmZXLrjoAmoawca9ngXhA" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/manlikerazor_?igsh=cjIyNHdic2duOWJy" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
