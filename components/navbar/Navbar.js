import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import style from "../../styles/navBar.module.css";
import LogoTeamWork from "../../assets/images/Logo-team-work.svg";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(`${style.responsiveNav}`);
  };

  return (
    <header className={style.thisHeader}>
      <h3 className={style.logoHeader}>
        <img
          className={style.logo}
          src={LogoTeamWork.src}
          alt="Logo-team-work"
        />
      </h3>
      <nav className={style.navStyle} ref={navRef}>
        <a className={style.aLink} href="/#">
          Workers Unions
        </a>
        <a className={style.aLink} href="/#">
          Lawyers
        </a>
        <a className={style.aLink} href="/#">
          Contact
        </a>
        <button className={`${style.navBtn} ${style.
          navCloseBtn}`} onClick={showNavbar}>
          <FaTimes />
        </button>
        <FaBars className={style.faBars}/>
      </nav>
      <button className={style.navBtn} onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
