import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/NavBar.css";

const NavBar = () => {
  const handleInicioClick = () => {
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="app-title">SaborExplorer</div>
      <ul className="navbar-links">
        <li>
          <a href="#" onClick={handleInicioClick}>
            Inicio
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/manuel-murillo-peira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="logo-linkedin" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/MMurilloP/Lading_WELKHOMEtech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="logo-github" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
