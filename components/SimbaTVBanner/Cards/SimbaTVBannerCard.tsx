"use client";

// Imports
import {
	fadeIn,
	initial,
	initialTwo,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment, useState} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {ISimbaTVBannerCard} from "@/types/components/Elements";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";
import SimbaTVBannerVideos from "@/components/SimbaTVBanner/Elements/SimbaTVBannerVideos";

const SimbaTVBannerCard: FC<ISimbaTVBannerCard> = ({
	fansButton,
	youtubeButton,
	podcastsButton,
}) => {
	const globalContext = useGlobalContext();
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
						<motion.button
							key={index}
							custom={index}
							initial={initial}
							whileInView="animate"
							viewport={{once: true}}
							variants={arrayLoopStaggerChildren}
							onClick={() => setActiveIndex(index)}
							className={`${
								activeIndex === index
									? "buttonStyling-alt-five-active"
									: "buttonStyling-alt-five"
							}`}
						>
							{item.title}
						</motion.button>
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
					<ul className="pt-16 grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center">
						{globalContext?.youtubeVideos?.length > 0 ? (
							globalContext?.youtubeVideos
								?.slice(0, 2)
								?.map((item: any, index: number) => (
									<Fragment key={index}>
										<ScrollYProgressReveal>
											<motion.li
												custom={index}
												initial={initial}
												whileInView="animate"
												viewport={{once: true}}
												variants={arrayLoopStaggerChildren}
												className={
													item?.status?.privacyStatus == "public"
														? "w-full h-full py-6 px-10 bg-tertiary-default"
														: "hidden"
												}
											>
												<Link
													target="_blank"
													href={`https://www.youtube.com/channel/UC3W0zHzX_Iu3lJ20bOfYUeA/`}
													aria-label={`${item?.snippet?.channelTitle}: ${item?.snippet?.title}`}
												>
													<Image
														src={item?.snippet?.thumbnails?.maxres?.url}
														alt={`${item?.image?.altText}`}
														width={
															item?.snippet?.thumbnails?.maxres?.width
																? item?.snippet?.thumbnails?.maxres?.width
																: 500
														}
														height={
															item?.snippet?.thumbnails?.maxres?.height
																? item?.snippet?.thumbnails?.maxres?.height
																: 500
														}
														className={
															item?.snippet?.thumbnails?.maxres?.url
																? `block w-full h-full object-cover object-center`
																: `hidden`
														}
													/>
												</Link>
											</motion.li>
										</ScrollYProgressReveal>
									</Fragment>
								))
						) : (
							<></>
						)}
					</ul>
				</div>
			</ScrollYProgressReveal>
		</>
	);
};

export default SimbaTVBannerCard;
