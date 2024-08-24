// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {initialTwo, fadeIn} from "@/animations/animations";
import {IOfficialMembershipsCta} from "@/types/components/index";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";
import SlideInXLeftAnimation from "@/components/Animations/SlideInXLeftAnimation";

const OfficialMembershipsCta: FC<IOfficialMembershipsCta> = ({
	title,
	image,
	paragraph,
	buttonLink,
	bulletPoints,
}) => {
	return (
		<>
			<div
				className="bg-primary-default bg-no-repeat bg-cover bg-center"
				style={{
					backgroundImage: `url("/svg/background/stacked-steps-haikei-lightgrey.svg")`,
				}}
			>
				<div className="lg:max-w-[1700px] mx-auto py-14 px-4">
					<div
						className="p-8 bg-no-repeat bg-cover bg-center overflow-hidden"
						style={{
							backgroundImage: `url("${image?.sourceUrl}")`,
						}}
					>
						<SlideInXLeftAnimation tailwindStyling="py-11 px-9 max-w-xl bg-white">
							<ScrollYProgressReveal tailwindStyling="flex flex-col items-center lg:items-baseline">
								<motion.h4
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="mb-6 font-schaboCondensed text-center lg:text-left uppercase text-7xl sm:text-8xl tracking-[-0.05rem] text-pureBlack leading-tight"
								>
									{title}
								</motion.h4>
								<Paragraph
									content={paragraph}
									tailwindStyling="mb-4 font-OnestRegular leading-normal text-pureBlack text-lg text-center lg:text-left"
								/>
								<div className="flex flex-wrap gap-4">
									<Link
										href={`${buttonLink?.url}`}
										target={buttonLink?.target}
										aria-label={`${buttonLink?.title}`}
										className={`${
											buttonLink?.url ? "buttonStyling-alt-two" : "hidden"
										}`}
									>
										{buttonLink?.title}
									</Link>
								</div>
							</ScrollYProgressReveal>
						</SlideInXLeftAnimation>
					</div>
				</div>
			</div>
		</>
	);
};

export default OfficialMembershipsCta;
