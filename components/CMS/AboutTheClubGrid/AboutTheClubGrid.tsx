// Imports
import {
	initial,
	stagger,
	arrayLoopStaggerChildren,
 } from "@/animations/animations";
 import { motion } from "framer-motion";
import { FC, memo, Fragment} from "react";
import {IAboutTheClubGrid} from "@/components/CMS/AboutTheClubGrid/types/index";

// Styling
import styles from "@/components/CMS/AboutTheClubGrid/styles/AboutTheClubGrid.module.scss";

// Components
import Card from "@/components/CMS/AboutTheClubGrid/fragments/Card";

const AboutTheClubGrid: FC<IAboutTheClubGrid.IProps> = memo(({
	aboutGrid
}) => {
	return (
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
					) : null}
				</motion.div>
			</div>
		</div>
	);
});

AboutTheClubGrid.displayName = 'AboutTheClubGrid';

export default AboutTheClubGrid;
