import items from '../assets/WebsitesInfo'

const Projects = () => {
	return (
		<section class="space-y-20 container flex flex-col  text-black">
			<h1 className="text-5xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-800 p-2">
				Featured Projects
			</h1>
			{items.map((item, index) => {
				const odd = index % 2 === 0;
				return (
					<article
						class={
							"overflow-hidden relative container items-center justify-center flex py-4" +
							(odd
								? " lg:flex-row-reverse lg:justify-between"
								: " lg:justify-between lg:flex-row")
						}>
						<div className="relative sm-img md:md-img lg:lg-img">
							<img
								src={item.url}
								className="absolute object-contain"
							/>
							<h1>{item.name}</h1>
							<p>{item.description}</p>
						</div>

						<div
							class={
								"hidden lg:flex flex-col bg-white px-3 py-2 relative w-1/2 h-40 top-4 shadow-2xl " +
								(odd ? "left-20" : "right-20")
							}>
							<h2
								class={
									"text-2xl xl:text-3xl -top-24 font-bold absolute w-1/2 " +
									(odd ? "text-left" : "right-0 text-right")
								}>
								{item.name}
							</h2>

							<p class="text-lg text-left flex-grow">
								{item.description}
							</p>
							<p class="tracking-widest py-1 font-semibold self-end">
								{item.tech.join(", ")}
							</p>

							<div
								class={
									"flex space-x-6 -bottom-14 absolute " +
									(odd ? "left-2" : "right-2")
								}>
								<img
									src="/github.svg"
									alt=""
									class="w-10"
								/>
								<img src="/export.svg" alt="" class="w-8" />
							</div>
						</div>
					</article>
				);
			})}

			<button className="inline-flex self-center items-center px-8 py-3 border border-transparent text-base font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
				<a href="/projects">Get In Touch</a>
			</button>
		</section>
	);
};

export default Projects;
