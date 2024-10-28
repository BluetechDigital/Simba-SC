// Imports
import {
	initial,
	stagger,
	fadeInUp,
	slideInRightFinish,
	slideInRightInitial,
} from "@/animations/animations";
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {IVideoBlock} from "@/types/components";

// Styling
import styles from "@/styles/components/VideoBlock.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import VideoWrapper from "@/components/VideoBlock/Elements/VideoWrapper";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";
import SlideInXLeftAnimation from "@/components/Animations/SlideInXLeftAnimation";
import SlideInXRightAnimation from "@/components/Animations/SlideInXRightAnimation";

const VideoBlock: FC<IVideoBlock.IProps> = ({
	title,
	video,
	subtitle,
	paragraph,
	buttonLink,
	displayVideo,
	videoBackgroundImage,
}) => {
	return (
		<>
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
						className={displayVideo ? styles.wrapper : "hidden"}
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
						className={`${
							displayVideo ? "h-fit" : "h-[300px] lg:h-[500px]"
						} bg-center bg-no-repeat bg-cover mt-6 lg:mt-12 w-full`}
						style={{
							backgroundImage: `url("${
								displayVideo ? "none" : videoBackgroundImage
							}")`,
						}}
					>
						{displayVideo ? <VideoWrapper>{video}</VideoWrapper> : <></>}
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default VideoBlock;