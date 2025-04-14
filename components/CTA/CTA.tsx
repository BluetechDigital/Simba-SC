// Imports
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {ICTA} from "@/components/CTA/types/index";
import fadeInUp, {initial} from "@/animations/animations";

// Styling
import styles from "@/components/CTA/styles/CTA.module.scss";

// Components
import VideoCard from "@/components/CTA/fragments/VideoCard";
import Paragraph from "@/components/Elements/Paragraph/Paragraph";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";

const CTA: FC<ICTA.IProps> = ({
	title,
	video,
	paragraph,
	buttonLink,
	displayVideo,
	displayBigCta,
	backgroundImage,
}) => {
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
					style={{backgroundImage: `url("${backgroundImage?.sourceUrl}")`}}
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
							<Link
								href={`${buttonLink?.url}`}
								target={buttonLink?.target}
								className={`${
									buttonLink?.url
										? styles.link + " buttonStyling-alt"
										: "hidden"
								}`}
							>
								{buttonLink?.title}
							</Link>
						</ScrollYProgressReveal>
					</ScrollYProgressReveal>
				</motion.div>
			</div>
		</div>
	);
};

export default CTA;
