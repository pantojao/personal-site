import items from "../../assets/WebsitesInfo";
const Previews = () => {
	return (
		<section class="container text-black">
			<h1 class="font-bold text-3xl lg:text-5xl my-10">
				Featured Sites
			</h1>
			{items.map((item, index) => {
				if (index > 2) return;

				const odd = index % 2 === 0;
				return (
					<article
						class={
							"mb-24 relative container items-center justify-center flex-col flex" +
							(odd
								? " lg:flex-row-reverse lg:justify-between"
								: " lg:justify-between lg:flex-row")
						}>
							
						<div>
							<img
								src={item.url}
								className="object-cover mx-auto sm-img md:md-img lg:lg-img "
							/>
						</div>

						<div class="flex flex-col bg-white px-5 py-2 relative lg:w-1/2 justify-center shadow-2xl">
							<h2
								class={
									"text-2xl xl:text-3xl lg:-top-24 font-bold relative text-left lg:absolute lg:w-1/2 " +
									(odd
										? "lg:text-left"
										: "lg:right-0 lg:text-right")
								}>
								{item.name}
							</h2>

							<p class="text-lg text-left flex-grow">
								{item.description}
							</p>
							<p class="tracking-widest py-1 font-semibold self-end bottom-0 relative">
								{item.tech.join(", ")}
							</p>

							<div
								class={
									"flex items-center space-x-6 self-end relative -bottom-14 " +
									(odd ? "lg:self-start" : "lg:self-end")
								}>
								<a href="">
									<img
										src="/github.svg"
										alt=""
										class="w-7"
									/>
								</a>

								<a href="">
									<img
										src="/export.svg"
										alt=""
										class="w-6"
									/>
								</a>
							</div>
						</div>
					</article>
				);
			})}

			<button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
				<a href="/projects">See More</a>
			</button>
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
