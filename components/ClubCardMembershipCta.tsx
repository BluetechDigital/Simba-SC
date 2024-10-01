// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import fadeInUp, {initial} from "@/animations/animations";
import {IClubCardMembershipCTA} from "@/types/components/index";

// Styling
import styles from "@/styles/components/OfficialMembershipsCta.module.scss";

// Components
import Title from "@/components/Elements/Title";
import Paragraph from "@/components/Elements/Paragraph";
import LatestNewsGridCard from "@/components/LatestNews/Cards/Card";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";
import ContentSliceRevealMaskAnimation from "@/components/Animations/ContentSliceRevealMaskAnimation";

const ClubCardMembershipCTA: FC<IClubCardMembershipCTA> = ({
	title,
	video,
	buttonLink,
	displayVideo,
	backgroundImage,
	clubCardMembershipText,
}) => {
	return (
		<>
			<div
				className={
					styles.clubCardMembershipCta +
					" clubCardMembershipCta bg-white bg-no-repeat bg-cover bg-center"
				}
				style={{
					backgroundImage: `url("/svg/background/layered-peaks-haikei-red.svg")`,
				}}
			>
				<div className="lg:max-w-[1700px] mx-auto py-14 px-4 flex flex-col gap-8">
					<div className="flex flex-col items-center justify-between">
						<ContentSliceRevealMaskAnimation>
							<Title
								content={title}
								className="title w-full mb-5 max-w-3xl mx-auto font-schaboCondensed text-center uppercase text-7xl sm:text-8xl tracking-[-0.05rem] text-pureBlack leading-tight xl:leading-[4.5rem]"
							/>
						</ContentSliceRevealMaskAnimation>
					</div>
					<div className="flex flex-col lg:flex-row items-center justify-center gap-16">
						<motion.div
							className="relative w-full h-[65vh] lg:h-[75vh] lg:aspect-[16/9] aspect-[9/16] flex flex-col items-center justify-center bg-white bg-no-repeat bg-center bg-cover overflow-hidden"
							style={{
								backgroundImage: `linear-gradient(0deg,rgba(234, 29, 37, 0),rgba(234, 29, 37, 0.5),rgba(234, 29, 37, 0.80)),url("${backgroundImage?.sourceUrl}")`,
							}}
						>
							<motion.video
								muted
								autoPlay
								loop={true}
								controls={false}
								aria-label={`Video Element: ${video?.title}`}
								className={
									displayVideo
										? "absolute top-0 left-0 w-full h-full object-cover"
										: "hidden"
								}
							>
								<source
									src={video?.link}
									type="video/mp4"
									width={
										video?.mediaDetails?.width
											? video?.mediaDetails?.width
											: 550
									}
									height={
										video?.mediaDetails?.height
											? video?.mediaDetails?.height
											: 550
									}
								/>
							</motion.video>
							<ScrollYProgressReveal className="relative z-10 w-full py-44 px-16 flex flex-col items-center justify-center">
								<motion.h4
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="mb-5 max-w-2xl lg:max-w-4xl mx-auto lg:mx-0 font-schaboCondensed text-center uppercase text-7xl sm:text-8xl lg:text-12xl 2xl:text-[5vw] tracking-[-0.05rem] text-white leading-tight lg:leading-[5rem]"
								>
									{clubCardMembershipText}
								</motion.h4>
								<ScrollYProgressReveal className="flex flex-col items-center">
									<Link
										href={`${buttonLink?.url}`}
										target={buttonLink?.target}
										className={`${
											buttonLink?.url
												? "buttonStyling-alt lg:mt-5 mx-auto lg:mx-0"
												: "hidden"
										}`}
									>
										{buttonLink?.title}
									</Link>
								</ScrollYProgressReveal>
							</ScrollYProgressReveal>
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ClubCardMembershipCTA;
