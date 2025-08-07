export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Shalaka</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I’m a full-stack developer who loves turning complex problems into sleek, user-friendly applications. From AI-powered chatbots to real-time dashboards, I craft solutions that blend clean code, data-driven insights, and seamless user experiences.
            <br /> 
            <br/>
          </p>
        </div>
        <a
          href="https://drive.google.com/drive/folders/1wRFldKVB0i-UnC1jyrVwyMDNKhO4oaGx?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn btn-primary">Download Resume</button>
        </a>

      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
