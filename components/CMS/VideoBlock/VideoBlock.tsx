// Imports
import {
	initial,
	stagger,
	fadeInUp,
	slideInRightFinish,
	slideInRightInitial,
 } from "@/animations/animations";
 import Link from "next/link";
 import { FC, memo } from "react";
import { motion } from "framer-motion";
import {IVideoBlock} from "@/components/CMS/VideoBlock/types/index";

// Styling
import styles from "@/components/CMS/VideoBlock/styles/VideoBlock.module.scss";

// Components
import Paragraph from "@/components/Global/Elements/Paragraph/Paragraph";
import VideoCard from "@/components/CMS/VideoBlock/fragments/VideoCard";
import SlideInXLeftAnimation from "@/components/Animations/SlideInXLeftAnimation";
import SlideInXRightAnimation from "@/components/Animations/SlideInXRightAnimation";

const VideoBlock: FC<IVideoBlock.IProps> = memo(({
	title,
	video,
	subtitle,
	paragraph,
	buttonLink,
	displayVideo,
	videoBackgroundImage,
}) => {
	return (
		<div
			className={styles.videoBlock}
			style={{
				backgroundImage: `url("/svg/background/stacked-steps-haikei-red.svg")`,
			}}
		>
			<div className={styles.containerWrapper}>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className={title || paragraph ? styles.wrapper : "hidden"}
				>
					<SlideInXLeftAnimation>
						<motion.h4
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className={styles.subtitle}
						>
							{subtitle}
						</motion.h4>
						<motion.h3
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className={styles.title}
						>
							{title}
						</motion.h3>
					</SlideInXLeftAnimation>
					<SlideInXRightAnimation className="flex flex-col">
						<Paragraph content={paragraph} className={styles.paragraph} />
						<Link
							href={`${buttonLink?.url}`}
							target={buttonLink?.target}
							className={`${
								buttonLink?.url
									? "buttonStyling mt-5 mx-auto lg:mx-0"
									: "hidden"
							}`}
						>
							{buttonLink?.title}
						</Link>
					</SlideInXRightAnimation>
				</motion.div>
				<motion.div
					viewport={{once: true}}
					initial={slideInRightInitial}
					whileInView={slideInRightFinish}
					className={
						displayVideo
							? styles.videoWrapper + ` ${displayVideo ? "h-fit" : "h-[300px] lg:h-[500px]"}`
							: "hidden"
					}
					style={{backgroundImage: `url("${videoBackgroundImage}")`}}
				>
					<VideoCard video={video} displayVideo={displayVideo} />
				</motion.div>
			</div>
		</div>
	);
});

VideoBlock.displayName = 'VideoBlock';

export default VideoBlock;
