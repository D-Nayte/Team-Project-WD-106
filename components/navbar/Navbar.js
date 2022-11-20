import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import style from "../../styles/navBar.module.css";
import LogoTeamWork from "../../assets/images/Logo-team-work.svg";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      {console.log(LogoTeamWork.src)}
      <h3>
        <img
          className={style.logo}
          src={LogoTeamWork.src}
          alt="Logo-team-work"
        />
      </h3>
      <nav ref={navRef}>
        <a href="/#">Workers Unions</a>
        <a href="/#">Lawyers</a>
        <a href="/#">Contact</a>
        <button onClick={showNavbar}>
          <FaTimes />
        </button>
        <FaBars />
      </nav>
      <button onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
