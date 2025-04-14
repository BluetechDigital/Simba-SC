"use client";

// Imports
import {FC} from "react";
import { motion } from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {fadeIn, initialTwo} from "@/animations/animations";	

// Styling
import styles from "@/components/Global/Error/styles/Error.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph/Paragraph";

const Error: FC = () => {
	const globalContext = useGlobalContext();
	
	return (
		<div className={styles.Error}>
			<div
				className={styles.container}
				style={{
					backgroundImage: `linear-gradient(0deg,rgba(234, 29, 37, 0),
					rgba(234, 29, 37, 0.5),rgba(234, 29, 37, 0.80)),url("${globalContext?.themesOptionsContent?.errorPageContent?.backgroundImage?.sourceUrl}")`,
				}}
			>
				<div className={styles.content}>
					<motion.h1
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className={styles.title}
					>
						{globalContext?.themesOptionsContent?.errorPageContent?.title}
					</motion.h1>
					<Paragraph
						className={styles.paragraph}
						content={globalContext?.themesOptionsContent?.errorPageContent?.paragraph}
					/>
				</div>
			</div>
		</div>
	);
};

export default Error;
