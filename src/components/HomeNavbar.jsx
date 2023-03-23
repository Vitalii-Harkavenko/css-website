import { Link } from "react-router-dom"

export default function HomeNavbar() {
	return (
		<nav className="home-nav bg-custom-red-bg h-44 text-[2rem] leading-normal">
			<div className="home-nav-line-shadow">
				<ul className="home-nav-line bg-gradient-to-r from-custom-red-bg to-custom-red h-32 grid grid-cols-4 whitespace-nowrap">
					<li className="relative group">
						<Link to="/" className="font-glamore nav-animation-setup translate-y-[30%] group-hover:translate-y-[-170%]">HOME</Link>
						<Link to="/" className="font-nolluqa nav-animation-setup translate-y-[230%] group-hover:translate-y-[30%]">YOU'Re AlReADY THeRe</Link>
					</li>
					<li className="relative group">
						<Link to="/sectionTwo" className="font-des-morgan nav-animation-setup translate-y-[80%] group-hover:translate-y-[-120%]">SECTION TWO</Link>
						<Link to="/sectionTwo" className="font-chaviera nav-animation-setup translate-y-[280%] group-hover:translate-y-[80%]">SECTION TWO</Link>
					</li>
					<li className="relative group">
						<Link to="/sectionThree" className="font-twilight-darling nav-animation-setup translate-y-[120%] group-hover:translate-y-[-80%]">Section three</Link>
						<Link to="/sectionThree" className="font-redemption nav-animation-setup translate-y-[320%] group-hover:translate-y-[120%]">Section three</Link>
					</li>
					<li className="relative group">
						<Link to="/sectionFour" className="font-twilight-darling nav-animation-setup translate-y-[150%] group-hover:translate-y-[-50%]">Section four</Link>
						<Link to="/sectionFour" className="font-redemption nav-animation-setup translate-y-[350%] group-hover:translate-y-[150%]">Section four</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}
