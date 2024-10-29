// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {IHeroTwo} from "@/types/components/index";
import {fadeIn, initialTwo} from "@/animations/animations";

// Styling
import styles from "@/styles/components/Hero.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const HeroTwo: FC<IHeroTwo> = ({title, paragraph, backgroundImage}) => {
	return (
		<>
			<div
				className={
					styles.heroTwo +
					` relative z-50 w-full h-fit pt-[138px] lg:pt-[138px] bg-white`
				}
			>
				<div
					className="py-20 w-full h-[30vh] flex flex-col items-center lg:items-baseline justify-center relative bg-primary-dark bg-center bg-no-repeat bg-cover"
					style={{
						backgroundImage: `linear-gradient(0deg,rgba(234, 29, 37, 0),rgba(234, 29, 37, 0.5),rgba(234, 29, 37, 0.80)),url("${backgroundImage?.sourceUrl}")`,
					}}
				>
					<div className="max-w-full lg:max-w-5xl mx-auto lg:mx-0 relative z-10 flex flex-col items-center lg:items-start px-6 md:px-24">
						<motion.h1
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="mb-2 font-OnestBlack text-center lg:text-left uppercase text-3xl lg:text-5xl xl:text-7xl tracking-[-0.05rem] text-white font-semibold xl:leading-[3.75rem]"
						>
							{title}
						</motion.h1>
						<Paragraph
							content={paragraph}
							className="max-w-2xl mx-auto lg:mx-0 font-OnestRegular leading-tight text-white text-lg text-center lg:text-left"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroTwo;
