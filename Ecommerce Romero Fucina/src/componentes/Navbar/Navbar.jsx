import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="containerNavbar">
        <Link to="/" styler={{ color: "black", textDecoration: "none" }}>
          LA RUFINA
        </Link>

        <ul className="containerList">
          <Link to="/">Productos</Link>
          <Link to="/category/Productos Fresco">Productos Frescos</Link>
          <Link to="/category/Productos Procesados"> Productos Procesados</Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;