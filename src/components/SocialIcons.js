import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './SocialIcons.css';

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://www.facebook.com/ishan.lamsal.9" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} /><span></span>
      </a>
      <a href="https://wa.me/+9779842127188" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} /><span></span>
      </a>
      <a href="https://www.instagram.com/_confused___af_?igsh=MWx3NXltamEwNGd5aw==" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} /><span></span>
      </a>
      <a href="Mailto:ishanlamsal3434@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} /><span></span>
      </a>
      <a href="https://github.com/Deceit77" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} /><span></span>
      </a>
      <a href="https://www.linkedin.com/in/ishan-lamsal-855a79169?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} /><span></span>
      </a>
    </div>
  );
};

export default SocialIcons;
