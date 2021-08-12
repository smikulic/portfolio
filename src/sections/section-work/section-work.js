import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import creditKarmaProjectImg from '../../images/credit-karma-project.webp'
import creditKarmaProjectImgJpg from '../../images/credit-karma-project.jpg'
import gleanProjectImg from '../../images/glean-project.webp'
import gleanProjectImgJpg from '../../images/glean-project.jpg'
import solarisbankProjectImg from '../../images/solarisbank-project.webp'
import solarisbankProjectImgJpg from '../../images/solarisbank-project.jpg'
import movieoProjectImg from '../../images/movieo-project.webp'
import movieoProjectImgJpg from '../../images/movieo-project.jpg'
import './section-work.css'

function SectionWork() {
  return (
    <div id="work" className="section section-work">
      <h2>Projects I worked on</h2>

      <div className="project">
        <a className="project-image" href="https://www.creditkarma.com/" target="_blank" rel="noopener noreferrer">
          <picture>
            <source srcSet={creditKarmaProjectImg} type="image/webp" alt="Credit Karma" />
            <img src={creditKarmaProjectImgJpg} alt="Credit Karma" />
          </picture>
        </a>
        <div className="project-description">
          <h3>Credit Karma</h3>
          <p>
            Credit Karma has over 90 million members and 1 billion in revenue annually. Recently&nbsp;
            <a href="https://techcrunch.com/2020/02/24/intuit-credit-karma/" target="_blank" rel="noopener noreferrer">
              acquired by Intuit for 7.1b
            </a>.
            It offers free credit score reports, credit cards, personal loans shopping, tax filing and other financial products.
          </p>
          <div>
            <Link to="/credit-karma-case-study">
              <button className="primary">Case study</button>
            </Link>
            <a href="https://www.creditkarma.com/" target="_blank" rel="noopener noreferrer">
              <button className="secondary"><FontAwesomeIcon icon={faEye} /> Visit website</button>
            </a>
          </div>
        </div>
      </div>

      <hr/>

      <div className="project">
        <a className="project-image" href="https://www.gleancompany.com/" target="_blank" rel="noopener noreferrer">
          <picture>
            <source srcSet={gleanProjectImg} type="image/webp" alt="Glean" />
            <img src={gleanProjectImgJpg} alt="Glean" />
          </picture>
        </a>
        <div className="project-description">
          <h3>Glean</h3>
          <p>
            Glean is Smart AP that gives finance teams visibility, clarity, and confidence with their vendor spend.
            You can automate accounting workflows and identify savings opportunities at the line-item level as well as get the big picture on your company’s spend.
          </p>
          <div>
            <Link to="/glean-case-study">
              <button className="primary">Case study</button>
            </Link>
            <a href="https://www.gleancompany.com/" target="_blank" rel="noopener noreferrer">
              <button className="secondary"><FontAwesomeIcon icon={faEye} /> Visit website</button>
            </a>
          </div>
        </div>
      </div>

      <hr/>

      <div className="project">
        <a className="project-image" href="https://www.solarisbank.com/en/" target="_blank" rel="noopener noreferrer">
          <picture>
            <source srcSet={solarisbankProjectImg} type="image/webp" alt="solarisBank" />
            <img src={solarisbankProjectImgJpg} alt="solarisBank" />
          </picture>
        </a>
        <div className="project-description">
          <h3>solarisBank</h3>
          <p>
            solarisBank is a Berlin-based 250-person fintech company which took them less than three years to build the banking-as-a-platform, 
            scale up a team, and raise almost €100m in funding rounds with Arvato, BBVA, Visa, Lakestar and other.
          </p>
          <div>
            <Link to="/solarisbank-case-study">
              <button className="primary">Case study</button>
            </Link>
            <a href="https://www.solarisbank.com/en/" target="_blank" rel="noopener noreferrer">
              <button className="secondary"><FontAwesomeIcon icon={faEye} /> Visit website</button>
            </a>
          </div>
        </div>
      </div>

      <hr/>
      
      <div className="project">
        <a className="project-image" href="https://movieo.me/" target="_blank" rel="noopener noreferrer">
          <picture>
            <source srcSet={movieoProjectImg} type="image/webp" alt="Movieo" />
            <img src={movieoProjectImgJpg} alt="Movieo" />
          </picture>
        </a>
        <div className="project-description">
          <h3>Movieo</h3>
          <p>
            My friends and I love movies, but finding great ones to watch is usually a hassle. 
            We had been searching for a simple and well-designed movie-browsing interface, yet we couldn't find one. Therefore, we decided to create one ourselves.
          </p>
          <div>
            <Link to="/movieo-case-study">
              <button className="primary">Case study</button>
            </Link>
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
