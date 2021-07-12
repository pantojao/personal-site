const Hero = () => {
	return (
		<section className="mt-10 lg:mb-12 space-y-8 text-center">
			<span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
				Hi my name is Joel Pantoja
			</span>{" "}
			<h1 className="text-6xl tracking-tight font-extrabold text-gray-900">
				I build on the web.
			</h1>
			<p class="text-md text-center md:w-3/4 mx-auto">
				I am developer currently located in Los Angeles CA. I focus on building user friendly, clean, and
				functional web apps and sites.
			</p>
			<div className="flex justify-center">
				<a
					href="/projects"
					className="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-3 md:text-lg md:px-6">
					View Projects
				</a>
			</div>
		</section>
	);
};

export default Hero;
