const CTA = () => {
	return (
		<section className="space-y-6 md:w-3/4 mx-auto">
			<h2 className="text-3xl md:text-5xl font-bold">Get In Touch</h2>
			<p className="text-md md:text-xl text-gray-700">
				Thank you for taking the time to look at some of my
				work. If you would like to get in touch send me a
				email with the button below or contact me on
				LinkedIn
			</p>
			<button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
				<a href="/projects">Email Me</a>
			</button>
		</section>
	);
};

export default CTA;
