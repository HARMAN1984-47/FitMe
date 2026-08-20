import './AboutMe.css';

export default function AboutMe() {
  return (
    <div className="about-container">
      {/* About FitMe AI Section */}
      <h2 className="about-title">About FitMe AI</h2>
      <p className="about-text">
        FitMe AI is a modern web application designed to help users discover
        their perfect outfits based on their unique style. It brings together
        fashion and technology to create a smart, personalized digital wardrobe
        experience.
      </p>

      <ul className="about-list">
        <li>
          <strong className="about-accent">Smart Styling:</strong> Provides
          outfit recommendations tailored to your skin tone and personal
          preferences.
        </li>
        <li>
          <strong className="about-accent">Custom Avatar:</strong> Allows
          you to create your own digital look and customize your skin tone to
          see exactly what suits you best.
        </li>
        <li>
          <strong className="about-accent">Save Your Favorites:</strong>{" "}
          Found a look you love? You can securely save your favorite outfits and
          preferred color combinations directly to your personal profile for
          future reference.
        </li>
        <li>
          <strong className="about-accent">Seamless Experience:</strong>{" "}
          Designed with a focus on smooth performance and a clean, intuitive
          interface to make styling effortless.
        </li>
      </ul>

      {/* About Me Section */}
      <h2 className="about-title">About Me</h2>
      <p className="about-text">
        I am a MERN stack web development engineer passionate about building
        practical, end-to-end digital products. With a strong command over both
        front-end interfaces and back-end architectures using MongoDB,
        Express.js, React, and Node.js, I enjoy solving complex logic problems
        and building scalable APIs. Building platforms like FitMe AI is part of
        my drive to seamlessly connect clean user interfaces with robust
        server-side functionality to deliver a complete and engaging user
        experience.
      </p>
    </div>
  );
}