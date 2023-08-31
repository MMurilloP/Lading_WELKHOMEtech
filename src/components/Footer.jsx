import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Mi Sitio. Todos los derechos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
