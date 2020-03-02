import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faHandshake } from '@fortawesome/free-regular-svg-icons'
import { faBullhorn, faBullseye } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Navigation from './components/navigation/navigation'
import SocialLinks from './components/social-links/social-links'
import Footer from './components/footer/footer'
import scroogevaultShowcase from './images/scroogevault-showcase.png'
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
              <img src={scroogevaultShowcase} alt="ScroogeVault" />
              {/* <img src="http://scroogevault.co/static/c05a002351f60a9ad6203c9f6c62b695.png" alt="ScroogeVault" /> */}
            </a>
            <div className="project-description">
              <h3>ScroogeVault</h3>
              <p className="quick-description">Savings goals tracking app</p>
              <p>
                I wanted to build real-world CRUD app and showcase my skills in setting up product and infrastructure from ground zero.
                <br /><br />Client side has scalable React/Mobx architecture with Webpack and CircleCI infrastructure. RESTful API is built on Rails and 
                release process is a "one button deploy" via Github!
              </p>
              <div>
                <a href="https://www.scroogevault.co/" target="_blank" rel="noopener noreferrer">
                  <button className="primary">Try it yourself</button>
                </a>
                <button className="secondary"><FontAwesomeIcon icon={faGithub} /> View the code</button>
              </div>
            </div>
          </div>
        </div>

        <div id="how-i-work" className="section section-how-i-work">
          <h2>How I work</h2>
          <h4><FontAwesomeIcon icon={faBullhorn} /> Effective and transparent communication</h4>
          <p>
            Many developers fall into trap of just writing code. But what they often forget is that many problems can be 
            solved by prompt communication and asking the right questions early on.
            Throughout my experience I learned how to shave off weeks and even months of unnecessary work with only transparent and effective communication.
          </p>
          <hr/>
          <h4><FontAwesomeIcon icon={faBullseye} /> Pragmatic with business goals in mind</h4>
          <p>
            My goal is to help you build a successful business, and every online business needs to move fast while ensuring code quality.
            I can quickly grok the perfect balance and develop your product with speed and stability.
          </p>
          <hr/>
          <h4><FontAwesomeIcon icon={faClock} /> I won't waste your time</h4>
          <p>
            I am a self-managed contributor who can mold into your processes very quickly, so I won't need much hand holding. I know when to ask for permission and when to 
            make decisions independently.
          </p>
          <hr/>
          <h4><FontAwesomeIcon icon={faHandshake} /> Flexible and risk free engagement</h4>
          <p>
            Hiring new talent is a great challenge and even bigger risk. I prefer to have happy clients who choose to work with me on a daily basis.
            In order to do that I prefer signing flexible contracts which you can terminate at any time. Not that you will need to 
            <span className="smiley" role="img" aria-label="smiley">🙂</span>
          </p>
        </div>

        <div id="contact" className="section section-contact">
          <h2>Get in touch</h2>
          <p>
            Tell me more about your project and send me an email at &nbsp;
            <a href="mailto:sinisa@codewell.studio">sinisa@codewell.studio</a>
          </p>
        </div>

        <Footer />

      </main>
    </div>
  );
}

export default App;
