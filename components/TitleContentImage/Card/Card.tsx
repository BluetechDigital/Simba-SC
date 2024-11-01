// Imports
import {
	fadeIn,
	stagger,
	initial,
	initialTwo,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Link from "next/link";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {ITitleContentImage} from "@/types/components";

// Styling
import styles from "@/styles/components/TitleContentImage.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const TitleContentImageCard: FC<ITitleContentImage.ICard> = ({
	title,
	textTitle,
	paragraph,
	buttonLink,
	paragraphColor,
	displayContentOption,
}) => {
	return (
		<>
			<motion.div
				initial={initial}
				variants={stagger}
				whileInView="animate"
				viewport={{once: true}}
				className={styles.card + ` ${title ? "pt-2 pb-10 lg:py-10" : "py-10"}`}
			>
				<motion.h3
					initial={initialTwo}
					whileInView={fadeIn}
					viewport={{once: true}}
					className={textTitle ? styles.textTitle : "hidden"}
				>
					{textTitle}
				</motion.h3>
				<Paragraph
					content={paragraph}
					className={styles.paragraph + ` ${paragraphColor}`}
				/>
				<div className={buttonLink?.url ? styles.buttonLink : "hidden"}>
					<Link
						className={styles.link}
						href={`${buttonLink?.url}`}
						target={buttonLink?.target}
						aria-label={`${buttonLink?.title}`}
					>
						<span className={styles.text + ` buttonStyling-alt-two`}>
							{buttonLink?.title}
						</span>
					</Link>
				</div>
			</motion.div>
		</>
	);
};

export default TitleContentImageCard;
