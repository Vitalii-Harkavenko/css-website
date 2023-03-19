import { Link } from "react-router-dom"

export default function HomeNavbar() {
	return (
		<nav className="home-navbar bg-yellow-500 h-64">
			<div className="home-navbar-shadow">
				<ul className="home-navbar-line bg-yellow-400 h-48 grid grid-cols-3 text-5xl leading-normal">
					<li className="h-16 mt-8 relative group">
						<Link to="/" className="font-glamore animation-nav-main">HOME</Link>
						<Link to="/" className="font-nolluqa animation-nav-hovered whitespace-nowrap">YOU'Re AlReADY THeRe</Link>
					</li>
					<li className="h-16 my-auto relative group">
						<Link to="/products" className="font-des-morgan animation-nav-main">PRODUCTS</Link>
						<Link to="/products" className="font-chaviera animation-nav-hovered">PRODUCTS</Link>
					</li>
					<li className="h-16 mb-8 mt-auto relative group">
						<Link to="/about" className="font-madyntha-geradine animation-nav-main">About</Link>
						<Link to="/about" className="font-redemption animation-nav-hovered">About</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}
