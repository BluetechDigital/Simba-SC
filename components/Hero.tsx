// Imports
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IHero} from "@/types/components/index";
import {fadeIn, initialTwo} from "../animations/animations";

// Swiper.js Slider
import "swiper/css";
import "swiper/css/navigation";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";

// Styling
import styles from "../styles/components/Hero.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const Hero: FC<IHero> = ({heroSlider}) => {
	return (
		<>
			<div className={styles.hero + " relative z-50 flex flex-col h-fit"}>
				<div className="lg:relative pt-[138px] flex flex-col lg:flex-row">
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
								heroSlider?.map((item: any, keys: number) => (
									<Fragment key={keys}>
										<SwiperSlide>
											<div className="w-full p-0">
												<div
													className="pt-24 pb-44 sm:pb-20 w-full h-[75vh] sm:h-[75vh] lg:h-[86vh] flex flex-col items-center lg:items-baseline justify-center relative bg-center bg-no-repeat bg-cover"
													style={{
														backgroundImage: `linear-gradient(
																0deg,
																rgb(0, 0, 0, 0.30),
																rgba(0, 0, 0, 0.30),
																rgba(0, 0, 0, 0.30)
															),url("${item?.backgroundImage?.sourceUrl}")`,
													}}
												>
													<div className="relative z-10 flex flex-col items-center lg:items-start gap-4 px-8 px-4 sm:px-8 lg:px-24">
														<div className="max-w-sm lg:max-w-xl mx-auto lg:mx-0 ">
															<motion.h1
																initial={initialTwo}
																whileInView={fadeIn}
																viewport={{once: true}}
																className="font-XenonNueExtraBold text-center lg:text-left uppercase text-medium sm:text-lg md:text-3xl lg:text-5xl xl:text-7xl tracking-[0.10rem] text-white font-semibold xl:leading-[2.5rem]"
															>
																{item?.title}
															</motion.h1>
															<Paragraph
																content={item?.paragraph}
																tailwindStyling="py-2 font-XenonNueRegular leading-snug text-white text-lg text-center lg:text-left"
															/>
														</div>
														<div className="flex flex-col md:flex-row gap-2 sm:gap-4 max-w-sm lg:max-w-4xl mx-auto lg:mx-0">
															<Link
																href={`${item?.buttonLink?.url}`}
																target={item?.buttonLink?.target}
																className={`${
																	item?.buttonLink?.url ? "block" : "hidden"
																}`}
															>
																<div
																	className={`py-4 pl-4 pr-10 w-full mx-auto lg:mx-0 cursor-pointer bg-blue-default hover:bg-blue-dark transition-all ease-in-out duration-500`}
																>
																	<h3 className="relative flex items-center justify-center font-semibold tracking-[0.10rem] uppercase pl-4 text-lightGrey text-tiny text-center">
																		{item?.buttonLink?.title}
																		<Image
																			width={550}
																			height={550}
																			alt="Black Arrow Icon"
																			src="/svg/navigation-menu-dropdown-arrow-white.svg"
																			className="my-auto ml-2 absolute top-[-20px] right-[-40px] rotate-[-135deg] cursor-pointer w-[35px] h-[35px] object-contain object-center"
																		/>
																	</h3>
																</div>
															</Link>
															<Link
																href={`${item?.buttonLinkTwo?.url}`}
																target={item?.buttonLinkTwo?.target}
																className={`${
																	item?.buttonLinkTwo?.url ? "block" : "hidden"
																}`}
															>
																<div
																	className={`py-4 pl-4 pr-10 w-full mx-auto lg:mx-0 cursor-pointer bg-blue-default hover:bg-blue-dark transition-all ease-in-out duration-500`}
																>
																	<h3 className="relative flex items-center justify-center font-semibold tracking-[0.10rem] uppercase pl-4 text-lightGrey text-tiny text-center">
																		{item?.buttonLinkTwo?.title}
																		<Image
																			width={550}
																			height={550}
																			alt="Black Arrow Icon"
																			src="/svg/navigation-menu-dropdown-arrow-white.svg"
																			className="my-auto ml-2 absolute top-[-20px] right-[-40px] rotate-[-135deg] cursor-pointer w-[35px] h-[35px] object-contain object-center"
																		/>
																	</h3>
																</div>
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
				</div>
			</div>
		</>
	);
};

export default Hero;
