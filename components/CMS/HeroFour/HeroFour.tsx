// Imports
import { FC, memo, useMemo } from "react";
import {IHeroFour} from "@/components/CMS/HeroFour/types/index";

// Styling
import styles from "@/components/CMS/HeroFour/styles/HeroFour.module.scss";

// Components
import Card from "@/components/CMS/HeroFour/fragments/Card";

const HeroFour: FC<IHeroFour.IProps> = memo(({
	title,
	video,
	paragraph,
	buttonLink,
	displayVideo,
	buttonLinkTwo,
	backgroundImage,
	displayFullHeight,
}) => {

	// Optimize inline styles:
	const backgroundImageStyle = useMemo(() => ({
		backgroundImage: backgroundImage?.sourceUrl ? `linear-gradient(0deg,rgba(0, 0, 0, 0.5),
		rgba(0, 0, 0, 0.5)), url("${backgroundImage.sourceUrl}")` : 'none',
	}), [backgroundImage?.sourceUrl]);
	
	return (
		<div className={styles.heroFour}>
			<div
				style={backgroundImageStyle}
				className={styles.container + ` ${displayFullHeight ? "h-[87vh]" : "h-[50vh]"}`}
			>
				<div className={styles.relativeWrapper}>
					<div className={styles.stickyWrapper}>
						<div className={styles.contentWrapper}>
							<Card
								title={title}
								video={video}
								paragraph={paragraph}
								buttonLink={buttonLink}
								displayVideo={displayVideo}
								buttonLinkTwo={buttonLinkTwo}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});

HeroFour.displayName = 'HeroFour';

export default HeroFour;
