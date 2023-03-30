import SectionFourNav from "./SectionFourNav";

export default function SectionFour() {
	return (
		<div>
			<SectionFourNav />
			<p>Section four</p>
			<section>
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
		</div>
	)
}