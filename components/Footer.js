import React from "react";
import navigation from '../assets/socialsInfo'

const Footer = () => {
	return (
		<footer className="container md:flex md:items-center md:justify-between mb-8 mt-16 lg:px-12">
			<div className="flex justify-center space-x-6 md:order-2">
				{navigation.map((item) => (
					<a
						key={item.name}
						href={item.href}
						className="text-gray-400 hover:text-gray-500">
						<span className="sr-only">{item.name}</span>
						<item.icon
							className="h-6 w-6"
							aria-hidden="true"
						/>
					</a>
				))}
			</div>
			<div className="mt-8 md:mt-0 md:order-1">
				<p className="text-center text-base text-gray-400">
					&copy; 2021 Joel Pantoja. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
