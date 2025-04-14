// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import dateFormat from "dateformat";
import {motion} from "framer-motion";
import {fadeIn,initialTwo,} from "@/animations/animations";
import {IAllYouTubeVideos} from "@/components/Fans/AllYouTubeVideos/types/index";

// Styling
import styles from "@/components/Fans/AllYouTubeVideos/styles/AllYouTubeVideos.module.scss";

// Components
import CountUp from "@/components/Elements/CountUp";
import UseFormatNumber from "@/hooks/useFormatNumber";

const VideosGrid: FC<IAllYouTubeVideos.ICard> = ({
	videoId,
	snippet,
	statistics,
}) => {
    
    return (
        <Link
			target="_blank"
			href={`https://www.youtube.com/watch?v=${videoId}`}
			aria-label={`${snippet?.channelTitle}: ${snippet?.title}`}
		>
			<div className={styles.card + ` group`}>
				<Image
					className={styles.image}
					src={`${snippet?.thumbnails?.high?.url}`}
					alt={`${snippet?.channelTitle}: ${snippet?.title}`}
					width={snippet?.thumbnails?.maxres?.width || 1000}
					height={snippet?.thumbnails?.maxres?.height || 1000}
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
						{snippet?.title?.length > 45
							? snippet?.title?.substring(0, 45) + "..."
							: snippet?.title}
					</motion.h4>
					<div
						className={
							styles.divider +
							` bg-primary-default group-hover:bg-tertiary-default`
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
								{dateFormat(snippet?.publishedAt, "mmmm d, yyyy")}
							</motion.h5>
							<CountUp
								decimals={1}
								suffix="views"
								number={statistics?.viewCount}
								className={
									styles.views +
									` text-pureBlack group-hover:text-white border-pureBlack group-hover:border-tertiary-default`
								}
							/>
							<div className={styles.likeCountStats}>
								<div className={styles.items}>
									<UseFormatNumber
										decimals={2}
										number={statistics?.likeCount}
										className={
											styles.likeCount +
											` text-pureBlack group-hover:text-white border-pureBlack group-hover:border-tertiary-default`
										}
									/>
									<div>
										<svg
											viewBox="0 0 24 24"
											fill="#000000"
											xmlns="http://www.w3.org/2000/svg"
											className={
												styles.likeCountSvg +
												` block group-hover:hidden fill-pureBlack`
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
											` text-pureBlack group-hover:text-white border-pureBlack group-hover:border-tertiary-default`
										}
									/>
									<div>
										<svg
											version="1.1"
											viewBox="0 0 32 32"
											xmlns="http://www.w3.org/2000/svg"
											className={
												styles.commentCountSvg +
												` block group-hover:hidden fill-pureBlack`
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
														transform="translate(-100.000000, -255.000000)"
														fill="#000000"
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
						<div>
							<svg
								viewBox="0 0 32 32"
								xmlns="http://www.w3.org/2000/svg"
								className={
									styles.svg +
									` fill-primary-default group-hover:fill-tertiary-default`
								}
							>
								<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
								<g
									id="SVGRepo_tracerCarrier"
									strokeLinecap="round"
									strokeLinejoin="round"
								></g>
								<g id="SVGRepo_iconCarrier">
									<path d="M24.325 8.309s-2.655-.334-8.357-.334c-5.517 0-8.294.334-8.294.334A2.675 2.675 0 0 0 5 10.984v10.034a2.675 2.675 0 0 0 2.674 2.676s2.582.332 8.294.332c5.709 0 8.357-.332 8.357-.332A2.673 2.673 0 0 0 27 21.018V10.982a2.673 2.673 0 0 0-2.675-2.673zM13.061 19.975V12.03L20.195 16l-7.134 3.975z"></path>
								</g>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</Link>
    );
}

export default VideosGrid;