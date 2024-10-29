// Imports
import {
	fadeIn,
	initialTwo,
	slideInLeftInitial,
	slideInRightFinish,
	slideInRightInitial,
} from "@/animations/animations";
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IAbout} from "@/types/components/index";

// Styling
import styles from "@/styles/components/About.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";
import SlideInXLeftAnimation from "@/components/Animations/SlideInXLeftAnimation";
import SlideInXRightAnimation from "@/components/Animations/SlideInXRightAnimation";

const AboutSimba: FC<IAbout.ISimbaProps> = ({
	title,
	image,
	titleTwo,
	paragraph,
	buttonLink,
	paragraphTwo,
}) => {
	return (
		<>
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
					<ScrollYProgressReveal>
						<Image
							src={image?.sourceUrl}
							alt={`${image?.altText}`}
							width={
								image?.mediaDetails?.width ? image?.mediaDetails?.width : 500
							}
							height={
								image?.mediaDetails?.height ? image?.mediaDetails?.height : 500
							}
							className={image?.sourceUrl ? styles.image : `hidden`}
						/>
					</ScrollYProgressReveal>
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
				</motion.div>
			</div>
		</>
	);
};

export default AboutSimba;
