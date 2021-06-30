import {
	iron,
	glacier,
	ent,
} from "../assets/portfolioImages/exports";

import Image from "next/image";
const items = [
	{ id: 1, src: iron },
	{ id: 2, src: glacier },
	{ id: 3, src: ent },
];

const Projects = () => {
	return (
		<section className='container space-y-10'>
			<ul className="space-y-3 w-full flex flex-col justify-center items-center">
				{items.map((item) => (
					<li
						key={item.id}
						className="shadow-md overflow-hidden rounded-md px-6 py-4 h-80 w-1/2 relative">
						<Image
							src={item.src}
							layout="fill"
							objectFit="cover"
						/>
					</li>
				))}
			</ul>
			<button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">See More</button>
		</section>
	);
};

export default Projects;
