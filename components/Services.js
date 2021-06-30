import React from "react";

const services = [
	"Shopify",
	"Static Websites",
	"Firebase",
	"Design",
	"HTML",
	"Javascript",
];

const Services = () => {
	return (
		<div className="justify-items-start items-center container grid grid-cols-2 grid-row-3 px-20 h-auto space-y-6">
			<h2 className="font-bold col-span-2 row-span-1 grid-row-start-1 md:col-span-1 text-5xl">
				Services
			</h2>

			<div className="grid-row-start-2 grid-col-start-1 col-span-2 md:col-span-1 md:row-span-2 flex flex-wrap space-evenly">
				{services.map((service) => (
					<span className="inline-flex items-center px-4 py-3 text-sm font-medium bg-gray-100 text-gray-800 rounded-full m-1">
						{service}
					</span>
				))}
			</div>
			<button className="grid-row-start-3 col-span-2 md:col-span-1 md:row-span-1 md:grid-row-start-2 inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
				Contact Me
			</button>
		</div>
	);
};

export default Services;
