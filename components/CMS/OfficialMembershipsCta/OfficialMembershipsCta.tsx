// Imports
import { motion } from "framer-motion";
import { FC, memo, useMemo } from "react";
import {initialTwo, fadeIn } from "@/animations/animations";
import {IOfficialMembershipsCta} from "@/components/CMS/OfficialMembershipsCta/types/index";

// Styling
import styles from "@/components/CMS/OfficialMembershipsCta/styles/OfficialMembershipsCta.module.scss";

// Components
import Button from "@/components/Elements/Button/Button";
import Paragraph from "@/components/Elements/Paragraph/Paragraph";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";
import SlideInXLeftAnimation from "@/components/Animations/SlideInXLeftAnimation";

const OfficialMembershipsCta: FC<IOfficialMembershipsCta.IProps> = memo(({
	title,
	image,
	paragraph,
	buttonLink,
	bulletPoints,
}) => {

	// Optimize inline styles:
	const backgroundImageStyle = useMemo(() => ({
		backgroundImage: image?.sourceUrl ? `url("${image.sourceUrl}")` : 'none',
	}), [image?.sourceUrl]);

	return (
		<div
			className={styles.officialMembershipsCta}
			style={{
				backgroundImage: `url("/svg/background/stacked-steps-haikei-lightgrey.svg")`,
			}}
		>
			<div className={styles.container}>
				<div className={styles.content} style={backgroundImageStyle}>
					<SlideInXLeftAnimation className={styles.card}>
						<ScrollYProgressReveal className={styles.wrapper}>
							<motion.h4
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className={styles.title}
							>
								{title}
							</motion.h4>
							<Paragraph content={paragraph} className={styles.paragraph} />
							<div className={styles.buttonLink}>
								<Button styleNumber={2} link={buttonLink}/>
							</div>
						</ScrollYProgressReveal>
					</SlideInXLeftAnimation>
				</div>
			</div>
		</div>
	);
});

OfficialMembershipsCta.displayName = 'OfficialMembershipsCta';

export default OfficialMembershipsCta;
