import "./Navbar.css";
import logo from "../images/logo.svg";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">O mě</Link>
        <Link className="desktopMenuListItem">Co učím</Link>
        <Link className="desktopMenuListItem">Koho učím</Link>
        <Link className="desktopMenuListItem">Kontakt</Link>
      </div>
      <button className="desktopMenuBtn">
        <img src="" alt="" className="desktopMenuImg" />
        Kontaktujte mě
      </button>
    </nav>
  );
};
