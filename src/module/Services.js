import ServicesImg1 from "../assets/images/service-img-1.png";
import ServicesImg2 from "../assets/images/service-img-2.png";
import ServicesImg3 from "../assets/images/service-img-3.png";

function Services() {
  return (
    <section>
      <div className="container service">
        <div className="service-title-wrapper">
          <strong>SERVICES</strong>
          <h1>Design that solves problems, one product at a time.</h1>
        </div>
        <div className="service-ul-wrapper">
          <ul className="service-list-wrapper">
            <li>
              <img
                src={ServicesImg1}
                alt="Services image"
                width={70}
                height={70}
              />
              <h3>What I can do for you</h3>
              <p>
                Faster, better products that your users love. Here's all the
                services I provide:
              </p>
              <l className="service-span-list">
                <li>
                  <p>
                    <span></span>Design Strategy
                  </p>
                </li>
                <li>
                  <p>
                    <span></span>Web and Mobile App Design
                  </p>
                </li>
                <li>
                  <p>
                    <span></span>Front-end Development
                  </p>
                </li>
              </l>
            </li>
            <li>
              <img
                src={ServicesImg2}
                alt="Services image"
                width={70}
                height={70}
              />
              <h3>Applications I'm fluent in</h3>
              <p>
                Every designer needs the right tools to do the perfect job.
                Thankfully, I'm multilingual.
              </p>
              <l className="service-span-list">
                <li>
                  <p>
                    <span></span>Sketch
                  </p>
                </li>
                <li>
                  <p>
                    <span></span>Webflow
                  </p>
                </li>
                <li>
                  <p>
                    <span></span>Figma
                  </p>
                </li>
              </l>
            </li>
            <li>
              <img
                src={ServicesImg3}
                alt="Services image"
                width={70}
                height={70}
              />
              <h3>What you can expect</h3>
              <p>
                I design products that are more than pretty. I make them
                shippable and usable.
              </p>
              <l className="service-span-list">
                <li>
                  <p>
                    <span></span>Clean and functional
                  </p>
                </li>
                <li>
                  <p>
                    <span></span>Device and user friendly
                  </p>
                </li>
                <li>
                  <p>
                    <span></span>Efficient and maintainable
                  </p>
                </li>
              </l>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Services;
