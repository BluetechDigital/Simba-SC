// Imports
import {FC, Fragment} from "react";
import {IClubPartners} from "@/types/components/index";
import useOnDesktopView from "@/hooks/useOnDesktopView";

// Swiper.js Slider
import "swiper/css";
import "swiper/css/navigation";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";

// Styling
import styles from "@/styles/pages/ClubPartners/Partners.module.scss";

const ImageSlider: FC<IClubPartners.IImageSlider> = ({imageSlider}) => {
	// State to track window width and check if on desktop
	const onDesktop = useOnDesktopView();

	return (
		<>
			<div className={styles.imageSlider}>
				<div className={styles.container}>
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
						{imageSlider?.length > 0 ? (
							imageSlider?.map((item: any, index: number) => (
								<Fragment key={index}>
									<SwiperSlide>
										<div
											className={styles.slide}
											style={{
												backgroundImage: `linear-gradient(0deg,rgb(0, 0, 0, 0.30),
														rgba(0, 0, 0, 0.10)),url("${item?.image?.sourceUrl}")`,
											}}
										/>
									</SwiperSlide>
								</Fragment>
							))
						) : (
							<></>
						)}
					</Swiper>
				</div>
			</div>
		</>
	);
};

export default ImageSlider;
