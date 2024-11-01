// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {ITitleParagraph} from "@/types/components";
import {fadeInUp, initial} from "@/animations/animations";

// Styling
import styles from "@/styles/components/TitleParagraph.module.scss";

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
			<ScrollYProgressReveal className={styles.titleParagraph}>
				<motion.div
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className={styles.container}
				>
					<motion.h2
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className={title ? styles.title : "hidden"}
					>
						{title}
					</motion.h2>
					<Paragraph
						content={paragraph}
						className={
							paragraph
								? styles.paragraph +
								  ` ${
										displayParagraph
											? "text-center lg:text-center"
											: "text-center lg:text-left"
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
