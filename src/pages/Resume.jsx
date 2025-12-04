import { useEffect } from 'react';
import profileImg from '../assets/profile.jpg';
import '../styles/resume.css';

const Resume = () => {
  useEffect(() => {
    document.body.classList.add('resume-page');
    return () => document.body.classList.remove('resume-page');
  }, []);

  return (
    <div className="resume-wrapper">
    <aside className="left-side">
      <img src={profileImg} alt="Profile" className="profile-pic" />
      <h1>Jie-ann D. Caligid</h1>
      <p className="role">Front-End Developer</p>
      <div className="social-icons">
        <a href="https://www.instagram.com/jieanncaligid" target="_blank" rel="noreferrer" className="social-link instagram" aria-label="Instagram" />
        <a href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer" className="social-link twitter" aria-label="Twitter" />
        <a href="https://facebook.com/yourprofile" target="_blank" rel="noreferrer" className="social-link facebook" aria-label="Facebook" />
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="social-link linkedin" aria-label="LinkedIn" />
      </div>
    </aside>

    <div className="divider" />

    <main className="right-side">
      <section id="about" className="container about-me">
        <h2>About Me</h2>
        <p>
          I’m a developer &amp; artist — I code, I draw, and I create things that make people feel something. I’m passionate
          about consistently advancing my knowledge and skills. I have attended multiple seminars and boot camps on coding and
          development.
        </p>
      </section>

      <section id="personal-info" className="container personal-info">
        <h2>Personal Information</h2>
        <ul>
          <li>
            <strong>Date of Birth:</strong> October 26, 2004
          </li>
          <li>
            <strong>Gender:</strong> Female
          </li>
          <li>
            <strong>Nationality:</strong> Filipino
          </li>
          <li>
            <strong>Religion:</strong> Born Again
          </li>
          <li>
            <strong>Civil Status:</strong> Single
          </li>
          <li>
            <strong>Father&apos;s Name:</strong> Jojiet S. Caligid
          </li>
          <li>
            <strong>Mother&apos;s Name:</strong> Marian D. Caligid
          </li>
        </ul>
      </section>

      <section id="education" className="container education">
        <h2>Education</h2>
        <ul>
          <li>
            <strong>High School:</strong> Cordova National High School
          </li>
          <li>
            <strong>Year of Graduation:</strong> 2023
          </li>
          <li>
            <strong>College:</strong> Cordova Public College
          </li>
          <li>
            <strong>Degree Program:</strong> Bachelor of Science in Information Technology (BSIT)
          </li>
        </ul>
      </section>

      <section id="experience" className="container experience">
        <h2>Experience</h2>
        <ul>
          <li>
            <strong>Senior High Work Immersion:</strong> Cordova Multipurpose Cooperative
          </li>
          <li>
            <strong>Branch:</strong> Accounting Branch, Business Enterprise, and Main Branch
          </li>
          <li>
            <strong>Tasks:</strong> Encoding cooperative members&apos; data, receipt encoding, closing account folder placement
          </li>
          <li>
            <strong>Duration:</strong> 10 Days
          </li>
        </ul>
      </section>

      <section id="talents-hobbies" className="container talents-hobbies">
        <h2>Talents &amp; Hobbies</h2>
        <ul>
          <li>Drawing</li>
          <li>Singing</li>
          <li>Dancing</li>
          <li>Listening to Music</li>
          <li>Hair Braiding</li>
        </ul>
      </section>

      <section id="skills" className="container skills">
        <h2>Skills</h2>
        <ul>
          <li>
            <strong>Technical / Development Skills:</strong> HTML, CSS, JavaScript, Front-End Development
          </li>
          <li>
            <strong>Creative / Artistic Skills:</strong> Drawing, Singing, Dancing, Listening to Music, Hair Braiding
          </li>
        </ul>
      </section>
    </main>
  </div>
  );
};

export default Resume;


