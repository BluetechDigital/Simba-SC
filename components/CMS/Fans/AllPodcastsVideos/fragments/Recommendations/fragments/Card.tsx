// Imports
import Link from "next/link";
import Image from "next/image";
import { FC, memo } from "react";
import dateFormat from "dateformat";
import {motion} from "framer-motion";
import {fadeIn,initialTwo} from "@/animations/animations";
import {IAllPodcastsVideos} from "@/components/CMS/Fans/AllPodcastsVideos/types/index";

// Styling
import styles from "@/components/CMS/Fans/AllPodcastsVideos/styles/AllPodcastsVideos.module.scss";

// Components
import CountUp from "@/components/Global/Elements/CountUp";
import UseFormatNumber from "@/hooks/useFormatNumber";
import ContentSliceRevealMaskAnimation from "@/components/Animations/ContentSliceRevealMaskAnimation";

const Card: FC<IAllPodcastsVideos.IRecommendations.ICard> = memo(({
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
				<div className={styles.imageWrapper}>
					<Image
						className={styles.image}
						src={`${snippet?.thumbnails?.high?.url}`}
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
					<ContentSliceRevealMaskAnimation className={styles.title}>
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
									className={styles.date}
								>
									{dateFormat(snippet?.publishedAt, "dddd, dd")}
								</motion.h5>
								<CountUp
									decimals={1}
									suffix="views"
									className={styles.views}
									number={statistics?.viewCount}
								/>
							</div>
							<div className={styles.wrapper}>
								<div className={styles.likeCountStats}>
									<div className={styles.items}>
										<UseFormatNumber
											decimals={2}
											className={styles.likeCount}
											number={statistics?.likeCount}
										/>
										<svg
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
											className={
												styles.likeCountSvg +
												` fill-white group-hover:fill-tertiary-default`
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
									<div className={styles.items}>
										<UseFormatNumber
											decimals={2}
											number={statistics?.commentCount}
											className={styles.likeCount}
										/>
										<svg
											version="1.1"
											viewBox="0 0 32 32"
											xmlns="http://www.w3.org/2000/svg"
											className={styles.commentCountSvg}
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
														className="fill-white group-hover:fill-tertiary-default"
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
								<svg
									viewBox="0 0 32 32"
									xmlns="http://www.w3.org/2000/svg"
									className={
										styles.playSvg +
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
			</div>
		</Link>
    );
});

Card.displayName = 'Card';

export default Card;