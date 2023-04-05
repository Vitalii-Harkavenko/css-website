import SecOneNavbar from "./sectionOnePages/SectionOneNav";
import { FirstBg, SecondBg, ThirdBg } from './sectionOnePages/ImageComponents';
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function SectionOne() {
	const scroll = [useRef(null), useRef(null), useRef(null)];
	const thumbContents = [useRef(null), useRef(null), useRef(null)];
	const thumbs = [useRef(null), useRef(null), useRef(null)];

	const position = (el) => el.current.getBoundingClientRect();
	const setScrollColor = (el) => el.current.style.backgroundColor = "rgb(163 163 163)";
	const resetScrollColor = () => scroll.forEach(el => el.current.style.backgroundColor = 'rgb(64 64 64)');
	const handleScrollColor = () => {
		if (position(thumbs[0]).top >= 0 && position(thumbs[0]).bottom <= window.innerHeight) {
			resetScrollColor();
			setScrollColor(scroll[0]);
		}
		else if (position(thumbs[1]).top >= 0 && position(thumbs[1]).bottom <= window.innerHeight) {
			resetScrollColor();
			setScrollColor(scroll[1]);
		}
		else if (position(thumbs[2]).top >= 0 && position(thumbs[2]).bottom <= window.innerHeight) {
			resetScrollColor();
			setScrollColor(scroll[2]);
		};
	};

	const handleScroll = () => {
		for (let i = 0; i < thumbContents.length; i++) {
			thumbContents[i].current.style.top = `calc(${-position(thumbs[i]).top}px + 12.5vh)`;
		};
		handleScrollColor();
	};

	const handleScrollDirect = (el) => {
		window.scrollTo({
			top: thumbs[el].current.offsetTop - 0.125 * window.innerHeight,
			behavior: "smooth"
		})
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScrollColor();
	
		return () => { window.removeEventListener('scroll', handleScroll) };
	}, []);
	
	return (
		<main className="relative w-screen min-h-screen bg-secondary text-white grid justify-center gap-[70vh] py-[12.5vh]">
			<SecOneNavbar />
			<div className="fixed h-screen right-0 top-0">
				<div className="scroll-element top-1/4" onClick={() => { handleScrollDirect(0)} } ref={scroll[0]}></div>
				<div className="scroll-element top-1/2" onClick={() => { handleScrollDirect(1)} } ref={scroll[1]}></div>
				<div className="scroll-element top-3/4" onClick={() => { handleScrollDirect(2)} } ref={scroll[2]}></div>
			</div>
			<Link to="/landingPage" className="w-[85vw] h-[75vh] overflow-hidden" ref={thumbs[0]}>
				<div className="relative w-[85vw] h-[75vh] overflow-hidden" ref={thumbContents[0]}>
					<h1 className="text-3xl font-glamore">Landing Page Example</h1>
					<div className="absolute z-50 w-full h-full backdrop-contrast-125 backdrop-saturate-[0.70] backdrop-brightness-[0.75]"></div>
					<div className="relative w-[95vw] h-[75vh] left-1/2 -translate-x-1/2 overflow-hidden">
						<FirstBg />
					</div>
				</div>
			</Link>
			<div className="w-[85vw] h-[75vh] overflow-hidden" ref={thumbs[1]}>
				<div className="relative w-[85vw] h-[75vh] overflow-hidden" ref={thumbContents[1]}>
					<h1 className="text-3xl font-glamore">Your Client's Reviews</h1>
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