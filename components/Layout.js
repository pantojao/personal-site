import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
	return (
		<div className="overflow-x-hidden flex flex-col justify-center items-center">
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
