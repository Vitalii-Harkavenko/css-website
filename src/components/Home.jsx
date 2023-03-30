import HomeNavbar from "./HomeNavbar"
export default function Home() {
	return (
		<div className="content bg-blue-1200">
			<HomeNavbar />
			<main className="text-white text-2xl">
				<section className="relative w-screen h-screen">
					<div className="absolute w-full h-[85%]">
						<div className="absolute z-50 w-full h-full backdrop-saturate-[0.75] backdrop-brightness-50">
							<div className="line-filter"></div>
						</div>
						<div className="absolute z-40 bg-cover w-full h-full bg-center bg-[url('/images/parallaxEf/parallaxL1.png')]"></div>
						<div className="absolute z-30 bg-cover w-full h-full bg-center bg-[url('/images/parallaxEf/parallaxL2.png')]"></div>
						<div className="absolute z-20 bg-cover w-full h-full bg-center bg-[url('/images/parallaxEf/parallaxL3.png')]"></div>
						<div className="absolute z-10 bg-cover w-full h-full bg-center bg-[url('/images/parallaxEf/parallaxL4.png')]"></div>
					</div>
					<div className="absolute w-full h-[85%] top-1/2 left-[150vw] -translate-x-[50vw] -translate-y-1/2">
						<div className="absolute z-40 bg-cover w-full h-full bg-center bg-[url('/images/parallaxEf/parallaxL1.png')]"></div>
						<div className="absolute z-30 bg-cover w-full h-full bg-center bg-[url('/images/parallaxEf/parallaxL2.png')]"></div>
						<div className="absolute z-20 bg-cover w-full h-full bg-center bg-[url('/images/parallaxEf/parallaxL3.png')]"></div>
						<div className="absolute z-10 bg-cover w-full h-full bg-center bg-[url('/images/parallaxEf/parallaxL4.png')]"></div>
					</div>
				</section>
				<section className="h-screen">
				</section>
			</main>
		</div>
	)
}