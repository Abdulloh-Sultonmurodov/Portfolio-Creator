import ArrowRight from "../assets/icons";
import Logo from "../assets/images/Logo.svg";

function Header() {
  return (
    <header className="site-header">
      <div className="container header">
        <a className="header-logo-link" href="/">
          <img src={Logo} alt="Site logo" width={195} height={19} />
        </a>
        <nav className="navbar">
          <a href="/">About</a>
          <a href="/">Services</a>
          <a href="/">Projects</a>
          <a href="/">Blog</a>
          <a href="/">
            Book a call
            <ArrowRight />
          </a>
        </nav>
      </div>
    </header>
  );
}
export default Header;
