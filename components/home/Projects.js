import {
	iron,
	glacier,
	ent,
} from "../../assets/portfolioImages/exports";
import React, { useRef } from "react";
import useOnScreen from "../onScreen";
import { Transition } from "@headlessui/react";

import Image from "next/image";
const items = [
	{ id: 1, src: iron },
	{ id: 2, src: glacier },
	{ id: 3, src: ent },
];

const Projects = () => {
	return (
		<section className="container space-y-10">
			<ul className="space-y-3 w-full flex flex-col justify-center items-center">
				{items.map((item) => {
					const tech = useRef(null);
					const isVisible = useOnScreen(tech);
					return (
						<li ref={tech} key={item.id} className="w-1/2">
							<Transition
								show={isVisible}
								enter="transition-translate duration-700"
								enterFrom="-translate-x-96"
								enterTo="translate-x-0">
								<div className="shadow-md rounded-md px-6  h-80 relative">
									<Image
										src={item.src}
										layout="fill"
										objectFit="cover"
									/>
								</div>
							</Transition>
						</li>
					);
				})}
			</ul>
			<button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
				<a href="/projects">See More</a>
			</button>
		</section>
	);
};

export default Projects;
