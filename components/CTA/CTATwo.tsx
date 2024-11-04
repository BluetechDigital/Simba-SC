// Imports
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {ICTA} from "@/types/components";
import {initialTwo, fadeIn} from "@/animations/animations";

// Styling
import styles from "@/styles/components/CTA.module.scss";

// Components
import Title from "@/components/Elements/Title";
import Paragraph from "@/components/Elements/Paragraph";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";
import ContentSliceRevealMaskAnimation from "@/components/Animations/ContentSliceRevealMaskAnimation";

const CTATwo: FC<ICTA.ICTATwo> = ({title, paragraph, buttonLink}) => {
	return (
		<>
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
		</>
	);
};

export default CTATwo;
