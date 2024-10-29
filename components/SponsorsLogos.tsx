// Imports
import {
	initial,
	stagger,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {ISponsorsLogos} from "@/types/components/index";

// Styling
import styles from "@/styles/components/SponsorsLogos.module.scss";

const SponsorsLogos: FC<ISponsorsLogos> = ({logoGrid}) => {
	return (
		<>
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
											width={
												item?.image?.mediaDetails?.width
													? item?.image?.mediaDetails?.width
													: 500
											}
											height={
												item?.image?.mediaDetails?.height
													? item?.image?.mediaDetails?.height
													: 500
											}
											className={
												item?.image?.sourceUrl ? styles.image : `hidden`
											}
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

export default SponsorsLogos;
