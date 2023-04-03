import { useRef } from 'react';

export const Parallax = () => {
	const parl1 = useRef(null);
	const parl2 = useRef(null);
	const parl3 = useRef(null);
	const parl4 = useRef(null);

	return (
		<>
			<div className="absolute z-40 w-full h-full bg-cover bg-center bg-[url('/images/sectionOne/parallaxEf/parallaxL1.png')]" ref={parl1}></div>
			<div className="absolute z-30 w-full h-full bg-cover bg-center bg-[url('/images/sectionOne/parallaxEf/parallaxL2.png')]" ref={parl2}></div>
			<div className="absolute z-20 w-full h-full bg-cover bg-center bg-[url('/images/sectionOne/parallaxEf/parallaxL3.png')]" ref={parl3}></div>
			<div className="absolute z-10 w-full h-full bg-cover bg-center bg-[url('/images/sectionOne/parallaxEf/parallaxL4.png')]" ref={parl4}></div>
		</>
	)
};
export const SecondBg = () => {
	return (
		<div className="absolute z-40 w-full h-full bg-cover bg-center bg-[url('/images/sectionOne/sec1bg2.jpg')]"></div>
	)
};
export const ThirdBg = () => {
	return (
		<div className="absolute z-40 w-full h-full bg-cover bg-center bg-[url('/images/sectionOne/sec1bg3.jpg')]"></div>
	)
};