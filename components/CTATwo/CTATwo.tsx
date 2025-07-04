// Imports
import Link from "next/link";
import { FC, memo, } from "react";
import { motion } from "framer-motion";
import {ICTATwo} from "@/components/CTATwo/types/index";
import {initialTwo, fadeIn } from "@/animations/animations";

// Styling
import styles from "@/components/CTATwo/styles/CTATwo.module.scss";

// Components
import Title from "@/components/Elements/Title";
import Paragraph from "@/components/Elements/Paragraph/Paragraph";
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
						<Link
							href={`${buttonLink?.url}`}
							target={buttonLink?.target}
							aria-label={`${buttonLink?.title}`}
							className={`${
								buttonLink?.url ? "buttonStyling-alt-three" : "hidden"
							}`}
						>
							{buttonLink?.title}
						</Link>
					</motion.div>
				</ScrollYProgressReveal>
			</div>
		</div>
	);
});

CTATwo.displayName = 'CTATwo';

export default CTATwo;
