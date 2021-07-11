const items = [
	{
		name: "Utlimate Iron Crafts",
		url: "/previews/iron.jpg",
		description:
			"This was a landing page built for accounting firm. ",
		tech: ["Next.js", "Tailwind CSS"],
	},
	{
		name: "Insure Landing Page",
		url: "/previews/insure-preview.jpg",
		description: "This is a landing page for a ",
		tech: ["Next.js", "Tailwind CSS"],
	},
	{
		name: "Inland Taxes",
		url: "/previews/inland-preview.png",
		description:
			"This was a landing page built for accounting firm. ",
		tech: ["Next.js", "Tailwind CSS"],
	},
	{
		name: "SunnySide Landing",
		url: "/previews/sunnyside-preview.jpg",
		description: "This was built with nextjs",
		tech: ["Next.js", "Tailwind CSS"],
	},
	{
		name: "FAQ",
		url: "/previews/faq-preview.jpg",
		description: "This was built with nextjs",
		tech: ["Next.js", "Tailwind CSS"],
	},
	{
		name: "Social Media Dashboard",
		url: "/previews/dashboard-preview.jpg",
		description: "Social Media Dashboard",
		tech: ["Next.js", "Tailwind CSS"],
	},
];

const Previews = () => {
	// sm:bg-blue-300 md:bg-yellow-300 xl:bg-red-300sm:bg-blue-300 md:bg-yellow-300 xl:bg-red-300
	return (
		<section class="space-y-20 container ">
			<h1 class="text-black font-bold text-5xl">
				Featured Sites
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
								"hidden lg:block text-white bg-white relative w-1/2 h-40 top-4 shadow-2xl " +
								(odd ? "left-20" : "right-20")
							}>
							<h2
								class={
									"text-2xl xl:text-3xl -top-24 text-black font-bold absolute w-1/2 " +
									(odd
										? "text-left"
										: " right-0 text-right")
								}>
								{item.name}
							</h2>

							{/* <p class="text-black text-lg font-semibold">
								{item.description}
							</p>
							<p class="text-black tracking-widest bottom-0 left">
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
							</div> */}
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
