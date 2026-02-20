import { useRef } from "react";
import "./SilverAnkletsSection.css";

const products = [
  { img: "/images/anklet.png", title: "Classic Temple Silver Anklet" },
  { img: "/images/anklet2.png", title: "Floral Pattern Silver Anklet" },
  { img: "/images/anklet3.png", title: "Traditional Bridal Silver Anklet" },
  { img: "/images/anklet4.png", title: "Oxidised Designer Anklet" },
  { img: "/images/anklet5.png", title: "Elegant Daily Wear Anklet" },
];

const SilverAnkletsSection = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="anklet-section">

      <div className="anklet-content">
        <span className="section-tag">Discover Our Silver Collection</span>
        <h2>Grace in every step with our exquisite Silver Anklets.</h2>
        <button className="explore-btn">Explore Anklets</button>
      </div>

      <div className="anklet-slider-wrapper">

        {/* Left Arrow */}
        <button className="nav-arrow left" onClick={scrollLeft}>
          ‹
        </button>

        <div className="anklet-slider" ref={sliderRef}>
          <div className="slider-track">
            {[...products, ...products].map((item, index) => (
              <div className="anklet-card" key={index}>
                <img src={item.img} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button className="nav-arrow right" onClick={scrollRight}>
          ›
        </button>

      </div>
    </section>
  );
};

export default SilverAnkletsSection;