// Imports
import {FC} from "react";
import {ITitleParagraphDynamicColour} from "@/types/components/index";

// Styling
import styles from "@/styles/components/TitleParagraphDynamicColour.module.scss";

// Components
import Title from "@/components/Elements/Title";
import Paragraph from "@/components/Elements/Paragraph";

const TitleParagraphDynamicColour: FC<ITitleParagraphDynamicColour> = ({
	title,
	paragraph,
	displayContentColor,
	displayBackgroundColor,
}) => {
	return (
		<div
			className={styles.titleParagraphDynamicColour}
			style={{backgroundColor: displayBackgroundColor}}
		>
			<div className={styles.container}>
				<div className={styles.content}>
					<Title
						content={title}
						className={styles.title}
						style={{color: displayContentColor}}
					/>
					<Paragraph
						content={paragraph}
						className={styles.paragraph}
						style={{color: displayContentColor}}
					/>
				</div>
				<div className={styles.bottomContent}></div>
			</div>
		</div>
	);
};

export default TitleParagraphDynamicColour;
