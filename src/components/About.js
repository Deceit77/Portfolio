import React, { useState } from 'react';
import './About.css'; // Import your CSS file here

// Sample image imports
import photo1 from '../assets/photos/photo1.jpg';
import photo2 from '../assets/photos/photo2.jpg';
import photo3 from '../assets/photos/photo3.jpg';
import photo4 from '../assets/photos/photo4.jpg';
import photo5 from '../assets/photos/photo5.jpg';
import photo6 from '../assets/photos/photo6.jpg';
import photo7 from '../assets/photos/photo7.jpg';
import photo8 from '../assets/photos/photo8.jpg';
import IshanLamsalCV from '../assets/IshanLamsalCV.pdf'; // Import your resume PDF

function About() {
  const [cards, setCards] = useState([
    { id: 1, frontImage: photo1, backImage: photo5, flipped: false },
    { id: 2, frontImage: photo2, backImage: photo6, flipped: false },
    { id: 3, frontImage: photo3, backImage: photo7, flipped: false },
    { id: 4, frontImage: photo4, backImage: photo8, flipped: false },
  ]);

  const handleClick = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, flipped: !card.flipped } : card
      )
    );
  };

  return (
    <div className="about-container">
      <h1 className="too">"मलाई चिन्ने होत?"</h1>
      <div className="about">
        <div className="about-content">
          <p>
            Hello! I'm a passionate photographer and developer with a keen eye
            for capturing the beauty in everyday moments. I spend a lot of time
            on my laptop, working on various projects and enhancing my skills.
          </p>
        </div>
        <div className="skills">
          <h3 className='skill'>Skills</h3>
          <ul>
            <li>Photography</li>
            <li>Web Development</li>
            <li>Graphic Design</li>
            <li>Photo Editing</li>
          </ul>
        </div>
        <div className="certifications">
          <h3 className='cert'>Certifications</h3>
          <ul>
            <li>
              <h4>Writing, Running, and Fixing Code in C</h4>
              <p className='ins'>Institution: Duke University</p>
              <a href="https://coursera.org/share/6bbe9e5b89896422f609ac26e5b55bf7" target="_blank" rel="noopener noreferrer">
                View Certificate
              </a>
            </li>
            <li>
              <h4>Intermediate PostgreSQL</h4>
              <p className='ins'>Institution: University of Michigan</p>
              <a href="https://coursera.org/share/0f3ff5febdf8a365cb5b6520b21cda15" target="_blank" rel="noopener noreferrer">
                View Certificate
              </a>
            </li>
          </ul>
        </div>
        <div className="resume">
          <a href={IshanLamsalCV} target="_blank" rel="noopener noreferrer">
            Download Resume
          </a>
        </div>
      </div>

      <div className="gallery">
        <h3>Photo Gallery</h3>
        <div className="gallery-content">
          <div className="photo-gallery">
            {cards.map((card) => (
              <div
                key={card.id}
                className={`flip-card ${card.flipped ? 'flipped' : ''}`}
                onClick={() => handleClick(card.id)}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={card.frontImage} alt={`Front ${card.id}`} />
                  </div>
                  <div className="flip-card-back">
                    <img src={card.backImage} alt={`Back ${card.id}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
