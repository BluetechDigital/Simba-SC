"use client";

// Imports
import {
	fadeIn,
	initial,
	initialTwo,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import {motion} from "framer-motion";
import {FC, useState} from "react";
import {useGlobalContext} from "@/context/global";
import {ISimbaTVBanner} from "@/types/components";

// Styling
import styles from "@/styles/components/SimbaTVBanner.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import VideosSlider from "@/components/SimbaTVBanner/Elements/VideosSlider";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";
import SimbaTVBannerVideos from "@/components/SimbaTVBanner/Elements/SimbaTVBannerVideos";

// Content Reveal Animations
const variantsAnimations = {
	enter: {opacity: 0, y: -50, filter: "blur(4px)"},
	center: {opacity: 1, y: 0, filter: "blur(0px)"},
	exit: {opacity: 0, y: 50, filter: "blur(4px)"},
};

const SimbaTVBannerCard: FC<ISimbaTVBanner.ICard> = ({contentOptions}) => {
	const globalContext = useGlobalContext();
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<>
			<ScrollYProgressReveal className={styles.bannerCard}>
				<div className={styles.topSection}>
					{contentOptions.map((item, index) => (
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
							{item.buttonTitle}
						</motion.button>
					))}
				</div>
				<div className={styles.divider} />
				<div className={styles.bottomSection}>
					<SimbaTVBannerVideos
						activeIndex={activeIndex}
						variants={variantsAnimations}
						className={styles.bannerVideos}
						transition={{duration: 0.2, ease: "easeInOut"}}
					>
						{contentOptions?.map((item, index) => (
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
									className={styles.paragraph}
									content={item.contentExcerpt}
								/>
							</motion.div>
						))}
					</SimbaTVBannerVideos>
					<VideosSlider
						activeIndex={activeIndex}
						variants={variantsAnimations}
						youtubeVideos={globalContext?.youtubeVideos}
						transition={{duration: 0.7, ease: "easeInOut"}}
					/>
				</div>
			</ScrollYProgressReveal>
		</>
	);
};

export default SimbaTVBannerCard;
