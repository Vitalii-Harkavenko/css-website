import { useEffect, useRef } from 'react';
import { Filter, FirstBg } from './GraphicComponents';
import { Back } from './SectionOneNav';

export default function LandingPage() {
	const slider = useRef(null);

	const handleSwipe = () => {
		window.scrollTo({
			top : window.innerHeight * 0.92,
			behavior : "smooth"
		})
	}

	const handleClick = (direction) => {
		const frame = parseInt(slider.current.style.left) || 0;
		let newFrame = frame;
		if (direction === "right" && frame <= -200) 
			newFrame = 0;
		if (direction === "left" && frame >= 0) 
			newFrame = -200;
		if (direction === "left" && frame < 0) 
			newFrame = frame + 100; 
		else if (direction === "right" && frame > -200) 
			newFrame = frame - 100;

		slider.current.style.left = `${newFrame}%`;
	};

	useEffect(() => {
		window.scrollTo({ top : 0 });
		handleClick();
	}, []);

  return (
	<main className="relative w-screen h-screen text-center text-white">
		<Back />
		<div className="fixed w-screen h-[92vh] top-[8vh]">
			<div className="absolute z-20 w-full top-[28vh]">
				<h1>
					Welcome to the first section
				</h1>
				<p className='text-xl'>
					Here can be a description or a couple of words about your company, product.
				</p>
			</div>
			<Filter />
			<FirstBg />
		</div>
		<section className="relative min-h-screen w-screen backdrop-blur-md mt-[92vh] z-20">
			<div className="border-solid border-t-[1px] border-t-white">
				<div className="mx-auto w-[10vw] h-[1vh] bg-white rounded-xl -translate-y-1/2 hover:w-[15vw] transition-all duration-300" onClick={handleSwipe}></div>
			</div>
			<p className="m-14">
				This is the first section's landing page example, showing an interior design firm and made in more simple and strict look.
				So, suitable for websites offering real products or services like shops, restaurants, real estate, etc.
			</p>
			<div className="flex flex-wrap p-8">
				<p className='w-full md:w-1/2 p-10'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<p className='w-full md:w-1/2 p-10'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
			<div className='relative min-h-screen shadow mt-12 flex flex-wrap border-solid border-t-[1px] border-t-white'>
				<div className='relative h-screen min-w-[calc(500px-5rem)] overflow-hidden grow-[2]'>
					<svg onClick={() => handleClick('left')} className="absolute w-[5%] top-1/2 -translate-y-1/2 z-10 -left-[1%]" viewBox="-19.04 0 75.803 75.803" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Group_64" data-name="Group 64" transform="translate(-624.082 -383.588)"> <path id="Path_56" data-name="Path 56" d="M660.313,383.588a1.5,1.5,0,0,1,1.06,2.561l-33.556,33.56a2.528,2.528,0,0,0,0,3.564l33.556,33.558a1.5,1.5,0,0,1-2.121,2.121L625.7,425.394a5.527,5.527,0,0,1,0-7.807l33.556-33.559A1.5,1.5,0,0,1,660.313,383.588Z" fill="#ffffff"></path> </g> </g></svg>
					<svg className="absolute w-[5%] top-1/2 -translate-y-1/2 z-[5]" viewBox="-19.04 0 75.803 75.803" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Group_64" data-name="Group 64" transform="translate(-624.082 -383.588)"> <path id="Path_56" data-name="Path 56" d="M660.313,383.588a1.5,1.5,0,0,1,1.06,2.561l-33.556,33.56a2.528,2.528,0,0,0,0,3.564l33.556,33.558a1.5,1.5,0,0,1-2.121,2.121L625.7,425.394a5.527,5.527,0,0,1,0-7.807l33.556-33.559A1.5,1.5,0,0,1,660.313,383.588Z" fill="#000000"></path> </g> </g></svg>
					<div className='absolute h-full w-full transition-all duration-300' ref={slider}>
						<div className="absolute h-full w-full left-0 bg-cover bg-center bg-[url('/images/sectionOne/imgs/1.jpg')]"></div>
						<div className="absolute h-full w-full left-full bg-cover bg-center bg-[url('/images/sectionOne/imgs/2.jpg')]"></div>
						<div className="absolute h-full w-full left-[200%] bg-cover bg-center bg-[url('/images/sectionOne/imgs/3.jpg')]"></div>
					</div>
					<svg onClick={() => handleClick('right')} className="absolute w-[5%] top-1/2 -translate-y-1/2 -translate-x-full z-10 left-[101%]" viewBox="-19.04 0 75.804 75.804" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Group_65" data-name="Group 65" transform="translate(-831.568 -384.448)"> <path id="Path_57" data-name="Path 57" d="M833.068,460.252a1.5,1.5,0,0,1-1.061-2.561l33.557-33.56a2.53,2.53,0,0,0,0-3.564l-33.557-33.558a1.5,1.5,0,0,1,2.122-2.121l33.556,33.558a5.53,5.53,0,0,1,0,7.807l-33.557,33.56A1.5,1.5,0,0,1,833.068,460.252Z" fill="#ffffff"></path> </g> </g></svg>
					<svg className="absolute w-[5%] top-1/2 -translate-y-1/2 -translate-x-full z-[5] left-full" viewBox="-19.04 0 75.804 75.804" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Group_65" data-name="Group 65" transform="translate(-831.568 -384.448)"> <path id="Path_57" data-name="Path 57" d="M833.068,460.252a1.5,1.5,0,0,1-1.061-2.561l33.557-33.56a2.53,2.53,0,0,0,0-3.564l-33.557-33.558a1.5,1.5,0,0,1,2.122-2.121l33.556,33.558a5.53,5.53,0,0,1,0,7.807l-33.557,33.56A1.5,1.5,0,0,1,833.068,460.252Z" fill="#000000"></path> </g> </g></svg>
				</div>
				<div className="grow text-left w-[45%] grid">
					<div className="overflow-hidden relative group p-6">
						<h3 className="section-title">An important section's title</h3>
						<p className="section-desc">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus fuga assumenda in? Obcaecati reprehenderit expedita consequatur tenetur aliquam quo nulla quas voluptatem laborum, eos dolor ut enim tempora tempore quisquam.
						</p>
						<div className="section-bg"></div>
					</div>
					<div className="overflow-hidden relative group p-4">
						<h3 className="section-title">An important section's title</h3>
						<p className="section-desc">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<div className="section-bg"></div>
					</div>
					<div className="overflow-hidden relative group p-4">
						<h3 className="section-title">An important section's title</h3>
						<p className="section-desc">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus fuga assumenda in? Obcaecati reprehenderit expedita consequatur tenetur aliquam quo nulla quas voluptatem laborum, eos dolor ut enim tempora tempore quisquam.
						</p>
						<div className="section-bg"></div>
					</div>
					<div className="overflow-hidden relative group p-4">
						<h3 className="section-title">An important section's title</h3>
						<p className="section-desc">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Perferendis nemo sapiente consequuntur eum ad facere porro, itaque modi assumenda vitae optio quidem, accusantium non aut ducimus obcaecati minima minus odit.
						</p>
						<div className="section-bg"></div>
					</div>
				</div>
			</div>
		</section>
	</main>
  )
};