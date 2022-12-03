import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import style from "../../styles/navBar.module.css";
import LogoTeamWork from "../../assets/images/Logo-team-work.svg";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../auth/userAccess";
import { setShowData } from "../../context/actions/signInUser";

function Navbar({ setSowData }) {
  const navRef = useRef();
  const router = useRouter();
  const user = useSelector((store) => store.isLoggedIn);
  const dispatch = useDispatch();

  const showNavbar = () => {
    navRef.current.classList.toggle(`${style.responsiveNav}`);
  };

  function logOutUser() {
    router.push({ pathname: "/", query: { logout: true } });
    logOut();
    showNavbar();
  }

  return (
    <header className={style.thisHeader}>
      <h3 className={style.logoHeader}>
        <img
          className={style.logo}
          src={LogoTeamWork.src}
          alt="Logo-team-work"
          onClick={() => router.push("/")}
        />
      </h3>
      <nav className={style.navStyle} ref={navRef}>
        <a
          className={style.aLink}
          href="#"
          onClick={(e) => {
            dispatch(setShowData("unions")), showNavbar();
          }}
          style={!user ? { pointerEvents: "none", color: "gray" } : null}>
          Workers Unions
        </a>
        <a
          className={style.aLink}
          href="#"
          onClick={(e) => {
            dispatch(setShowData("lawyers"));
            showNavbar();
          }}
          style={!user ? { pointerEvents: "none", color: "gray" } : null}>
          Lawyers
        </a>
        {/* <a
          className={style.aLink}
          href="#"
          style={!user ? { pointerEvents: "none", color: "gray" } : null}>
          Contact
        </a> */}
        <a
          className={style.aLink}
          onClick={logOutUser}
          style={!user ? { pointerEvents: "none", display: "none" } : null}>
          Log out
        </a>

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
