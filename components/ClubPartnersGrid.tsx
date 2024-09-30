// Imports
import {
	fadeIn,
	initial,
	stagger,
	initialTwo,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {IClubPartnersGrid} from "@/types/components/index";

// Styling
import styles from "@/styles/components/ClubPartnersGrid.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const Card: FC<IClubPartnersGrid.ICard> = ({
	slug,
	title,
	excerpt,
	featuredImage,
}) => {
	return (
		<>
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
						width={
							featuredImage?.node?.mediaDetails?.width
								? featuredImage?.node?.mediaDetails?.width
								: 1000
						}
						height={
							featuredImage?.node?.mediaDetails?.height
								? featuredImage?.node?.mediaDetails?.height
								: 1000
						}
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
		</>
	);
};

const ClubPartnersGrid: FC = () => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div className={styles.clubPartnersGrid}>
				<div className={styles.wrapper}>
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className={styles.gridContent}
					>
						{globalContext?.clubPartners?.length > 0 ? (
							globalContext?.clubPartners?.map((item: any, index: number) => (
								<Fragment key={index}>
									<motion.div
										custom={index}
										initial={initial}
										whileInView="animate"
										viewport={{once: false}}
										className="w-full h-full"
										variants={arrayLoopStaggerChildren}
									>
										<Card
											slug={item?.node?.slug}
											title={item?.node?.title}
											excerpt={item?.node?.excerpt}
											featuredImage={item?.node?.featuredImage}
										/>
									</motion.div>
								</Fragment>
							))
						) : (
							<></>
						)}
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default ClubPartnersGrid;
