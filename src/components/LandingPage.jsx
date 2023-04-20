import { useEffect, useRef } from 'react';
import { Filter, FilterDarken, Partners, Back, PseudoContent } from './SmallComponents';

export default function LandingPage() {
	const heroImage = useRef(null);
	const scrollContainer = useRef(null);
	const scrollContent = useRef(null);

	const handleHeroHover = (x, y) => {
		heroImage.current.style.left = x;
		heroImage.current.style.top = y;
	}
	
	const handleSwipe = () => {
		window.scrollTo({
			top : window.innerHeight * 0.92,
			behavior : "smooth"
		})
	}

	useEffect(() => {
		const container = scrollContainer.current;
		scrollContent.current.style.left = "0px";

		const handleWheel = (event) => {
			const content = parseInt(scrollContent.current.style.left);
			scrollContainer.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
			if (content <= -1800 && event.deltaY > 0) {
				event.preventDefault();
				return;
			}
			if (content === 0 && event.deltaY < 0) {}
			else {
				event.preventDefault();
				scrollContent.current.style.left = `${content - event.deltaY}px`;
			};
	  	};
  
	  	container.addEventListener('wheel', handleWheel, { passive: false });
		window.scrollTo({top : 0});
  
	  	return () => {
			container.removeEventListener('wheel', handleWheel);
	  	};
	}, []);

	const scrollArrow = (direction) => {
		const content = parseInt(scrollContent.current.style.left);
		if (content >= -1450 && direction < 0)
			scrollContent.current.style.left = `${content + direction}px`;
		if (content <= -700 && direction > 0)
			scrollContent.current.style.left = `${content + direction}px`;
	}

  return (
	<main className="relative w-screen h-screen text-white">
		<Back />
		<div className="fixed w-screen h-[82vh] top-[8vh] flex overflow-hidden">
			<div className="absolute w-1/2 h-full">
				<Filter />
			</div>
			<div className="relative w-1/2 h-full transition-all duration-300 top-full left-0" ref={heroImage}>
				<div className="absolute left-0 -top-full w-full h-full bg-cover bg-center bg-[url('/images/imgs/1.jpg')]"></div>
				<div className="absolute left-0 top-0 w-full h-full bg-cover bg-center bg-[url('/images/imgs/2.jpg')]"></div>
				<div className="absolute left-full top-0 w-full h-full bg-cover bg-center bg-[url('/images/imgs/3.jpg')]"></div>
				<div className="absolute left-0 top-full w-full h-full bg-cover bg-center bg-[url('/images/imgs/4.jpg')]"></div>
				<div className="absolute left-full top-full w-full h-full bg-cover bg-center bg-[url('/images/imgs/5.jpg')]"></div>
			</div>
			<div className="relative grid grid-cols-2 w-1/2 h-full overflow-hidden" onMouseLeave={() => handleHeroHover("0%", "100%")}>
				<div className="absolute z-20 w-full left-0 top-1/2 -translate-y-1/2 h-fit pointer-events-none">
					<h1 className="font-forum">
						Welcome to the first section
					</h1>
					<h3 className="w-2/3">
						Here can be a description or a couple of words about your company, product.
					</h3>
				</div>
				<div className="relative group">
					<FilterDarken />
					<div className="h-full bg-cover bg-center bg-[url('/images/imgs/2.jpg')] group-hover:h-[120%] transition-300" onMouseOver={() => handleHeroHover("0%", "0%")}></div>
				</div>
				<div className="relative group">
					<FilterDarken />
					<div className="h-full bg-cover bg-center bg-[url('/images/imgs/3.jpg')] group-hover:h-[120%] transition-300" onMouseOver={() => handleHeroHover("-50%", "0%")}></div>
				</div>
				<div className="relative group">
					<FilterDarken />
					<div className="h-full bg-cover bg-center bg-[url('/images/imgs/4.jpg')] group-hover:h-[120%] transition-300" onMouseOver={() => handleHeroHover("0%", "-100%")}></div>
				</div>
				<div className="relative group">
					<FilterDarken />
					<div className="h-full bg-cover bg-center bg-[url('/images/imgs/5.jpg')] group-hover:h-[120%] transition-300" onMouseOver={() => handleHeroHover("-50%", "-100%")}></div>
				</div>
			</div>
		</div>
		<section className="relative min-h-screen w-screen mt-[90vh] z-30 border-solid border-t-[1px] border-t-white">
			<div className="absolute left-1/2 -translate-x-1/2 z-40 w-[10vw] h-[1vh] bg-white rounded-xl -translate-y-1/2 hover:w-[15vw] transition-all duration-300" onClick={handleSwipe}></div>
			<div className="backdrop-blur-md px-12 py-4 text-center border-solid border-b-[1px] border-b-white">
				<Partners />
				<h2 className="mt-4">Some General Description</h2>
				<p className="mx-8 my-4">
					This is the first section's landing page example, showing an interior design firm and made in more simple and strict look.
					So, suitable for websites offering real products or services like shops, restaurants, real estate, etc.
				</p>
			</div>
			<div className='relative w-screen h-screen shadow p-12 overflow-x-scroll bg-secondary' ref={scrollContainer}>
				<div className="absolute h-12 top-1/2 -translate-y-1/2 z-20 w-12 bg-cover bg-center bg-[url('/images/imgs/left.png')]" onClick={() => scrollArrow(700)}></div>
				<div className="absolute h-12 top-1/2 -translate-y-1/2 z-20 w-12 right-0 bg-cover bg-center bg-[url('/images/imgs/right.png')]" onClick={() => scrollArrow(-700)}></div>
				<div className="relative flex gap-36 transition-all duration-500 w-full h-full pl-[30vw]" ref={scrollContent}>
					<div className='relative h-full lg:min-w-[35vw] min-w-[400px] group overflow-hidden'>
						<div className="absolute top-1/2 -translate-y-1/2 h-full w-full bg-cover bg-center bg-[url('/images/imgs/6.jpg')] group-hover:h-[70%] transition-300"></div>
						<div className="absolute h-full w-1/2 right-0 backdrop-blur-md z-10 flex flex-col justify-between p-6 group-hover:-right-1/2 transition-300">
							<PseudoContent />
						</div>
					</div>
					<div className='relative h-full lg:min-w-[35vw] min-w-[400px] group overflow-hidden'>
						<div className="absolute top-1/2 -translate-y-1/2 h-full w-full bg-cover bg-center bg-[url('/images/imgs/7.jpg')] group-hover:h-[70%] transition-300"></div>
						<div className="absolute h-full w-1/2 right-0 backdrop-blur-md z-10 flex flex-col justify-between p-6 group-hover:-right-1/2 transition-300">
							<PseudoContent />
						</div>
					</div>
					<div className='relative h-full lg:min-w-[35vw] min-w-[400px] group overflow-hidden'>
						<div className="absolute top-1/2 -translate-y-1/2 h-full w-full bg-cover bg-center bg-[url('/images/imgs/1.jpg')] group-hover:h-[70%] transition-300"></div>
						<div className="absolute h-full w-1/2 right-0 backdrop-blur-md z-10 flex flex-col justify-between p-6 group-hover:-right-1/2 transition-300">
							<PseudoContent />
						</div>
					</div>
					<div className='relative h-full lg:min-w-[35vw] min-w-[400px] group overflow-hidden'>
						<div className="absolute top-1/2 -translate-y-1/2 h-full w-full bg-cover bg-center bg-[url('/images/imgs/2.jpg')] group-hover:h-[70%] transition-300"></div>
						<div className="absolute h-full w-1/2 right-0 backdrop-blur-md z-10 flex flex-col justify-between p-6 group-hover:-right-1/2 transition-300">
							<PseudoContent />
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
  )
};