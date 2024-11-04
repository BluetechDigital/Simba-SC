// Imports
import {FC} from "react";
import Link from "next/link";
import {ITitleParagraphDynamicColour} from "@/types/components/index";

// Styling
import styles from "@/styles/components/TitleParagraphDynamicColour.module.scss";

// Components
import Title from "@/components/Elements/Title";
import Paragraph from "@/components/Elements/Paragraph";

const TitleParagraphDynamicColour: FC<ITitleParagraphDynamicColour> = ({
	title,
	paragraph,
	buttonLink,
	buttonLinkTwo,
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
					<div className={styles.leftContent}>
						<Paragraph
							content={paragraph}
							className={styles.paragraph}
							style={{color: displayContentColor}}
						/>
						<div className={styles.buttonSection}>
							<Link
								href={`${buttonLink?.url}`}
								target={buttonLink?.target}
								aria-label={`${buttonLink?.title}`}
								style={{
									color: displayContentColor,
									borderColor: displayContentColor,
								}}
								className={`${
									buttonLink?.url ? styles.buttonStyling : "hidden"
								}`}
							>
								{buttonLink?.title}
							</Link>
							<Link
								href={`${buttonLinkTwo?.url}`}
								target={buttonLinkTwo?.target}
								aria-label={`${buttonLinkTwo?.title}`}
								style={{
									color: displayContentColor,
									borderColor: displayContentColor,
								}}
								className={`${
									buttonLinkTwo?.url ? styles.buttonStyling : "hidden"
								}`}
							>
								{buttonLinkTwo?.title}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TitleParagraphDynamicColour;
