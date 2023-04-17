import { useEffect, useRef } from "react";
import { Back } from './SmallComponents';

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
			<div className="absolute rounded-full gradient-radial-yellow h-[200vw] w-[200vw] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000" ref={gradient}></div>
			<p className="relative w-full p-[8vh] bg-main">
				This is an example of client's reviews page with some testimonials showing clients, related to them projects images and some pseudo description
			</p>
			<section className="grid gap-[25vh] my-[8vh] w-full px-[8vh]">
				<article className="testimonial-media-container group">
					<div className="absolute w-full h-full bg-cover bg-center bg-[url('/images/sectionOne/imgs/1.jpg')] testimonial-image-media lg:right-0 transition-300"></div>
					<div className="testimonial-media">
						<h3 className="py-4 group-hover:pl-8 transition-300">First Testimonial</h3>
						<p className="group-hover:text-neutral-300 transition-300">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, sint doloremque sunt enim deleniti eius iste officia obcaecati quo, 
							beatae voluptatibus ducimus aperiam labore saepe nobis praesentium voluptatum est laudantium!
						</p>
					</div>
				</article>
				<article className="testimonial-media-container group">
					<div className="absolute w-full h-full bg-cover bg-center bg-[url('/images/sectionOne/imgs/2.jpg')] testimonial-image-media lg:left-0 transition-300"></div>
					<div className="testimonial-media lg:right-0">
						<h3 className="py-4 group-hover:pl-8 transition-300">Second Testimonial</h3>
						<p className="group-hover:text-neutral-300 transition-300">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, sint doloremque sunt enim deleniti eius iste officia obcaecati quo, 
							beatae voluptatibus ducimus aperiam labore saepe nobis praesentium voluptatum est laudantium! Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
							Saepe, sunt. Amet magni, commodi consequatur pariatur ducimus nobis, eum temporibus repellat nisi cupiditate voluptatibus rem laborum quia, corrupti ipsam obcaecati natus.
						</p>
					</div>
				</article>
				<article className="testimonial-media-container group">
					<div className="absolute w-full h-full bg-cover bg-center bg-[url('/images/sectionOne/imgs/3.jpg')] testimonial-image-media lg:right-0 transition-300"></div>
					<div className="testimonial-media">
						<h3 className="py-4 group-hover:pl-8 transition-300">Third Testimonial</h3>
						<p className="group-hover:text-neutral-300 transition-300">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, sint doloremque sunt enim deleniti eius iste officia obcaecati quo, 
							beatae voluptatibus ducimus aperiam labore saepe nobis praesentium voluptatum est laudantium!
						</p>
					</div>
				</article>
			</section>
		</main>
	)
}