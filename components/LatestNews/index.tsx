"use client";

// Imports
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {ILatestNews} from "@/types/components/index";
import {initial, arrayLoopStaggerChildren} from "@/animations/animations";

// Styling
import styles from "@/styles/components/LatestNews.module.scss";

// Components
import Card from "@/components/LatestNews/Cards/Card";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";
import ContentSliceRevealMaskAnimation from "@/components/Animations/ContentSliceRevealMaskAnimation";

const LatestNewsGrid: FC<ILatestNews.IGridProps> = ({
	title,
	image,
	ctaLink,
	buttonLink,
}) => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div className={styles.latestNewsGrid}>
				<ContentSliceRevealMaskAnimation>
					<h2 className={styles.title}>{title}</h2>
				</ContentSliceRevealMaskAnimation>
				<div className={styles.gridsWrapper}>
					<div className={styles.gridOne}>
						{globalContext?.news?.length > 0 ? (
							globalContext?.news
								?.slice(1, 3)
								?.map((item: any, index: number) => (
									<Fragment key={index}>
										<motion.div
											custom={index}
											initial={initial}
											className="w-full"
											whileInView="animate"
											viewport={{once: true}}
											variants={arrayLoopStaggerChildren}
										>
											<Card
												className={styles.card}
												slug={item?.node?.slug}
												date={item?.node?.date}
												title={item?.node?.title}
												featuredImage={item?.node?.featuredImage}
											/>
										</motion.div>
									</Fragment>
								))
						) : (
							<></>
						)}
						<Link
							href={`${ctaLink?.url}`}
							target={ctaLink?.target}
							aria-label={`${ctaLink?.title}`}
							className="block lg:hidden"
						>
							<Image
								src={image?.sourceUrl}
								alt={`${image?.altText}`}
								width={
									image?.mediaDetails?.width ? image?.mediaDetails?.width : 500
								}
								height={
									image?.mediaDetails?.height
										? image?.mediaDetails?.height
										: 500
								}
								className={image?.sourceUrl ? styles.image : `hidden`}
							/>
						</Link>
					</div>
					<div className={styles.gridTwo}>
						{globalContext?.news?.length > 0 ? (
							globalContext?.news
								?.slice(0, 1)
								?.map((item: any, index: number) => (
									<Fragment key={index}>
										<motion.div
											custom={index}
											initial={initial}
											className="w-full"
											whileInView="animate"
											viewport={{once: true}}
											variants={arrayLoopStaggerChildren}
										>
											<Card
												className={styles.card}
												slug={item?.node?.slug}
												date={item?.node?.date}
												title={item?.node?.title}
												featuredImage={item?.node?.featuredImage}
											/>
										</motion.div>
									</Fragment>
								))
						) : (
							<></>
						)}
					</div>
					<div className={styles.gridThree}>
						<Link
							href={`${ctaLink?.url}`}
							target={ctaLink?.target}
							aria-label={`${ctaLink?.title}`}
						>
							<Image
								src={image?.sourceUrl}
								alt={`${image?.altText}`}
								width={
									image?.mediaDetails?.width ? image?.mediaDetails?.width : 500
								}
								height={
									image?.mediaDetails?.height
										? image?.mediaDetails?.height
										: 500
								}
								className={image?.sourceUrl ? styles.image : `hidden`}
							/>
						</Link>
						<div className={styles.gridContent}>
							{globalContext?.news?.length > 0 ? (
								globalContext?.news
									?.slice(3, 5)
									?.map((item: any, index: number) => (
										<Fragment key={index}>
											<motion.div
												custom={index}
												initial={initial}
												className="w-full"
												whileInView="animate"
												viewport={{once: true}}
												variants={arrayLoopStaggerChildren}
											>
												<Card
													slug={item?.node?.slug}
													date={item?.node?.date}
													className={styles.card}
													title={item?.node?.title}
													featuredImage={item?.node?.featuredImage}
												/>
											</motion.div>
										</Fragment>
									))
							) : (
								<></>
							)}
						</div>
					</div>
				</div>
				<ScrollYProgressReveal className={styles.buttonLink}>
					<Link
						href={`${buttonLink?.url}`}
						target={buttonLink?.target}
						className={`${
							buttonLink?.url ? styles.link + " buttonStyling-alt" : "hidden"
						}`}
					>
						{buttonLink?.title}
					</Link>
				</ScrollYProgressReveal>
			</div>
		</>
	);
};

export default LatestNewsGrid;
