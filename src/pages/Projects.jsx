import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/projects.css';
import artwork1 from '../assets/2.jpg';
import artwork2 from '../assets/3.jpg';
import artwork3 from '../assets/1..jpg';

const sliderImages = [
  { src: artwork1, alt: 'Artwork 1' },
  { src: artwork2, alt: 'Artwork 2' },
  { src: artwork3, alt: 'Artwork 3' },
];

const Projects = () => {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <main className="projects-page">
      <section className="school-projects container">
        <h2>School Projects</h2>
        <ul className="projects-list">
          <li>
            <a href="https://midtermappdevs.vercel.app/" target="_blank" rel="noopener noreferrer">
              <h3>Ecommerce</h3>
              <p>A web app that allows users to browse, add to cart, and purchase products.</p>
            </a>
          </li>
          <li>
            <a href="https://project-t6ox.vercel.app/" target="_blank" rel="noopener noreferrer">
              <h3>Exquisite Chinese Hairpins &amp; Accessories</h3>
              <p>An elegant collection showcase website featuring traditional Chinese hairpins.</p>
            </a>
          </li>
          <li>
            <Link to="/calculator">
              <h3>Calculator</h3>
              <p>A simple, functional calculator built with JavaScript.</p>
            </Link>
          </li>
          <li>
            <div>
              <h3>Figma User Profile</h3>
              <p>A visual user profile design created in Figma, focusing on layout and aesthetics.</p>
              <a href="https://www.figma.com/design/AJDfrdJz28HGktt3acntpA/Profile?node-id=0-1&t=R1cGH6Y1oYxvQnEU-1" target="_blank" rel="noopener noreferrer">
                Web Frame
              </a>
              <a href="https://www.figma.com/design/qUzzZConVzYHGCrbLC3iUP/MOBILE?node-id=0-1&t=d7UVGfzUhQ6CJOP5-1" target="_blank" rel="noopener noreferrer">
                Mobile Frame
              </a>
            </div>
          </li>
          <li>
            <Link to="/cpu">
              <h3>CPU Scheduling Algorithm</h3>
              <p>A project demonstrating CPU scheduling concepts and simulations.</p>
            </Link>
          </li>
        </ul>
      </section>

      <section className="artworks container">
        <h2>Artworks</h2>
        <div className="artwork-slider" role="list">
          {sliderImages.map(({ src, alt }) => (
            <button key={alt} type="button" className="artwork-slide" role="listitem" onClick={() => setActiveImage({ src, alt })}>
              <img src={src} alt={alt} />
            </button>
          ))}
          <Link to="/artworks" className="show-more" aria-label="Show more artworks">
            Show More
          </Link>
        </div>
      </section>

      {activeImage && (
        <div className="modal show" role="dialog" aria-modal="true" onClick={() => setActiveImage(null)}>
          <div className="modal-content" role="document" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="modal-close" aria-label="Close full view" onClick={() => setActiveImage(null)}>
              &times;
            </button>
            <img src={activeImage.src} alt={activeImage.alt} />
          </div>
        </div>
      )}
    </main>
  );
};

export default Projects;


