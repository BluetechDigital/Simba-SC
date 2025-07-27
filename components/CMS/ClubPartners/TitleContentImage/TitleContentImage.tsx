// Imports
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {fadeIn, initialTwo} from "@/animations/animations";
import {ITitleContentImage} from "@/components/CMS/ClubPartners/TitleContentImage/types/index";

// Styling
import styles from "@/components/CMS/ClubPartners/TitleContentImage/styles/TitleContentImage.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph/Paragraph";
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
						<Link
							href={`${buttonLink?.url}`}
							target={buttonLink?.target}
							aria-label={`${buttonLink?.title}`}
							className={`${
								buttonLink?.url
									? styles.buttonLink + " buttonStyling-alt-two"
									: "hidden"
							}`}
						>
							{buttonLink?.title}
						</Link>
					</div>
				</SlideInXLeftAnimation>
				<SlideInXRightAnimation className={styles.rightSection}>
					<Image
						className={styles.image}
						alt={image?.altText}
						src={image?.sourceUrl}
						width={
							image?.mediaDetails?.width ? image?.mediaDetails?.width : 1000
						}
						height={
							image?.mediaDetails?.height ? image?.mediaDetails?.height : 1000
						}
					/>
				</SlideInXRightAnimation>
			</div>
		</div>
	);
};

export default TitleContentImage;
