// Imports
import {
	initial,
	slideInLeftInitial,
	slideInRightFinish,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
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
												item?.snippet?.thumbnails?.maxres?.url ||
												item?.status?.privacyStatus == "public"
													? styles.li
													: "hidden"
											}
										>
											<Link
												target="_blank"
												href={`https://www.youtube.com/channel/UC3W0zHzX_Iu3lJ20bOfYUeA/`}
												aria-label={`${item?.snippet?.channelTitle}: ${item?.snippet?.title}`}
											>
												<div
													className={styles.card}
													style={{
														backgroundImage: `linear-gradient(0deg,rgba(0, 0, 0, 0.70),rgba(0, 0, 0, 0.60),
														rgba(0, 0, 0, 0.50),rgba(0, 0, 0, 0.30),rgba(0, 0, 0, 0.20),
														rgba(0, 0, 0, 0.15)),url("${item?.snippet?.thumbnails?.maxres?.url}")`,
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
