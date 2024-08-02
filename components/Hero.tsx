"use client";

// Imports
import Link from "next/link";
import {motion} from "framer-motion";
import {FC, Fragment, Suspense} from "react";
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
import LastThreeFixtures from "@/components/Sub/LastThreeFixtures";

const Hero: FC<IHero> = ({heroSlider}) => {
	return (
		<>
			<div
				className={
					styles.hero +
					" relative z-50 flex flex-col h-fit pt-[120px] lg:pt-[138px]"
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
													className="pt-24 pb-44 sm:pb-20 w-full h-[75vh] lg:h-[87vh] flex flex-col items-center lg:items-baseline justify-center relative bg-center bg-no-repeat bg-cover"
													style={{
														backgroundImage: `linear-gradient(
																0deg,
																rgb(0, 0, 0, 0.30),
																rgba(0, 0, 0, 0.10)
															),url("${item?.backgroundImage?.sourceUrl}")`,
													}}
												>
													<div className="relative z-10 flex flex-col items-center lg:items-start gap-4 px-8 sm:px-8 lg:px-24">
														<div className="max-w-sm lg:max-w-xl 2xl:max-w-5xl mx-auto lg:mx-0">
															<motion.h1
																initial={initialTwo}
																whileInView={fadeIn}
																viewport={{once: true}}
																className="font-OnestBlack text-center lg:text-left uppercase text-3xl lg:text-7xl 2xl:text-8xl tracking-[-0.02rem] text-white font-semibold leading-tight xl:leading-[3.75rem]"
															>
																{item?.title}
															</motion.h1>
															<Paragraph
																content={item?.paragraph}
																tailwindStyling="max-w-xl mx-auto lg:mx-0 py-2 font-OnestRegular leading-tight text-white text-lg text-center lg:text-left"
															/>
														</div>
														<div className="flex flex-col md:flex-row items-center lg:items-baseline gap-2 sm:gap-4 max-w-sm lg:max-w-4xl mx-auto lg:mx-0">
															<Link
																href={`${item?.buttonLink?.url}`}
																target={item?.buttonLink?.target}
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
																className={`${
																	item?.buttonLinkTwo?.url
																		? "buttonStyling"
																		: "hidden"
																}`}
															>
																{item?.buttonLinkTwo?.title}
															</Link>
														</div>
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
					{/* <Suspense fallback={"...Loading "}>
						<LastThreeFixtures />
					</Suspense> */}
				</div>
			</div>
		</>
	);
};

export default Hero;
