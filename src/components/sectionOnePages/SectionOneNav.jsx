import { Link } from "react-router-dom";
import { useRef } from "react";

export default function SecOneNavbar() {
	const roundedGradient = useRef(null);
	
	const handleHover = (input) => {
		roundedGradient.current.style.left = input;
	}

	return (
		<nav className="fixed top-0 left-[7.5vw] text-xl text-white mt-4">
			<div className="absolute rounded-full nav-gradient-radial h-[200vw] w-[200vw] top-[-100vw] left-[-100vw]" ref={roundedGradient}></div>
			<ul className="flex">
				<li className="home-nav-el group" onMouseOver={() => handleHover('-100vw')}>
					<Link to="/" className="nav-animation-main font-montserrat-thin">Section one</Link>
					<Link to="/" className="nav-animation-hovered font-montserrat">You're there</Link>
				</li>
				<li className="home-nav-el group" onMouseOver={() => handleHover('-64.5vw')}>
					<Link to="/sectionTwo" className="nav-animation-main font-montserrat-thin">Section two</Link>
					<Link to="/sectionTwo" className="nav-animation-hovered font-montserrat">Section two</Link>
				</li>
			</ul>
		</nav>
	)
}
export const Back = () => {
	return (
		<nav className="fixed top-0 text-xl h-[8vh] w-[20vw] overflow-hidden group p-4">
			<Link to="/" className="absolute h-full left-[7.5vw] duration-200 ease-in-out group-hover:translate-y-[-100%] font-montserrat-thin">Back</Link>
			<Link to="/" className="absolute h-full left-[7.5vw] duration-200 ease-in-out translate-y-[100%] group-hover:translate-y-[0] font-montserrat">Back</Link>
		</nav>
	)
}