// import react from "../../assets/icons/react.svg";
// import typescript from "../../assets/icons/typescript.svg";
// import python from "../../assets/icons/python.svg";
// import tailwind from "../../assets/icons/tailwindcss.svg";
// import node from "../../assets/icons/nodedotjs.svg";
import Image from "next/image";
import React, { useRef } from "react";
import useOnScreen from "../onScreen";
import { Transition } from "@headlessui/react";


// const technologies = [
// 	{ id: 1, image: typescript },
// 	{ id: 2, image: react },
// 	{ id: 3, image: python },
// 	{ id: 4, image: tailwind },
// 	{ id: 5, image: node },
// ];


const technologies = [
	{ id: 1, image: "/icons/react.svg" },
	{ id: 2, image: "/icons/typescript.svg" },
	{ id: 3, image: "/icons/python.svg" },
	{ id: 4, image: "/icons/tailwindcss.svg" },
	{ id: 5, image: "/icons/nodedotjs.svg" },
];


const Technologies = () => {
	const techs = useRef(null);
	const isVisible = useOnScreen(techs);
	return (
		<div className="px-4 sm:px-6 lg:px-8 space-y-14 container">
			<h2 className="text-5xl font-bold text-left">
				Technologies
			</h2>
			<p className="text-2xl text-left border-l-4 pl-8 py-4 border-blue-600">
				These are the technologies I have used in previous
				projects
			</p>

			<div ref={techs}>
				<Transition
					show={isVisible}
					enter="transition-opacity duration-1000"
					enterFrom="opacity-0"
					enterTo="opacity-100">
					<div
						ref={techs}
						className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
						{technologies.map(({ id, image }) => (
							<div
								key={id}
								className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
								<Image src={image} width={75} height={75} />
							</div>
						))}
					</div>
				</Transition>
			</div>
		</div>
	);
};

export default Technologies;

