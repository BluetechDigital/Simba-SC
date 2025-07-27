// Imports
import { FC, memo } from "react";
import { IHero } from "@/components/CMS/Hero/types/index";

// Styling
import styles from "@/components/CMS/Hero/styles/Hero.module.scss";

const VideoCard: FC<IHero.IVideoCard> = memo(({ video, displayVideo }) => {
	
	const videoWidth = video?.mediaDetails?.width || 1000;
	const videoHeight = video?.mediaDetails?.height || 1000;
	
	return (
		<video
			muted={true}
			autoPlay
			loop={true}
			controls={false}
			playsInline
			preload="metadata"
			width={videoWidth}
			height={videoHeight}
			controlsList="nofullscreen"
			aria-label={`Video Element: ${video?.title}`}
			className={displayVideo ? styles.video : "hidden"}
		>
			{displayVideo && (
                <source
                    src={video.mediaItemUrl}
                    type={video.mimeType || "video/mp4"}
                />
            )}
		</video>
	);
});

export default VideoCard;