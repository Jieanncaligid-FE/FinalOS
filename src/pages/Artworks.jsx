import { Link } from 'react-router-dom';
import '../styles/artworks.css';
import art1 from '../assets/3.jpg';
import art2 from '../assets/2.jpg';
import art3 from '../assets/1..jpg';
import art4 from '../assets/4.jpg';
import art5 from '../assets/5.jpg';
import art6 from '../assets/6.jpg';

const artworks = [
  { src: art1, alt: 'Artwork 1' },
  { src: art2, alt: 'Artwork 2' },
  { src: art3, alt: 'Artwork 3' },
  { src: art4, alt: 'Artwork 4' },
  { src: art5, alt: 'Artwork 5' },
  { src: art6, alt: 'Artwork 6' },
];

const Artworks = () => (
  <div className="artwork-page">
    <Link to="/projects" className="back-link">
      ← Back to Projects
    </Link>
    <header>
      <h1>Artworks Gallery</h1>
      <p>Explore a collection of traditional artworks</p>
    </header>
    <main>
      <div className="gallery">
        {artworks.map(({ src, alt }) => (
          <div key={alt} className="artwork-card">
            <img src={src} alt={alt} />
          </div>
        ))}
      </div>
    </main>
  </div>
);

export default Artworks;


