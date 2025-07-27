// Imports
import { FC, memo } from "react";
import { motion } from "framer-motion";
import {INewsletterBanner} from "@/components/CMS/NewsletterBanner/types/index";
import { fadeIn, initialTwo } from "@/animations/animations";

// Styling
import styles from "@/components/CMS/NewsletterBanner/styles/NewsletterBanner.module.scss";

// Components
import Title from "@/components/Global/Elements/Title";
import Button from "@/components/Global/Elements/Button/Button";
import Paragraph from "@/components/Global/Elements/Paragraph/Paragraph";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";
import ContentSliceRevealMaskAnimation from "@/components/Animations/ContentSliceRevealMaskAnimation";

const NewsletterBanner: FC<INewsletterBanner.IProps> = memo(({
	title,
	paragraph,
	buttonLink
}) => {
	return (
		<div
			className={styles.newsletterBanner}
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

NewsletterBanner.displayName = 'NewsletterBanner';

export default NewsletterBanner;
