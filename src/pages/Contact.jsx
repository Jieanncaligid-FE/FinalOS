import { FaArrowLeft, FaEnvelope, FaPhone, FaTiktok, FaInstagram, FaFacebookF } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import '../styles/contact.css';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="contact-page">
      <button type="button" className="back-btn" onClick={() => navigate(-1)}>
        <FaArrowLeft />
        Back
      </button>

      <div className="contact-container">
        <h1>Contact Info</h1>
        <div className="info">
          <p>
            <FaEnvelope /> jieanncaligid@gmail.com
          </p>
          <p>
            <FaPhone /> +63 945 361 0108
          </p>
          <p>Cordova Cebu 6017, Cebu City, Philippines</p>
        </div>

        <div className="socials">
          <a href="https://www.tiktok.com/@13a13yyoon?_r=1&_t=ZS-91umKjm4wKL" target="_blank" rel="noopener noreferrer">
            <FaTiktok />
          </a>
          <a href="https://www.instagram.com/jieanncaligid?igsh=MTZmOTF4cnlqY3V4cg==" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/share/1GtqRAePAz/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;


