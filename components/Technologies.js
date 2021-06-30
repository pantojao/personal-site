import react from "../assets/icons/react.svg";
import typescript from "../assets/icons/typescript.svg";
import python from "../assets/icons/python.svg";
import tailwind from "../assets/icons/tailwindcss.svg";
import node from '../assets/icons/nodedotjs.svg';
import Image from "next/image";

const technologies = [typescript, react, python, tailwind, node];

const Technologies = () => {
	return (
		<div className="px-4 sm:px-6 lg:px-8 space-y-14 container">
			<h2 className="text-5xl font-bold text-left">
				Technologies
			</h2>
			<p className="text-2xl text-left border-l-4 pl-8 py-4 border-blue-600">
				These are the technologies I have used in previous
				projects
			</p>
			<div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
				{technologies.map((technology) => (
					<div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
						<Image
							src={technology}
							width={75}
							height={75}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Technologies;
