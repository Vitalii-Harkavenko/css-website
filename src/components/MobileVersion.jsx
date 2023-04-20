import { useRef } from "react";
import { Back } from "./SmallComponents";

export default function MobileVersion() {
	const popup = useRef(null);

	const movePopup = (amount) => popup.current.style.left = amount;

	return (
		<main className="relative sm:w-[500px] w-screen h-screen mx-auto text-white overflow-hidden">
			<Back/>
			<div className="relative h-[84vh] w-full bg-contrast mt-[8vh]">
				<div className="absolute w-full h-full z-10 left-full backdrop-blur-md transition-300 font-forum" ref={popup}>
					<div className="absolute h-24 w-2 z-10 rounded-l-md bg-gradient top-[15%] -translate-x-full hover:h-32 transition-300" onClick={() => movePopup("0%")}></div>
					<div className="absolute h-24 w-2 z-10 rounded-r-md bg-gradient top-[15%] hover:h-32 transition-300" onClick={() => movePopup("100%")}></div>
					<div className="w-full h-full top-0 absolute">
						<div className="w-[90%] mx-auto my-12 h-1/4 border-solid rounded-xl border-gradient border-4 text-gradient text-center grid content-center">
							<h2>A few words</h2>
							<p>And a couple more here</p>
						</div>
						<div className="flex flex-col gap-6 items-center text-neutral-200">
							<p className="relative mobile-popup-hover-style hover:text-white transition-100">Additional menu</p>
							<p className="relative mobile-popup-hover-style hover:text-white transition-100">Additional menu</p>
							<p className="relative mobile-popup-hover-style hover:text-white transition-100">More menus</p>
							<p className="relative mobile-popup-hover-style hover:text-white transition-100">Something else</p>
							<p className="relative mobile-popup-hover-style hover:text-white transition-100">Something else</p>
						</div>
					</div>
				</div>
				<h2 className="h-1/4 w-2/3 mx-auto py-12 font-forum text-black">Mobile layout example with a pop-up menu</h2>
				<div className="relative w-full h-3/4 bg-cover bg-center bg-[url('/images/imgs/2.jpg')] saturate-50 brightness-90">
					<div className="flex w-full p-[2vh] gap-4 backdrop-brightness-90 items-center hover:pl-6 transition-300">
						<div className="h-8 w-8 bg-cover bg-center bg-[url('/images/imgs/menu.png')]"></div>
						<p>Some option with an icon</p>
					</div>
					<div className="flex w-full p-[2vh] gap-4 backdrop-brightness-90 items-center hover:pl-6 transition-300">
						<div className="h-8 w-8 bg-cover bg-center bg-[url('/images/imgs/menu.png')]"></div>
						<p>Some option with an icon</p>
					</div>
					<div className="flex w-full p-[2vh] gap-4 backdrop-brightness-90 items-center hover:pl-6 transition-300">
						<div className="h-8 w-8 bg-cover bg-center bg-[url('/images/imgs/menu.png')]"></div>
						<p>Some option with an icon</p>
					</div>
					<div className="flex w-full p-[2vh] gap-4 backdrop-brightness-90 items-center hover:pl-6 transition-300">
						<div className="h-8 w-8 bg-cover bg-center bg-[url('/images/imgs/menu.png')]"></div>
						<p>Some option with an icon</p>
					</div>
					<div className="flex w-full p-[2vh] gap-4 backdrop-brightness-90 items-center hover:pl-6 transition-300">
						<div className="h-8 w-8 bg-cover bg-center bg-[url('/images/imgs/menu.png')]"></div>
						<p>Some option with an icon</p>
					</div>
				</div>
			</div>
			<div className="h-[8vh] w-full bg-contrast flex items-center text-black">
				<div className="grow flex items-center justify-center">
					<div className="h-8 w-8 bg-cover bg-center bg-[url('/images/imgs/home.png')] mr-2"></div>
					<p>Home</p>
				</div>
				<div className="grow flex items-center group">
					<div className="h-8 w-8 bg-cover bg-center bg-[url('/images/imgs/other.png')] group-hover:mr-2 transition-300"></div>
					<p>Other</p>
				</div>
				<div className="grow flex items-center group">
					<div className="h-8 w-8 bg-cover bg-center bg-[url('/images/imgs/other.png')] group-hover:mr-2 transition-300"></div>
					<p>Other</p>
				</div>
				<div className="grow flex items-center group">
					<div className="h-8 w-8 bg-cover bg-center bg-[url('/images/imgs/other.png')] group-hover:mr-2 transition-300"></div>
					<p>Other</p>
				</div>
			</div>
		</main>
	)
}