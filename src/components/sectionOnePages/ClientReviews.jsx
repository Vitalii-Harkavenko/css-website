import { useEffect } from "react";
import { Back } from "./SectionOneNav";

export default function ClientReviews() {


	return (
		<main className="relative w-screen min-h-screen text-white overflow-x-hidden">
			<Back/>
			<div className="absolute rounded-full gradient-radial-yellow h-[150vw] w-[150vw] top-[-75vw] left-[-60vw]"></div>
			<section className="w-screen h-[70vh] backdrop-brightness-[0.8]">
			</section>
			<section className="grid gap-[25vh] my-[15vh] justify-center">
				<article className="w-[90vw] h-[25vh] flex z-20">
					<div>
						<h3 className="my-4">First Testimonial</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, sint doloremque sunt enim deleniti eius iste officia obcaecati quo, 
							beatae voluptatibus ducimus aperiam labore saepe nobis praesentium voluptatum est laudantium!
						</p>
					</div>
					<div className="w-[125vw] bg-cover bg-center bg-[url('/images/sectionOne/imgs/1.jpg')]"></div>
				</article>
			</section>
		</main>
	)
}