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

// Components
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";

const VisitStoreCard: FC = () => {
	const globalContext = useGlobalContext();
	return (
		<>
			<ul className="py-0 grid grid-cols-1 lg:grid-cols-3 gap-4 items-center justify-center lg:gap-4">
				<Suspense fallback={"Loading..."}>
					{globalContext?.onlineStoreShirts?.length > 0 ? (
						globalContext?.onlineStoreShirts
							?.slice(0, 3)
							?.map((item: any, index: number) => (
								<Fragment key={item?.id ? item?.id : index}>
									<ScrollYProgressReveal>
										<motion.li
											initial={initial}
											whileInView="animate"
											viewport={{once: true}}
											custom={item?.id ? item?.id : index}
											variants={arrayLoopStaggerChildren}
											className="w-full h-full min-h-[400px] px-5 py-6 bg-white"
										>
											<Link
												target="_blank"
												aria-label={`${item?.title}`}
												href={`store.simbasc.co.tz/${item?.slug}`}
												className="flex flex-col items-center justify-start gap-6"
											>
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
														item?.image?.sourceUrl
															? `block w-full h-full min-h-[150px] max-h-[400px] object-cover object-center`
															: `hidden`
													}
												/>
												<div className="flex flex-col gap-2 py-4">
													<motion.h5
														initial={initialTwo}
														whileInView={fadeIn}
														viewport={{once: true}}
														className="font-OnestBold text-pureBlack text-lg hover:text-primary-default  transition-all duration-200 ease-in-out"
													>
														{item?.title}
													</motion.h5>
													<div className="flex items-center justify-center gap-[1px] font-OnestRegular text-pureBlack text-paragraph">
														<span>{item?.currency === "USD" ? "$" : "£"}</span>
														<span>{item?.price}</span>
													</div>
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
		</>
	);
};

export default VisitStoreCard;
