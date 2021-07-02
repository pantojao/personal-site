const projects = [
	{
		name: "Flow Ecommerce Store",
		image: "/flow.PNG",
		video: "/flow-scommerce.mp4",
		github: "https://github.com/pantojao/Flow-Ecommerce",
	},
	{
		name: "Nasa Image Generator",
		image: "/nasa-app-pic.PNG",
		video: "/nasa.mp4",
		github: "https://github.com/pantojao/nasa-app",
	},
	{
		name: "Pac-Man Search",
		image: "/pac-man-image.PNG",
		video: "/pacman.mp4",
		github: "https://github.com/pantojao/pac-man-search",
	},
	{
		name: "IPA Finder",
		image: "/ipa-app-pic.PNG",
		video: "/ipa.mp4",
		github: "https://github.com/pantojao/ipa-app",
	},
];

const Projects = () => {
	return (
		<section className=" mt-10 space-y-20 flex flex-col justify-center items-center">
			{projects.map((project) => (
				<div className="flex flex-col justify-center items-center space-y-10 px-2">
					<div className="flex justify-between items-center w-full ">
						<h2 className="font-bold text-lg md:text-3xl">
							{project.name}
						</h2>
						<img src="/github.svg" className="w-10 h-10" />
					</div>

					<div className="relative shadow-lg rounded-md">
						<video
							preload="auto"
							poster={project.image}
							width="800px"
							controls>
							<source
								src={project.video}
								type="video/mp4"
							/>
						</video>
					</div>
				</div>
			))}
		</section>
	);
};

export default Projects;
