import React from 'react'
import SocialLinks from '../../components/social-links/social-links'
import './section-intro.css'

function SectionIntro() {
  return (
    <div className="section section-intro">
      <div className="profile">
        <div className="profile-picture">
          <img src="https://smikulic.me/profile.jpg" alt="Sinisa Mikulic" />
          <SocialLinks />
        </div>
        <div className="profile-content">
          <h1 className="headline">I'm a proven web development expert specialized in UI & UX.</h1>
          <h3 className="subheadline">Whether you're an early stage startup or an established company - I will provide you with technical and business expertise you need to succeed.</h3>
        </div>
      </div>
      <div className="technologies">
        <div className="tech">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" />
          <span>JavaScript</span>
        </div>
        <div className="tech">
          <img src="https://cdn.worldvectorlogo.com/logos/typescript.svg" alt="TypeScript" />
          <span>TypeScript</span>
        </div>
        <div className="tech">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="React" />
          <span>React</span>
        </div>
        <div className="tech">
          <img src="https://graphql.org/img/logo.svg" alt="GraphQL" />
          <span>GraphQL</span>
        </div>
        <div className="tech">
          <img src="https://nodejs.org/static/images/logo.svg" alt="Node" />
          <span>Node.js</span>
        </div>
        <div className="tech">
          <img src="https://avatars1.githubusercontent.com/u/31557565?s=200&v=4" alt="Emotion" />
          <span>Styled Comp.</span>
        </div>
      </div>
    </div>
  );
}

export default SectionIntro;
