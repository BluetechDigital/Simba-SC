// Imports
import Link from "next/link";
import { FC, memo } from "react";
import dateFormat from "dateformat";
import {ILatestNewsGrid} from "@/components/CMS/LatestNewsGrid/types/index";

// Styling
import styles from "@/components/CMS/LatestNewsGrid//styles/LatestNewsGrid.module.scss";

// Components
import ContentSliceRevealMaskAnimation from "@/components/Animations/ContentSliceRevealMaskAnimation";

const Card: FC<ILatestNewsGrid.ICard> = memo(({
	slug,
	date,
	title,
	className,
	featuredImage,
}) => {
	return (
		<Link
			target={"_blank"}
			href={`/news/${slug}`}
			aria-label={`${title} link ${slug}`}
		>
			<div
				className={className}
				style={{
					backgroundImage: `linear-gradient(0deg,rgba(0, 0, 0, 0.70),rgba(0, 0, 0, 0.60),rgba(0, 0, 0, 0.50),
					rgba(0, 0, 0, 0.30),rgba(0, 0, 0, 0.20),rgba(0, 0, 0, 0.15)),url("${featuredImage?.node?.sourceUrl}")`,
				}}
			>
				<div className={styles.container}>
					<span className={styles.date}>
						{dateFormat(date, "dddd, mmmm d, yyyy")}
					</span>
					<span className={styles.divider}></span>
					<ContentSliceRevealMaskAnimation>
						<h3 className={styles.title}>{title}</h3>
					</ContentSliceRevealMaskAnimation>
				</div>
			</div>
		</Link>
	);
});

Card.displayName = 'Card';

export default Card;
