// Imports
import {FC} from "react";
import {IFans} from "@/types/components";

// Styling
import styles from "@/styles/components/Fans.module.scss";

// Components
import Title from "@/components/Elements/Title";
import VideosGrid from "@/components/Fans/AllYouTubeVideos/Card/VideosGrid";
import ContentSliceRevealMaskAnimation from "@/components/Animations/ContentSliceRevealMaskAnimation";

const AllYouTubeVideos: FC<IFans.IAllYouTubeVideos.IProps> = ({title}) => {
	return (
		<>
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
		</>
	);
};

export default AllYouTubeVideos;
