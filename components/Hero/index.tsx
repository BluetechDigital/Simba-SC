// Imports
import Link from "next/link";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IHero} from "@/types/components/index";
import {fadeIn, initialTwo} from "@/animations/animations";

// Swiper.js Slider
import "swiper/css";
import "swiper/css/navigation";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";

// Styling
import styles from "@/styles/components/Hero.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import ContentSliceRevealMaskAnimation from "@/components/Animations/ContentSliceRevealMaskAnimation";

const Hero: FC<IHero.IHero> = ({heroSlider}) => {
	return (
		<>
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
										<SwiperSlide>
											<div className={styles.slide}>
												<div
													className={styles.contentWrapper}
													style={{
														backgroundImage: `linear-gradient(0deg,rgb(0, 0, 0, 0.30),
														rgba(0, 0, 0, 0.10)),url("${item?.backgroundImage?.sourceUrl}")`,
													}}
												>
													<div className={styles.content}>
														<div className={styles.top}>
															<ContentSliceRevealMaskAnimation>
																<h1 className={styles.title}>{item?.title}</h1>
															</ContentSliceRevealMaskAnimation>
															<Paragraph
																content={item?.paragraph}
																className={styles?.paragraph}
															/>
														</div>
														<motion.div
															initial={initialTwo}
															whileInView={fadeIn}
															viewport={{once: true}}
															className={styles.bottom}
														>
															<Link
																href={`${item?.buttonLink?.url}`}
																target={item?.buttonLink?.target}
																aria-label={`${item?.buttonLink?.title}`}
																className={`${
																	item?.buttonLink?.url
																		? "buttonStyling"
																		: "hidden"
																}`}
															>
																{item?.buttonLink?.title}
															</Link>
															<Link
																href={`${item?.buttonLinkTwo?.url}`}
																target={item?.buttonLinkTwo?.target}
																aria-label={`${item?.buttonLinkTwo?.title}`}
																className={`${
																	item?.buttonLinkTwo?.url
																		? "buttonStyling"
																		: "hidden"
																}`}
															>
																{item?.buttonLinkTwo?.title}
															</Link>
														</motion.div>
													</div>
												</div>
											</div>
										</SwiperSlide>
									</Fragment>
								))
							) : (
								<></>
							)}
						</Swiper>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
