import { ArrowRight } from "../../assets/icons";
import { ProductsImage, BrandingImage, WebDesign } from "../../assets/images";
import ImageList from "../../components/imgList";

import "./projects-img.css";
function Projects() {
  const imgList = [
    {
      id: 1,
      img: BrandingImage,
      strong: "BRANDING",
      title: "Soulful Rebrand",
      page: "View Project",
      icon: <ArrowRight />,
    },
    {
      id: 2,
      img: ProductsImage,
      strong: "PRODUCT DESIGN",
      title: "Datadash Product design",
      page: "View Project",
      icon: <ArrowRight />,
    },
    {
      id: 3,
      img: WebDesign,
      strong: "WEB DESIGN",
      title: "Maize Website Design",
      page: "View Project",
      icon: <ArrowRight />,
    },
  ];
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
            {imgList.map((item) => (
              <ImageList key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Projects;
