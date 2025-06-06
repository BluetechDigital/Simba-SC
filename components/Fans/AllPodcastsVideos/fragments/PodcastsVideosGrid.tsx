"use client";

// Imports
import {
	initial,
	slideInRightFinish,
	slideInLeftInitial,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {FC, memo, Fragment, useState} from "react";
import {IAllPodcastsVideos} from "@/components/Fans/AllPodcastsVideos/types/index";

// Styling
import styles from "@/components/Fans/AllPodcastsVideos/styles/AllPodcastsVideos.module.scss";

// Components
import Card from "@/components/Fans/AllPodcastsVideos/fragments/Card";
import ErrorCard from "@/components/Fans/AllPodcastsVideos/fragments/ErrorCard";
import Pagination from "@/components/Fans/AllPodcastsVideos/fragments/Pagination";
import Recommendations from "@/components/Fans/AllPodcastsVideos/fragments/Recommendations/Recommendations";

// Main Content
const PodcastsVideosGrid: FC<IAllPodcastsVideos.IPodcastsVideosGrid> = ({
	cta,
}) => {
	const globalContext = useGlobalContext();

	const itemsPerPage = 8;
	const [currentPage, setCurrentPage] = useState(1);

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentContent = globalContext?.youtubeVideos?.slice(
		startIndex,
		endIndex
	);

	const totalPages = Math.ceil(
		globalContext?.youtubeVideos?.length / itemsPerPage
	);

	return (
		<div className={styles.podcastsVideosGrid} id="videosGrid">
			<div className={styles.mainContent}>
				<motion.div
					viewport={{once: true}}
					className={styles.content}
					initial={slideInLeftInitial}
					whileInView={slideInRightFinish}
				>
					{currentContent?.length > 0 ? (
						currentContent?.map((item: any, index: number) => (
							<Fragment key={index}>
								<motion.div
									custom={index}
									initial={initial}
									className="w-full"
									whileInView="animate"
									viewport={{once: true}}
									variants={arrayLoopStaggerChildren}
								>
									<Card
										index={index}
										videoId={item?.videoId}
										snippet={item?.snippet}
										statistics={item?.statistics}
									/>
								</motion.div>
							</Fragment>
						))
					) : (
						<ErrorCard />
					)}
				</motion.div>
				<Recommendations
					cta={cta}
					podcastsVideos={currentContent}
					className={styles.recommendation}
				/>
			</div>
			<Pagination
				totalPages={totalPages}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				youtubeVideos={globalContext?.youtubeVideos}
			/>
			<Recommendations
				cta={cta}
				podcastsVideos={currentContent}
				className={styles.recommendationMobile}
			/>
		</div>
	);
};

PodcastsVideosGrid.displayName = 'PodcastsVideosGrid';

export default PodcastsVideosGrid;
