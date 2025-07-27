"use client";

// Imports
import {
	initial,
	fadeInUp,
	arrayLoopStaggerChildren,
 } from "@/animations/animations";
import { motion } from "framer-motion";
import { FC, memo, Fragment, Suspense} from "react";
import { useGlobalContext } from "@/context/global";
import {ILastThreeFixtures} from "@/components/CMS/Fixtures/LastThreeFixtures/types/index";

// Styling
import styles from "@/components/CMS/Fixtures/LastThreeFixtures/styles/LastThreeFixtures.module.scss";

// Components
import Card from "@/components/CMS/Fixtures/LastThreeFixtures/fragments/Card";
import ContentSliceRevealMaskAnimation from "@/components/Animations/ContentSliceRevealMaskAnimation";

const LastThreeFixtures: FC<ILastThreeFixtures.IProps> = memo(({
	title
}) => {
	const globalContext = useGlobalContext();
	return (
		<div className={styles.lastThreeFixtures}>
			<motion.div
				initial={initial}
				whileInView={fadeInUp}
				viewport={{once: true}}
				className={styles.container}
			>
				<ContentSliceRevealMaskAnimation>
					<h2 className={styles.title}>
						{title}
					</h2>
				</ContentSliceRevealMaskAnimation>
				<div className={styles.fixturesGrid}>
					<Suspense fallback={"Loading..."}>
						{globalContext?.lastThreeFixtures?.response?.length > 0 ? (
							globalContext?.lastThreeFixtures?.response?.map(
								(fixture: any, index: number) => (
									<Fragment key={index}>
										<motion.div
											custom={index}
											initial={initial}
											whileInView="animate"
											viewport={{once: true}}
											className={styles.cardWrapper}
											variants={arrayLoopStaggerChildren}
										>
											<Card
												goals={fixture?.goals}
												teams={fixture?.teams}
												league={fixture?.league}
												date={fixture?.fixture?.fixture?.date}
											/>
										</motion.div>
									</Fragment>
								)
							)
						) : (
							<div
								role="status"
								className={styles.loading}
							>
								<svg
									fill="none"
									aria-hidden="true"
									viewBox="0 0 100 101"
									xmlns="http://www.w3.org/2000/svg"
									className={styles.svg}
								>
									<path
										d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 505908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.0814450.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.918650.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.0814450.5908Z"
										fill="currentColor"
									/>
									<path
										d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.87124.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 632754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 169328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C478511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 152552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 881811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
										fill="currentFill"
									/>
								</svg>
								<p className={styles.paragraph}>
									Loading...
								</p>
							</div>
						)}
					</Suspense>
				</div>
			</motion.div>
		</div>
	);
});

LastThreeFixtures.displayName = 'LastThreeFixtures';

export default LastThreeFixtures;
