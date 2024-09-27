// Imports
import {
	fadeIn,
	initial,
	stagger,
	initialTwo,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import {FC, Fragment} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IAbout} from "@/types/components/index";

// Styling
import styles from "@/styles/components/About.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const Card: FC<IAbout.IAboutTheClubCard> = ({
	image,
	title,
	paragraph,
	buttonLink,
}) => {
	return (
		<>
			<Link
				href={`${buttonLink?.url}`}
				aria-label={`${buttonLink?.title}`}
				target={`${buttonLink?.target ? buttonLink?.target : "_self"}`}
			>
				<div className={styles.aboutTheClubCard}>
					<Image
						className={styles.image}
						alt={image?.altText}
						src={image?.sourceUrl}
						width={
							image?.mediaDetails?.width ? image?.mediaDetails?.width : 1000
						}
						height={
							image?.mediaDetails?.height ? image?.mediaDetails?.height : 1000
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
						<Paragraph
							content={
								paragraph?.length > 100
									? paragraph?.substring(0, 100) + "..."
									: paragraph
							}
							className={styles.paragraph}
						/>
						<Link
							href={`${buttonLink?.url}`}
							target={buttonLink?.target}
							className={`${
								buttonLink?.url
									? "buttonStyling-alt-two-slim mt-2 mx-auto lg:mx-0"
									: "hidden"
							}`}
						>
							{buttonLink?.title}
						</Link>
					</div>
				</div>
			</Link>
		</>
	);
};

const AboutTheClubGrid: FC<IAbout.IAboutTheClubGrid> = ({aboutGrid}) => {
	return (
		<>
			<div className={styles.aboutTheClubGrid}>
				<div className={styles.wrapper}>
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className={styles.gridContent}
					>
						{aboutGrid?.length > 0 ? (
							aboutGrid?.map((item: any, index: number) => (
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
											image={item?.image}
											title={item?.title}
											paragraph={item?.paragraph}
											buttonLink={item?.buttonLink}
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

export default AboutTheClubGrid;
