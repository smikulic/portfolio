import React from 'react';
// import logo from './logo.svg';
import './App.css';

// EBDE37
// 3A3A33
// FBCD88
// 515769
// 1E2233
// 24283B

function App() {
  return (
    <div className="App">
      {/* <div className="square square-1"></div>
      <div className="square square-2"></div>
      <div className="square square-3"></div> */}
      
      <main className="container">
        <div className="section section-intro">
          <div>
            <img src="https://smikulic.me/profile.jpg" className="profile-picture" alt="Sinisa Mikulic" />
          </div>
          <div>
            <h1 className="headline">I'm a proven web development expert specialized in UI & UX.</h1>
            <h3 className="subheadline">Whether you're an early stage startup or an established company - I will provide you with technical and business expertise you need to succeed.</h3>
          </div>
        </div>
        
        <div id="testimonials" className="section section-testimonials">
          <div className="testimonial">
            <p>
              “Siniša possesses extensive and varied specialist knowledge, which he always deployed confidently and skillfully in practice. 
              <b> He demonstrated high personal initiative and identified fully with our company, impressing us in the process as well with his great enthusiasm.</b>
              <br /><br />
              Even in situations where his workload was extreme, he demonstrated the greatest resilience and found exceptional solutions for any problems that arose.”
            </p>
            <div className="person">
              <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGMSpvbNlYb4w/profile-displayphoto-shrink_200_200/0?e=1588204800&v=beta&t=LDvxAbgpFNpCAkuCC3FqrrGJBJVui7mzd-QKdvOSAU0" className="profile-picture" alt="Ingmar Krusch" />
              <div className="name">- Ingmar Krusch, VP Engineering, solarisBank</div>
            </div>
          </div>
          <div className="testimonial">
            <p>
              “<b>Siniša is great, reliable developer who isn’t afraid to step out of his role when necessary.&nbsp; </b> 
               He pushed himself relentlessly to improve his skills on a daily basis. 
              <br /><br />
              After a couple of successful projects he moved to Berlin and then finally to Bay Area.
              <br /><br />
              Siniša is down to earth hardworking professional and the person because of whom I started coding in the first place.
              Can’t recommend him enough!”
            </p>
            <div className="person">
              <img src="https://getivor.com/images/ivor.jpg" className="profile-picture" alt="Ivor Reic" />
              <div className="name">- Ivor Reic, Owner at Codetree.co</div>
            </div>
          </div>
        </div>

        <div className="section section-intro">
          <div>
            <img src="https://smikulic.me/profile.jpg" className="profile-picture" alt="Sinisa Mikulic" />
          </div>
          <div>
            <h1 className="headline">I'm a proven web development expert specialized in frontend.</h1>
            <h3 className="subheadline">If you are a early stage startup or established company I can help you deliver your product so that you can gain interest from investors, bring value to your users and meet their business goals.</h3>
          </div>
        </div>

        <div className="section section-intro">
          <div>
            <img src="https://smikulic.me/profile.jpg" className="profile-picture" alt="Sinisa Mikulic" />
          </div>
          <div>
            <h1 className="headline">I'm a proven web development expert specialized in frontend.</h1>
            <h3 className="subheadline">If you are a early stage startup or established company I can help you deliver your product so that you can gain interest from investors, bring value to your users and meet their business goals.</h3>
          </div>
        </div>
        <div className="section section-intro">
          <div>
            <img src="https://smikulic.me/profile.jpg" className="profile-picture" alt="Sinisa Mikulic" />
          </div>
          <div>
            <h1 className="headline">I'm a proven web development expert specialized in frontend.</h1>
            <h3 className="subheadline">If you are a early stage startup or established company I can help you deliver your product so that you can gain interest from investors, bring value to your users and meet their business goals.</h3>
          </div>
        </div>
        <div className="section section-intro">
          <div>
            <img src="https://smikulic.me/profile.jpg" className="profile-picture" alt="Sinisa Mikulic" />
          </div>
          <div>
            <h1 className="headline">I'm a proven web development expert specialized in frontend.</h1>
            <h3 className="subheadline">If you are a early stage startup or established company I can help you deliver your product so that you can gain interest from investors, bring value to your users and meet their business goals.</h3>
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
