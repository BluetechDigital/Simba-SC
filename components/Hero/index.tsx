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

const Hero: FC<IHero> = ({heroSlider}) => {
	return (
		<>
			<div
				className={
					styles.hero +
					" relative z-50 flex flex-col h-fit pt-[120px] lg:pt-[138px] bg-white"
				}
			>
				<div className="lg:relative flex flex-col">
					<div className="HeroSwiperSlider relative overflow-hidden">
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
											<div className="w-full p-0">
												<div
													className="pt-24 pb-44 sm:pb-20 w-full h-[87vh] flex flex-col items-center lg:items-baseline justify-center relative bg-center bg-no-repeat bg-cover"
													style={{
														backgroundImage: `linear-gradient(
																0deg,
																rgb(0, 0, 0, 0.30),
																rgba(0, 0, 0, 0.10)
															),url("${item?.backgroundImage?.sourceUrl}")`,
													}}
												>
													<div className="relative z-10 flex flex-col items-center lg:items-start gap-4 px-8 sm:px-4 lg:px-24">
														<div className="max-w-full lg:max-w-xl 2xl:max-w-5xl mx-auto lg:mx-0">
															<ContentSliceRevealMaskAnimation>
																<h1 className="font-OnestBlack text-center lg:text-left uppercase text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl tracking-[-0.02rem] text-white font-semibold leading-[0.90]">
																	{item?.title}
																</h1>
															</ContentSliceRevealMaskAnimation>
															<Paragraph
																content={item?.paragraph}
																className="max-w-xl mx-auto lg:mx-0 py-2 font-OnestRegular leading-tight text-white text-lg text-center lg:text-left"
															/>
														</div>
														<motion.div
															initial={initialTwo}
															whileInView={fadeIn}
															viewport={{once: true}}
															className="flex flex-col lg:flex-row items-center lg:items-baseline gap-2 sm:gap-4 max-w-sm lg:max-w-4xl mx-auto lg:mx-0"
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
