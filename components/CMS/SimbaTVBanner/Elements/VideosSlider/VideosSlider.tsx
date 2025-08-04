"use client";

// Imports
import {FC, Fragment} from "react";
import {motion, AnimatePresence} from "framer-motion";
import useOnDesktopView from "@/hooks/useOnDesktopView";
import {ISimbaTVBanner} from "@/components/CMS/SimbaTVBanner/types/index";

// Swiper.js Slider
import "swiper/css";
import "swiper/css/navigation";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";

// Styling
import styles from "@/components/CMS/SimbaTVBanner/styles/SimbaTVBanner.module.scss";

// Components
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";
import Slide from "@/components/CMS/SimbaTVBanner/Elements/VideosSlider/fragments/Slide";

const VideosSlider: FC<ISimbaTVBanner.IVideosSlider.IProps> = ({
	variants,
	transition,
	activeIndex,
	youtubeVideos,
	...motionProps
}) => {
	// State to track window width and check if on desktop
	const onDesktop = useOnDesktopView();

	return (
		<ScrollYProgressReveal className={styles.videosSlider + " SimbaTVBannerVideosSlider"}>
			<AnimatePresence
				initial={false}
				mode="popLayout"
				custom={motionProps?.custom}
			>
				<motion.ul
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
										<Slide
                                            index={index}
                                            status={item?.status}
                                            videoId={item?.videoId}
                                            snippet={item?.snippet}
                                            statistics={item?.statistics}
                                        />
									</SwiperSlide>
								</Fragment>
							))
						) : null}
					</Swiper>
				</motion.ul>
			</AnimatePresence>
		</ScrollYProgressReveal>
	);
};

export default VideosSlider;
