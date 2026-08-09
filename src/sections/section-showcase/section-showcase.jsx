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
          <p className="quick-description">
            Personal finance and budgeting, live at yourmonthly.app
          </p>
          <p>
            A live product I designed, built and maintain alone: real users,
            analytics driving what gets built next, and a security audit I run
            against my own authorization logic.
            <br />
            <br />
            React, TypeScript and Apollo on the client. GraphQL API on Node.js
            with Prisma and Postgres. Source is public, including the decision
            records and the audit log.
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
