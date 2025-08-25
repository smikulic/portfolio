import monthlyShowcase from "../../images/monthly-showcase.webp";
import monthlyShowcaseJpg from "../../images/monthly-showcase.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // load FA core styles once
import "./section-showcase.css";

// Avoid FA injecting CSS at runtime; we import it above instead.
config.autoAddCss = false;

function SectionShowcase() {
  return (
    <div id="showcase" className="section section-showcase">
      <h2>Showcase project</h2>
      <div className="project">
        <a
          className="project-image"
          href="https://yourmonthly.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <picture>
            <source
              srcSet={monthlyShowcase.src}
              type="image/webp"
              alt="Monthly App"
            />
            <img src={monthlyShowcaseJpg.src} alt="Monthly App" />
          </picture>
        </a>
        <div className="project-description">
          <h3>Monthly App</h3>
          <p className="quick-description">Budget and savings tracking app</p>
          <p>
            I wanted to create a budget tracker for myself, friends and family.
            This also serves as a playground to demonstrate my skill in building
            a real-world CRUD app where product and infrastructure is setup from
            ground up.
            <br />
            <br />
            Client side has scalable React/Apollo architecture with MUI library
            and Webpack. GraphQL API is built with Node.js and Prisma ORM.
          </p>
          <div>
            <a
              href="https://github.com/smikulic/monthly-app-client"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="secondary">
                <FontAwesomeIcon icon={faGithub} /> View the UI code
              </button>
            </a>
            <a
              href="https://github.com/smikulic/monthly-app-server"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="secondary">
                <FontAwesomeIcon icon={faGithub} /> And the API code
              </button>
            </a>
            <a
              href="https://yourmonthly.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="primary">Try it yourself</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionShowcase;
