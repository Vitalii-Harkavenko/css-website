import { Link } from "react-router-dom"

export default function HomeNavbar() {
	return (
		<div className="flex justify-center bg-yellow-500 rotate-45">
			<Link to="/">Home</Link>
			<Link to="/products">Products</Link>
			<Link to="/about">About</Link>
		</div>
	)
}