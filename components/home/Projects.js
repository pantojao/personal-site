const projects = [
	{
		name: "Flow Ecommerce Store",
		image: "/flow.PNG",
		video: "/flow-ecommerce.mp4",
		github: "https://github.com/pantojao/Flow-Ecommerce",
		class: " book-shadow",
	},
	{
		name: "Nasa Image Generator",
		image: "/nasa-app-pic.PNG",
		video: "/nasa.mp4",
		github: "https://github.com/pantojao/nasa-app",
		class: " nasa-shadow",
	},
	{
		name: "Pac-Man Search",
		image: "/pac-man-image.PNG",
		video: "/pacman.mp4",
		github: "https://github.com/pantojao/pac-man-search",
		class: " pac-shadow",
	},
];

const Projects = () => {
	return (
		<section className="space-y-20 flex flex-col justify-center items-center container">
			<h1 className="text-center text-5xl font-bold ">Personal Projects</h1>
			{projects.map((project) => (
				<div
					key={project.name}
					className="flex flex-col justify-center items-center space-y-10 px-2">
					<div className="flex justify-between items-center w-full ">
						<h2 className="font-bold text-lg md:text-3xl">
							{project.name}
						</h2>
						<a href={project.github} target="_blank">
							<img
								src="/github.svg"
								className="w-10 h-10"
							/>
						</a>
					</div>

					<div
						className={
							"relative shadow-lg rounded-md" +
							project.class
						}>
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
