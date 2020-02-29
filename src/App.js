import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import {
  faGithubAlt,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import Navigation from './components/navigation/navigation'
// import scroogevaultShowcase from './images/scroogevault-showcase.png'
import './App.css'

// EBDE37
// 3A3A33
// FBCD88
// 515769
// 1E2233
// 24283B
// F8DD74
// FFF8EF

function App() {
  return (
    <div className="App">
      
      <main className="container">

        <Navigation />

        <div className="section section-intro">
          <div className="profile">
            <div className="profile-picture">
              <img src="https://smikulic.me/profile.jpg" alt="Sinisa Mikulic" />
              <div className="social">
                <a href="mailto:sinisa@codewell.studio" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a href="https://github.com/smikulic/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithubAlt} />
                </a>
                <a href="https://www.linkedin.com/in/sinisamikulic/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="https://www.instagram.com/sinisamikulic/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
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
        
        <div id="testimonials" className="section section-testimonials">
          <div className="testimonial">
            <p>
              “Siniša possesses extensive specialist knowledge, which he always deployed confidently and skillfully in practice. 
              He demonstrated high personal initiative and identified fully with our company.
              <br /><br />
              <b>Even in situations where his workload was extreme, he demonstrated the greatest resilience and found exceptional solutions for any problem that arose.</b>”
            </p>
            <div className="person">
              <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGMSpvbNlYb4w/profile-displayphoto-shrink_200_200/0?e=1588204800&v=beta&t=LDvxAbgpFNpCAkuCC3FqrrGJBJVui7mzd-QKdvOSAU0" className="profile-picture" alt="Ingmar Krusch" />
              <div className="name">Ingmar Krusch, <br />VP Engineering at solarisBank</div>
            </div>
          </div>
          <div className="testimonial">
            <p>
              “<b>Siniša is great, reliable developer who isn’t afraid to step out of his role when necessary.&nbsp; </b> 
               He pushed himself relentlessly to improve his skills on a daily basis. 
              <br /><br />
              After a couple of successful projects he moved to Berlin and then finally to Bay Area.
              <br /><br />
              Siniša is down to earth hardworking professional.
              Can’t recommend him enough!”
            </p>
            <div className="person">
              <img src="https://getivor.com/images/ivor.jpg" className="profile-picture" alt="Ivor Reic" />
              <div className="name">Ivor Reic, <br />Owner at Codetree.co</div>
            </div>
          </div>
        </div>

        <div id="work" className="section section-my-work">
        <h2>My work</h2>
        
        </div>

        <div id="showcase" className="section section-showcase">
          <h2>Showcase project</h2>
          <div className="project">
            <a className="project-image" href="https://www.scroogevault.co/" target="_blank" rel="noopener noreferrer">
              {/* <img src={scroogevaultShowcase} alt="ScroogeVault" /> */}
              <img src="http://scroogevault.co/static/c05a002351f60a9ad6203c9f6c62b695.png" alt="ScroogeVault" />
            </a>
            <div className="project-description">
              <h3>ScroogeVault</h3>
              <p className="quick-description">Savings goals tracking app</p>
              <p>
                I wanted to build real-world CRUD app and showcase my skills in setting up product and infrastructure from ground zero.
                <br /><br />Client side has scalable React/Mobx architecture with Webpack and CircleCI infrastructure. API is built on Ruby on Rails with
                REST style. Release process is a "one button deploy" via Github!
              
              </p>
              <div>
                <button>Try it yourself</button>
                <button>View the code</button>
              </div>
            </div>
          </div>
        </div>

      </main>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
