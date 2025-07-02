import{LogoIpsum1, LogoIpsum2, LogoIpsum3, LogoIpsum4} from "../../assets/images"
import "./trust.css"

function Trust() {
  const imgList = [LogoIpsum1, LogoIpsum2, LogoIpsum3, LogoIpsum4]
  return (
    <section>
      <div className="container trust-wrapper">
        <p>Trusted by</p>
        <div className="trust-image-wrapper">
          {imgList.map((item,index) => <img key={index} src={item} alt="Logo Ipsum" width={141} height={32}/>)}
        </div>
      </div>
    </section>
  );
}

export default Trust;
