import Link from "next/link";

const CTA = () => {
	return (
		<section className="md:w-1/2 mx-auto">
			<h2 className="header">Get In Touch</h2>

			<p className="text-md my-6 md:text-2xl text-gray-700">
				Thank you for taking the time to view some of my
				work. Feel free to send me an email or message me on
				socials.
			</p>

			<Link href="/contact">
				<button className="inline-flex mr-2 items-center px-9 py-3 border border-transparent text-base font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
					Socials
				</button>
			</Link>
		</section>
	);
};

export default CTA;
