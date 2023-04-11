import SecOneNavbar from "./sectionOnePages/SectionOneNav";
import { Filter, FirstBg, SecondBg, ThirdBg } from './sectionOnePages/GraphicComponents';
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function SectionOne() {
	const scroll = [useRef(null), useRef(null), useRef(null)];
	const thumbContents = [useRef(null), useRef(null), useRef(null)];
	const thumbs = [useRef(null), useRef(null), useRef(null)];
	const gradient = useRef(null);

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
	};

	const setGradient = (hoveredStatus, color) => {
		const gradient_ = gradient.current.style;

		if (hoveredStatus === false)
			gradient_.transform = "translate(0px, 200%)";
		else {
			gradient_.background = `linear-gradient(to top, ${color}, transparent)`;
			gradient_.transform = "translate(0px, 0px)";
		};
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScrollColor();
	
		return () => { window.removeEventListener('scroll', handleScroll) };
	}, []);
	
	return (
		<main className="relative w-screen min-h-screen bg-gradient-to-b from-[rgb(21,21,26)] to-[rgb(41,41,46)] text-white grid justify-center gap-[70vh] py-[12.5vh]">
			<SecOneNavbar />
			<div className="fixed h-screen right-0 top-0">
				<div className="scroll-element top-1/4" onClick={() => { handleScrollDirect(0)} } ref={scroll[0]}></div>
				<div className="scroll-element top-1/2" onClick={() => { handleScrollDirect(1)} } ref={scroll[1]}></div>
				<div className="scroll-element top-3/4" onClick={() => { handleScrollDirect(2)} } ref={scroll[2]}></div>
			</div>
			<div className="fixed w-screen h-screen translate-y-[200%] pointer-events-none z-40 transition-all duration-500" ref={gradient}></div>
			<Link 
				to="/landingPage" className="w-[85vw] h-[75vh] overflow-hidden group z-50" 
				ref={thumbs[0]} onMouseOver={() => setGradient(true, '#ffda201f')} onMouseLeave={() => setGradient(false)}
			>
				<div className="relative w-[85vw] h-[75vh] overflow-hidden" ref={thumbContents[0]}>
					<h2 className="font-forum">Landing page example</h2>
					<Filter />
					<div className="relative w-[95vw] h-[75vh] left-1/2 -translate-x-1/2 overflow-hidden group-hover:w-[98vw] transition-300">
						<FirstBg />
					</div>
				</div>
			</Link>
			<Link 
				to="/clientReviews" className="w-[85vw] h-[75vh] overflow-hidden group z-50" 
				ref={thumbs[1]} onMouseOver={() => setGradient(true, '#ff79201f')} onMouseLeave={() => setGradient(false)}
			>
				<div className="relative w-[85vw] h-[75vh] overflow-hidden" ref={thumbContents[1]}>
					<h2 className="font-forum">Your client's reviews</h2>
					<Filter />
					<div className="relative w-[95vw] h-[75vh] left-1/2 -translate-x-1/2 overflow-hidden group-hover:w-[98vw] transition-300">
						<SecondBg />
					</div>
				</div>
			</Link>
			<Link 
				to="/mobileVersion" className="w-[85vw] h-[75vh] overflow-hidden group z-50" 
				ref={thumbs[2]} onMouseOver={() => setGradient(true, '#2088ff1f')} onMouseLeave={() => setGradient(false)}
			>
				<div className="relative w-[85vw] h-[75vh] overflow-hidden" ref={thumbContents[2]}>
					<h2 className="font-forum">Mobile variant</h2>
					<Filter />
					<div className="relative w-[95vw] h-[75vh] left-1/2 -translate-x-1/2 overflow-hidden group-hover:w-[98vw] transition-300">
						<ThirdBg />
					</div>
				</div>
			</Link>
		</main>
	)
}