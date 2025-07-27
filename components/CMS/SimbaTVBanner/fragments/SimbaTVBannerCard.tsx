"use client";

// Imports
import {
	fadeIn,
	initial,
	initialTwo,
	arrayLoopStaggerChildren,
 } from "@/animations/animations";
import { motion } from "framer-motion";
import { FC, memo, useState} from "react";
import { useGlobalContext } from "@/context/global";
import {ISimbaTVBanner} from "@/components/CMS/SimbaTVBanner/types/index";

// Styling
import styles from "@/components/CMS/SimbaTVBanner/styles/SimbaTVBanner.module.scss";

// Components
import Paragraph from "@/components/Global/Elements/Paragraph/Paragraph";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";
import VideosSlider from "@/components/CMS/SimbaTVBanner/Elements/VideosSlider/VideosSlider";
import SimbaTVBannerVideos from "@/components/CMS/SimbaTVBanner/Elements/SimbaTVBannerVideos";

// Content Reveal Animations
const variantsAnimations = {
	enter: {opacity: 0, y: -50, filter: "blur(4px)"},
	center: {opacity: 1, y: 0, filter: "blur(0px)"},
	exit: {opacity: 0, y: 50, filter: "blur(4px)"},
};

const SimbaTVBannerCard: FC<ISimbaTVBanner.ICard> = memo(({
	contentOptions
}) => {
	const globalContext = useGlobalContext();
	const [activeIndex, setActiveIndex] = useState(0);

	return (
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
								? styles.buttonStylingAltFiveActive
								: styles.buttonStylingAltFive
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
					transition={{duration: 0.7, ease: "easeInOut"}}
					youtubeVideos={globalContext?.youtubeVideos}
				/>
			</div>
		</ScrollYProgressReveal>
	);
});

SimbaTVBannerCard.displayName = 'SimbaTVBannerCard';

export default SimbaTVBannerCard;