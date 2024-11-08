"use client";

// Imports
import {
	fadeIn,
	stagger,
	initial,
	fadeInUp,
	initialTwo,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
import dateFormat from "dateformat";
import {motion} from "framer-motion";
import {IFans} from "@/types/components";
import {FC, Fragment, useState} from "react";
import {useGlobalContext} from "@/context/global";

// Styling
import styles from "@/styles/components/Fans.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";

// Content Cards
const Card: FC<IFans.IAllYouTubeVideos.ICard> = ({content}) => {
	return (
		<>
			<Link
				target="_blank"
				aria-label={`${content?.channelTitle}: ${content?.title}`}
				href={`https://www.youtube.com/@simbasctanzania255/videos`}
			>
				<div className={styles.card + ` group`}>
					<Image
						className={styles.image}
						src={content?.thumbnails?.maxres?.url}
						alt={`${content?.channelTitle}: ${content?.title}`}
						width={
							content?.thumbnails?.maxres?.width
								? content?.thumbnails?.maxres?.width
								: 1000
						}
						height={
							content?.thumbnails?.maxres?.height
								? content?.thumbnails?.maxres?.height
								: 1000
						}
					/>
					<div className={styles.content}>
						<motion.h4
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className={
								styles.title + ` text-pureBlack group-hover:text-white`
							}
						>
							{content?.title?.length > 45
								? content?.title?.substring(0, 45) + "..."
								: content?.title}
						</motion.h4>
						<div
							className={
								styles.divider + ` bg-primary-default group-hover:bg-pureBlack`
							}
						/>
						<div className={styles.details}>
							<div className={styles.publishedViews}>
								<motion.h5
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className={
										styles.date +
										` text-pureBlack group-hover:text-white border-pureBlack group-hover:border-tertiary-default`
									}
								>
									{dateFormat(content?.publishedAt, "mmmm d, yyyy")}
								</motion.h5>

								<motion.h5
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className={
										styles.views +
										` text-pureBlack group-hover:text-white border-pureBlack group-hover:border-tertiary-default`
									}
								>
									194k views
								</motion.h5>
							</div>
							<div>
								<svg
									id="Layer_1"
									version="1.1"
									width="200px"
									height="200px"
									className={
										styles.svg +
										` fill-primary-default group-hover:fill-tertiary-default`
									}
									viewBox="0 0 472.615 472.615"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
									<g
										id="SVGRepo_tracerCarrier"
										stroke-linecap="round"
										stroke-linejoin="round"
									></g>
									<g id="SVGRepo_iconCarrier">
										<g>
											<g>
												<path d="M236.308,0C105.799,0,0,105.798,0,236.308c0,130.507,105.799,236.308,236.308,236.308s236.308-105.801,236.308-236.308 C472.615,105.798,366.816,0,236.308,0z M139.346,347.733V124.88l229.37,111.428L139.346,347.733z"></path>
											</g>
										</g>
									</g>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</>
	);
};

// Main Content
const VideosGrid: FC<IFans.IAllYouTubeVideos.IVideosGrid> = ({}) => {
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
		<>
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
									<Card content={item?.snippet} />
								</motion.div>
							</Fragment>
						))
					) : (
						<>
							<ErrorCard />
						</>
					)}
				</div>
				<Pagination
					totalPages={totalPages}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
					youtubeVideos={globalContext?.youtubeVideos}
				/>
			</div>
		</>
	);
};

// Error Missing Content
const ErrorCard: FC = () => {
	return (
		<div
			className={styles.errorCard}
			style={{
				boxShadow: "28px 28px 2px -20px rgba(0,0,0,0.1)",
			}}
		>
			<motion.div
				initial={initial}
				variants={stagger}
				whileInView="animate"
				viewport={{once: true}}
				className={styles.content}
			>
				<motion.h3
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className={styles.title}
				>
					Oops Sorry!
				</motion.h3>
				<Paragraph content="Nothing to display" className={styles.paragraph} />
			</motion.div>
		</div>
	);
};

// Pagination Section
const Pagination: FC<IFans.IAllYouTubeVideos.IPagination> = ({
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
				<>
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
				</>
			) : (
				<></>
			)}
		</div>
	);
};

export default VideosGrid;
