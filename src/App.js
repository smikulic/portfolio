import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Navigation from './components/navigation/navigation'
import Footer from './components/footer/footer'
import SectionIntro from './sections/section-intro/section-intro'
import SectionTestimonials from './sections/section-testimonials/section-testimonials'
import SectionShowcase from './sections/section-showcase/section-showcase'
import SectionHowIWork from './sections/section-how-i-work/section-how-i-work'
import SectionContact from './sections/section-contact/section-contact'
import SectionWork from './sections/section-work/section-work'
import SectionAbout from './sections/section-about/section-about'
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

      <Router basename={process.env.NODE_ENV === 'development' ? '/' : process.env.PUBLIC_URL}>
        <Navigation />
        
        <Switch>
          <Route exact path="/">
            <SectionIntro />
            <SectionTestimonials />
            <SectionWork />
            <SectionShowcase />
            <SectionHowIWork />
            <SectionContact />
          </Route>
          <Route path="/about">
            <SectionAbout />
          </Route>
        </Switch>
        
        <Footer />
      </Router>
      </main>
    </div>
  );
}

export default App;
