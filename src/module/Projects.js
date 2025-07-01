import ArrowRight from "../assets/icons/index";
import BrandingImage from "../assets/images/branding-image.png";
import ProductsDesign from "../assets/images/product-design.png";
import WebDesign from "../assets/images/web-design.png";

function Projects() {
  return (
    <section>
      <div className="container projects">
        <div className="projects-title-wrapper">
          <div className="projects-title">
            <strong>PROJECTS</strong>
            <h2>
              I bring results.
              <br />
              My clients are proof.
            </h2>
          </div>
          <a href="#">View all projects</a>
        </div>
        <div className="projects-image-wrapper">
          <ul className="projects-image-list">
            <li>
              <img
                src={BrandingImage}
                alt="Projects image"
                width={486}
                height={305}
              />
              <strong>BRANDING</strong>
              <h3>Soulful Rebrand</h3>
              <a href="#">
                View Project
                <ArrowRight />
              </a>
            </li>
            <li>
              <img
                src={ProductsDesign}
                alt="Projects image"
                width={486}
                height={305}
              />
              <strong>PRODUCT DESIGN</strong>
              <h3>Datadash Product design</h3>
              <a href="#">
                View Project
                <ArrowRight />
              </a>
            </li>
            <li>
              <img
                src={WebDesign}
                alt="Projects image"
                width={486}
                height={305}
              />
              <strong>WEB DESIGN</strong>
              <h3>Maize Website Design</h3>
              <a href="#">
                View Project
                <ArrowRight />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Projects;
