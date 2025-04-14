"use client";

// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {initial, arrayLoopStaggerChildren} from "@/animations/animations";
import {ISocialMediaGrid} from "@/components/SocialMediaGrid/types/index";

// Styling
import styles from "@/components/SocialMediaGrid/styles/SocialMediaGrid.module.scss";


const Card: FC<ISocialMediaGrid.ICard> = ({
	index,
	caption,
	media_url,
	permalink,
	media_type,
	thumbnail_url,
}) => {
	return (
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
							width={1000}
							height={1000}
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
	);
};

export default Card;
