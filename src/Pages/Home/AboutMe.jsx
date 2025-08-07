export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img animated-bitmoji">
        <img src="./img/Shalaka.jpeg" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          {/* <p className="section--title">About</p> */}
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            I’m Shalaka Sonawane, a full-stack developer and recent Computer Science graduate passionate about building scalable, user-focused applications. 
          </p>
          <p className="hero--section-description">
            I thrive on turning complex problems into intuitive digital experiences, combining clean architecture, interactive design, and AI-driven insights. I enjoy building beautiful websites, experimenting with machine learning models, and exploring new technologies to create solutions that make a real-world impact.
          </p>
        </div>
      </div>
    </section>
  );
}
