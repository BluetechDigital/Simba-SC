// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {IFans} from "@/types/components";
import {slideInRightFinish, slideInLeftInitial} from "@/animations/animations";

// Styling
import styles from "@/styles/components/Fans.module.scss";

// Components
import Title from "@/components/Elements/Title";
import VideosGrid from "@/components/Fans/AllYouTubeVideos/Card/VideosGrid";

const AllYouTubeVideos: FC<IFans.IAllYouTubeVideos.IProps> = ({
	title,
	displayContentColor,
	displayBackgroundColor,
}) => {
	return (
		<>
			<div
				className={styles.allYouTubeVideos}
				style={{
					backgroundColor: displayBackgroundColor,
					backgroundImage: `url("/svg/background/low-poly-grid-haikei-black.svg")`,
				}}
			>
				<div className={styles.container}>
					<motion.div
						viewport={{once: true}}
						initial={slideInLeftInitial}
						whileInView={slideInRightFinish}
						className={title ? styles.topSection : "hidden"}
					>
						<Title
							content={title}
							className={styles.title}
							style={{color: displayContentColor}}
						/>
					</motion.div>
					<VideosGrid />
				</div>
			</div>
		</>
	);
};

export default AllYouTubeVideos;
