import { Link } from "react-router-dom"

export default function SectionFourNav() {
	return (
		<div className="flex justify-center">
			<Link to="/">Home</Link>
			<Link to="/sectionTwo">Section two</Link>
			<Link to="/sectionThree">Section three</Link>
			<Link to="/sectionFour">Section four</Link>
		</div>
	)
}