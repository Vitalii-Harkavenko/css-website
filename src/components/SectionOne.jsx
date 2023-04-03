import SecOneNavbar from "./sectionOnePages/SectionOneNav";
import SecOneParallax from "./sectionOnePages/SectionOneParallax";
import { Parallax, SecondBg, ThirdBg } from './sectionOnePages/ImageComponents';
import { useEffect, useRef } from "react";

export default function SectionOne() {
	const thumbContents = [useRef(null), useRef(null), useRef(null)];
	const thumbs = [useRef(null), useRef(null), useRef(null)];

	const handleScroll = () => {
		for (let i = 0; i < thumbContents.length; i++) {
			const parentPosition = thumbs[i].current.getBoundingClientRect().top;
			thumbContents[i].current.style.top = `calc(${-parentPosition}px + 12.5vh)`;
		};
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
	
		return () => { window.removeEventListener('scroll', handleScroll) };
	}, []);
	
	return (
		<main className="relative w-screen min-h-screen bg-secondary text-white grid justify-center gap-[75vh] py-[12.5vh]">
			<SecOneNavbar />
			<div className="w-[85vw] h-[75vh] overflow-hidden" ref={thumbs[0]}>
				<div className="relative w-[85vw] h-[75vh] overflow-hidden" ref={thumbContents[0]}>
					<h1 className="text-3xl font-glamore">Landing Page Example</h1>
					<div className="absolute z-50 w-full h-full backdrop-contrast-125 backdrop-saturate-[0.75] backdrop-brightness-[0.75]"></div>
					<div className="relative w-[95vw] h-[75vh] left-1/2 -translate-x-1/2 overflow-hidden">
						<Parallax />
					</div>
				</div>
			</div>
			<div className="w-[85vw] h-[75vh] overflow-hidden" ref={thumbs[1]}>
				<div className="relative w-[85vw] h-[75vh] overflow-hidden" ref={thumbContents[1]}>
					<h1 className="text-3xl font-glamore">Your Client Reviews</h1>
					<div className="absolute z-50 w-full h-full backdrop-contrast-[1.15] backdrop-saturate-[0.75] backdrop-brightness-[0.75]"></div>
					<div className="relative w-[95vw] h-[75vh] left-1/2 -translate-x-1/2 overflow-hidden">
						<SecondBg />
					</div>
				</div>
			</div>
			<div className="w-[85vw] h-[75vh] overflow-hidden" ref={thumbs[2]}>
				<div className="relative w-[85vw] h-[75vh] overflow-hidden" ref={thumbContents[2]}>
					<h1 className="text-3xl font-glamore">Mobile Variant</h1>
					<div className="absolute z-50 w-full h-full backdrop-contrast-125 backdrop-saturate-[0.75] backdrop-brightness-[0.75]"></div>
					<div className="relative w-[95vw] h-[75vh] left-1/2 -translate-x-1/2 overflow-hidden">
						<ThirdBg />
					</div>
				</div>
			</div>
		</main>
	)
}