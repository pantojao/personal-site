import {
	pacmanImage,
	pacmanVideo,
	nasaImage,
	nasaVideo,
	flowImage,
	flowVideo,
} from "../assets/media/exports";

const projects = [
	{
		name: "Flow Ecommerce Store",
		image: flowImage,
		video: flowVideo,
	},
	{
		name: "Nasa Image Generator",
		image: nasaImage,
		video: nasaVideo,
	},
	{
		name: "Pac-Man Search",
		image: pacmanImage,
		video: pacmanVideo,
	},
];

const Projects = () => {
	return (
		<section className="container space-y-10">
			<div className="relative shadow-md rounded-md px-6 w-1/2 mx-auto h-80 ">
				{projects.map((project) => (
					<video
						preload="auto"
						poster={project.image}
						width="800px"
						controls>
						<source src={project.video} type="video/mp4" />
					</video>
				))}
			</div>
		</section>
	);
};

export default Projects;
