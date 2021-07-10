const items = [
	// {
	// 	name: "Insure Landing Page",
	// 	url: "/previews/insure-preview.jpg",
	// 	description: "This is a landing page for a ",
	// 	tech: ["Next.js", "Tailwind CSS"],
	// },
	{
		name: "Inland Landing Page",
		url: "/previews/inland-preview.png",
		description: "This was a landing page built for accounting firm. ",
		tech: ["Next.js", "Tailwind CSS"],
	},
	{
		name: "SunnySide Landing Page",
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
	return (
		<section class="space-y-14 container">
			<h1 class="text-black font-bold text-5xl">
				Featured Sites
			</h1>
			{items.map((item, index) => {
				const odd = index % 2 === 0;
				return (
					<article
						class={
							"relative container flex " +
							(odd ? " flex-row-reverse " : "flex-row")
						}>
						<div
							class="bg-no-repeat bg-cover bg-center"
							style={{
								backgroundImage: `url("${item.url}")`,
								minWidth: "700px",
								minHeight: "500px",
							}}></div>

						<div
							class={
								"hidden md:block text-white bg-white absolute w-1/2 h-40 bottom-24 text-black shadow-2xl p-4 " +
								(odd ? "left-20" : "right-20")
							}>
							<h2
								class={
									"text-4xl -top-24 text-black font-bold relative w-full " +
									(odd ? "text-left" : "text-right")
								}>
								{item.name}
							</h2>
							<p class="text-black text-lg font-semibold">{item.description}</p>
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
							</div>
						</div>
					</article>
				);
			})}
			{/* </div> */}
			<button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
				<a href="/projects">See More</a>
			</button>
		</section>
	);
};

export default Previews;
