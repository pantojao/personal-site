import React, { useRef } from "react";
import useOnScreen from "../onScreen";
import { Transition } from "@headlessui/react";

const services = [
	"Shopify",
	"Wordpress",
	"React",
	"Web Templates",
	"Web Scraping",
	"PHP ",
	"API Development",
	"Deployment",
];

const Services = () => {
	const badge = useRef(null);
	const isVisible = useOnScreen(badge);

	return (
		<div className="justify-items-start items-end container md:grid md:grid-cols-2 md:grid-rows-2 lg:px-20 space-y-8">
			<h2 className="font-bold col-span-2 row-span-1 grid-row-start-1 md:col-span-1 text-5xl">
				Experience In
			</h2>

			<div ref={badge} className="row-span-2">
				<Transition
					show={isVisible}
					enter="transition-opacity duration-1000"
					enterFrom="opacity-0"
					enterTo="opacity-100">
					<div className="w-5/6 md:w-full mx-auto flex flex-wrap space-evenly">
						{services.map((service) => (
							<span className="inline-flex items-center px-4 py-3 text-sm font-medium bg-gray-100 rounded-full m-1">
								{service}
							</span>
						))}
					</div>
				</Transition>
			</div>

			<button className="self-start md:grid-row-start-2 md:col-span-1 inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
				<a href="/contact">Contact Me</a>
			</button>
		</div>
	);
};

export default Services;
