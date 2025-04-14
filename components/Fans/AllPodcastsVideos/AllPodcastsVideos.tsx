// Imports
import {FC} from "react";
import {IAllPodcastsVideos} from "@/components/Fans/AllPodcastsVideos/types/index";

// Styling
import styles from "@/components/Fans/AllPodcastsVideos/styles/AllPodcastsVideos.module.scss";


// Components
import Title from "@/components/Elements/Title";
import PodcastsVideosGrid from "@/components/Fans/AllPodcastsVideos/fragments/PodcastsVideosGrid";
import ContentSliceRevealMaskAnimation from "@/components/Animations/ContentSliceRevealMaskAnimation";

const AllPodcastsVideos: FC<IAllPodcastsVideos.IProps> = ({
	cta,
	title,
}) => {
	return (
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
	);
};

export default AllPodcastsVideos;
