// Imports
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {ITrophyCabinetBanner} from "@/types/components/index";
import {
	initial,
	arrayLoopStaggerChildren,
	initialTwo,
	fadeIn,
} from "@/animations/animations";

// Styling
import styles from "@/styles/components/TrophyCabinetBanner.module.scss";

// Components
import Title from "@/components/Elements/Title";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";
import LatestNewsGridCard from "./Cards/LatestNewsGridCard";
import Paragraph from "./Elements/Paragraph";

const TrophyCabinetBanner: FC<ITrophyCabinetBanner> = ({
	title,
	paragraph,
	buttonLink,
	trophyCabinet,
	backgroundImage,
}) => {
	return (
		<>
			<div
				className={
					styles.trophyCabinetBanner +
					" trophyCabinetBanner bg-primary-default bg-no-repeat bg-cover bg-center"
				}
				style={{
					backgroundImage: `url("/svg/background/stacked-steps-haikei-lightgrey.svg")`,
				}}
			>
				<div className="lg:max-w-[1700px] mx-auto py-14 px-4 flex flex-col gap-8">
					<div>
						<Title
							content={title}
							tailwindStyling="title max-w-2xl mx-auto lg:mx-0 font-schaboCondensed text-center lg:text-left uppercase text-7xl sm:text-8xl tracking-[-0.05rem] text-pureBlack leading-tight"
						/>
						<Paragraph
							content={paragraph}
							tailwindStyling="mb-12 lg:mb-8 lg:max-w-lg mx-auto lg:mx-0 font-OnestRegular leading-normal text-pureBlack text-lg text-center lg:text-left"
						/>
					</div>
					<div className="flex flex-col lg:flex-row items-center justify-center gap-16">
						<div className="w-full lg:w-[60%] flex flex-col gap-16 px-6">
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
								{trophyCabinet?.length > 0 ? (
									trophyCabinet?.map((item: any, index: number) => (
										<Fragment key={index}>
											<motion.div
												custom={index}
												initial={initial}
												className="w-full"
												whileInView="animate"
												viewport={{once: true}}
												variants={arrayLoopStaggerChildren}
											>
												<div className="flex items-center justify-center lg:justify-start gap-4">
													<Image
														src={item?.image?.sourceUrl}
														alt={`${item?.image?.altText}`}
														width={
															item?.image?.mediaDetails?.width
																? item?.image?.mediaDetails?.width
																: 500
														}
														height={
															item?.image?.mediaDetails?.height
																? item?.image?.mediaDetails?.height
																: 500
														}
														className={
															item?.image?.sourceUrl
																? `w-[70px] h-[70px] object-contain object-center`
																: `hidden`
														}
													/>
													<span className="font-schaboCondensed text-center uppercase text-8xl tracking-[-0.05rem] text-pureBlack leading-tight">
														{item?.totalAmount}
													</span>
												</div>
												<motion.h4
													initial={initialTwo}
													whileInView={fadeIn}
													viewport={{once: true}}
													className="mt-4 font-OnestRegular text-center lg:text-left text-paragraph tracking-[-0.05rem] text-pureBlack leading-tight"
												>
													{item?.name}
												</motion.h4>
											</motion.div>
										</Fragment>
									))
								) : (
									<></>
								)}
							</div>
							<ScrollYProgressReveal tailwindStyling="flex flex-col items-center lg:items-baseline">
								<Link
									href={`${buttonLink?.url}`}
									target={buttonLink?.target}
									className={`${
										buttonLink?.url
											? "buttonStyling-alt mt-5 mx-auto lg:mx-0"
											: "hidden"
									}`}
								>
									{buttonLink?.title}
								</Link>
							</ScrollYProgressReveal>
						</div>
						<div className="w-full lg:w-[40%]">
							<Image
								src={backgroundImage?.sourceUrl}
								alt={`${backgroundImage?.altText}`}
								width={
									backgroundImage?.mediaDetails?.width
										? backgroundImage?.mediaDetails?.width
										: 500
								}
								height={
									backgroundImage?.mediaDetails?.height
										? backgroundImage?.mediaDetails?.height
										: 500
								}
								className={
									backgroundImage?.sourceUrl
										? `block w-full h-full min-h-[350px] lg:min-h-[550px] object-cover object-center`
										: `hidden`
								}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TrophyCabinetBanner;
