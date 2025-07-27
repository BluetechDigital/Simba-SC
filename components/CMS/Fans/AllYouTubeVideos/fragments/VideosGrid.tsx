"use client";

// Imports
import {motion} from "framer-motion";
import {FC, Fragment, useState} from "react";
import {useGlobalContext} from "@/context/global";
import {initial, arrayLoopStaggerChildren} from "@/animations/animations";
import {IAllYouTubeVideos} from "@/components/CMS/Fans/AllYouTubeVideos/types/index";

// Styling
import styles from "@/components/CMS/Fans/AllYouTubeVideos/styles/AllYouTubeVideos.module.scss";

// Components
import Card from "@/components/CMS/Fans/AllYouTubeVideos/fragments/Card";
import ErrorCard from "@/components/CMS/Fans/AllYouTubeVideos/fragments/ErrorCard";
import Pagination from "@/components/CMS/Fans/AllYouTubeVideos/fragments/Pagination";

const VideosGrid: FC<IAllYouTubeVideos.IVideosGrid> = ({ 

}) => {
    
    const globalContext = useGlobalContext();

	const itemsPerPage = 20;
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
        <div className={styles.videosGrid} id="videosGrid">
			<div className={styles.mainContent}>
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
			</div>
			<Pagination
				totalPages={totalPages}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				youtubeVideos={globalContext?.youtubeVideos}
			/>
		</div>
    );
}

VideosGrid.displayName = 'VideosGrid';

export default VideosGrid;