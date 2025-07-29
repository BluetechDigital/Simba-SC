// Imports
import { motion } from "framer-motion";
import { FC, memo, useMemo, Suspense } from "react";
import { fadeIn, initialTwo } from "@/animations/animations";
import {IVisitStore} from "@/components/CMS/VisitStore/types/index";

// Styling
import styles from "@/components/CMS/VisitStore/styles/VisitStore.module.scss";

// Components
import Button from "@/components/Global/Elements/Button/Button";
import SwiperSlider from "@/components/CMS/VisitStore/fragments/SwiperSlider";
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
				<div className={styles.topSection}>
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
					<ScrollYProgressReveal className={styles.buttonLink}>
						<Button styleNumber={1} link={buttonLink}/>
					</ScrollYProgressReveal>
				</div>
				<Suspense fallback={<></>}>
					<SwiperSlider />
				</Suspense>
				
			</div>
		</div>
	);
});

VisitStore.displayName = 'VisitStore';

export default VisitStore;
