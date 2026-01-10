import "./Hero.css";

const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <img src={hero} alt="Hero" />
    </div>
  );
};

export default Hero;
