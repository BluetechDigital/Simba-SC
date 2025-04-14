// Imports
import {FC} from "react";
import {IHeroThree} from "@/components/HeroThree/types/index";

// Styling
import styles from "@/components/HeroThree/styles/HeroThree.module.scss";

// Components
import Title from "@/components/Elements/Title";
import Paragraph from "@/components/Elements/Paragraph/Paragraph";

const HeroThree: FC<IHeroThree.IProps> = ({
	title,
	paragraph,
	backgroundImage,
}) => {
	return (
		<div className={styles.heroThree}>
			<div
				className={styles.container}
				style={{
					backgroundImage: `linear-gradient(0deg,rgba(0, 0, 0, 0.5),
					rgba(0, 0, 0, 0.5)),url("${backgroundImage?.sourceUrl}")`,
				}}
			>
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
};

export default HeroThree;
