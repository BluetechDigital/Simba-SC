// Imports
import {FC} from "react";
import {IAllYouTubeVideos} from "@/components/Fans/AllYouTubeVideos/types/index";

// Styling
import styles from "@/components/Fans/AllYouTubeVideos/styles/AllYouTubeVideos.module.scss";

// Components
import Title from "@/components/Elements/Title";
import VideosGrid from "@/components/Fans/AllYouTubeVideos/fragments/VideosGrid";
import ContentSliceRevealMaskAnimation from "@/components/Animations/ContentSliceRevealMaskAnimation";

const AllYouTubeVideos: FC<IAllYouTubeVideos.IProps> = ({title}) => {
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
};

export default AllYouTubeVideos;
