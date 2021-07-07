import Head from "next/head";
import {
	Hero,
	Technologies,
	Services,
	Projects,
} from "../components/home/exports";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center w-full space-y-20 mt-10 mb-20 text-center">
			<Head>
				<title>Joel Pantoja</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero />
			<Technologies />
			<Projects />
			<Services />
		</main>
	);
}
