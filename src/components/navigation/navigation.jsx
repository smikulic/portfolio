import "./navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <div className="items">
        <a href="/" className="item">
          Home
        </a>
        <a href="/#work" className="item">
          Work
        </a>
        <a href="/blog" className="item">
          Writing
        </a>
        <a href="/about" className="item">
          About
        </a>
        <a href="/#contact" className="item">
          Get in touch
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
