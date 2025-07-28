// Imports
import {
	initial,
	stagger,
	arrayLoopStaggerChildren,
 } from "@/animations/animations";
import Image from "next/image";
import { motion } from "framer-motion";
import { FC, memo, Fragment} from "react";
import {ISponsorsLogos} from "@/components/CMS/SponsorsLogos/types/index";

// Styling
import styles from "@/components/CMS/SponsorsLogos/styles/SponsorsLogos.module.scss";

const SponsorsLogos: FC<ISponsorsLogos.IProps> = memo(({
	logoGrid
}) => {
	return (
		<div className={styles.sponsorsLogos}>
			<div className={styles.container}>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className={styles.content}
				>
					{logoGrid?.length > 0 ? (
						logoGrid?.map((item: any, index: number) => (
							<Fragment key={index}>
								<motion.div
									custom={index}
									initial={initial}
									whileInView="animate"
									viewport={{once: false}}
									variants={arrayLoopStaggerChildren}
								>
									<Image
										src={item?.image?.sourceUrl}
										alt={`${item?.image?.altText}`}
										width={item?.image?.mediaDetails?.width || 1000}
										height={item?.image?.mediaDetails?.height || 1000}
										className={item?.image?.sourceUrl ? styles.image : `hidden`}
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

SponsorsLogos.displayName = 'SponsorsLogos';

export default SponsorsLogos;
