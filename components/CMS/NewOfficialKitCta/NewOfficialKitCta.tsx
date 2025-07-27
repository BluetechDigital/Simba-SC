// Imports
import {
	fadeIn,
	initialTwo,
	slideInRightFinish,
	slideInLeftInitial,
	slideInRightInitial,
 } from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
import { FC, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {INewOfficialKitCta} from "@/components/CMS/NewOfficialKitCta/types/index";

// Styling
import styles from "@/components/CMS/NewOfficialKitCta/styles/NewOfficialKitCta.module.scss";

// Components
import Button from "@/components/Global/Elements/Button/Button";
import SlideUpDivMaskReveal from "@/components/Animations/SlideUpDivMaskReveal/SlideUpDivMaskReveal";
import ContentSliceRevealMaskAnimation from "@/components/Animations/ContentSliceRevealMaskAnimation";

const NewOfficialKitCta: FC<INewOfficialKitCta.IProps> = memo(({
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
									<Button styleNumber={0} link={link}/>
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
										<AnimatePresence mode="wait">
											<SlideUpDivMaskReveal
												triggerOnce={true}
												className={styles.wrapper}
												backgroundColor={"bg-pureBlack"}
											>
												<Image
													src={image?.sourceUrl}
													className={styles.image}
													alt={`${image?.altText}`}
													width={image?.mediaDetails?.width || 1000}
													height={image?.mediaDetails?.height || 1000}
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
											</SlideUpDivMaskReveal>
										</AnimatePresence>
									</Link>
								</div>
								<div className={styles.bottom}>
									<Link
										href={`${link?.url}`}
										target={link?.target}
										aria-label={`${link?.title}`}
										className="group"
									>
										<AnimatePresence mode="wait">
											<SlideUpDivMaskReveal
												triggerOnce={true}
												className={styles.wrapper}
												backgroundColor={"bg-pureBlack"}
											>
												<Image
													src={imageTwo?.sourceUrl}
													className={styles.image}
													alt={`${imageTwo?.altText}`}
													width={imageTwo?.mediaDetails?.width || 1000}
													height={imageTwo?.mediaDetails?.height || 1000}
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
											</SlideUpDivMaskReveal>
										</AnimatePresence>
									</Link>
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});

NewOfficialKitCta.displayName = 'NewOfficialKitCta';

export default NewOfficialKitCta;
