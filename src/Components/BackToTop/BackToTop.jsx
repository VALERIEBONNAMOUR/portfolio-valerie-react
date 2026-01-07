import React, { useState, useEffect } from "react";
import "./BackToTop.css";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (!visible) return null;

  return (
    <div className="back-to-top-wrapper">
      <button className="back-to-top__button" onClick={scrollToTop}>
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
};

export default BackToTop;
