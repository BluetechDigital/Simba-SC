// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import { initialTwo, fadeIn } from "@/animations/animations";
import {IGeneralInformation} from "@/components/GeneralInformation/types/index";

// Styling
import styles from "@/components/GeneralInformation/styles/GeneralInformation.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph/Paragraph";

const Card: FC<IGeneralInformation.ICard> = ({title, paragraph}) => {
	return (
		<div className={styles.card}>
			<motion.h5
				initial={initialTwo}
				whileInView={fadeIn}
				viewport={{once: true}}
				className={styles.title}
			>
				{title}
			</motion.h5>
			<Paragraph content={paragraph} className={styles.paragraph} />
		</div>
	);
};

export default Card;