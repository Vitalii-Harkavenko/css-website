import { Link } from "react-router-dom";

export default function SecOneNavbar() {
	return (
		<nav className="fixed top-0 left-[7.5vw] text-xl text-white mt-4">
			<ul className="flex">
				<li className="home-nav-el group">
					<Link to="/" className="nav-animation-main font-montserrat-thin">Section one</Link>
					<Link to="/" className="nav-animation-hovered font-montserrat">You're there</Link>
				</li>
				<li className="home-nav-el group">
					<Link to="/sectionTwo" className="nav-animation-main font-montserrat-thin">Section two</Link>
					<Link to="/sectionTwo" className="nav-animation-hovered font-montserrat">Section two</Link>
				</li>
			</ul>
		</nav>
	)
}

export const Back = () => {
	return (
		<nav className="fixed top-0 text-xl h-[8vh] w-[20vw] overflow-hidden group p-4 z-10">
			<Link to="/" className="absolute h-full left-[7.5vw] duration-200 ease-in-out group-hover:translate-y-[-100%] font-montserrat-thin">Back</Link>
			<Link to="/" className="absolute h-full left-[7.5vw] duration-200 ease-in-out translate-y-[100%] group-hover:translate-y-[0] font-montserrat">Back</Link>
		</nav>
	)
}