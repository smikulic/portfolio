import React from 'react'
import scroogevaultShowcase from '../../images/scroogevault-showcase.webp'
import scroogevaultShowcaseJpg from '../../images/scroogevault-showcase.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './section-showcase.css'

function SectionShowcase() {
  return (
    <div id="showcase" className="section section-showcase">
      <h2>Showcase project</h2>
      <div className="project">
        <a className="project-image" href="https://www.scroogevault.co/" target="_blank" rel="noopener noreferrer">
          <picture>
            <source srcSet={scroogevaultShowcase} type="image/webp" alt="ScroogeVault" />
            <img src={scroogevaultShowcaseJpg} alt="ScroogeVault" />
          </picture>
        </a>
        <div className="project-description">
          <h3>ScroogeVault</h3>
          <p className="quick-description">Savings goals tracking app</p>
          <p>
            I wanted to build real-world CRUD app and showcase my skills in setting up product and infrastructure from ground up.
            <br /><br />Client side has scalable React/Mobx architecture with Webpack and CircleCI infrastructure. RESTful API is built on Rails and 
            release process is a "one button deploy" via Github!
          </p>
          <div>
            <a href="https://www.scroogevault.co/" target="_blank" rel="noopener noreferrer">
              <button className="primary">Try it yourself</button>
            </a>
            <a href="https://github.com/smikulic/stash_client" target="_blank" rel="noopener noreferrer">
              <button className="secondary"><FontAwesomeIcon icon={faGithub} /> View the code</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionShowcase;
