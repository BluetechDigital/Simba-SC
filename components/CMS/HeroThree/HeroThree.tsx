// Imports
import { FC, memo, useMemo } from "react";
import {IHeroThree} from "@/components/CMS/HeroThree/types/index";

// Styling
import styles from "@/components/CMS/HeroThree/styles/HeroThree.module.scss";

// Components
import Title from "@/components/Global/Elements/Title";
import Paragraph from "@/components/Global/Elements/Paragraph/Paragraph";

const HeroThree: FC<IHeroThree.IProps> = memo(({
	title,
	paragraph,
	backgroundImage,
}) => {

	// Optimize inline styles:
	const backgroundImageStyle = useMemo(() => ({
		backgroundImage: backgroundImage?.sourceUrl ? `linear-gradient(0deg,rgba(0, 0, 0, 0.5),
		rgba(0, 0, 0, 0.5)), url("${backgroundImage.sourceUrl}")` : 'none',
	}), [backgroundImage?.sourceUrl]);

	return (
		<div className={styles.heroThree}>
			<div className={styles.container} style={backgroundImageStyle}>
				<div className={styles.content}>
					<Title
						content={title}
						className={
							styles.title + ` ${paragraph ? styles.after : styles.before}`
						}
					/>
					<Paragraph content={paragraph} className={styles.paragraph} />
				</div>
			</div>
		</div>
	);
});

export default HeroThree;
