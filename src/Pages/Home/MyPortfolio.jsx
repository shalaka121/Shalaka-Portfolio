
import { useEffect, useRef, useState } from "react";
import data from "../../data/index.json";

export default function MyPortfolio() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;

    if (!isHovered) {
      interval = setInterval(() => {
        const container = scrollRef.current;
        if (container) {
          const scrollAmount = container.offsetWidth;
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });

          if (
            container.scrollLeft + container.offsetWidth >=
            container.scrollWidth
          ) {
            container.scrollTo({ left: 0, behavior: "smooth" });
          }
        }
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [isHovered]); // rerun when hover state changes

  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          {/* <p className="sub--title">Recent Projects</p> */}
          <h2 className="section--heading">My Portfolio</h2>
        </div>
        <div>
          <a
            className="btn btn-github"
            href="https://github.com/ShalakaSonawane1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit My GitHub
          </a>
        </div>
      </div>

      <div
        className="portfolio--carousel-wrapper"
        ref={scrollRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="portfolio--scroll-track">
          {data.portfolio.concat(data.portfolio).map((item, index) => (
            <div key={index} className="portfolio--section--card">
              <div className="portfolio--section--img">
                <img src={item.src} alt={item.title} />
              </div>
              <div className="portfolio--section--card--content">
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
                <p className="text-sm portfolio--link">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View In GitHub →
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
