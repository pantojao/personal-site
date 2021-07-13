import PreviewItem from "../components/PreviewItem";

const Projects = () => {
	return (
		<section class="space-y-20 container flex flex-col text-black">
			<h1 className="text-5xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-800 p-2">
				Featured Projects
			</h1>
			<PreviewItem />
			{/* <button className="inline-flex self-center items-center px-8 py-3 border border-transparent text-base font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
				<a href="/projects">Get In Touch</a>
			</button> */}
		</section>
	);
};

export default Projects;
