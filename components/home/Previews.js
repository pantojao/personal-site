import PreviewItem from "../PreviewItem";
import Link from "next/link";

const Previews = () => {
	return (
		<section class="container text-black">
			<h1 class="header">Featured Sites</h1>
			<PreviewItem max={2} />
			<Link href="/projects">
				<button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
					See More
				</button>
			</Link>
		</section>
	);
};

export default Previews;

{
	/* <div className="lg:hidden absolute top-0 space-y-3 flex flex-col items-center justify-center px-5 h-full z-20">
								<h1 className="font-semibold text-lg md:text-4xl ">
									{item.name}
								</h1>
								<p className="text-sm px-3 md:text-2xl">
									{item.description}
								</p>
							</div>

							<div className="lg:hidden space-x-4 flex relative justify-end items-end -bottom-2 right-6">
								<a href="">
									<img
										src="/github.svg"
										alt=""
										className="w-7"
									/>
								</a>

								<a href="">
									<img
										src="/export.svg"
										alt=""
										class="w-6"
									/>
								</a>
							</div> */
}
