// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {IHero} from "@/types/components/index";
import {fadeIn, initialTwo} from "@/animations/animations";

// Styling
import styles from "@/styles/components/Hero.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const HeroTwo: FC<IHero.IHeroTwo> = ({title, paragraph, backgroundImage}) => {
	return (
		<>
			<div className={styles.heroTwo}>
				<div
					className={styles.container}
					style={{
						backgroundImage: `linear-gradient(0deg,rgba(234, 29, 37, 0),rgba(234, 29, 37, 0.5),rgba(234, 29, 37, 0.80)),url("${backgroundImage?.sourceUrl}")`,
					}}
				>
					<div className={styles.content}>
						<motion.h1
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className={styles.title}
						>
							{title}
						</motion.h1>
						<Paragraph content={paragraph} className={styles.paragraph} />
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroTwo;
