import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import style from "../styles/navBar.module.css";
import LogoTeamWork from "./assets/images/Logo-team-work.svg";


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3>
			<img src={LogoTeamWork} alt="Logo-team-work" />
			</h3>
			<nav ref={navRef}>
				<a href="/#">Workers Unions</a>
				<a href="/#">Lawyers</a>
				<a href="/#">Contact</a>
				<button
					className={style.nav-close-btn}
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className={style.nav-btn} onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
