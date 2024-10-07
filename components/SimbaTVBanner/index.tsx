// Imports
import {FC} from "react";
import Link from "next/link";
import {ISimbaTVBanner} from "@/types/components";

// Styling
import styles from "@/styles/components/SimbaTVBanner.module.scss";

// Components
import Title from "@/components/Elements/Title";
import Paragraph from "@/components/Elements/Paragraph";
import SimbaTVStatsCard from "@/components/SimbaTVBanner/Cards/SimbaTVStatsCard";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";
import SimbaTVBannerCard from "@/components/SimbaTVBanner/Cards/SimbaTVBannerCard";
import ContentSliceRevealMaskAnimation from "@/components/Animations/ContentSliceRevealMaskAnimation";

const SimbaTVBanner: FC<ISimbaTVBanner.IProps> = ({
	title,
	paragraph,
	buttonLink,
	fansButton,
	youtubeButton,
	podcastsButton,
	backgroundImage,
}) => {
	return (
		<>
			<div
				className={styles.simbaTVBanner}
				style={{
					backgroundImage: `linear-gradient(0deg,rgba(250, 0, 8, 0.50),rgba(250, 0, 8, 0.50),rgba(250, 0, 8, 0.50)),url("${backgroundImage?.sourceUrl}")`,
				}}
			>
				<div className={styles.containerWrapper}>
					<div className={styles.contentWrapper}>
						<ScrollYProgressReveal className={styles.content}>
							<ContentSliceRevealMaskAnimation>
								<Title content={title} className={styles.title} />
								<Paragraph content={paragraph} className={styles.paragraph} />
							</ContentSliceRevealMaskAnimation>
							<Link
								href={`${buttonLink?.url}`}
								target={buttonLink?.target}
								aria-label={`${buttonLink?.title}`}
								className={`${
									buttonLink?.url ? "buttonStyling-alt-four" : "hidden"
								}`}
							>
								{buttonLink?.title}
							</Link>
						</ScrollYProgressReveal>
						<SimbaTVBannerCard
							fansButton={fansButton}
							youtubeButton={youtubeButton}
							podcastsButton={podcastsButton}
						/>
						<SimbaTVStatsCard />
					</div>
				</div>
			</div>
		</>
	);
};

export default SimbaTVBanner;
