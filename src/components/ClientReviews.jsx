import { useEffect, useRef } from "react";
import { Back, Partners } from './SmallComponents';

export default function ClientReviews() {
	const gradient = useRef(null);

	const moveGradient = (e) => {
		gradient.current.style.opacity = 100;
		gradient.current.style.top = `${e.clientY}px`;
		gradient.current.style.left = `${e.clientX}px`;
	  
		clearTimeout(gradientTimeout);
		gradientTimeout = setTimeout(() => {
		  gradient.current.style.opacity = 0;
		}, 20);
	  };
	  let gradientTimeout;

	useEffect(() => {
		window.addEventListener('mousemove', moveGradient, { passive: true });

		return () => { window.removeEventListener('mousemove', moveGradient) };
	}, []);

	return (
		<main className="relative w-screen text-white overflow-hidden">
			<Back/>
			<div className="mt-[8vh] text-center bg-gradient-to-r from-gradient to-secondary">
				<Partners />
				<h1 className="font-forum pt-6">A client's reviews page</h1>
				<p className="w-1/3 mx-auto pb-12">
					This is an example of client's reviews page with some testimonials showing clients, related to them projects images and some pseudo description.
				</p>
			</div>
			<section className="relative grid justify-items-center overflow-hidden text-center gap-[10vh] py-[10vh] w-screen min-h-screen bg-contrast">
				<div className="absolute rounded-full gradient-radial h-[80vw] w-[80vw] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000" ref={gradient}></div>
				<article className="relative w-2/3 h-[16rem] rounded-lg drop-shadow-xl overflow-hidden group">
					<div className="relative z-10 w-3/5 h-full p-4 grid justify-items-center bg-gradient-to-b from-contrast-dark1 to-contrast-dark2" >	
						<div className="absolute h-full w-full bg-gradient-to-t from-neutral-400 to-transparent top-full group-hover:top-1/4 transition-300"></div>
						<div className="w-12 h-12 rounded-full bg-cover bg-center bg-[url('/images/imgs/face1.jpg')]"></div>
						<h3 className="py-4 z-20">First Testimonial</h3>
						<p className="text-neutral-200 z-20">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, sint doloremque sunt enim deleniti eius iste officia obcaecati quo, 
							beatae voluptatibus ducimus aperiam labore saepe nobis praesentium voluptatum est laudantium!
						</p>
					</div>
					<div className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center bg-[url('/images/imgs/7.jpg')] transition-300"></div>
				</article>
				<article className="relative w-2/3 h-[16rem] rounded-lg drop-shadow-xl overflow-hidden group">
					<div className="relative z-10 w-3/5 h-full p-4 grid justify-items-center bg-gradient-to-b from-contrast-dark1 to-contrast-dark2" >	
						<div className="absolute h-full w-full bg-gradient-to-t from-neutral-400 to-transparent top-full group-hover:top-1/4 transition-300"></div>
						<div className="w-12 h-12 rounded-full bg-cover bg-center bg-[url('/images/imgs/face2.jpg')]"></div>
						<h3 className="py-4 z-20">First Testimonial</h3>
						<p className="text-neutral-200 z-20">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, sint doloremque sunt enim deleniti eius iste officia obcaecati quo, 
							beatae voluptatibus ducimus aperiam labore saepe nobis praesentium voluptatum est laudantium!
						</p>
					</div>
					<div className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center bg-[url('/images/imgs/6.jpg')] transition-300"></div>
				</article>
				<article className="relative w-2/3 h-[16rem] rounded-lg drop-shadow-xl overflow-hidden group">
					<div className="relative z-10 w-3/5 h-full p-4 grid justify-items-center bg-gradient-to-b from-contrast-dark1 to-contrast-dark2" >	
						<div className="absolute h-full w-full bg-gradient-to-t from-neutral-400 to-transparent top-full group-hover:top-1/4 transition-300"></div>
						<div className="w-12 h-12 rounded-full bg-cover bg-center bg-[url('/images/imgs/face3.jpg')]"></div>
						<h3 className="py-4 z-20">First Testimonial</h3>
						<p className="text-neutral-200 z-20">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, sint doloremque sunt enim deleniti eius iste officia obcaecati quo, 
							beatae voluptatibus ducimus aperiam labore saepe nobis praesentium voluptatum est laudantium!
						</p>
					</div>
					<div className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center bg-[url('/images/imgs/4.jpg')] transition-300"></div>
				</article>
			</section>
		</main>
	)
}