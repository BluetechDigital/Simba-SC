// Imports
import {
	initial,
	slideInLeftInitial,
	slideInRightFinish,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Link from "next/link";
import {FC, Fragment} from "react";
import dateFormat from "dateformat";
import {ISimbaTVBanner} from "@/types/components";
import {motion, AnimatePresence} from "framer-motion";
import useOnDesktopView from "@/hooks/useOnDesktopView";

// Swiper.js Slider
import "swiper/css";
import "swiper/css/navigation";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";

// Styling
import styles from "@/styles/components/SimbaTVBanner.module.scss";

// Components
import UseFormatNumber from "@/hooks/useFormatNumber";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";
import ContentSliceRevealMaskAnimation from "@/components/Animations/ContentSliceRevealMaskAnimation";

const VideosSlider: FC<ISimbaTVBanner.IVideosSlider> = ({
	variants,
	transition,
	activeIndex,
	youtubeVideos,
	...motionProps
}) => {
	// State to track window width and check if on desktop
	const onDesktop = useOnDesktopView();

	return (
		<ScrollYProgressReveal className={styles.videosSlider}>
			<AnimatePresence
				initial={false}
				mode="popLayout"
				custom={motionProps?.custom}
			>
				<motion.div
					exit="exit"
					initial="enter"
					animate="center"
					{...motionProps}
					key={activeIndex}
					variants={variants}
					transition={transition}
					className={styles.container}
				>
					<Swiper
						loop={true}
						navigation={true}
						spaceBetween={30}
						centeredSlides={true}
						modules={[Autoplay, Navigation]}
						slidesPerView={onDesktop ? 3 : 1}
						autoplay={{
							delay: 5000,
							disableOnInteraction: false,
						}}
					>
						{youtubeVideos?.length > 0 ? (
							youtubeVideos?.slice(0, 5)?.map((item: any, index: number) => (
								<Fragment key={index}>
									<SwiperSlide>
										<motion.li
											custom={index}
											initial={initial}
											whileInView="animate"
											viewport={{once: true}}
											variants={arrayLoopStaggerChildren}
											className={
												item?.snippet?.thumbnails?.high?.url ||
												item?.status?.privacyStatus == "public"
													? styles.li
													: "hidden"
											}
										>
											<Link
												target="_blank"
												href={`https://www.youtube.com/watch?v=${item?.videoId}`}
												aria-label={`${item?.snippet?.channelTitle}: ${item?.snippet?.title}`}
											>
												<div
													className={styles.card + " group"}
													style={{
														backgroundImage: `linear-gradient(0deg,rgba(0, 0, 0, 0.70),rgba(0, 0, 0, 0.60),
														rgba(0, 0, 0, 0.50),rgba(0, 0, 0, 0.30),rgba(0, 0, 0, 0.20),
														rgba(0, 0, 0, 0.15)),url("${item?.snippet?.thumbnails?.high?.url}")`,
													}}
												>
													<div className={styles.wrapper}>
														<motion.span
															className={styles.date}
															viewport={{once: false}}
															initial={slideInLeftInitial}
															whileInView={slideInRightFinish}
														>
															{dateFormat(
																item?.snippet?.publishedAt,
																"dddd, mmmm d, yyyy"
															)}
														</motion.span>
														<span className={styles.div}></span>
														<ContentSliceRevealMaskAnimation>
															<h5 className={styles.title}>
																{item?.snippet?.title}
															</h5>
														</ContentSliceRevealMaskAnimation>
														<div className={styles.likeCountStats}>
															<div className={styles.items}>
																<UseFormatNumber
																	decimals={2}
																	number={item?.statistics?.likeCount}
																	className={
																		styles.likeCount +
																		` text-white group-hover:text-white border-white group-hover:border-tertiary-default`
																	}
																/>
																<svg
																	viewBox="0 0 24 24"
																	xmlns="http://www.w3.org/2000/svg"
																	className={styles.likeCountSvg}
																>
																	<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
																	<g
																		id="SVGRepo_tracerCarrier"
																		strokeLinecap="round"
																		strokeLinejoin="round"
																	></g>
																	<g id="SVGRepo_iconCarrier">
																		<g>
																			<path
																				fill="none"
																				d="M0 0h24v24H0z"
																			></path>
																			<path d="M2 9h3v12H2a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1zm5.293-1.293l6.4-6.4a.5.5 0 0 1 .654-.047l.853.64a1.5 1.5 0 0 1 .553 1.57L14.6 8H21a2 2 0 0 1 2 2v2.104a2 2 0 0 1-.15.762l-3.095 7.515a1 1 0 0 1-.925.619H8a1 1 0 0 1-1-1V8.414a1 1 0 0 1 .293-.707z"></path>
																		</g>
																	</g>
																</svg>
															</div>
															<div className={styles.items}>
																<UseFormatNumber
																	decimals={2}
																	number={item?.statistics?.commentCount}
																	className={
																		styles.likeCount +
																		` text-white group-hover:text-white border-white group-hover:border-tertiary-default`
																	}
																/>
																<svg
																	version="1.1"
																	viewBox="0 0 32 32"
																	xmlns="http://www.w3.org/2000/svg"
																	className={styles.commentCountSvg}
																>
																	<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
																	<g
																		id="SVGRepo_tracerCarrier"
																		strokeLinecap="round"
																		strokeLinejoin="round"
																	></g>
																	<g id="SVGRepo_iconCarrier">
																		<g
																			id="Page-1"
																			stroke="none"
																			strokeWidth="1"
																			fill="none"
																			fillRule="evenodd"
																		>
																			<g
																				id="Icon-Set-Filled"
																				className="fill-white"
																				transform="translate(-102.000000, -257.000000)"
																			>
																				<path
																					d="M118,257 C109.164,257 102,263.269 102,271 C102,275.419 104.345,279.354 108,281.919 L108,289 L115.009,284.747 C115.979,284.907 116.977,285 118,285 C126.836,285 134,278.732 134,271 C134,263.269 126.836,257 118,257"
																					id="comment-1"
																				></path>
																			</g>
																		</g>
																	</g>
																</svg>
															</div>
														</div>
													</div>
												</div>
											</Link>
										</motion.li>
									</SwiperSlide>
								</Fragment>
							))
						) : (
							<></>
						)}
					</Swiper>
				</motion.div>
			</AnimatePresence>
		</ScrollYProgressReveal>
	);
};

export default VideosSlider;
