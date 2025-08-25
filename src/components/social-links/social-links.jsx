import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // load FA core styles once
import "./social-links.css";

// Avoid FA injecting CSS at runtime; we import it above instead.
config.autoAddCss = false;

const LINKS = [
  { href: "mailto:sinisa@codewell.studio", label: "Email", icon: faEnvelope },
  { href: "https://github.com/smikulic/", label: "GitHub", icon: faGithub },
  {
    href: "https://www.linkedin.com/in/sinisamikulic/",
    label: "LinkedIn",
    icon: faLinkedinIn,
  },
  {
    href: "https://www.instagram.com/sinisamikulic/",
    label: "Instagram",
    icon: faInstagram,
  },
];

export default function SocialLinks({ className = "" }) {
  return (
    <div className={`social-links ${className}`} aria-label="Social links">
      {LINKS.map(({ href, label, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
        >
          <FontAwesomeIcon icon={icon} aria-hidden="true" focusable="false" />
        </a>
      ))}
    </div>
  );
}
