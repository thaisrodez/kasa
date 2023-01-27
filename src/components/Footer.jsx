import whiteLogo from './../assets/logo-white.png';
import './../styles/Components/Footer.css';

function Footer() {
  return (
    <div className="kasa-footer">
      <img src={whiteLogo} alt="Kasa" className="footer-logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
