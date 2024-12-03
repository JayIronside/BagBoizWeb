import './Artistes.css';

const Artistes = () => (
  <section className="artistes">
    <h1>Meet Our Talented Artistes</h1>
    <p>Discover the works of our amazing artistes.</p>

    <div className="artist-spotify">
      <h2>Razor Blade</h2>
      <p>A talented artist with hits across genres.</p>
      {/* Spotify Embed */}
      <iframe
        src="https://open.spotify.com/embed/artist/5ZXGgOnh5EH17ay8wlTdH7?utm_source=generator&amp;theme=0"
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Artist"
      ></iframe>
    </div>
  </section>
);

export default Artistes;
