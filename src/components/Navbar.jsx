import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">SaberExplorer</div>
      <ul className="navbar-links">
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Menú</a>
        </li>
        <li>
          <a href="#">Reservas</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
