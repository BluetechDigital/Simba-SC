// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {IFans} from "@/types/components";
import {slideInRightFinish, slideInLeftInitial} from "@/animations/animations";

// Styling
import styles from "@/styles/components/Fans.module.scss";

// Components
import Title from "@/components/Elements/Title";
import PodcastsVideosGrid from "@/components/Fans/AllPodcastsVideos/Card/PodcastsVideosGrid";

const AllPodcastsVideos: FC<IFans.IAllPodcastsVideos.IProps> = ({
	title,
	cta,
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
					<motion.div
						viewport={{once: true}}
						initial={slideInLeftInitial}
						whileInView={slideInRightFinish}
						className={title ? styles.topSection : "hidden"}
					>
						<Title content={title} className={styles.title} />
					</motion.div>
					<PodcastsVideosGrid cta={cta} />
				</div>
			</div>
		</>
	);
};

export default AllPodcastsVideos;
