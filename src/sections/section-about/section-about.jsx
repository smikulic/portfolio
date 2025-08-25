import "./section-about.css";

function SectionAbout() {
  return (
    <div className="section section-page">
      <h1>
        Hi{" "}
        <span className="wave" role="img" aria-label="wave">
          👋
        </span>
      </h1>
      <p>
        My name is Sinisa. After my degree in IT, I began developing web
        applications for local businesses. In 2012, I started a Boutique Web
        Development shop with my two friends and I was happy to work long into
        the night learning more about what I loved. My years of dedication and
        experience coupled with my passion for technology and business allow me
        to truly enjoy the work that I do.
      </p>
      <br />
      <p>
        Various experience throughout Berlin startups has brought me to one of
        the highly successfull companies in San Francisco where I strived as a
        software engineer.
      </p>
      <br />
      <p>
        My personal preference for remote work has prevailed and had brough me
        back home mid 2019 where I quickly launched a small Web Consultancy
        business - Code Well Studio - and now looking forward to provide my
        extensive experience to you!
      </p>
      <br />
      <p>
        You can learn more about me and my work through my&nbsp;
        <a
          href="https://www.linkedin.com/in/sinisamikulic/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
        {/* http://smikulic.me/ */}
        ,&nbsp;
        <a
          href="https://github.com/smikulic"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github portfolio
        </a>
        ,&nbsp;
        <a
          href="https://medium.com/@sinisa.mikulic"
          target="_blank"
          rel="noopener noreferrer"
        >
          Medium articles
        </a>
        &nbsp; or just check out my&nbsp;
        <a href="/#work">Case Studies</a> directly.
      </p>
    </div>
  );
}

export default SectionAbout;
