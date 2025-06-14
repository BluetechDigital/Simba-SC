// Imports
import { FC, memo } from "react";
import { ICTA } from "@/components/CTA/types/index";

// Styling
import styles from "@/components/CTA/styles/CTA.module.scss";

const VideoCard: FC<ICTA.IVideoCard> = memo(({ video, displayVideo }) => {
	
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
					src={video?.link}
                    type={video.mimeType || "video/mp4"}
                />
            )}
		</video>
	);
});

VideoCard.displayName = 'CTAVideoCard';

export default VideoCard;