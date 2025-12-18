import { useEffect, useState } from "react";
import "./Slider.css";

const images = [
  "/images/slide1.webp",
  "/images/slide2.webp",
  "/images/slide3.webp",
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
        >
          <img src={image} alt={`Slide ${index + 1}`} />

          {/* 🔹 Contenu UNIQUEMENT sur le 1er slide */}
          {index === 0 && currentIndex === 0 && (
            <div className="slide-content">
              <h1>Valérie BONNAMOUR</h1>
              <p>Développeuse Web Junior</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Slider;
