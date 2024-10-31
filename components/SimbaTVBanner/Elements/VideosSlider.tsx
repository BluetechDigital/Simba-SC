// Imports
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {ISimbaTVBanner} from "@/types/components";
import {motion, AnimatePresence} from "framer-motion";
import useOnDesktopView from "@/hooks/useOnDesktopView";
import {arrayLoopStaggerChildren, initial} from "@/animations/animations";

// Swiper.js Slider
import "swiper/css";
import "swiper/css/navigation";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";

// Styling
import styles from "@/styles/components/SimbaTVBanner.module.scss";

// Components
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";

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
												<Image
													alt={`${item?.image?.altText}`}
													src={item?.snippet?.thumbnails?.maxres?.url}
													width={
														item?.snippet?.thumbnails?.maxres?.width
															? item?.snippet?.thumbnails?.maxres?.width
															: 500
													}
													height={
														item?.snippet?.thumbnails?.maxres?.height
															? item?.snippet?.thumbnails?.maxres?.height
															: 500
													}
													className={
														item?.snippet?.thumbnails?.maxres?.url
															? styles.thumbnails
															: `hidden`
													}
												/>
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
