"use client";

// Imports
import {
	fadeIn,
	stagger,
	initial,
	fadeInUp,
	initialTwo,
	slideInRightFinish,
	slideInLeftInitial,
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
import CountUp from "@/components/Elements/CountUp";
import UseFormatNumber from "@/hooks/useFormatNumber";
import Paragraph from "@/components/Elements/Paragraph";
import Recommendations from "@/components/Fans/AllPodcastsVideos/Card/Recommendations";
import ContentSliceRevealMaskAnimation from "@/components/Animations/ContentSliceRevealMaskAnimation";

// Content Cards
const Card: FC<IFans.IAllPodcastsVideos.ICard> = ({
	index,
	videoId,
	snippet,
	statistics,
}) => {
	const firstCard: boolean = index === 0;

	return (
		<>
			<Link
				target="_blank"
				href={`https://www.youtube.com/watch?v=${videoId}`}
				aria-label={`${snippet?.channelTitle}: ${snippet?.title}`}
			>
				<div
					className={
						styles.card +
						` group ${firstCard ? "bg-tertiary-default" : "bg-lightBlack"}`
					}
				>
					<div className={styles.imageWrapper}>
						<Image
							className={styles.image}
							src="/img/logos/simba-sc-logo.png"
							// src={`${snippet?.thumbnails?.high?.url}`}
							alt={`${snippet?.channelTitle}: ${snippet?.title}`}
							width={
								snippet?.thumbnails?.maxres?.width
									? snippet?.thumbnails?.maxres?.width
									: 1000
							}
							height={
								snippet?.thumbnails?.maxres?.height
									? snippet?.thumbnails?.maxres?.height
									: 1000
							}
						/>
					</div>
					<div className={styles.content}>
						<ContentSliceRevealMaskAnimation
							className={
								styles.title +
								` ${
									firstCard
										? "text-pureBlack group-hover:text-white"
										: "text-white"
								}`
							}
						>
							{snippet?.title?.length > 45
								? snippet?.title?.substring(0, 45) + "..."
								: snippet?.title}
						</ContentSliceRevealMaskAnimation>
						<div
							className={
								styles.divider +
								` bg-primary-default group-hover:bg-tertiary-default`
							}
						/>
						<div className={styles.details}>
							<div className={styles.publishedViews}>
								<div className={styles.dateViewCount}>
									<motion.h5
										initial={initialTwo}
										whileInView={fadeIn}
										viewport={{once: true}}
										className={
											styles.date +
											` ${
												firstCard
													? "text-pureBlack group-hover:text-white"
													: "text-white"
											}`
										}
									>
										{dateFormat(snippet?.publishedAt, "mmmm d, yyyy")}
									</motion.h5>
									<CountUp
										decimals={1}
										suffix="views"
										className={
											styles.views +
											` ${
												firstCard
													? "text-pureBlack group-hover:text-white"
													: "text-white"
											}`
										}
										number={statistics?.viewCount}
									/>
								</div>
								<div className={styles.likeCountStats}>
									<div className={styles.items}>
										<UseFormatNumber
											decimals={2}
											className={
												styles.likeCount +
												` ${
													firstCard
														? "text-pureBlack group-hover:text-white"
														: "text-white"
												}`
											}
											number={statistics?.likeCount}
										/>
										<div>
											<svg
												viewBox="0 0 24 24"
												fill="#000000"
												xmlns="http://www.w3.org/2000/svg"
												className={
													styles.likeCountSvg +
													` block group-hover:hidden ${
														firstCard
															? "fill-pureBlack group-hover:fill-white"
															: "fill-white"
													}`
												}
											>
												<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
												<g
													id="SVGRepo_tracerCarrier"
													strokeLinecap="round"
													strokeLinejoin="round"
												></g>
												<g id="SVGRepo_iconCarrier">
													<g>
														<path fill="none" d="M0 0h24v24H0z"></path>
														<path d="M14.6 8H21a2 2 0 0 1 2 2v2.104a2 2 0 0 1-.15.762l-3.095 7.515a1 1 0 0 1-.925.619H2a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h3.482a1 1 0 0 0 .817-.423L11.752.85a.5.5 0 0 1 .632-.159l1.814.907a2.5 2.5 0 0 1 1.305 2.853L14.6 8zM7 10.588V19h11.16L21 12.104V10h-6.4a2 2 0 0 1-1.938-2.493l.903-3.548a.5.5 0 0 0-.261-.571l-.661-.33-4.71 6.672c-.25.354-.57.644-.933.858zM5 11H3v8h2v-8z"></path>
													</g>
												</g>
											</svg>
											<svg
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
												className={
													styles.likeCountSvg +
													` hidden group-hover:block fill-tertiary-default`
												}
											>
												<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
												<g
													id="SVGRepo_tracerCarrier"
													strokeLinecap="round"
													strokeLinejoin="round"
												></g>
												<g id="SVGRepo_iconCarrier">
													<g>
														<path fill="none" d="M0 0h24v24H0z"></path>
														<path d="M2 9h3v12H2a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1zm5.293-1.293l6.4-6.4a.5.5 0 0 1 .654-.047l.853.64a1.5 1.5 0 0 1 .553 1.57L14.6 8H21a2 2 0 0 1 2 2v2.104a2 2 0 0 1-.15.762l-3.095 7.515a1 1 0 0 1-.925.619H8a1 1 0 0 1-1-1V8.414a1 1 0 0 1 .293-.707z"></path>
													</g>
												</g>
											</svg>
										</div>
									</div>
									<div className={styles.items}>
										<UseFormatNumber
											decimals={2}
											number={statistics?.commentCount}
											className={
												styles.likeCount +
												` ${
													firstCard
														? "text-pureBlack group-hover:text-white"
														: "text-white"
												}`
											}
										/>
										<div>
											<svg
												version="1.1"
												viewBox="0 0 32 32"
												xmlns="http://www.w3.org/2000/svg"
												className={
													styles.commentCountSvg +
													` block group-hover:hidden ${
														firstCard ? "fill-pureBlack" : "fill-white"
													}`
												}
											>
												<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
												<g
													id="SVGRepo_tracerCarrier"
													strokeLinecap="round"
													strokeLinejoin="round"
												></g>
												<g id="SVGRepo_iconCarrier">
													<g
														id="Page-1"
														stroke="none"
														strokeWidth="1"
														fill="none"
														fillRule="evenodd"
													>
														<g
															id="Icon-Set"
															className={
																firstCard ? "fill-pureBlack" : "fill-white"
															}
															transform="translate(-100.000000, -255.000000)"
														>
															<path
																d="M116,281 C114.832,281 113.704,280.864 112.62,280.633 L107.912,283.463 L107.975,278.824 C104.366,276.654 102,273.066 102,269 C102,262.373 108.268,257 116,257 C123.732,257 130,262.373 130,269 C130,275.628 123.732,281 116,281 L116,281 Z M116,255 C107.164,255 100,261.269 100,269 C100,273.419 102.345,277.354 106,279.919 L106,287 L113.009,282.747 C113.979,282.907 114.977,283 116,283 C124.836,283 132,276.732 132,269 C132,261.269 124.836,255 116,255 L116,255 Z"
																id="comment-1"
															></path>
														</g>
													</g>
												</g>
											</svg>
											<svg
												version="1.1"
												viewBox="0 0 32 32"
												xmlns="http://www.w3.org/2000/svg"
												className={
													styles.commentCountSvg +
													` hidden group-hover:block fill-tertiary-default`
												}
											>
												<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
												<g
													id="SVGRepo_tracerCarrier"
													strokeLinecap="round"
													strokeLinejoin="round"
												></g>
												<g id="SVGRepo_iconCarrier">
													<g
														id="Page-1"
														stroke="none"
														strokeWidth="1"
														fill="none"
														fillRule="evenodd"
													>
														<g
															id="Icon-Set-Filled"
															className="fill-tertiary-default"
															transform="translate(-102.000000, -257.000000)"
														>
															<path
																d="M118,257 C109.164,257 102,263.269 102,271 C102,275.419 104.345,279.354 108,281.919 L108,289 L115.009,284.747 C115.979,284.907 116.977,285 118,285 C126.836,285 134,278.732 134,271 C134,263.269 126.836,257 118,257"
																id="comment-1"
															></path>
														</g>
													</g>
												</g>
											</svg>
										</div>
									</div>
								</div>
							</div>
							<div className={styles.svgWrapper}>
								<svg
									viewBox="0 0 56 56"
									xmlns="http://www.w3.org/2000/svg"
									className={
										styles.controlsSvg +
										` ${
											firstCard
												? "fill-pureBlack group-hover:fill-white"
												: "fill-white"
										}`
									}
								>
									<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
									<g
										id="SVGRepo_tracerCarrier"
										stroke-linecap="round"
										stroke-linejoin="round"
									></g>
									<g id="SVGRepo_iconCarrier">
										<path d="M 27.9999 54.4024 C 41.0546 54.4024 51.9063 43.5742 51.9063 30.4961 C 51.9063 18.9649 43.4687 9.1914 32.5234 7.0351 L 32.5234 3.7070 C 32.5234 2.0430 31.3749 1.5976 30.0858 2.5117 L 22.6093 7.7383 C 21.5546 8.4883 21.5312 9.6133 22.6093 10.3867 L 30.0624 15.6367 C 31.3749 16.5742 32.5234 16.1289 32.5234 14.4414 L 32.5234 11.0898 C 41.3827 13.1055 47.8983 21.0039 47.8983 30.4961 C 47.8983 41.5586 39.0390 50.4180 27.9999 50.4180 C 16.9374 50.4180 8.0546 41.5586 8.0780 30.4961 C 8.1014 23.8398 11.3358 17.9570 16.3280 14.3945 C 17.2890 13.6680 17.5936 12.5664 16.9843 11.5820 C 16.4218 10.6211 15.1327 10.3633 14.1014 11.1602 C 8.0546 15.5430 4.0937 22.6211 4.0937 30.4961 C 4.0937 43.5742 14.9218 54.4024 27.9999 54.4024 Z M 33.6483 40.3633 C 37.5390 40.3633 40.0936 36.6836 40.0936 31.0586 C 40.0936 25.3867 37.5390 21.6602 33.6483 21.6602 C 29.7577 21.6602 27.2030 25.3867 27.2030 31.0586 C 27.2030 36.6836 29.7577 40.3633 33.6483 40.3633 Z M 21.4374 40.0820 C 22.3514 40.0820 22.9374 39.4492 22.9374 38.4649 L 22.9374 23.7227 C 22.9374 22.5742 22.3280 21.8476 21.2733 21.8476 C 20.6405 21.8476 20.1952 22.0586 19.3514 22.6211 L 16.0936 24.8008 C 15.5780 25.1758 15.3202 25.5976 15.3202 26.1602 C 15.3202 26.9336 15.9296 27.5898 16.6796 27.5898 C 17.1249 27.5898 17.3358 27.4961 17.8046 27.1680 L 19.9843 25.5742 L 19.9843 38.4649 C 19.9843 39.4258 20.5702 40.0820 21.4374 40.0820 Z M 33.6483 37.5273 C 31.5858 37.5273 30.2499 35.0664 30.2499 31.0586 C 30.2499 26.9805 31.5624 24.4961 33.6483 24.4961 C 35.7577 24.4961 37.0234 26.9570 37.0234 31.0586 C 37.0234 35.0664 35.7343 37.5273 33.6483 37.5273 Z"></path>
									</g>
								</svg>
								<svg
									height="200px"
									width="200px"
									version="1.1"
									id="Layer_1"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									className={styles.playSvg}
								>
									<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
									<g
										id="SVGRepo_tracerCarrier"
										stroke-linecap="round"
										stroke-linejoin="round"
									></g>
									<g id="SVGRepo_iconCarrier">
										<polygon
											className="fill-white"
											points="187.368,146.928 187.368,355.8 382.992,251.368 "
										></polygon>
										<path
											className="fill-primary-default group-hover:fill-tertiary-default"
											d="M256,0.376C114.616,0.376,0,114.824,0,256s114.616,255.624,256,255.624S512,397.176,512,256 S397.384,0.376,256,0.376z M184.496,146.928l195.624,104.44L184.496,355.8V146.928z"
										></path>
									</g>
								</svg>
								<svg
									viewBox="0 0 56 56"
									xmlns="http://www.w3.org/2000/svg"
									className={
										styles.controlsSvg +
										` ${
											firstCard
												? "fill-pureBlack group-hover:fill-white"
												: "fill-white"
										}`
									}
								>
									<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
									<g
										id="SVGRepo_tracerCarrier"
										stroke-linecap="round"
										stroke-linejoin="round"
									></g>
									<g id="SVGRepo_iconCarrier">
										<path d="M 27.9999 54.4024 C 41.0546 54.4024 51.9063 43.5742 51.9063 30.4961 C 51.9063 22.6211 47.9219 15.5430 41.8983 11.1602 C 40.8671 10.3633 39.5780 10.6211 38.9921 11.5820 C 38.4062 12.5664 38.7109 13.6680 39.6483 14.3945 C 44.6405 17.9570 47.8983 23.8398 47.9219 30.4961 C 47.9454 41.5586 39.0390 50.4180 27.9999 50.4180 C 16.9374 50.4180 8.1014 41.5586 8.1014 30.4961 C 8.1014 21.0039 14.6171 13.1055 23.4765 11.0898 L 23.4765 14.4649 C 23.4765 16.1289 24.6249 16.5742 25.8905 15.6602 L 33.3905 10.4102 C 34.4452 9.6836 34.4687 8.5586 33.3905 7.7851 L 25.9140 2.5351 C 24.6249 1.5976 23.4765 2.0430 23.4765 3.7305 L 23.4765 7.0351 C 12.5077 9.1680 4.0937 18.9649 4.0937 30.4961 C 4.0937 43.5742 14.9218 54.4024 27.9999 54.4024 Z M 33.6718 40.3633 C 37.5624 40.3633 40.0936 36.6836 40.0936 31.0586 C 40.0936 25.3867 37.5624 21.6602 33.6718 21.6602 C 29.7812 21.6602 27.2265 25.3867 27.2265 31.0586 C 27.2265 36.6836 29.7812 40.3633 33.6718 40.3633 Z M 21.4374 40.0820 C 22.3514 40.0820 22.9609 39.4492 22.9609 38.4649 L 22.9609 23.7227 C 22.9609 22.5742 22.3280 21.8476 21.2733 21.8476 C 20.6405 21.8476 20.2187 22.0586 19.3514 22.6211 L 16.1171 24.8008 C 15.5780 25.1758 15.3436 25.5976 15.3436 26.1602 C 15.3436 26.9336 15.9530 27.5898 16.7030 27.5898 C 17.1249 27.5898 17.3593 27.4961 17.8280 27.1680 L 20.0077 25.5742 L 20.0077 38.4649 C 20.0077 39.4258 20.5702 40.0820 21.4374 40.0820 Z M 33.6718 37.5273 C 31.5858 37.5273 30.2733 35.0664 30.2733 31.0586 C 30.2733 26.9805 31.5624 24.4961 33.6718 24.4961 C 35.7577 24.4961 37.0234 26.9570 37.0234 31.0586 C 37.0234 35.0664 35.7343 37.5273 33.6718 37.5273 Z"></path>
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
const PodcastsVideosGrid: FC<IFans.IAllPodcastsVideos.IPodcastsVideosGrid> = ({
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
		<>
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
							<>
								<ErrorCard />
							</>
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
const Pagination: FC<IFans.IAllPodcastsVideos.IPagination> = ({
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

export default PodcastsVideosGrid;
