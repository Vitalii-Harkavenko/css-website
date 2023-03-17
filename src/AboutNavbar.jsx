import { Link } from "react-router-dom"

export default function AboutNavbar() {
	return (
		<div className="flex justify-center">
			<Link to="/">Home</Link>
			<Link to="/products">Products</Link>
			<Link to="/about">About</Link>
		</div>
	)
}