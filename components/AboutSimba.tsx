// Imports
import {
	fadeIn,
	initialTwo,
	slideInLeftInitial,
	slideInRightFinish,
	slideInRightInitial,
} from "@/animations/animations";
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IAboutSimba} from "@/types/components/index";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";
import SlideInXLeftAnimation from "@/components/Animations/SlideInXLeftAnimation";
import SlideInXRightAnimation from "./Animations/SlideInXRightAnimation";

const AboutSimba: FC<IAboutSimba> = ({
	title,
	image,
	titleTwo,
	paragraph,
	buttonLink,
	paragraphTwo,
}) => {
	return (
		<>
			<div
				className="py-14 px-4 lg:px-10 xl:px-24 flex flex-wrap gap-12 lg:gap-0 -m-4 bg-no-repeat bg-cover bg-center"
				style={{
					backgroundImage: `url("/svg/background/stacked-steps-haikei-lightgrey.svg")`,
				}}
			>
				<div className="w-full lg:w-5/12 p-4">
					<motion.div
						viewport={{once: true}}
						initial={slideInLeftInitial}
						whileInView={slideInRightFinish}
						className="flex flex-col items-center lg:items-start justify-center lg:justify-end h-full"
					>
						<SlideInXLeftAnimation>
							<motion.h4
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="max-w-xs md:max-w-lg mx-auto lg:mx-0 mb-6 font-schaboCondensed text-center lg:text-left uppercase text-7xl sm:text-8xl lg:text-12xl tracking-[-0.05rem] text-pureBlack leading-tight xl:leading-[5.5rem]"
							>
								{title}
							</motion.h4>
							<ScrollYProgressReveal tailwindStyling="flex flex-col items-center lg:items-baseline">
								<Paragraph
									content={paragraph}
									tailwindStyling="mb-12 lg:mb-8 lg:max-w-lg mx-auto lg:mx-0 font-OnestRegular leading-normal text-pureBlack text-lg text-center lg:text-left"
								/>
								<Link
									href={`${buttonLink?.url}`}
									target={buttonLink?.target}
									aria-label={`${buttonLink?.title}`}
									className={`${
										buttonLink?.url
											? "buttonStyling-alt-two mx-auto lg:mx-0"
											: "hidden"
									}`}
								>
									{buttonLink?.title}
								</Link>
							</ScrollYProgressReveal>
						</SlideInXLeftAnimation>
					</motion.div>
				</div>
				<motion.div
					viewport={{once: true}}
					initial={slideInRightInitial}
					whileInView={slideInRightFinish}
					className="w-full lg:w-7/12 px-4 lg:p-4 relative flex flex-col-reverse lg:flex-col"
				>
					<ScrollYProgressReveal>
						<Image
							src={image?.sourceUrl}
							alt={`${image?.altText}`}
							width={
								image?.mediaDetails?.width ? image?.mediaDetails?.width : 500
							}
							height={
								image?.mediaDetails?.height ? image?.mediaDetails?.height : 500
							}
							className={
								image?.sourceUrl
									? `bg-white object-cover object-center w-full h-[500px] lg:h-[552px] lg:h-[752px]`
									: `hidden`
							}
						/>
					</ScrollYProgressReveal>
					<SlideInXRightAnimation tailwindStyling="bg-white md:absolute bottom-0 right-0 z-10 w-fit max-w-[500px] p-10 mx-auto md:mx-0">
						<motion.h5
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="mb-6 font-schaboCondensed text-center uppercase text-7xl tracking-[-0.05rem] text-tertiary-default xl:leading-tight"
						>
							{titleTwo}
						</motion.h5>
						<Paragraph
							content={paragraphTwo}
							tailwindStyling="font-OnestRegular leading-normal text-pureBlack text-lg lg:text-paragraph text-center md:text-left"
						/>
					</SlideInXRightAnimation>
				</motion.div>
			</div>
		</>
	);
};

export default AboutSimba;
