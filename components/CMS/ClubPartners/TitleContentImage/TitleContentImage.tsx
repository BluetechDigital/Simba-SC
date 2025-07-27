// Imports
import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {fadeIn, initialTwo} from "@/animations/animations";
import {ITitleContentImage} from "@/components/CMS/ClubPartners/TitleContentImage/types/index";

// Styling
import styles from "@/components/CMS/ClubPartners/TitleContentImage/styles/TitleContentImage.module.scss";

// Components
import Button from "@/components/Global/Elements/Button/Button";
import Paragraph from "@/components/Global/Elements/Paragraph/Paragraph";
import SlideInXLeftAnimation from "@/components/Animations/SlideInXLeftAnimation";
import SlideInXRightAnimation from "@/components/Animations/SlideInXRightAnimation";

const TitleContentImage: FC<ITitleContentImage.IProps> = ({
	title,
	image,
	paragraph,
	buttonLink,
 }) => {
	return (
		<div className={styles.titleContentImage}>
			<div className={styles.wrapper}>
				<SlideInXLeftAnimation className={styles.leftSection}>
					<div className={styles.content}>
						<motion.h5
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className={styles.title}
						>
							{title}
						</motion.h5>
						<Paragraph content={paragraph} className={styles.paragraph} />
						<Button styleNumber={2} link={buttonLink}/>
					</div>
				</SlideInXLeftAnimation>
				<SlideInXRightAnimation className={styles.rightSection}>
					<Image
						alt={image?.altText}
						src={image?.sourceUrl}
						className={styles.image}
						width={image?.mediaDetails?.width || 1000}
						height={image?.mediaDetails?.height || 1000}
					/>
				</SlideInXRightAnimation>
			</div>
		</div>
	);
};

export default TitleContentImage;
