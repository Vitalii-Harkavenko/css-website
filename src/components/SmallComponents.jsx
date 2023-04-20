import { Link } from "react-router-dom";

export const FirstBg = () => {
	return (
		<div className="absolute w-full h-full bg-cover bg-center bg-[url('/images/imgs/1.jpg')]"></div>
	)
};
export const SecondBg = () => {
	return (
		<div className="absolute w-full h-full bg-cover bg-center bg-[url('/images/bg2.jpg')]"></div>
	)
};
export const ThirdBg = () => {
	return (
		<div className="absolute w-full h-full bg-cover bg-center bg-[url('/images/bg3.jpg')]"></div>
	)
};
export const Filter = () => {
	return (
		<div className="absolute z-10 w-full h-full backdrop-contrast-125 backdrop-brightness-[0.9] pointer-events-none"></div>
	)
}
export const FilterDarken = () => {
	return (
		<div className="absolute z-10 w-full h-full backdrop-contrast-125 backdrop-brightness-75 backdrop-saturate-[0.5] pointer-events-none group-hover:opacity-0 transition-300"></div>
	)
}
export const Partners = () => {
	return (
		<div className="w-full px-12 flex justify-between flex-wrap">
			<p className="font-montserrat-semi-bold text-[1.5rem] m-2">Partner</p>
			<p className="font-montserrat-semi-bold text-[1.5rem] m-2">Client</p>
			<p className="font-montserrat-semi-bold text-[1.5rem] m-2">Partner</p>
			<p className="font-montserrat-semi-bold text-[1.5rem] m-2">Client</p>
			<p className="font-montserrat-semi-bold text-[1.5rem] m-2">Partner</p>
			<p className="font-montserrat-semi-bold text-[1.5rem] m-2">Client</p>
		</div>
	)
}

export const Back = () => {
	return (
		<nav className="fixed top-0 text-xl h-[8vh] w-[20vw] overflow-hidden group z-10 pt-[2vh]">
			<Link to="/" className="absolute h-full left-12 duration-200 ease-in-out group-hover:translate-y-[-100%] font-montserrat-thin">Back</Link>
			<Link to="/" className="absolute h-full left-12 duration-200 ease-in-out translate-y-[100%] group-hover:translate-y-[0] font-montserrat">Back</Link>
		</nav>
	)
}
export const PseudoContent = () => {
	return (
		<>
			<div>
				<h3 className="mb-2">Section Title</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus fuga assumenda in? Obcaecati reprehenderit expedita consequatur tenetur.
				</p>
			</div>
			<div>
				<h3 className="mb-2">Section Title</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus fuga assumenda in? Obcaecati reprehenderit expedita consequatur tenetur.
				</p>
			</div>
			<div>
				<h3 className="mb-2">Section Title</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus fuga assumenda in? Obcaecati reprehenderit expedita consequatur tenetur.
				</p>
			</div>
		</>
	)
}