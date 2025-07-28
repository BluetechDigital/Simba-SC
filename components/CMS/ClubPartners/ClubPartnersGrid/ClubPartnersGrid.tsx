// Imports
import {FC, Fragment} from "react";
import { motion } from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {arrayLoopStaggerChildren, initial, stagger} from "@/animations/animations";

// Styling
import styles from "@/components/CMS/ClubPartners/ClubPartnersGrid/styles/ClubPartnersGrid.module.scss";

// Components
import Card from "@/components/CMS/ClubPartners/ClubPartnersGrid/fragments/Card";

const ClubPartnersGrid: FC = () => {
	const globalContext = useGlobalContext();

	return (
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
					) : null}
				</motion.div>
			</div>
		</div>
	);
};

export default ClubPartnersGrid;
