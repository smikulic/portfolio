import React from "react";
import gleanHomepageImg from "../../images/glean-homepage.webp";
import gleanHomepageImgJpg from "../../images/glean-homepage.jpg";
import gleanCompareImg from "../../images/glean-compare.webp";
import gleanCompareImgJpg from "../../images/glean-compare.jpg";
import gleanPaymentOneImg from "../../images/glean-payment-1.webp";
import gleanPaymentOneImgJpg from "../../images/glean-payment-1.jpg";
import gleanPaymentTwoImg from "../../images/glean-payment-2.webp";
import gleanPaymentTwoImgJpg from "../../images/glean-payment-2.jpg";
import "./section-glean.css";

function SectionGlean() {
  return (
    <div className="section section-page">
      <h1>Glean</h1>
      <div className="tech">
        <span>React</span>
        <span>Highcharts</span>
        <span>Node/GraphQL</span>
        <span>Webpack</span>
        <span>AWS</span>
        <span>AI/Machine Learning</span>
      </div>

      <p>
        Glean Analytics is a{" "}
        <b>AI-powered spend intelligence solution from New York</b> that saves
        companies money by analyzing expense drivers and finding line-item level
        insights often overlooked by finance teams and budget owners.
      </p>
      <p>
        When I joined the team was in their pre-revenue stage with seed funding
        round, and my roles was to:
        <ul>
          <li>improve development team feature delivery speed</li>
          <li>increase estimation accuracy</li>
          <li>help with key features for growth of the company and product</li>
        </ul>
      </p>
      <p className="prominent">
        <b>
          Steps I took or strongly pushed the team in order to achieve these
          expectations
        </b>
      </p>
      <b>1. Added key features towards our product stability and value</b>
      <p>
        Payment processing
        <br />- enabled our <b>revenue stream</b> and Plaid integration
        <div className="section-img-two-column">
          <div className="section-img">
            <picture className="section-img-center">
              <source
                srcSet={gleanPaymentOneImg}
                type="image/webp"
                alt="Glean Payment"
              />
              <img src={gleanPaymentOneImgJpg} alt="Glean Payment" />
            </picture>
          </div>
          <div className="section-img">
            <picture className="section-img-center">
              <source
                srcSet={gleanPaymentTwoImg}
                type="image/webp"
                alt="Glean Payment"
              />
              <img src={gleanPaymentTwoImgJpg} alt="Glean Payment" />
            </picture>
          </div>
        </div>
        New Homepage dashboard and vendor spend comparison
        <br />- it gave our users more actionable invoice and vendor analysis
        <div className="section-img-two-column">
          <div className="section-img">
            <picture className="section-img-center">
              <source
                srcSet={gleanHomepageImg}
                type="image/webp"
                alt="Glean Homepage"
              />
              <img src={gleanHomepageImgJpg} alt="Glean Homepage" />
            </picture>
          </div>
          <div className="section-img">
            <picture className="section-img-center">
              <source
                srcSet={gleanCompareImg}
                type="image/webp"
                alt="Glean Compare"
              />
              <img src={gleanCompareImgJpg} alt="Glean Compare" />
            </picture>
          </div>
        </div>
        More granular approach to building components
        <br />- increased our development velocity and cross-team understanding
        of the code that reduced "knowledge silos"
      </p>
      <b>2. Changed team communication</b>
      <p>
        By having weekly team sync we managed to establish certain engineering
        standards that helped out our code review process significantly.
        <br />
        We started documeting our best practices and created a technical roadmap
        that would guide our decision making process and ensure code quality.
      </p>
      <b>3. Pushed for engineers to own product feature discovery process</b>
      <p>
        By assigning specific feature owner we enabled engineers to ask the
        right questions and discover potential risks to development ahead of
        time. This role also provided a "hub" person who had the most context
        relevant for that specific feature.
        <br />
        We started giving relevant feedback to our product managers in order to
        reduce the scope of potential "rabbit holes" or split the feature into
        MVP and Nice To Have items.
      </p>
      <br />
      <p className="prominent">
        This effort eventually brough us to:
        <ul>
          <li>
            <b>Series A funding</b>
          </li>
          <li>
            <b>first revenue stream</b> through introduction of Payment
            processing feature
          </li>
          <li>
            <b>client base growth</b>
          </li>
          <li>
            <b>
              consistent track record of feature delivery and product quality
            </b>
          </li>
        </ul>
      </p>
    </div>
  );
}

export default SectionGlean;
