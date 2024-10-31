// Imports
import {FC} from "react";
import {IHero} from "@/types/components/index";

// Styling
import styles from "@/styles/components/Hero.module.scss";

// Components
import Title from "@/components/Elements/Title";
import Paragraph from "@/components/Elements/Paragraph";

const HeroFour: FC<IHero.IHeroFour> = ({
	title,
	paragraph,
	buttonLink,
	buttonLinkTwo,
	backgroundImage,
}) => {
	return (
		<>
			<div className={styles.heroFour}>
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
		</>
	);
};

export default HeroFour;
