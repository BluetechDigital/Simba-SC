// Imports
import {
	fadeIn,
	initialTwo,
	slideInRightFinish,
	slideInLeftInitial,
	slideInRightInitial,
} from "@/animations/animations";
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {INewOfficialKitCta} from "@/types/components/index";

// Styling
import styles from "@/styles/components/NewOfficialKitCta.module.scss";

// Components
import ContentSliceRevealMaskAnimation from "@/components/Animations/ContentSliceRevealMaskAnimation";

const NewOfficialKitCta: FC<INewOfficialKitCta> = ({
	title,
	link,
	image,
	ctaTitle,
	imageTwo,
}) => {
	return (
		<div
			className={styles.newOfficialKitCta}
			style={{
				backgroundImage: `url("/svg/background/stacked-steps-haikei-red.svg")`,
			}}
		>
			<div className={styles.container}>
				<ContentSliceRevealMaskAnimation>
					<h2 className={styles.title}>{title}</h2>
				</ContentSliceRevealMaskAnimation>
				<div className={styles.contentWrapper}>
					<div className={styles.content}>
						<div className={styles.leftSection}>
							<motion.div
								viewport={{once: true}}
								initial={slideInLeftInitial}
								whileInView={slideInRightFinish}
								className={styles.section}
							>
								<motion.h2
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className={styles.ctaTitle}
								>
									{ctaTitle}
								</motion.h2>
								<motion.div
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className={styles.buttonLink}
								>
									<Link
										href={`${link?.url}`}
										target={link?.target}
										aria-label={`${link?.title}`}
										className={`${link?.url ? "buttonStyling" : "hidden"}`}
									>
										{link?.title}
									</Link>
								</motion.div>
							</motion.div>
						</div>
						<div className={styles.rightSection}>
							<motion.div
								viewport={{once: true}}
								className={styles.section}
								initial={slideInRightInitial}
								whileInView={slideInRightFinish}
							>
								<div className={styles.top}>
									<Link
										href={`${link?.url}`}
										target={link?.target}
										aria-label={`${link?.title}`}
										className="group"
									>
										<div className={styles.wrapper}>
											<Image
												src={image?.sourceUrl}
												alt={`${image?.altText}`}
												width={
													image?.mediaDetails?.width
														? image?.mediaDetails?.width
														: 500
												}
												height={
													image?.mediaDetails?.height
														? image?.mediaDetails?.height
														: 500
												}
												className={styles.image}
											/>
											<div className={styles.content}>
												<span className={styles.divider}></span>
												<motion.h3
													initial={initialTwo}
													whileInView={fadeIn}
													viewport={{once: true}}
													className={styles.text}
												>
													t-shirt woman
												</motion.h3>
											</div>
										</div>
									</Link>
								</div>
								<div className={styles.bottom}>
									<Link
										href={`${link?.url}`}
										target={link?.target}
										aria-label={`${link?.title}`}
										className="group"
									>
										<div className={styles.wrapper}>
											<Image
												src={imageTwo?.sourceUrl}
												alt={`${imageTwo?.altText}`}
												width={
													imageTwo?.mediaDetails?.width
														? imageTwo?.mediaDetails?.width
														: 500
												}
												height={
													imageTwo?.mediaDetails?.height
														? imageTwo?.mediaDetails?.height
														: 500
												}
												className={styles.image}
											/>
											<div className={styles.content}>
												<span className={styles.divider}></span>
												<motion.h3
													initial={initialTwo}
													whileInView={fadeIn}
													viewport={{once: true}}
													className={styles.text}
												>
													Away Kit 24/25
												</motion.h3>
											</div>
										</div>
									</Link>
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewOfficialKitCta;
