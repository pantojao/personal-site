import Navbar from "./Navbar";
import Footer from "./Footer";
import Script from 'next/script'


const Layout = ({ children }) => {

	return (
		<div className="overflow-x-hidden flex flex-col justify-center items-center font-body">
			<Script src="https://fonts.googleapis.com" />
			<Script src="https://fonts.gstatic.com" />
			<Script src="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Source+Sans+Pro:wght@700&display=swap" />
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
