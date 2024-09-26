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

const SimbaTVBanner: FC<ISimbaTVBanner> = ({
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
				className={
					styles.simbaTVBanner +
					" simbaTVBanner py-16 h-full min-h-[50vh] bg-no-repeat bg-cover bg-center"
				}
				style={{
					backgroundImage: `linear-gradient(0deg,rgba(250, 0, 8, 0.50),rgba(250, 0, 8, 0.50),rgba(250, 0, 8, 0.50)),url("${backgroundImage?.sourceUrl}")`,
				}}
			>
				<div className="lg:container px-4 mx-auto">
					<div className="w-full flex flex-col items-center lg:items-baseline justify-center gap-8">
						<ScrollYProgressReveal className="w-full flex flex-col lg:flex-row items-center justify-between gap-6">
							<ContentSliceRevealMaskAnimation>
								<Title
									content={title}
									className="title max-w-2xl font-schaboCondensed text-center lg:text-left uppercase text-7xl sm:text-8xl lg:text-12xl tracking-[-0.05rem] text-white leading-tight xl:leading-[5.5rem]"
								/>
								<Paragraph
									content={paragraph}
									className="max-w-xl mx-auto lg:mx-0 font-OnestRegular leading-tight text-white text-lg text-center lg:text-left"
								/>
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
