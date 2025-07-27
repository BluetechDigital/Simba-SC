// Imports
import Image from "next/image";
import { FC, memo } from "react";
import { motion } from "framer-motion";
import {ITrophyCabinetBanner} from "@/components/CMS/TrophyCabinetBanner/types/index";
import { fadeIn, initial, initialTwo, arrayLoopStaggerChildren  } from "@/animations/animations";

// Styling
import styles from "@/components/CMS/TrophyCabinetBanner/styles/TrophyCabinetBanner.module.scss";

// Components
import CountUp from "@/components/Elements/CountUp";

const Card: FC<ITrophyCabinetBanner.ICard> = memo(({
	name,
	index,
	image,
	totalAmount,
}) => {
	return (
		<motion.div
			custom={index}
			initial={initial}
			className="w-full"
			whileInView="animate"
			viewport={{once: true}}
			variants={arrayLoopStaggerChildren}
		>
			<div className={styles.content}>
				<Image
					src={image?.sourceUrl}
					alt={`${image?.altText}`}
					width={image?.mediaDetails?.width || 1000}
					height={image?.mediaDetails?.height || 1000}
					className={image?.sourceUrl ? styles.image : `hidden`}
				/>
				<CountUp
					decimals={0}
					number={totalAmount}
					className={styles.totalAmount}
				/>
			</div>
			<motion.h4
				initial={initialTwo}
				whileInView={fadeIn}
				viewport={{once: true}}
				className={styles.name}
			>
				{name}
			</motion.h4>
		</motion.div>
	);
});

Card.displayName = 'TrophyCabinetBannerCard';

export default Card;