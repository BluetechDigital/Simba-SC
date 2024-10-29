"use client";

// Imports
import {
	stagger,
	initial,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {ISocialMediaGrid} from "@/types/components/index";

// Styling
import styles from "@/styles/components/SocialMedia.module.scss";

// Components
import Title from "@/components/Elements/Title";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";
import ContentSliceRevealMaskAnimation from "@/components/Animations/ContentSliceRevealMaskAnimation";

const Card: FC<ISocialMediaGrid.ICard> = ({
	index,
	caption,
	media_url,
	permalink,
	media_type,
	thumbnail_url,
}) => {
	return (
		<>
			<Link
				target="_blank"
				href={`${permalink}`}
				aria-label={`Instagram Feed Post: ${caption}`}
			>
				<motion.div
					custom={index}
					initial={initial}
					whileInView="animate"
					viewport={{once: true}}
					variants={arrayLoopStaggerChildren}
					className={styles.cardWrapper + " group"}
					style={{
						backgroundImage: `url("${
							media_type === "VIDEO" ? thumbnail_url : media_url
						}")`,
					}}
				>
					<div className={styles.card}>
						<div className={styles.content}>
							<Image
								width={550}
								height={550}
								alt="Instagram Posts Icon"
								src={
									media_type === "VIDEO"
										? "/svg/Instagram-reels.svg"
										: "/svg/Instagram-posts.svg"
								}
								className={
									styles.image +
									` ${media_type === "VIDEO" ? "w-8 h-8" : "w-7 h-7"}`
								}
							/>
						</div>
					</div>
				</motion.div>
			</Link>
		</>
	);
};

const SocialMediaGrid: FC<ISocialMediaGrid.IProps> = ({title}) => {
	const globalContext = useGlobalContext();

	return (
		<>
			<motion.div
				initial={initial}
				variants={stagger}
				whileInView="animate"
				viewport={{once: true}}
				className={styles.socialMediaGrid}
				style={{
					backgroundImage: `linear-gradient(0deg,rgba(255, 255, 255, 0.50),rgba(255, 255, 255, 0.85),rgba(255, 255, 255, 0.90)),url("/svg/background/grid-background-12.svg")`,
				}}
			>
				<ScrollYProgressReveal className={styles.container}>
					<ContentSliceRevealMaskAnimation>
						<Title content={title} className={styles.title} />
					</ContentSliceRevealMaskAnimation>
					<div className={styles.instagramFeedCGrid}>
						{globalContext?.instagramFeed?.length > 0 ? (
							globalContext?.instagramFeed
								?.slice(0, 10)
								?.map((item: any, index: number) => (
									<Fragment key={index}>
										<Card
											index={item?.title}
											caption={item?.caption}
											media_url={item?.media_url}
											permalink={item?.permalink}
											media_type={item?.media_type}
											thumbnail_url={item?.permalink}
										/>
									</Fragment>
								))
						) : (
							<></>
						)}
					</div>
				</ScrollYProgressReveal>
			</motion.div>
		</>
	);
};

export default SocialMediaGrid;
