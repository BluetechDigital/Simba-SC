// Imports
import { motion } from "framer-motion";
import { FC, memo, useMemo } from "react";
import { fadeIn, initialTwo } from "@/animations/animations";
import {IVisitStore} from "@/components/VisitStore/types/index";

// Styling
import styles from "@/components/VisitStore/styles/VisitStore.module.scss";

// Components
import Button from "@/components/Elements/Button/Button";
import Card from "@/components/VisitStore/fragments/Card";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";
import ContentSliceRevealMaskAnimation from "@/components/Animations/ContentSliceRevealMaskAnimation";

const VisitStore: FC<IVisitStore.IProps> = memo(({
	title,
	buttonLink,
	backgroundImage,
}) => {

	// Optimize inline styles:
	const backgroundImageStyle = useMemo(() => ({
		backgroundImage: backgroundImage?.sourceUrl ? `linear-gradient( 0deg, rgb(0, 0, 0, 0.80),
		rgba(0, 0, 0, 0.80)), url("${backgroundImage.sourceUrl}")` : 'none',
	}), [backgroundImage?.sourceUrl]);

	return (
		<div className={styles.visitStore} style={backgroundImageStyle}>
			<div className={styles.container}>
				<ContentSliceRevealMaskAnimation>
					<motion.h2
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className={styles.title}
					>
						{title}
					</motion.h2>
				</ContentSliceRevealMaskAnimation>
				<Card />
				<ScrollYProgressReveal className={styles.buttonLink}>
					<Button styleNumber={1} link={buttonLink}/>
				</ScrollYProgressReveal>
			</div>
		</div>
	);
});

VisitStore.displayName = 'VisitStore';

export default VisitStore;
