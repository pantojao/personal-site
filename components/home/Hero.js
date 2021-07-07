import heroImage from "../../assets/heroImage.svg";

const Hero = () => {
	return (
		<main className="lg:relative container mb-20 lg:mt-10">
			<div className="mx-auto max-w-7xl w-full text-center lg:text-left">
				<div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
					<span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
						Hi my name is Joel
					</span>{" "}
					<h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
						<span className="block xl:inline">I am a</span>{" "}
						<span className="block text-blue-600 xl:inline">
							Web Developer
						</span>
					</h1>
					<div className="mt-10 sm:flex sm:justify-center lg:justify-start">
						<div className="rounded-md shadow">
							<a
								href="/projects"
								className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-8">
								View Projects
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
				<img
					className="absolute inset-0 w-full h-full object-cover "
					alt=""
					src={heroImage.src}
				/>
			</div>
		</main>
	);
};

export default Hero;
