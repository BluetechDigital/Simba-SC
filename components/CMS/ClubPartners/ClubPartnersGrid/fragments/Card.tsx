// Imports
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import { initialTwo, fadeIn } from "@/animations/animations";
import {IClubPartnersGrid} from "@/components/CMS/ClubPartners/ClubPartnersGrid/types/index";

// Styling
import styles from "@/components/CMS/ClubPartners/ClubPartnersGrid/styles/ClubPartnersGrid.module.scss";

// Components
import Button from "@/components/Global/Elements/Button/Button";
import Paragraph from "@/components/Global/Elements/Paragraph/Paragraph";

const VideoCard: FC<IClubPartnersGrid.ICard> = ({
	slug,
	title,
	excerpt,
	featuredImage,
}) => {

	type IButton = {
		url: string;
		title: string;
		target: string;
	};

	const buttonLink: IButton= {
		url: `/club-partners/${slug}`,
		title: "Learn More",
		target: "_self",
	};

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
					<Paragraph content={excerpt} className={styles.paragraph}/>
					<Button styleNumber={2.5} link={buttonLink}/>
				</div>
			</div>
		</Link>
    );
}

export default VideoCard;