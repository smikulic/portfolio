import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faHandshake } from "@fortawesome/free-regular-svg-icons";
import {
  faBullhorn,
  faBullseye,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // load FA core styles once
import "./section-how-i-work.css";

// Avoid FA injecting CSS at runtime; we import it above instead.
config.autoAddCss = false;

function SectionHowIWork() {
  return (
    <div id="how-i-work" className="section section-how-i-work">
      <h2>How I work</h2>
      <h4>
        <FontAwesomeIcon icon={faBullhorn} /> Effective and transparent
        communication
      </h4>
      <p>
        Most wasted work comes from building the right thing for the wrong
        problem. I'd rather spend a day on the question than a month on the
        answer, so expect me to push back before I start rather than after.
      </p>
      <hr />
      <h4>
        <FontAwesomeIcon icon={faRobot} /> AI tooling with guardrails
      </h4>
      <p>
        I set up how teams work with AI coding tools: shared conventions and
        review rules across repos, so moving faster doesn't cost you design
        quality. A technical proof of concept becomes cheap enough to run during
        discovery, which means you find out whether an approach works while
        you're still deciding what to build.
      </p>
      <hr />
      <h4>
        <FontAwesomeIcon icon={faBullseye} /> Pragmatic with business goals in
        mind
      </h4>
      <p>
        My goal is your business outcome, so I trade speed against quality
        deliberately rather than by default. Pre-revenue that means shipping
        what lets you learn and noting the debt we took on; later it means
        slowing down where being wrong is expensive, like money, authorization
        and anything touching user data. I'll tell you which mode I think we're
        in.
      </p>
      <hr />
      <h4>
        <FontAwesomeIcon icon={faClock} /> I won't waste your time
      </h4>
      <p>
        I'm self-managed: I adopt your conventions rather than import my own,
        and I know which decisions to make alone and which to bring to you. If
        I'm blocked, you hear about it the same day rather than at the next
        standup.
      </p>
      <hr />
      <h4>
        <FontAwesomeIcon icon={faHandshake} /> Flexible and risk free engagement
      </h4>
      <p>
        Hiring is a risk, more so remotely and on a contract. I'd rather you
        choose to keep working with me each day than be locked in, so I sign
        flexible contracts you can end at any time.
      </p>
    </div>
  );
}

export default SectionHowIWork;
