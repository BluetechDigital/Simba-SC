// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {ILatestVideoBlock} from "@/components/Fans/LatestVideoBlock/types/index";

// Styling
import styles from "@/components/Fans/LatestVideoBlock/styles/LatestVideoBlock.module.scss";

const VideoCard: FC<ILatestVideoBlock.IVideoCard> = ({video, displayVideo}) => {
    return (
        <motion.video
			muted
			autoPlay
			loop={true}
			controls={false}
			playsInline
			controlsList="nofullscreen"
			aria-label={`Video Element: ${video?.title}`}
			className={displayVideo ? styles.video : "hidden"}
		>
			<source
				src={video?.link}
				type="video/mp4"
				width={video?.mediaDetails?.width || 1000}
				height={video?.mediaDetails?.height || 1000}
			/>
		</motion.video>
    );
}

export default VideoCard;