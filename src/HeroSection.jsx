import React, { useEffect } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  useEffect(() => {
    const gradientAnimation = () => {
      const gradient = document.querySelector(".gradient-bg");
      if (!gradient) return;

      let angle = 0;
      const colors = [
        "rgba(21, 21, 21, 1)",
        "rgba(30, 30, 30, 1)",
        "rgba(21, 21, 21, 1)",
      ];

      const animate = () => {
        angle = (angle + 0.5) % 360;
        const gradientString = `linear-gradient(${angle}deg, ${colors.join(
          ", "
        )})`;
        gradient.style.background = gradientString;
        requestAnimationFrame(animate);
      };

      animate();
    };

    gradientAnimation();
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToWork = () => {
    const workection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section">
      <div className="gradient-bg"></div>

      <div className="hero-content">
        <div className="text-container">
          <div className="line-mask">
            <h1 className="hero-name">Ahad</h1>
          </div>
          <div className="line-mask">
            <h2 className="hero-title">Web Developer & Interface Designer</h2>
          </div>
          <div className="line-mask">
            <p className="hero-description">
              Crafting pixel-perfect experiences with modern technologies and
              clean code.
            </p>
          </div>

          <div className="cta-container">
            <button className="cta-button" onClick={scrollToServices}>
              <span>Get Started</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="secondary-links">
              <a href="#work" className="secondary-link">
                <span>View Work</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
              <a href="#contact" className="secondary-link">
                <span>Contact</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 10H3M21 14H3M12 3L12 21"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="scroll-hint flex ml-30">
          <div className="scroll-line"></div>
          <span>Explore</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;



