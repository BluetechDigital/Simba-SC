// Imports
import Link from "next/link";
import { FC, memo } from "react";
import { motion } from "framer-motion";
import {ITitleContentImage} from "@/components/CMS/TitleContentImage/types/index";
import { fadeIn, initial, stagger, initialTwo  } from "@/animations/animations";

// Styling
import styles from "@/components/CMS/TitleContentImage/styles/TitleContentImage.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph/Paragraph";

const Card: FC<ITitleContentImage.ICard> = memo(({
	title,
	textTitle,
	paragraph,
	buttonLink,
	paragraphColor,
	displayContentOption,
}) => {
	return (
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
	);
});

Card.displayName = 'Card';

export default Card;