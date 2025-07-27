// Imports
import { FC, memo, Fragment} from "react";
import {IHero} from "@/components/CMS/Hero/types/index";

// Swiper.js Slider
import "swiper/css";
import "swiper/css/navigation";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";

// Styling
import styles from "@/components/CMS/Hero/styles/Hero.module.scss";

// Components
import Card from "@/components/CMS/Hero/fragments/Card";

const Hero: FC<IHero.IProps> = memo(({
	heroSlider
}) => {
	return (
		<div className={styles.hero}>
			<div className={styles.container}>
				<div className={styles.heroSwiperSlider + " HeroSwiperSlider"}>
					<Swiper
						loop={true}
						navigation={true}
						spaceBetween={30}
						centeredSlides={true}
						modules={[Autoplay, Navigation]}
						autoplay={{
							delay: 10000,
							disableOnInteraction: false,
						}}
					>
						{heroSlider?.length > 0 ? (
							heroSlider?.map((item: any, index: number) => (
								<Fragment key={index}>
									<SwiperSlide key={item.id || index}>
										<Card
											video={item?.video}
											title={item?.title}
											paragraph={item?.paragraph}
											buttonLink={item?.buttonLink}
											displayVideo={item?.displayVideo}
											buttonLinkTwo={item?.buttonLinkTwo}
											backgroundImage={item?.backgroundImage}
										/>
									</SwiperSlide>
								</Fragment>
							))) : (null)}
					</Swiper>
				</div>
			</div>
		</div>
	);
});

export default Hero;
