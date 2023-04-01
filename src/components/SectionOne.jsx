import SecOneNavbar from "./SectionOneNav";
import SecOneParallax from "./sectionOnePages/SectionOneParallax";
import { useRef } from "react";

export default function SectionOne() {
	return (
		<main className="content bg-secondary text-white flex flex-col items-center gap-[40vh] py-[40vh]">
			<SecOneParallax />
			<SecOneParallax />
			<SecOneParallax />
		</main>
	)
}