// Imports
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import dateFormat from "dateformat";
import { motion } from "framer-motion";
import { initial, fadeInUp} from "@/animations/animations";
import {INewsSingle} from "@/components/CMS/Achieve/NewsSingle/types/index";

// Styling
import styles from "@/components/CMS/Achieve/NewsSingle/styles/NewsSingle.module.scss";

// Components
import Paragraph from "@/components/Global/Elements/Paragraph/Paragraph";

const NewsLatestArticles: FC<INewsSingle.INewsLatestArticles> = ({
	slug,
	date,
	title,
	excerpt,
	articleType,
	featuredImage,
}) => {
    return (
        <Link
			href={slug}
			target="_self"
			className={styles.latestArticlesGrid + " group"}
			aria-label={`${articleType ? articleType : "Insights"}: ${title}`}
		>
			<div className={styles.featuredImageWrapper}>
				<Image
					src={featuredImage?.node?.sourceUrl}
					alt={`${featuredImage?.node?.altText}`}
					width={featuredImage?.node?.mediaDetails?.width || 1000}
					height={featuredImage?.node?.mediaDetails?.height || 1000}
					className={featuredImage?.node?.sourceUrl ? styles.featuredImage : "hidden"}
				/>
			</div>
			<div className={styles.insightsWrapper}>
				<motion.span
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className={styles.text}
				>
					Insights
				</motion.span>
				<motion.span
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className={styles.svgDiv}
				>
					<svg
						width="1"
						height="20"
						viewBox="0 0 1 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<line
							x1="0.5"
							y1="2.18558e-08"
							x2="0.499999"
							y2="20"
							stroke="black"
							strokeOpacity="0.2"
						></line>
					</svg>
				</motion.span>
				<motion.span
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className={styles.date}
				>
					{dateFormat(date, "dddd, mmmm d, yyyy")}
				</motion.span>
			</div>
			<motion.h4
				initial={initial}
				whileInView={fadeInUp}
				viewport={{once: true}}
				className={styles.title}
			>
				{title}
			</motion.h4>
			<motion.article
				initial={initial}
				whileInView={fadeInUp}
				viewport={{once: true}}
			>
				<Paragraph
					content={
						excerpt?.length > 200
							? excerpt?.substring(0, 200) + "..."
							: excerpt
					}
					className={styles.excerpt}
				/>
			</motion.article>
		</Link>
    );
}

export default NewsLatestArticles;