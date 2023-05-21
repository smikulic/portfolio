import React from 'react'
import ingmarImg from '../../images/ingmar.webp'
import ingmarImgJpg from '../../images/ingmar.jpg'
import howardImg from '../../images/howard.webp'
import howardImgJpg from '../../images/howard.jpg'
import ivorImg from '../../images/ivor.webp'
import ivorImgJpg from '../../images/ivor.jpg'
import './section-testimonials.css'

function SectionTestimonials() {
  return (
    <div id="testimonials" className="section section-testimonials">
      <div className="testimonial">
        <p>
          “Siniša is an exceptional software engineer and consultant who was a pleasure to work with. <b>His reliability and easygoing demeanor made him a valuable addition to our team, and his expertise helped us make significant strides in our business.</b>
          <br /><br />
          His contributions have left a lasting impact on our product and processes, and I would gladly work with him again.”
        </p>
        <div className="person">
          <picture>
            <source srcSet={howardImg} className="profile-picture" type="image/webp" alt="Howard Katzenberg" />
            <img src={howardImgJpg} className="profile-picture" alt="Howard Katzenberg" />
          </picture>
          <div className="name">Howard Katzenberg, <br />Founder of Glean AI</div>
        </div>
      </div>
      <hr/>
      <div className="testimonial">
        <p>
          “Siniša possesses extensive specialist knowledge, which he always deployed confidently and skillfully in practice. 
          He demonstrated high personal initiative and identified fully with our company.
          <br /><br />
          <b>Even in situations where his workload was extreme, he demonstrated the greatest resilience and found exceptional solutions for any problem that arose.</b>”
        </p>
        <div className="person">
          <picture>
            <source srcSet={ingmarImg} className="profile-picture" type="image/webp" alt="Ingmar Krusch" />
            <img src={ingmarImgJpg} className="profile-picture" alt="Ingmar Krusch" />
          </picture>
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
          <picture>
            <source srcSet={ivorImg} className="profile-picture" type="image/webp" alt="Ivor Reic" />
            <img src={ivorImgJpg} className="profile-picture" alt="Ivor Reic" />
          </picture>
          <div className="name">Ivor Reic, <br />Owner at Codetree.co</div>
        </div>
      </div>
    </div>
  );
}

export default SectionTestimonials;
