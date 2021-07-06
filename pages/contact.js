import {
	Header,
	ContactForm,
} from "../components/contact/exports";
import Head from "next/head";

const Contact = () => {
	return (
		<main className="flex flex-col items-center justify-center w-full h-screen space-y-20 my-16 text-center">
			<Head>
				<title>Joel's Portfolio</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<ContactForm />
		</main>
	);
};
export default Contact;
