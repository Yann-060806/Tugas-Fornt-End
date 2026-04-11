import React from "react";
import hero from "../../assets/hero.svg";
import "./HeroLandingPage.css";

const HeroLandingPage = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-image">
            <img src={hero} alt="hero" />
          </div>

          <div className="hero-text">
            <h1>Belanja Mudah, Harga Terbaik</h1>
            <p>Temukan berbagai produk berkualitas di PeTIK Niaga</p>

            <button className="hero-btn">Lihat Produk</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroLandingPage;
