// Imports
import { motion } from "framer-motion";
import { FC, memo, useMemo } from "react";
import { ICTA } from "@/components/CMS/CTA/types/index";
import fadeInUp, {initial } from "@/animations/animations";

// Styling
import styles from "@/components/CMS/CTA/styles/CTA.module.scss";

// Components
import Button from "@/components/Global/Elements/Button/Button";
import VideoCard from "@/components/CMS/CTA/fragments/VideoCard";
import Paragraph from "@/components/Global/Elements/Paragraph/Paragraph";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";

const CTA: FC<ICTA.IProps> = memo(({
	title,
	video,
	paragraph,
	buttonLink,
	displayVideo,
	displayBigCta,
	backgroundImage,
}) => {

	// Optimize inline styles:
	const backgroundImageStyle = useMemo(() => ({
		backgroundImage: backgroundImage?.sourceUrl ? `linear-gradient(0deg,rgba(45, 90, 49, 0),
		rgba(45, 90, 49, 0.5),rgba(45, 90, 49, 0.80)), url("${backgroundImage.sourceUrl}")` : 'none',
	}), [backgroundImage?.sourceUrl]);

	return (
		<div className={styles.cta}>
			<div className={styles.container}>
				<motion.div
					className={
						styles.cardWrapper +
						` ${
							displayBigCta
								? "min-h-[65vh] lg:min-h-[75vh] max-h-[75vh]"
								: "min-h-[45vh] lg:min-h-[50vh] max-h-[50vh]"
						}`
					}
					style={backgroundImageStyle}
				>
					<VideoCard video={video} displayVideo={displayVideo} />
					<ScrollYProgressReveal className={styles.card}>
						<motion.h4
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className={styles.title}
						>
							{title}
						</motion.h4>
						<Paragraph content={paragraph} className={styles.paragraph} />
						<ScrollYProgressReveal className={styles.buttonLink}>
							<Button styleNumber={1} link={buttonLink}/>
						</ScrollYProgressReveal>
					</ScrollYProgressReveal>
				</motion.div>
			</div>
		</div>
	);
});

CTA.displayName = 'CTA';

export default CTA;
