import ArrowRight from "../assets/icons";
import Bro from "../assets/images/bro.png";

function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero">
        <div className="hero-content-wrapper">
          <h1>
            <span>I design products</span>
            that delight and inspire people.
          </h1>
          <p>
            Hi! I’m Jake, a product designer based in Berlin. I create
            user-friendly interfaces for fast-growing startups.
          </p>
          <div className="hero-content-btn-wrapper">
            <button>Book a call</button>
            <a href="#">
              Download CV
              <ArrowRight />
            </a>
          </div>
        </div>
        <img src={Bro} alt="Bro img" width={500} height={595} />
      </div>
    </section>
  );
}

export default Hero;
