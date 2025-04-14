// Imports
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import { initialTwo, fadeIn } from "@/animations/animations";
import {IClubPartnersGrid} from "@/components/ClubPartners/ClubPartnersGrid/types/index";

// Styling
import styles from "@/components/ClubPartners/ClubPartnersGrid/styles/ClubPartnersGrid.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph/Paragraph";

const VideoCard: FC<IClubPartnersGrid.ICard> = ({
	slug,
	title,
	excerpt,
	featuredImage,
}) => {
    return (
        <Link
			target={"_self"}
			href={`/club-partners/${slug}`}
			aria-label={`${title} link ${slug}`}
		>
			<div className={styles.card}>
				<Image
					className={styles.image}
					alt={featuredImage?.node?.altText}
					src={featuredImage?.node?.sourceUrl}
					width={featuredImage?.node?.mediaDetails?.width || 1000}
					height={featuredImage?.node?.mediaDetails?.height || 1000}
				/>
				<div className={styles.details}>
					<motion.h5
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className={styles.title}
					>
						{title}
					</motion.h5>
					<Paragraph content={excerpt} className={styles.paragraph} />
					<Link
						target={"_self"}
						href={`/club-partners/${slug}`}
						aria-label={`${title} link ${slug}`}
						className={`${
							slug
								? "buttonStyling-alt-two-slim mt-2 mx-auto lg:mx-0"
								: "hidden"
						}`}
					>
						Learn More
					</Link>
				</div>
			</div>
		</Link>
    );
}

export default VideoCard;