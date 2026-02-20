import { useRef } from "react";
import "./TestimonialsSection.css";

const testimonials = [
  { name: "Lakshmi R", text: "Beautiful craftsmanship and elegant design." },
  { name: "Priya S", text: "Trusted jewellery store for our entire family." },
  { name: "Anitha K", text: "Premium quality and amazing customer service." },
  { name: "Meena V", text: "Absolutely love their silver collections." },
  { name: "Divya M", text: "Traditional yet modern designs. Highly recommend." },
];

const TestimonialsSection = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <section className="testimonial-section">

      <h2>What Our Customers Say</h2>

      <div className="testimonial-wrapper">

        <button className="testimonial-arrow left" onClick={scrollLeft}>
          ‹
        </button>

        <div className="testimonial-slider" ref={sliderRef}>
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <p>“{item.text}”</p>
              <h4>– {item.name}</h4>
            </div>
          ))}
        </div>

        <button className="testimonial-arrow right" onClick={scrollRight}>
          ›
        </button>

      </div>

    </section>
  );
};

export default TestimonialsSection;