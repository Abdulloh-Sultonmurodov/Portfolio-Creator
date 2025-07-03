import { ServiceImg1, ServiceImg2, ServiceImg3 } from "../../assets/images";
import ServiceList from "../../components/liList";


import "./services-list.css";
function Services() {
  const liList = [
    {
      id: 1,
      img: ServiceImg1,
      title: "What I can do for you",
      content:
        "Faster, better products that your users love. Here's all the services I provide:",
      liContent1: "Design Strategy",
      liContent2: "Web and Mobile App Design",
      liContent3: "Front-end Development",
    },
    {
      id: 2,
      img: ServiceImg2,
      title: "Applications I'm fluent in",
      content:
        "Every designer needs the right tools to do the perfect job. Thankfully, I'm multilingual.",
      liContent1: "Sketch",
      liContent2: "Webflow",
      liContent3: "Figma",
    },
    {
      id: 3,
      img: ServiceImg3,
      title: "What you can expect",
      content:
        "I design products that are more than pretty. I make them shippable and usable.",
      liContent1: "Clean and functional",
      liContent2: "Device and user friendly",
      liContent3: "Efficient and maintainable",
    },
  ];
  return (
    <section>
      <div className="container service">
        <div className="service-title-wrapper">
          <strong>SERVICES</strong>
          <h1>Design that solves problems, one product at a time.</h1>
        </div>
        <div className="service-ul-wrapper">
          <ul className="service-list-wrapper">
            {liList.map((item) => (
              <ServiceList key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Services;
