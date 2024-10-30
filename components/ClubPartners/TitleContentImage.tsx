// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IClubPartners} from "@/types/components/index";
import {fadeIn, initialTwo} from "@/animations/animations";

// Styling
import styles from "@/styles/pages/ClubPartners/Partners.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import SlideInXLeftAnimation from "@/components/Animations/SlideInXLeftAnimation";
import SlideInXRightAnimation from "@/components/Animations/SlideInXRightAnimation";

const TitleContentImage: FC<IClubPartners.ITitleContentImage> = ({
	title,
	image,
	paragraph,
	buttonLink,
}) => {
	return (
		<>
			<div className={styles.titleContentImage}>
				<div className={styles.wrapper}>
					<SlideInXLeftAnimation className="w-full lg:w-1/2 p-4">
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
					<SlideInXRightAnimation className="w-full lg:w-1/2 p-4">
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
		</>
	);
};

export default TitleContentImage;
