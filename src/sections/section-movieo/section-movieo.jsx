import movieoCaseStudyPng from "../../images/movieo-case-study.png";
import movieoCaseStudyTwoPng from "../../images/movieo-case-study2.png";
import movieoOldJpg from "../../images/movieo-old.jpg";
import movieoProjectImgJpg from "../../images/movieo-project.jpg";

function SectionMovieo() {
  return (
    <div className="section section-page">
      <h1>Movieo.me</h1>
      <div className="tech">
        <span>JS</span>
        <span>Ruby on Rails</span>
        <span>PostgreSQL</span>
      </div>
      <p className="prominent">
        In the beginning this was a pure passion project.
      </p>
      <p>
        We skipped market research and jumped straight into design.
        <b>
          We started by brainstorming and sketching out different user
          interfaces
        </b>
        , then spent some time refining what we thought was the best one. We
        wanted to have a smart and simple-to-use filtering system that
        encouraged exploration, with movie scores from both IMDb and Rotten
        Tomatoes.
      </p>
      <p>
        The next step was building the actual web app. Responsibilities were
        split, which translated into Ivor and I working on the client-side and
        product roadmap, while Vedran dealt with the back-end part of the
        application.
        <b>Smooth and performant user experience was our top priority</b>, so we
        needed all movie data to be readily available in our own database. We
        decided to write a script that imported quarter of a million movies from
        TMDB and OMDB API’s, and automatically updated them on a daily basis.
      </p>
      <p>
        After a few months of working in our spare time, we were ready to
        release the first version. We showed it to friends and a couple of other
        people. Initial reactions were extremely positive. Since the point of
        this project wasn’t to make money,{" "}
        <b>we went with zero budget marketing</b>. We decided to submit Movieo
        to three popular sites who’s users would appreciate this kind of
        product:
        <b>Reddit, Hacker News, and Product Hunt.</b>
      </p>
      <p>Comments started pouring in:</p>
      <img
        style={{ width: "80%", margin: "0 auto" }}
        src={movieoCaseStudyPng.src}
        alt="Movieo Case Study"
      />
      <img
        style={{ width: "80%", margin: "0 auto" }}
        src={movieoCaseStudyTwoPng.src}
        alt="Movieo Case Study"
      />
      <p>
        <b>
          By the end of the month almost half a million people tried our product
        </b>
        . We rose to front pages of &nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.producthunt.com/posts/movieo"
        >
          Product Hunt
        </a>
        , &nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://news.ycombinator.com/item?id=8547351"
        >
          Hacker News
        </a>
        &nbsp; and{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.fastcodesign.com/3038294/can-a-new-web-app-help-solve-the-what-movie-should-we-watch-conundrum"
        >
          Fast Company
        </a>
        , staying there for over a day. We received hundreds of emails and
        witnessed thousands of people tweeting about Movieo.
      </p>
      <p>
        <b>
          At the early product stages, it is not as much about traffic as it is
          about getting valuable feedback from your target audience
        </b>
        . And that’s exactly what we received. Overnight, our inbox turned into
        a goldmine of amazing ideas and suggestions. It’s unbelievable how many
        people are eager to help and express their support for products that
        actually solve their problems.
      </p>
      <p>
        After our initial success, we spent the next year working on design,
        features and onboarding in our spare time.
      </p>
      <p>Here is the difference between the initial and the current version:</p>

      <img
        style={{ width: "80%", margin: "0 auto" }}
        src={movieoOldJpg.src}
        alt="Initial Movieo"
      />
      <br />
      <img
        style={{ width: "80%", margin: "0 auto" }}
        src={movieoProjectImgJpg.src}
        alt="Current Movieo"
      />

      <p>
        We used Movieo as a platform for experimenting with different
        technologies, analytics setups, onboarding and conversion tactics, and
        more. Movieo gave us the opportunity to talk with other businesses and
        marketing agencies and learn about product monetization. Needing to wear
        many hats such as developing the product, creating social media
        campaigns and improving user retention provided valuable insight while
        working alongside friends made the experience simply amazing.
      </p>
      <p>
        We stopped working on it after a while, but the servers are still
        running and we still have many returning users. The automated scripts
        keep movies up to date.
      </p>
      <p>
        Today, in 2020,{" "}
        <b>Movieo is used by more than 100,000 people every month</b>. Even
        though we haven’t promoted it in over two years now, the numbers are
        still slowly but steadily rising.
      </p>
    </div>
  );
}

export default SectionMovieo;
