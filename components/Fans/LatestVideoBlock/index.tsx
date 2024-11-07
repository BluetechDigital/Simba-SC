// Imports
import {
	initial,
	stagger,
	fadeInUp,
	slideInRightFinish,
	slideInRightInitial,
	slideInLeftInitial,
} from "@/animations/animations";
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {IFans} from "@/types/components";

// Styling
import styles from "@/styles/components/Fans.module.scss";

// Components
import Title from "@/components/Elements/Title";
import Paragraph from "@/components/Elements/Paragraph";

const LatestVideoBlock: FC<IFans.ILatestVideoBlock.IProps> = ({
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
	return (
		<>
			<div
				className={styles.latestVideoBlock}
				style={{
					backgroundColor: displayBackgroundColor,
					backgroundImage: `url(${
						displayBackgroundSvg
							? "/svg/background/stacked-steps-haikei-red.svg"
							: "none"
					})`,
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
								style={{color: displayContentColor}}
							/>
							<Paragraph
								content={paragraph}
								className={styles.paragraph}
								style={{
									color: displayContentColor,
								}}
							/>
							<Link
								href={`${buttonLink?.url}`}
								target={buttonLink?.target}
								style={{
									color: displayButtonColor,
									borderColor: displayButtonColor,
								}}
								className={`${
									buttonLink?.url ? styles.buttonStyling : "hidden"
								}`}
							>
								{buttonLink?.title}
							</Link>
						</motion.div>
						<motion.div
							viewport={{once: true}}
							initial={slideInRightInitial}
							whileInView={slideInRightFinish}
							className={
								displayVideo
									? styles.rightSection +
									  ` ${displayVideo ? "h-fit" : "h-[300px] lg:h-[300px]"}`
									: "hidden"
							}
							style={{backgroundImage: `url("${videoBackgroundImage}")`}}
						>
							<motion.video
								muted
								autoPlay
								loop={true}
								controls={false}
								playsInline
								controlsList="nofullscreen"
								aria-label={`Video Element: ${video?.title}`}
								className={displayVideo ? styles.video : "hidden"}
							>
								<source
									src={video?.link}
									type="video/mp4"
									width={
										video?.mediaDetails?.width
											? video?.mediaDetails?.width
											: 550
									}
									height={
										video?.mediaDetails?.height
											? video?.mediaDetails?.height
											: 550
									}
								/>
							</motion.video>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default LatestVideoBlock;
