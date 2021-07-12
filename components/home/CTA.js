const CTA = () => {
	return (
		<section className="space-y-6 lg:space-x-4 md:w-1/2 mx-auto">
			<h2 className="text-3xl md:text-6xl font-bold">Get In Touch</h2>
			<p className="text-md md:text-2xl text-gray-700">
				Thank you for taking the time to view some of my
				work. Feel free to send me an email. My socials are also available in the footer.
			</p>
			<button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
				<a href="/projects">Email Me</a>
			</button>
			<button className="inline-flex items-center px-9 py-3 border border-transparent text-base font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
				<a href="/contact">Socials</a>
			</button>
		</section>
	);
};

export default CTA;

		