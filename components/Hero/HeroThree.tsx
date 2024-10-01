// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {IHeroThree} from "@/types/components/index";
import {fadeIn, initialTwo} from "@/animations/animations";

// Styling
import styles from "@/styles/components/Hero.module.scss";

// Components
import Title from "@/components/Elements/Title";
import Paragraph from "@/components/Elements/Paragraph";

const HeroThree: FC<IHeroThree> = ({title, paragraph, backgroundImage}) => {
	return (
		<>
			<div
				className={
					styles.heroThree +
					` heroThree relative z-50 w-full h-fit pt-[120px] lg:pt-[138px] bg-white`
				}
			>
				<div
					className="py-20 w-full h-[50vh] flex flex-col items-center lg:items-baseline justify-center relative bg-primary-dark bg-center bg-no-repeat bg-cover"
					style={{
						backgroundImage: `linear-gradient(0deg,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url("${backgroundImage?.sourceUrl}")`,
					}}
				>
					<div className="max-w-full lg:max-w-5xl mx-auto lg:mx-0 relative z-10 flex flex-col items-center lg:items-start px-6 md:px-24">
						<Title
							content={title}
							className={`title max-w-3xl font-schaboCondensed text-center lg:text-left uppercase  text-7xl sm:text-8xl lg:text-12xl tracking-[-0.05rem] text-white leading-tight xl:leading-[5.5rem] ${
								paragraph
									? "border-none"
									: " pb-2 border-b-[1px] border-solid border-lightGreyTwo"
							}`}
						/>
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

export default HeroThree;
