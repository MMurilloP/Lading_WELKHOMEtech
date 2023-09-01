import "../styles/Footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <p>
            &copy; {new Date().getFullYear()} Manuel Murillo. Todos los derechos
            reservados.
          </p>
        </div>
        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/manuel-murillo-peira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="logo-linkedin" />
          </a>
          <a
            href="https://github.com/MMurilloP/Lading_WELKHOMEtech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="logo-github" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
