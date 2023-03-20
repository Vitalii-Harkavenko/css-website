import HomeNavbar from "./HomeNavbar"
export default function Home() {
	return (
		<div className="content bg-gradient-to-r from-neutral-900 to bg-neutral-800 gap-8 flex flex-col">
			<HomeNavbar />
			<main className="text-2xl text-white my-[5vw]">
				<div className="desc-shadow">
					<p className="desc h-40 bg-neutral-900">
						So this is CSS oriented portfolio website about some tech products and since the goal
						is to showcase my design abilities don't expect anything realistic here :D 
					</p>
				</div>
			</main>
		</div>
	)
}