// Imports
import { FC, memo, useMemo } from "react";
import {ISimbaTVBanner} from "@/components/CMS/SimbaTVBanner/types/index";

// Styling
import styles from "@/components/CMS/SimbaTVBanner/styles/SimbaTVBanner.module.scss";

// Components
import Title from "@/components/Global/Elements/Title";
import Button from "@/components/Global/Elements/Button/Button";
import Paragraph from "@/components/Global/Elements/Paragraph/Paragraph";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";
import SimbaTVStatsCard from "@/components/CMS/SimbaTVBanner/fragments/SimbaTVStatsCard";
import SimbaTVBannerCard from "@/components/CMS/SimbaTVBanner/fragments/SimbaTVBannerCard";
import ContentSliceRevealMaskAnimation from "@/components/Animations/ContentSliceRevealMaskAnimation";

const SimbaTVBanner: FC<ISimbaTVBanner.IProps> = memo(({
	title,
	paragraph,
	buttonLink,
	contentOptions,
	backgroundImage,
}) => {

	// Optimize inline styles:
	const backgroundImageStyle = useMemo(() => ({
		backgroundImage: backgroundImage?.sourceUrl ? `linear-gradient(0deg,rgba(250, 0, 8, 0.50),
				rgba(250, 0, 8, 0.50),rgba(250, 0, 8, 0.50)), url("${backgroundImage.sourceUrl}")` : 'none',
	}), [backgroundImage?.sourceUrl]);

	return (
		<div className={styles.simbaTVBanner} style={backgroundImageStyle}>
			<div className={styles.containerWrapper}>
				<div className={styles.contentWrapper}>
					<ScrollYProgressReveal className={styles.content}>
						<ContentSliceRevealMaskAnimation className={styles.titleSection}>
							<Title content={title} className={styles.title} />
							<Paragraph content={paragraph} className={styles.paragraph} />
						</ContentSliceRevealMaskAnimation>
						<div className={styles.buttonSection}>
							<Button styleNumber={0} link={buttonLink}/>
						</div>
					</ScrollYProgressReveal>
					<SimbaTVBannerCard contentOptions={contentOptions} />
					<SimbaTVStatsCard />
				</div>
			</div>
		</div>
	);
});

SimbaTVBanner.displayName = 'SimbaTVBanner';

export default SimbaTVBanner;
