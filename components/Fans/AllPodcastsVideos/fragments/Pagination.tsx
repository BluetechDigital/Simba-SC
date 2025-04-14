// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {fadeIn,initialTwo,} from "@/animations/animations";
import {IAllPodcastsVideos} from "@/components/Fans/AllPodcastsVideos/types/index";

// Styling
import styles from "@/components/Fans/AllPodcastsVideos/styles/AllPodcastsVideos.module.scss";

const Pagination: FC<IAllPodcastsVideos.IPagination> = ({
	totalPages,
	currentPage,
	youtubeVideos,
	setCurrentPage,
}) => {

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
			scrollIntoView();
		}
	};

	const handlePrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
			scrollIntoView();
		}
	};

	/* Scroll to the top of the component each time the page changes */
	const scrollIntoView = () => {
		const element = document.getElementById("videosGrid");
		if (element) {
			element.scrollIntoView({behavior: "smooth", block: "start"});

			// Add a slight delay to ensure scrollIntoView finishes
			setTimeout(() => {
				const extraOffset = -500; // Adjust this value for more or less negative margin
				const scrollPosition = window.scrollY + extraOffset;
				window.scrollTo({top: scrollPosition, behavior: "smooth"});
			}, 300); // Adjust delay if necessary
		}
	};
    
    return (
        <div className={styles.pagination}>
			{totalPages > 1 && youtubeVideos?.length > 0 ? (
				<div className={styles.wrapper}>
					<motion.button
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						onClick={handlePrevPage}
						disabled={currentPage === 1}
						className={styles.buttonStyling}
					>
						Previous
					</motion.button>
					<span className={styles.pageNumber}>
						{`${currentPage} of ${totalPages}`}
					</span>
					<motion.button
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						onClick={handleNextPage}
						className={styles.buttonStyling}
						disabled={currentPage === totalPages}
					>
						Next
					</motion.button>
				</div>
			) : (
				<></>
			)}
		</div>
    );
}

export default Pagination;