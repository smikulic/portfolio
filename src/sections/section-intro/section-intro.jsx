import profileImg from "../../images/profile_smile.webp";
import profileImgJpg from "../../images/profile_smile.jpg";
import SocialLinks from "../../components/social-links/social-links";
import "./section-intro.css";

function SectionIntro() {
  return (
    <div className="section section-intro">
      <div className="profile">
        <div className="profile-picture">
          <picture>
            <source
              srcSet={profileImg.src}
              type="image/webp"
              alt="Sinisa Mikulic"
            />
            <img src={profileImgJpg.src} alt="Sinisa Mikulic" />
          </picture>
          <SocialLinks />
        </div>
        <div className="profile-content">
          <h1 className="headline">
            Product engineer. 14 years shipping in regulated banking, payments
            and consumer finance.
          </h1>
          <h3 className="subheadline">
            I build the features that make money move: international payments at
            Glean, marketplace search at Credit Karma, core product at
            solarisBank in Berlin. Usually the first or lead engineer, working
            directly with founders.
          </h3>
        </div>
      </div>
      <div className="technologies">
        <div className="tech">
          <div className="js"></div>
          <span>JavaScript</span>
        </div>
        <div className="tech">
          <div className="ts"></div>
          <span>TypeScript</span>
        </div>
        <div className="tech">
          <div className="react"></div>
          <span>React</span>
        </div>
        <div className="tech">
          <div className="graphql"></div>
          <span>GraphQL</span>
        </div>
        <div className="tech">
          <div className="nodejs"></div>
          <span>Node.js</span>
        </div>
        <div className="tech">
          <div className="emotion"></div>
          <span>Styled Comp.</span>
        </div>
      </div>
    </div>
  );
}

export default SectionIntro;
