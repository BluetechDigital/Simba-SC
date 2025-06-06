"use client";

// Imports
import { motion } from "framer-motion";
import { FC, memo, useMemo } from "react";
import { useGlobalContext } from "@/context/global";
import { fadeIn, initialTwo } from "@/animations/animations";	

// Styling
import styles from "@/components/Global/Error/styles/Error.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph/Paragraph";

const Error: FC = memo(() => {
	const globalContext = useGlobalContext();

	// Optimize inline styles:
	const backgroundImageStyle = useMemo(() => ({
		backgroundImage: globalContext?.themesOptionsContent?.errorPageContent?.backgroundImage?.sourceUrl ? `linear-gradient(0deg,rgba(45, 90, 49, 0), rgba(45, 90, 49, 0.5),rgba(45, 90, 49, 0.80)), url("${globalContext?.themesOptionsContent?.errorPageContent?.backgroundImage.sourceUrl}")` : 'none',
	}), [globalContext?.themesOptionsContent?.errorPageContent?.backgroundImage?.sourceUrl]);
	
	return (
		<div className={styles.Error}>
			<div className={styles.container} style={backgroundImageStyle}>
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
});

export default Error;
