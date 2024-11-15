// Imports
import {FC} from "react";
import {IFans} from "@/types/components";

// Styling
import styles from "@/styles/components/Fans.module.scss";

// Components
import Title from "@/components/Elements/Title";
import PodcastsVideosGrid from "@/components/Fans/AllPodcastsVideos/Card/PodcastsVideosGrid";
import ContentSliceRevealMaskAnimation from "@/components/Animations/ContentSliceRevealMaskAnimation";

const AllPodcastsVideos: FC<IFans.IAllPodcastsVideos.IProps> = ({
	cta,
	title,
}) => {
	return (
		<>
			<div
				className={styles.allPodcastsVideos}
				style={{
					backgroundImage: `url("/svg/background/stacked-peaks-haikei-pureBlack.svg")`,
				}}
			>
				<div className={styles.container}>
					<ContentSliceRevealMaskAnimation
						className={title ? styles.topSection : "hidden"}
					>
						<Title content={title} className={styles.title} />
					</ContentSliceRevealMaskAnimation>
					<PodcastsVideosGrid cta={cta} />
				</div>
			</div>
		</>
	);
};

export default AllPodcastsVideos;
