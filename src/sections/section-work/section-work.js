import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import creditKarmaProjectImg from '../../images/credit-karma-project.webp'
import solarisbankProjectImg from '../../images/solarisbank-project.webp'
import movieoProjectImg from '../../images/movieo-project.webp'
import './section-work.css'

function SectionWork() {
  return (
    <div id="work" className="section section-work">
      <h2>Projects I worked on</h2>

      <div className="project">
        <a className="project-image" href="https://www.creditkarma.com/" target="_blank" rel="noopener noreferrer">
          <img src={creditKarmaProjectImg} alt="Credit Karma" />
        </a>
        <div className="project-description">
          <h3>Credit Karma</h3>
          <p>
            Credit Karma is an $4 billion personal finance startup with over 88 million members. 
            It offers free credit score reports, credit cards, personal loans shopping, tax filing and other financial products.
          </p>
          <div>
            <a href="https://codewell.studio/marketplace-case-study" target="_blank" rel="noopener noreferrer">
              <button className="primary">Case study</button>
            </a>
            <a href="https://www.creditkarma.com/" target="_blank" rel="noopener noreferrer">
              <button className="secondary"><FontAwesomeIcon icon={faEye} /> Visit website</button>
            </a>
          </div>
        </div>
      </div>

      <hr/>

      <div className="project">
        <a className="project-image" href="https://www.solarisbank.com/en/" target="_blank" rel="noopener noreferrer">
          <img src={solarisbankProjectImg} alt="solarisBank" />
        </a>
        <div className="project-description">
          <h3>solarisBank</h3>
          <p>
            solarisBank is a Berlin-based 250-person fintech company which took them less than three years to build the banking-as-a-platform, 
            scale up a team, and raise almost €100m in funding rounds with Arvato, BBVA, Visa, Lakestar and other.
          </p>
          <div>
            <a href="https://codewell.studio/solarisbank-case-study" target="_blank" rel="noopener noreferrer">
              <button className="primary">Case study</button>
            </a>
            <a href="https://www.solarisbank.com/en/" target="_blank" rel="noopener noreferrer">
              <button className="secondary"><FontAwesomeIcon icon={faEye} /> Visit website</button>
            </a>
          </div>
        </div>
      </div>

      <hr/>
      
      <div className="project">
        <a className="project-image" href="https://movieo.me/" target="_blank" rel="noopener noreferrer">
          <img src={movieoProjectImg} alt="Movieo" />
        </a>
        <div className="project-description">
          <h3>Movieo</h3>
          <p>
            My friends and I love movies, but finding great ones to watch is usually a hassle. 
            We had been searching for a simple and well-designed movie-browsing interface, yet we couldn't find one. Therefore, we decided to create one ourselves.
          </p>
          <div>
            <a href="https://codewell.studio/movieo-case-study/" target="_blank" rel="noopener noreferrer">
              <button className="primary">Case study</button>
            </a>
            <a href="https://movieo.me/" target="_blank" rel="noopener noreferrer">
              <button className="secondary"><FontAwesomeIcon icon={faEye} /> Visit website</button>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default SectionWork;
