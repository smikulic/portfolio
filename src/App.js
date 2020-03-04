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
import SectionCreditKarma from './sections/section-credit-karma/section-credit-karma'
import SectionSolarisbank from './sections/section-solarisbank/section-solarisbank'
import SectionMovieo from './sections/section-movieo/section-movieo'
import './App.css'

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
          <Route path="/credit-karma-case-study">
            <SectionCreditKarma />
          </Route>
          <Route path="/solarisbank-case-study">
            <SectionSolarisbank />
          </Route>
          <Route path="/movieo-case-study">
            <SectionMovieo />
          </Route>
        </Switch>
        
        <Footer />
      </Router>
      </main>
    </div>
  );
}

export default App;
