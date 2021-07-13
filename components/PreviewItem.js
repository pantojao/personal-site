import React from "react";
import items from "../assets/WebsitesInfo";

const PreviewItem = ({max}) => {
	console.log(items);
	return (
		<>
			{items.map((item, index) => {
				if (index > max) return;
				const odd = index % 2 === 0;
				return (
					<article
						class={
							"mb-24 relative container items-center justify-center flex-col flex" +
							(odd
								? " lg:flex-row-reverse lg:justify-between"
								: " lg:justify-between lg:flex-row")
						}>
						<div>
							<img
								src={item.url}
								className="object-cover mx-auto sm-img md:md-img lg:lg-img "
							/>
						</div>

						<div class="flex flex-col bg-white px-4 py-2 relative lg:w-1/2 justify-center shadow-2xl max-w-full">
							<h2
								class={
									"text-2xl xl:text-3xl lg:-top-24 font-bold relative text-left lg:absolute lg:w-1/2 " +
									(odd
										? "lg:text-left"
										: "lg:right-0 lg:text-right")
								}>
								{item.name}
							</h2>

							<p className="text-lg text-left flex-grow">
								{item.description}
							</p>
							<p className="tracking-widest py-1 font-semibold self-end bottom-0 relative">
								{item.tech.join(", ")}
							</p>
						</div>
					</article>
				);
			})}
		</>
	);
};


export default PreviewItem;



{/* 
							<div
								class={
									"flex items-center space-x-6 self-end relative -bottom-14 " +
									(odd ? "lg:self-start" : "lg:self-end")
								}>
								<a href="">
									<img
										src="/github.svg"
										alt=""
										class="w-7"
									/>
								</a>
								<a href="">
									<img
										src="/export.svg"
										alt=""
										class="w-6"
									/>
								</a>
							</div> */}