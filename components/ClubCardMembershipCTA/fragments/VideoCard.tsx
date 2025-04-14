// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {IClubCardMembershipCTA} from "@/components/ClubCardMembershipCTA/types/index";

// Styling
import styles from "@/components/ClubCardMembershipCTA/styles/ClubCardMembershipCTA.module.scss";

const VideoCard: FC<IClubCardMembershipCTA.IVideoCard> = ({video, displayVideo}) => {
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