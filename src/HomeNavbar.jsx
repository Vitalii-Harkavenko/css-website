import { Link } from "react-router-dom"

export default function HomeNavbar() {
	return (
		<div className="home-navbar bg-yellow-500 h-56">
			<div className="grid grid-cols-3 text-5xl h-40">
			<div className="h-12 ml-24 mt-4 relative overflow-hidden">
				<Link to="/" className="absolute font-glamore transition-transform duration-300 ease-in-out transform hover:-translate-y-full">HOME</Link>
				<Link to="/" className="absolute translate-y-full font-nolluqa transition-transform duration-300 ease-in-out transform hover:translate-y-0">HOME</Link>
			</div>
				<Link to="/products" className="font-nolluqa ml-24 h-fit my-auto">PRODUCTS</Link>
				<Link to="/about" className="font-des-morgan ml-24 h-fit mt-auto">About</Link>
			</div>
		</div>
	)
}	