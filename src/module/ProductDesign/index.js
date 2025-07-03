import {
  DesignImages1,
  DesignImages2,
  DesignImages3,
  DesignImages4,
} from "../../assets/images";

import "./productDesign.css";
function ProductDesign() {
  return (
    <section>
      <div className="container product-design">
        <div className="product-design-content-wrapper">
          <div>
            <strong>Product Designer</strong>
            <h3>That's me!</h3>
          </div>
          <div>
            <p>
              Over the past 12 years, I've worked with a diverse range of
              clients, from startups to Fortune 500 companies. I love crafting
              interfaces that delight users and help businesses grow.
            </p>
          </div>
        </div>
        <div className="product-design-images">
          <div className="designImage designImage1">
            <img
              src={DesignImages1}
              alt="Design Images"
              width={338}
              height={626}
            />
          </div>
          <div className="designImage designImage2">
            <img
              src={DesignImages2}
              alt="Design Images"
              width={507}
              height={626}
            />
          </div>
          <div className="designImage designImage3">
            <img
              src={DesignImages3}
              alt="Design Images"
              width={338}
              height={305}
            />
          </div>
          <div className="designImage designImage4">
            <img
              src={DesignImages4}
              alt="Design Images"
              width={338}
              height={305}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDesign;
