// Imports
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {INewsletterBanner} from "@/types/components";
import {initialTwo, fadeIn} from "@/animations/animations";

// Components
import Title from "@/components/Elements/Title";
import Paragraph from "@/components/Elements/Paragraph";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";

const NewsletterBanner: FC<INewsletterBanner> = ({
	title,
	paragraph,
	buttonLink,
	backgroundImage,
}) => {
	return (
		<>
			<div
				className="py-16 h-full bg-no-repeat bg-cover bg-center"
				style={{
					backgroundImage: `url("/svg/background/low-poly-grid-haikei-red.svg")`,
				}}
			>
				<div className="lg:container px-4 mx-auto">
					<ScrollYProgressReveal tailwindStyling="w-full flex flex-col items-center justify-center gap-8">
						<Title
							content={title}
							tailwindStyling="max-w-2xl font-OnestBlack text-center italic uppercase text-5xl lg:text-7xl 2xl:text-8xl tracking-[-0.05rem] text-white font-semibold leading-tight xl:leading-[3.75rem]"
						/>
						<Paragraph
							content={paragraph}
							tailwindStyling="max-w-xl mx-auto lg:mx-0 font-OnestRegular leading-tight text-white text-lg text-center lg:text-left"
						/>
						<motion.div
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
						>
							<Link
								href={`${buttonLink?.url}`}
								target={buttonLink?.target}
								aria-label={`${buttonLink?.title}`}
								className={`${
									buttonLink?.url ? "buttonStyling-alt-three" : "hidden"
								}`}
							>
								{buttonLink?.title}
							</Link>
						</motion.div>
					</ScrollYProgressReveal>
				</div>
			</div>
		</>
	);
};

export default NewsletterBanner;
