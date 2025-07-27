// Imports
import {
	fadeIn,
	initialTwo,
	slideInLeftInitial,
	slideInRightFinish,
	slideInRightInitial,
} from "@/animations/animations";
import Image from "next/image";
import { FC, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {IAboutSimba} from "@/components/CMS/AboutSimba/types/index";

// Styling
import styles from "@/components/CMS/AboutSimba/styles/AboutSimba.module.scss";

// Components
import Button from "@/components/Global/Elements/Button/Button";
import Paragraph from "@/components/Global/Elements/Paragraph/Paragraph";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";
import SlideInXLeftAnimation from "@/components/Animations/SlideInXLeftAnimation";
import SlideInXRightAnimation from "@/components/Animations/SlideInXRightAnimation";
import SlideUpDivMaskReveal from "@/components/Animations/SlideUpDivMaskReveal/SlideUpDivMaskReveal";

const AboutSimba: FC<IAboutSimba.IProps> = memo(({
	title,
	image,
	titleTwo,
	paragraph,
	buttonLink,
	paragraphTwo,
}) => {
	return (
		<div
			className={styles.about}
			style={{
				backgroundImage: `url("/svg/background/stacked-steps-haikei-lightgrey.svg")`,
			}}
		>
			<div className={styles.topContent}>
				<motion.div
					viewport={{once: true}}
					className={styles.content}
					initial={slideInLeftInitial}
					whileInView={slideInRightFinish}
				>
					<SlideInXLeftAnimation>
						<motion.h4
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className={styles.title}
						>
							{title}
						</motion.h4>
						<ScrollYProgressReveal className={styles.wrapper}>
							<Paragraph content={paragraph} className={styles.paragraph} />
							<Button styleNumber={2} link={buttonLink}/>
						</ScrollYProgressReveal>
					</SlideInXLeftAnimation>
				</motion.div>
			</div>
			<motion.div
				viewport={{once: true}}
				initial={slideInRightInitial}
				whileInView={slideInRightFinish}
				className={styles.bottomContent}
			>
				<AnimatePresence mode="wait">
					<SlideUpDivMaskReveal triggerOnce={true} backgroundColor={"bg-lightGreyTwo"}>
						<Image
							alt={image?.altText}
							src={image?.sourceUrl}
							width={image?.mediaDetails?.width || 1000}
							height={image?.mediaDetails?.height || 1000}
							className={image?.sourceUrl ? styles.image : `hidden`}
						/>
					</SlideUpDivMaskReveal>
					<SlideInXRightAnimation className={styles.wrapper}>
						<motion.h5
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className={styles.titleTwo}
						>
							{titleTwo}
						</motion.h5>
						<Paragraph content={paragraphTwo} className={styles.paragraph} />
						</SlideInXRightAnimation>
				</AnimatePresence>
			</motion.div>
		</div>
	);
});

AboutSimba.displayName = 'AboutSimba';

export default AboutSimba;
