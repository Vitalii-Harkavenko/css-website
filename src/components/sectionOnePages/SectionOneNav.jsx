import { Link } from "react-router-dom";
import { useRef } from "react";

export default function SecOneNavbar() {
	const roundedGradient = useRef(null);
	
	const handleHover = (input) => {
		roundedGradient.current.style.left = input;
	}

	return (
		<nav className="fixed top-0 left-0 w-screen h-fit text-xl text-white leading-normal">
			<div className="absolute rounded-full nav-gradient-radial h-[200vw] w-[200vw] top-[-100vw] left-[-100vw]" ref={roundedGradient}></div>
			<ul className="flex h-fit">
				<li className="home-nav-el group z-[90]" onMouseOver={() => handleHover('-100vw')}>
					<Link to="/" className="nav-animation-main font-montserrat-thin">Section one</Link>
					<Link to="/" className="nav-animation-hovered font-montserrat">You're there</Link>
				</li>
				<li className="home-nav-el group z-[90]" onMouseOver={() => handleHover('-64.5vw')}>
					<Link to="/sectionTwo" className="nav-animation-main font-montserrat-thin">Section two</Link>
					<Link to="/sectionTwo" className="nav-animation-hovered font-montserrat">Section two</Link>
				</li>
			</ul>
		</nav>
	)
}