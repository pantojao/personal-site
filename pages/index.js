import Head from "next/head";
import {
	Hero,
	CTA,
	Previews,
	Projects,
} from "../components/home/exports";

export default function Home() {
	return (
		<main className="flex flex-col space-y-32 md:space-y-40 items-center justify-center w-full mt-10 mb-20 text-center overflow-x-hidden">
			<Head>
				<title>Joel Pantoja</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero />
			<Previews />
			
			<Projects />
			<CTA /> 
		</main>
	);
}
