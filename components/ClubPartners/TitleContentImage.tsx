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
import {IClubPartners} from "@/types/components/index";

// Styling
import styles from "@/styles/components/ClubPartners.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const TitleContentImage: FC<IClubPartners.ITitleContentImage> = ({content}) => {
	// console.log(content);
	return (
		<>
			<div className={styles.titleContentImage}>
				<div className={styles.wrapper}>
					<div className="w-full lg:w-1/2 p-4">
						<div className={styles.content}>
							{/* <motion.h5
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className={styles.title}
							>
								{content?.title}
							</motion.h5> */}
							{/* <Paragraph
								content={
									content?.paragraph?.length > 100
										? content?.paragraph?.substring(0, 100) + "..."
										: content?.paragraph
								}
								className={styles.paragraph}
							/> */}
						</div>
					</div>
					<div className="w-full lg:w-1/2 p-4">
						{/* <Image
							className={styles.image}
							alt={content?.image?.altText}
							src={content?.image?.sourceUrl}
							width={
								content?.image?.mediaDetails?.width
									? content?.image?.mediaDetails?.width
									: 1000
							}
							height={
								content?.image?.mediaDetails?.height
									? content?.image?.mediaDetails?.height
									: 1000
							}
						/> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default TitleContentImage;
