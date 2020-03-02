import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import './social-links.css'

function SocialLinks() {
  return (
    <div className="social-links">
      <a href="mailto:sinisa@codewell.studio" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a href="https://github.com/smikulic/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/sinisamikulic/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a href="https://www.instagram.com/sinisamikulic/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  );
}

export default SocialLinks;
