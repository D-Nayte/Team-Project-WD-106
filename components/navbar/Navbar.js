import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import style from "../../styles/navBar.module.css";
import LogoTeamWork from "../../assets/images/Logo-team-work.svg";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Link from "next/link";
import { logOut } from "../../auth/userAccess";

function Navbar() {
  const navRef = useRef();
  const route = useRouter();
  const user = useSelector((store) => store.isLoggedIn);

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
          onClick={() => route.push("/")}
        />
      </h3>
      <nav className={style.navStyle} ref={navRef}>
        <a
          className={style.aLink}
          href="/#"
          style={!user ? { pointerEvents: "none", color: "gray" } : null}>
          Workers Unions
        </a>
        <a
          className={style.aLink}
          href="/#"
          style={!user ? { pointerEvents: "none", color: "gray" } : null}>
          Lawyers
        </a>
        <a
          className={style.aLink}
          href="/#"
          style={!user ? { pointerEvents: "none", color: "gray" } : null}>
          Contact
        </a>
        <Link
          className={style.aLink}
          href="/"
          onClick={logOut}
          style={!user ? { pointerEvents: "none", display: "none" } : null}>
          Log out
        </Link>
        <Link
          className={style.aLink}
          href="/login"
          style={!user ? { pointerEvents: "none", display: "none" } : null}>
          Dashboard
        </Link>
        <button
          className={`${style.navBtn} ${style.navCloseBtn}`}
          onClick={showNavbar}>
          <FaTimes />
        </button>
        <FaBars className={style.faBars} />
      </nav>
      <button className={style.navBtn} onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
