import {
	Header,
	ContactForm,
} from "../components/contact/exports";

const Contact = () => {
	return (
		<main className="overflow-hidden flex flex-col items-center justify-center w-full space-y-20 my-20 text-center">
			<Header />
			<ContactForm />
		</main>
	);
};
export default Contact;
