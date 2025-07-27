"use client";

// Imports
import {
	fadeIn,
	initial,
	initialTwo,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {FC, Fragment, Suspense} from "react";
import {useGlobalContext} from "@/context/global";

// Styling
import styles from "@/components/CMS/VisitStore/styles/VisitStore.module.scss";

// Components
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";

const Card: FC = () => {
	const globalContext = useGlobalContext();
	return (
		<ul className={styles.visitStoreCard}>
			<Suspense fallback={"Loading..."}>
				{globalContext?.onlineStoreShirts?.length > 0 ? (
					globalContext?.onlineStoreShirts
						?.slice(0, 4)
						?.map((item: any, index: number) => (
							<Fragment key={item?.id || index}>
								<ScrollYProgressReveal className={styles.content}>
									<motion.li
										initial={initial}
										whileInView="animate"
										className={styles.li}
										viewport={{once: true}}
										custom={item?.id || index}
										variants={arrayLoopStaggerChildren}
									>
										<Link
											target="_blank"
											className={styles.link}
											aria-label={`${item?.title}`}
											// href={`store.simbasc.co.tz/${item?.slug}`}
											href={`https://simba-sc-store.vercel.app/search`}
										>
											<Image
												src={item?.image?.sourceUrl}
												alt={`${item?.image?.altText}`}
												width={item?.image?.mediaDetails?.width || 1000}
												height={item?.image?.mediaDetails?.height || 1000}
												className={item?.image?.sourceUrl ? styles.image : `hidden`}
											/>
											<div className={styles.wrapper}>
												<motion.h5
													initial={initialTwo}
													whileInView={fadeIn}
													viewport={{once: true}}
													className={styles.title}
												>
													{item?.title}
												</motion.h5>
												<div className={styles.currencyPriceWrapper}>
													<span className="font-Inter">
														{item?.currency === "USD" ? "$" : "£"}
													</span>
													<span>{item?.price}</span>
												</div>
												<span
													className={`${
														item?.slug
															? styles.slugLink +
															  " buttonStyling-alt-two-slim"
															: "hidden"
													}`}
												>
													Buy Now
												</span>
											</div>
										</Link>
									</motion.li>
								</ScrollYProgressReveal>
							</Fragment>
						))
				) : (
					<></>
				)}
			</Suspense>
		</ul>
	);
};

Card.displayName = 'VisitStoreCard';

export default Card;
