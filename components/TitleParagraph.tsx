// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {ITitleParagraph} from "@/types/components";
import {fadeInUp, initial} from "@/animations/animations";

// Styling
import styles from "@/styles/components/Elements/Paragraph.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";

const TitleParagraph: FC<ITitleParagraph> = ({
	title,
	paragraph,
	displayParagraph,
}) => {
	return (
		<>
			<ScrollYProgressReveal className="bg-white lg:container mx-auto flex flex-col py-12 px-8 xl:p-24">
				<motion.div
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className="py-10 px-4"
				>
					<motion.h2
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className={
							title
								? "mb-10 text-center font-semibold leading-tight text-4xl lg:text-5xl text-pureBlack"
								: "hidden"
						}
					>
						{title}
					</motion.h2>
					<Paragraph
						content={paragraph}
						className={
							paragraph
								? `lg:max-w-6xl mx-auto mb-10 font-OnestThin text-pureBlack leading-loose text-paragraph lg:text-medium text-center ${
										displayParagraph ? "lg:text-center" : "lg:text-left"
								  }`
								: "hidden"
						}
					/>
				</motion.div>
			</ScrollYProgressReveal>
		</>
	);
};

export default TitleParagraph;
