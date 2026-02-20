import { useState, useEffect } from "react";
import "./Hero.css";

const images = [
  "/images/banner1.jpg",
  "/images/banner2.jpg",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-slider">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="banner"
          className={index === current ? "slide active" : "slide"}
        />
      ))}
    </section>
  );
};

export default Hero;