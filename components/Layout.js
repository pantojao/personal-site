import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
	return (
		<div className="bg-gray-50 pb-6">
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
