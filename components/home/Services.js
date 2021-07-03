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
		<div
			ref={badge}
			className="justify-items-start items-center flex flex-col justify-center container md:grid md:grid-cols-2 md:grid-row-3 md:px-20 h-auto space-y-4  blue-outline">
			<h2 className="font-bold col-span-2 row-span-1 grid-row-start-1 md:col-span-1 text-5xl blue-outline">
				Experience In
			</h2>

			<Transition
				show={isVisible}
				enter="transition-opacity duration-1000"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="transition-opacity duration-150"
				leaveFrom="opacity-100"
				leaveTo="opacity-0">
				<div className="w-5/6 mx-auto my-auto md:col-span-1 md:row-span-2 flex flex-wrap space-evenly red-outline">
					{services.map((service) => (
						<span className="inline-flex items-center px-4 py-3 text-sm font-medium bg-gray-100 text-gray-800 rounded-full m-1">
							{service}
						</span>
					))}
				</div>
			</Transition>

			<button className="grid-row-start-3 col-span-2 md:col-span-1 md:row-span-1 md:grid-row-start-2 inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
				<a href="/contact">Contact Me</a>
			</button>
		</div>
	);
};

export default Services;
