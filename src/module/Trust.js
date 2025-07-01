import LogoIpsum from "../assets/images/logoipsum.png";
import LogoIpsum2 from "../assets/images/logoipsum-2.png";
import LogoIpsum3 from "../assets/images/logoipsum-3.png";
import LogoIpsum4 from "../assets/images/logoipsum-4.png";

function Trust() {
  return (
    <section>
      <div className="container trust-wrapper">
        <p>Trusted by</p>
        <div className="trust-image-wrapper">
          <img src={LogoIpsum} alt="Logo first" width={141} height={32} />
          <img src={LogoIpsum2} alt="Logo first" width={141} height={32} />
          <img src={LogoIpsum3} alt="Logo first" width={141} height={32} />
          <img src={LogoIpsum4} alt="Logo first" width={141} height={32} />
        </div>
      </div>
    </section>
  );
}

export default Trust;
