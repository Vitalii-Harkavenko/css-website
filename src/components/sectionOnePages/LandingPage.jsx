import { useEffect, useRef } from 'react';
import { FirstBg } from './ImageComponents';
import { Back } from './SectionOneNav';

export default function LandingPage() {
	const desc = useRef(null);

	const handleScroll = () => {
		desc.current.style.top = `-${window.pageYOffset * 0.65}px`;
	}

	useEffect(() => {
	window.addEventListener('scroll', handleScroll, { passive: true });

	return () => { window.removeEventListener('scroll', handleScroll) };
	}, []);

  return (
	<main className="relative bg-secondary w-screen min-h-screen text-center text-white">
		<Back />
		<div className="absolute z-[100] w-[65vw] top-[25vh] left-1/2 -translate-x-1/2">
			<h1 className="text-5xl font-nolluqa">
				Welcome to the first section
			</h1>
			<p>
				This is the first section, and it's meant to be in more realistic style than others.
				So, suitable for websites offering real products or services like real estate, shops, restaurants, etc.
			</p>
		</div>
		<div className="relative w-screen h-[85vh] bg-secondary">
			<div className="absolute z-50 w-full h-full backdrop-contrast-125 backdrop-saturate-[0.75] backdrop-brightness-[0.80]"></div>
			<FirstBg />
		</div>
		<div className="relative z-50 h-screen bg-main p-20" ref={desc}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
			Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
			Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
			Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</div>
	</main>
  )
};