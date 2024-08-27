"use client";

// Imports
import {
	fadeIn,
	initial,
	initialTwo,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Link from "next/link";
import {motion} from "framer-motion";
import {FC, useState} from "react";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";
import SimbaTVBannerVideos from "@/components/SimbaTVBanner/Elements/SimbaTVBannerVideos";

const SimbaTVBannerCard: FC = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const ITEMS = [
		{
			title: "Youtube",
			subtitle: "Refining Visual Harmony",
			content:
				"Explore the principles of motion aesthetics that enhance the visual appeal of interfaces. Learn to balance timing, easing, and the flow of motion to create seamless user experiences.",
		},
		{
			title: "Podcasts",
			subtitle: "Narrative and Expression",
			content:
				"Delve into how motion can be used as an artistic tool to tell stories and evoke emotions, making digital interactions feel more human and expressive.",
		},
		{
			title: "Fans Videos",
			subtitle: "Mastering Motion Tools",
			content:
				"Gain proficiency in advanced techniques such as physics-based animations, 3D transformations, and complex sequencing to elevate your design skills and implementation.",
		},
	];

	return (
		<>
			<ScrollYProgressReveal tailwindStyling="py-10">
				<div className="mb-4 w-full flex flex-col md:flex-row items-center justify-center lg:justify-start space-x-2 space-y-2 md:space-y-0">
					{ITEMS.map((item, index) => (
						<button
							key={index}
							onClick={() => setActiveIndex(index)}
							className={`${
								activeIndex === index
									? "buttonStyling-alt-five-active"
									: "buttonStyling-alt-five"
							}`}
						>
							{item.title}
						</button>
					))}
				</div>
				<div className="overflow-hidden my-6 border-t border-white">
					<SimbaTVBannerVideos
						activeIndex={activeIndex}
						transition={{duration: 0.2, ease: "easeInOut"}}
						variants={{
							enter: {opacity: 0, y: -50, filter: "blur(4px)"},
							center: {opacity: 1, y: 0, filter: "blur(0px)"},
							exit: {opacity: 0, y: 50, filter: "blur(4px)"},
						}}
					>
						{ITEMS?.map((item, index) => (
							<motion.div
								key={index}
								custom={index}
								initial={initial}
								whileInView="animate"
								viewport={{once: true}}
								className="pt-10 px-4 lg:px-20"
								variants={arrayLoopStaggerChildren}
							>
								<motion.h5
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="my-6 font-schaboCondensed text-center lg:text-left uppercase text-7xl tracking-[-0.05rem] text-white xl:leading-tight"
								>
									{item.subtitle}
								</motion.h5>
								<Paragraph
									content={item.content}
									tailwindStyling="font-OnestRegular leading-tight text-white text-lg lg:text-xl text-center md:text-left"
								/>
							</motion.div>
						))}
					</SimbaTVBannerVideos>
				</div>
			</ScrollYProgressReveal>
		</>
	);
};

export default SimbaTVBannerCard;
