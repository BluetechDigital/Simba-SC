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
import {motion} from "framer-motion";
import {FC, Fragment, useState} from "react";
import {useGlobalContext} from "@/context/global";
import {ISimbaTVBanner} from "@/types/components";

// Styling
import styles from "@/styles/components/SimbaTVBanner.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";
import SimbaTVBannerVideos from "@/components/SimbaTVBanner/Elements/SimbaTVBannerVideos";

const SimbaTVBannerCard: FC<ISimbaTVBanner.ICard> = ({
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
			<ScrollYProgressReveal className={styles.bannerCard}>
				<div className={styles.topSection}>
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
				<div className={styles.bottomSection}>
					<SimbaTVBannerVideos
						activeIndex={activeIndex}
						className={styles.bannerVideos}
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
								className={styles.item}
								variants={arrayLoopStaggerChildren}
							>
								<motion.h5
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className={styles.subtitle}
								>
									{item.subtitle}
								</motion.h5>
								<Paragraph
									content={item.content}
									className={styles.paragraph}
								/>
							</motion.div>
						))}
					</SimbaTVBannerVideos>
					<ul className={styles.ul}>
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
														? styles.li
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
																? styles.thumbnails
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
