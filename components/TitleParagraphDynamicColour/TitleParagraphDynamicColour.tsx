// Imports
import Link from "next/link";
import { FC, memo, useMemo } from "react";
import {ITitleParagraphDynamicColour} from "@/components/TitleParagraphDynamicColour/types/index";


// Styling
import styles from "@/components/TitleParagraphDynamicColour/styles/TitleParagraphDynamicColour.module.scss";

// Components
import Title from "@/components/Elements/Title";
import Paragraph from "@/components/Elements/Paragraph/Paragraph";

const TitleParagraphDynamicColour: FC<ITitleParagraphDynamicColour.IProps> = memo(({
	title,
	paragraph,
	buttonLink,
	buttonLinkTwo,
	displayContentColor,
	displayBackgroundColor,
}) => {

	// Optimize inline styles:
	const backgroundColorStyle = useMemo(() => ({
		backgroundColor: displayBackgroundColor ? displayBackgroundColor : 'none',
	}), [displayBackgroundColor]);

	// Optimize inline styles:
	const colorAndBorderColorStyle = useMemo(() => ({
		color: displayBackgroundColor ? displayBackgroundColor : 'none',
		borderColor: displayBackgroundColor ? displayBackgroundColor : 'none',
	}), [displayBackgroundColor]);

	return (
		<div style={backgroundColorStyle} className={styles.titleParagraphDynamicColour}>
			<div className={styles.container}>
				<div className={styles.content}>
					<Title
						content={title}
						className={styles.title}
						styleTextColor={displayContentColor}
					/>
					<div className={styles.leftContent}>
						<Paragraph
							content={paragraph}
							className={styles.paragraph}
							styleTextColor={displayContentColor}
						/>
						<div className={styles.buttonSection}>
							<Link
								href={`${buttonLink?.url}`}
								target={buttonLink?.target}
								style={colorAndBorderColorStyle}
								aria-label={`${buttonLink?.title}`}
								className={`${
									buttonLink?.url ? styles.buttonStyling : "hidden"
								}`}
							>
								{buttonLink?.title}
							</Link>
							<Link
								href={`${buttonLinkTwo?.url}`}
								target={buttonLinkTwo?.target}
								style={colorAndBorderColorStyle}
								aria-label={`${buttonLinkTwo?.title}`}
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
});

TitleParagraphDynamicColour.displayName = 'TitleParagraphDynamicColour';

export default TitleParagraphDynamicColour;
