// Imports
import { FC, memo } from "react";
import {IAllYouTubeVideos} from "@/components/CMS/Fans/AllYouTubeVideos/types/index";

// Styling
import styles from "@/components/CMS/Fans/AllYouTubeVideos/styles/AllYouTubeVideos.module.scss";

// Components
import Title from "@/components/Elements/Title";
import VideosGrid from "@/components/CMS/Fans/AllYouTubeVideos/fragments/VideosGrid";
import ContentSliceRevealMaskAnimation from "@/components/Animations/ContentSliceRevealMaskAnimation";

const AllYouTubeVideos: FC<IAllYouTubeVideos.IProps> = memo(({
	title
}) => {
	return (
		<div
			className={styles.allYouTubeVideos}
			style={{
				backgroundImage: `url("/svg/background/low-poly-grid-haikei-red-white.svg")`,
			}}
		>
			<div className={styles.container}>
				<ContentSliceRevealMaskAnimation
					className={title ? styles.topSection : "hidden"}
				>
					<Title content={title} className={styles.title} />
				</ContentSliceRevealMaskAnimation>
				<VideosGrid />
			</div>
		</div>
	);
});

AllYouTubeVideos.displayName = 'AllYouTubeVideos';

export default AllYouTubeVideos;
