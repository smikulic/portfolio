import React from "react";

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
      <b>Changed team communication</b>
      <p>
        By having weekly team sync we managed to establish certain engineering
        standards that helped out our code review process significantly.
        <br />
        We started documeting our best practices and created a technical roadmap
        that would guide our decision making process and ensure code quality.
      </p>
      <b>Pushed for engineers to own product feature discovery process</b>
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
      <b>Added key features towards our product stability and value</b>
      <p>
        Payment processing - enabled our <b>revenue stream</b> and Plaid
        integration
        <br />
        New Homepage dashboard - it gave our users more actionable invoice and
        vendor analysis
        <br />
        Development testing strategy - improved our code stability and quicker
        bug detection
        <br />
        More granular approach to building components - increased our
        development velocity and cross-team understanding of the code that
        reduced "knowledge silos"
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
