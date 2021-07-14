import Navbar from "./Navbar";
import Footer from "./Footer";
import Script from "next/script";
import Head from "next/head";

const Layout = ({ children }) => {
	return (
		<div className="overflow-x-hidden flex flex-col justify-center items-center font-mont px-2">
			<Head>
				<link
					rel="preconnect"
					href="https://fonts.googleapis.com"
				/>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossorigin
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;800&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
