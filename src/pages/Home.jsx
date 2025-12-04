import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import profileImg from '../assets/profile.jpg';

const socials = [
  { href: 'https://www.facebook.com/ayumi.zain.5', label: 'Facebook', icon: <FaFacebookF /> },
  { href: 'https://www.instagram.com/jieanncaligid', label: 'Instagram', icon: <FaInstagram /> },
  { href: 'https://github.com/Jieanncaligid-FE', label: 'GitHub', icon: <FaGithub /> },
  { href: 'https://www.linkedin.com/in/yourusername', label: 'LinkedIn', icon: <FaLinkedinIn /> },
];

const Home = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="about">
      <div className={`profile-wrapper ${isReady ? 'active' : ''}`}>
        <div className="profile-card">
          <img src={profileImg} alt="Profile" className="profile-img" />
          <h2 className="name">Jie-ann D. Caligid</h2>
          <p className="role">Front-End Developer</p>
          <div className="socials">
            {socials.map(({ href, label, icon }) => (
              <a key={label} className="icon" href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="intro">
        <h1>Hello!</h1>
        <p className="subtitle">Here&apos;s who I am &amp; what I do</p>
        <div className="buttons">
          <Link to="/resume" className="primary-btn">
            Resume
          </Link>
          <Link to="/projects" className="outline-btn">
            Projects
          </Link>
        </div>
        <p className="about-text">
          I’m a developer & artist — I code, I draw, and I create things that make people feel something.
        </p>
      </div>
    </section>
  );
};

export default Home;


