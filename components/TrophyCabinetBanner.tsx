// Imports
import {
	fadeIn,
	initial,
	initialTwo,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {ITrophyCabinetBanner} from "@/types/components/index";

// Styling
import styles from "@/styles/components/TrophyCabinetBanner.module.scss";

// Components
import Title from "@/components/Elements/Title";
import CountUp from "@/components/Elements/CountUp";
import Paragraph from "@/components/Elements/Paragraph";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";
import SlideInXRightAnimation from "@/components/Animations/SlideInXRightAnimation";
import ContentSliceRevealMaskAnimation from "@/components/Animations/ContentSliceRevealMaskAnimation";

const TrophyCabinetBanner: FC<ITrophyCabinetBanner> = ({
	title,
	paragraph,
	buttonLink,
	trophyCabinet,
	backgroundImage,
}) => {
	return (
		<>
			<div
				className={styles.trophyCabinetBanner}
				style={{
					backgroundImage: `url("/svg/background/stacked-steps-haikei-lightgrey.svg")`,
				}}
			>
				<div className={styles.container}>
					<div>
						<ContentSliceRevealMaskAnimation>
							<Title content={title} className={styles.title} />
						</ContentSliceRevealMaskAnimation>
						<Paragraph content={paragraph} className={styles.paragraph} />
					</div>
					<div className={styles.content}>
						<div className={styles.cardWrapper}>
							<ScrollYProgressReveal className={styles.trophyCabinetWrapper}>
								{trophyCabinet?.length > 0 ? (
									trophyCabinet?.map((item: any, index: number) => (
										<Fragment key={index}>
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
														src={item?.image?.sourceUrl}
														alt={`${item?.image?.altText}`}
														width={
															item?.image?.mediaDetails?.width
																? item?.image?.mediaDetails?.width
																: 500
														}
														height={
															item?.image?.mediaDetails?.height
																? item?.image?.mediaDetails?.height
																: 500
														}
														className={
															item?.image?.sourceUrl ? styles.image : `hidden`
														}
													/>
													<CountUp
														decimals={0}
														number={item?.totalAmount}
														className={styles.totalAmount}
													/>
												</div>
												<motion.h4
													initial={initialTwo}
													whileInView={fadeIn}
													viewport={{once: true}}
													className={styles.name}
												>
													{item?.name}
												</motion.h4>
											</motion.div>
										</Fragment>
									))
								) : (
									<></>
								)}
							</ScrollYProgressReveal>
							<ScrollYProgressReveal className={styles.buttonLink}>
								<Link
									href={`${buttonLink?.url}`}
									target={buttonLink?.target}
									className={`${
										buttonLink?.url
											? styles.link + " buttonStyling-alt"
											: "hidden"
									}`}
								>
									{buttonLink?.title}
								</Link>
							</ScrollYProgressReveal>
						</div>
						<SlideInXRightAnimation className={styles.imageWrapper}>
							<Image
								src={backgroundImage?.sourceUrl}
								alt={`${backgroundImage?.altText}`}
								width={
									backgroundImage?.mediaDetails?.width
										? backgroundImage?.mediaDetails?.width
										: 500
								}
								height={
									backgroundImage?.mediaDetails?.height
										? backgroundImage?.mediaDetails?.height
										: 500
								}
								className={backgroundImage?.sourceUrl ? styles.image : `hidden`}
							/>
						</SlideInXRightAnimation>
					</div>
				</div>
			</div>
		</>
	);
};

export default TrophyCabinetBanner;
