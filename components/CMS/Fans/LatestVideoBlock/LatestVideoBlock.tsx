// Imports
import {
	initial,
	stagger,
	fadeInUp,
	slideInRightFinish,
	slideInLeftInitial,
	slideInRightInitial,
 } from "@/animations/animations";
import Link from "next/link";
import { motion } from "framer-motion";
import { FC, memo, useMemo } from "react";
import {ILatestVideoBlock} from "@/components/CMS/Fans/LatestVideoBlock/types/index";

// Styling
import styles from "@/components/CMS/Fans/LatestVideoBlock/styles/LatestVideoBlock.module.scss";

// Components
import Title from "@/components/Elements/Title";
import Paragraph from "@/components/Elements/Paragraph/Paragraph";
import Card from "@/components/CMS/Fans/LatestVideoBlock/fragments/Card";
import VideoCard from "@/components/CMS/Fans/LatestVideoBlock/fragments/VideoCard";

const LatestVideoBlock: FC<ILatestVideoBlock.IProps> = memo(({
	title,
	video,
	subtitle,
	paragraph,
	buttonLink,
	displayVideo,
	displayButtonColor,
	displayContentColor,
	videoBackgroundImage,
	displayBackgroundSvg,
	displayBackgroundColor,
}) => {

	// Optimize inline styles:
	const videoBackgroundImageStyle = useMemo(() => ({
		backgroundImage: videoBackgroundImage?.sourceUrl ? `url("${videoBackgroundImage.sourceUrl}")` : 'none',
	}), [videoBackgroundImage?.sourceUrl]);

	// Optimize inline styles:
	const displayBackgroundColorImageStyle = useMemo(() => ({
		backgroundColor: displayBackgroundColor ? `url("${displayBackgroundColor}")` : 'none',
		backgroundImage: `url(${displayBackgroundSvg ? "/svg/background/stacked-steps-haikei-red.svg" : "none"})`,
	}), [displayBackgroundColor]);

	// Optimize inline styles:
	const colorAndBorderColorStyle = useMemo(() => ({
		color: displayButtonColor ? displayButtonColor : 'none',
		borderColor: displayButtonColor ? displayButtonColor : 'none',
	}), [displayButtonColor]);

	return (
		<div
			className={styles.latestVideoBlock} style={displayBackgroundColorImageStyle}>
			<div className={styles.containerWrapper}>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className={title || paragraph ? styles.wrapper : "hidden"}
				>
					<motion.div
						viewport={{once: true}}
						initial={slideInLeftInitial}
						whileInView={slideInRightFinish}
						className="flex flex-col w-full xl:w-1/3"
					>
						<motion.h4
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className={styles.subtitle}
						>
							{subtitle}
						</motion.h4>
						<Title
							content={title}
							className={styles.title}
							styleTextColor={displayContentColor}
						/>
						<Paragraph
							content={paragraph}
							className={styles.paragraph}
							styleTextColor={displayContentColor}
						/>
						<Link
							href={`${buttonLink?.url}`}
							target={buttonLink?.target}
							style={colorAndBorderColorStyle}
							className={`${buttonLink?.url ? styles.buttonStyling : "hidden"}`}
						>
							{buttonLink?.title}
						</Link>
					</motion.div>
					<motion.div
						viewport={{once: true}}
							initial={slideInRightInitial}
							whileInView={slideInRightFinish}
							style={videoBackgroundImageStyle}
							className={
								displayVideo
									? styles.rightSection +
									  ` ${displayVideo ? "h-fit" : "h-[300px] lg:h-[300px]"}`
									: styles.rightSection
							}
					>
						{displayVideo ? (
							<VideoCard video={video} displayVideo={displayVideo} />
						) : (
							<Card />
						)}
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
});

LatestVideoBlock.displayName = 'LatestVideoBlock';

export default LatestVideoBlock;
