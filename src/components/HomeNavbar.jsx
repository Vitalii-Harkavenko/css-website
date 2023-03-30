import { Link } from "react-router-dom";
import { useRef } from "react";

export default function HomeNavbar() {
	const roundedGradient = useRef(null);
	
	const handleHover = (input) => {
		roundedGradient.current.style.left = input;
	}

	return (
		<nav className="relative w-screen h-fit bg-black text-3xl text-white leading-normal">
			<div className="absolute z-[80] h-[calc(100%+2rem)] w-screen bg-gradient-to-b from-black via-black to-transparent"></div>
			<div className="absolute rounded-full nav-gradient-radial h-[200vw] w-[200vw] top-[-100vw] left-[-100vw]" ref={roundedGradient}></div>
			<ul className="flex flex-wrap whitespace-nowrap h-fit">
				<li className="home-nav-el group z-[90]" onMouseOver={() => handleHover('-100vw')}>
					<Link to="/" className="nav-animation-main font-glamore">HOME</Link>
					<Link to="/" className="nav-animation-hovered">YOU'RE THERE</Link>
					<div className="nav-animation-border"></div>
				</li>
				<li className="home-nav-el group z-[90]" onMouseOver={() => handleHover('-64.5vw')}>
					<Link to="/sectionTwo" className="nav-animation-main font-glamore">SECTION TWO</Link>
					<Link to="/sectionTwo" className="nav-animation-hovered">SECTION TWO</Link>
					<div className="nav-animation-border"></div>
				</li>
				<li className="home-nav-el group z-[90]" onMouseOver={() => handleHover('-38.5vw')}>
					<Link to="/sectionThree" className="nav-animation-main font-glamore">SECTION THREE</Link>
					<Link to="/sectionThree" className="nav-animation-hovered">SECTION THREE</Link>
					<div className="nav-animation-border"></div>
				</li>
				<li className="home-nav-el group z-[90]" onMouseOver={() => handleHover('0vw')}>
					<Link to="/sectionFour" className="nav-animation-main font-glamore">SECTION FOUR</Link>
					<Link to="/sectionFour" className="nav-animation-hovered">SECTION FOUR</Link>
					<div className="nav-animation-border"></div>
				</li>
			</ul>
		</nav>
	)
}