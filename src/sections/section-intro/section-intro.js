import React from 'react'
import profileImg from '../../images/profile_smile.webp'
import profileImgJpg from '../../images/profile_smile.jpg'
import SocialLinks from '../../components/social-links/social-links'
import './section-intro.css'

function SectionIntro() {
  return (
    <div className="section section-intro">
      <div className="profile">
        <div className="profile-picture">
          <picture>
            <source srcSet={profileImg} type="image/webp" alt="Sinisa Mikulic" />
            <img src={profileImgJpg} alt="Sinisa Mikulic" />
          </picture>
          <SocialLinks />
        </div>
        <div className="profile-content">
          <h1 className="headline">I'm a proven web development expert specialized in frontend.</h1>
          <h3 className="subheadline">Whether you're an early stage startup or an established company - I will provide you with technical and business expertise you need to succeed.</h3>
        </div>
      </div>
      <div className="technologies">
        <div className="tech">
          <div className="js"></div>
          <span>JavaScript</span>
        </div>
        <div className="tech">
          <div className="ts"></div>
          <span>TypeScript</span>
        </div>
        <div className="tech">
          <div className="react"></div>
          <span>React</span>
        </div>
        <div className="tech">
          <div className="graphql"></div>
          <span>GraphQL</span>
        </div>
        <div className="tech">
          <div className="nodejs"></div>
          <span>Node.js</span>
        </div>
        <div className="tech">
          <div className="emotion"></div>
          <span>Styled Comp.</span>
        </div>
      </div>
    </div>
  );
}

export default SectionIntro;
