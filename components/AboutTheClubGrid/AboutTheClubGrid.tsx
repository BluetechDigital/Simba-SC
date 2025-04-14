// Imports
import {
	initial,
	stagger,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IAboutTheClubGrid} from "@/components/AboutTheClubGrid/types/index";

// Styling
import styles from "@/components/AboutTheClubGrid/styles/AboutTheClubGrid.module.scss";

// Components
import Card from "@/components/AboutTheClubGrid/fragments/Card";

const AboutTheClubGrid: FC<IAboutTheClubGrid.IProps> = ({aboutGrid}) => {
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
					) : (
						<></>
					)}
				</motion.div>
			</div>
		</div>
	);
};

export default AboutTheClubGrid;
