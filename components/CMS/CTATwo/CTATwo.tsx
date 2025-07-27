// Imports
import { FC, memo, } from "react";
import { motion } from "framer-motion";
import {ICTATwo} from "@/components/CMS/CTATwo/types/index";
import {initialTwo, fadeIn } from "@/animations/animations";

// Styling
import styles from "@/components/CMS/CTATwo/styles/CTATwo.module.scss";

// Components
import Title from "@/components/Global/Elements/Title";
import Button from "@/components/Global/Elements/Button/Button";
import Paragraph from "@/components/Global/Elements/Paragraph/Paragraph";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";
import ContentSliceRevealMaskAnimation from "@/components/Animations/ContentSliceRevealMaskAnimation";

const CTATwo: FC<ICTATwo.IProps> = memo(({
	title,
	paragraph,
	buttonLink
}) => {
	return (
		<div
			className={styles.ctaTwo}
			style={{
				backgroundImage: `url("/svg/background/low-poly-grid-haikei-red.svg")`,
			}}
		>
			<div className={styles.container}>
				<ScrollYProgressReveal className={styles.content}>
					<ContentSliceRevealMaskAnimation>
						<Title content={title} className={styles.title} />
					</ContentSliceRevealMaskAnimation>
					<Paragraph content={paragraph} className={styles.paragraph} />
					<motion.div
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
					>
						<Button styleNumber={3} link={buttonLink}/>
					</motion.div>
				</ScrollYProgressReveal>
			</div>
		</div>
	);
});

CTATwo.displayName = 'CTATwo';

export default CTATwo;
