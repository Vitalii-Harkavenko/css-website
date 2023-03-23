import HomeNavbar from "./HomeNavbar"
export default function Home() {
	return (
		<div className="content bg-black h-screen">
			<HomeNavbar/>
			<main className="text-white">
				<section className="relative text-2xl">
					<img src="./images/home-bg1.jpg" className="w-screen"/>
					<div className="h-40 bg-stone-800 p-4 border-t-emerald-500 border-t-[8px] border-solid w-2/3 ml-[30px] rounded-lg">
						<p className="text-emerald-600 text-2xl">
							Very important heading
						</p>
						<p className="text-xl">
							So this is CSS oriented portfolio website about some tech products and since the goal
							is to showcase my design abilities don't expect anything realistic here :D 
						</p>
					</div>
				</section>
				<section>
					<p>sfjfj</p>
					<p>fdsji</p>
				</section>
			</main>
		</div>
	)
}