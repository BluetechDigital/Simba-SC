// Imports
import fadeInUp, {
	fadeIn,
	initial,
	initialTwo,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IClubCardMembershipCTA} from "@/types/components/index";

// Styling
import styles from "@/styles/components/OfficialMembershipsCta.module.scss";

// Components
import Title from "@/components/Elements/Title";
import Paragraph from "@/components/Elements/Paragraph";
import LatestNewsGridCard from "@/components/Cards/LatestNewsGridCard";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";

const ClubCardMembershipCTA: FC<IClubCardMembershipCTA> = ({
	title,
	paragraph,
	buttonLink,
	backgroundImage,
	clubCardMembership,
}) => {
	return (
		<>
			<div
				className={
					styles.officialMembershipsCta +
					" officialMembershipsCta bg-primary-default bg-no-repeat bg-cover bg-center"
				}
				style={{
					backgroundImage: `url("/svg/background/stacked-steps-haikei-lightgrey.svg")`,
				}}
			>
				<div className="lg:max-w-[1700px] mx-auto py-14 px-4 flex flex-col gap-8">
					<div className="flex flex-col items-center justify-between">
						<Title
							content={title}
							tailwindStyling="title max-w-2xl mx-auto lg:mx-0 font-schaboCondensed text-center lg:text-left uppercase text-7xl sm:text-8xl tracking-[-0.05rem] text-pureBlack leading-tight"
						/>
						<Paragraph
							content={paragraph}
							tailwindStyling="mb-8 lg:max-w-lg mx-auto lg:mx-0 font-OnestRegular leading-normal text-pureBlack text-lg text-center lg:text-left"
						/>
					</div>
					<div className="flex flex-col lg:flex-row items-center justify-center gap-16">
						<div
							className=" w-full py-44 px-16 flex flex-col items-center justify-center bg-white bg-no-repeat bg-center bg-cover overflow-hidden"
							style={{
								backgroundImage: `linear-gradient(0deg,rgba(234, 29, 37, 0),rgba(234, 29, 37, 0.5),rgba(234, 29, 37, 0.80)),url("${backgroundImage?.sourceUrl}")`,
							}}
						>
							<ScrollYProgressReveal>
								<motion.h4
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="mb-5 max-w-2xl mx-auto lg:mx-0 font-schaboCondensed text-center  uppercase text-7xl sm:text-8xl tracking-[-0.05rem] text-white leading-tight"
								>
									{clubCardMembership?.title}
								</motion.h4>
								<ScrollYProgressReveal tailwindStyling="flex flex-col items-center">
									<Link
										href={`${buttonLink?.url}`}
										target={buttonLink?.target}
										className={`${
											buttonLink?.url
												? "buttonStyling-alt-four lg:mt-5 mx-auto lg:mx-0"
												: "hidden"
										}`}
									>
										{buttonLink?.title}
									</Link>
								</ScrollYProgressReveal>
							</ScrollYProgressReveal>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ClubCardMembershipCTA;
