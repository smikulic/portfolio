import React from 'react'
import ingmarImg from '../../images/ingmar.webp'
import ivorImg from '../../images/ivor.webp'
import './section-testimonials.css'

function SectionTestimonials() {
  return (
    <div id="testimonials" className="section section-testimonials">
      <div className="testimonial">
        <p>
          “Siniša possesses extensive specialist knowledge, which he always deployed confidently and skillfully in practice. 
          He demonstrated high personal initiative and identified fully with our company.
          <br /><br />
          <b>Even in situations where his workload was extreme, he demonstrated the greatest resilience and found exceptional solutions for any problem that arose.</b>”
        </p>
        <div className="person">
          <img src={ingmarImg} className="profile-picture" alt="Ingmar Krusch" />
          <div className="name">Ingmar Krusch, <br />VP Engineering at solarisBank</div>
        </div>
      </div>
      <hr/>
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
          <img src={ivorImg} className="profile-picture" alt="Ivor Reic" />
          <div className="name">Ivor Reic, <br />Owner at Codetree.co</div>
        </div>
      </div>
    </div>
  );
}

export default SectionTestimonials;
