// Imports
import Image from "next/image";
import { FC, memo } from "react"; 
import dateFormat from "dateformat";
import { motion } from "framer-motion";
import {initial, fadeInUp} from "@/animations/animations";
import {ILastThreeFixtures} from "@/components/CMS/Fixtures/LastThreeFixtures/types/index";

// Styling
import styles from "@/components/CMS/Fixtures/LastThreeFixtures/styles/LastThreeFixtures.module.scss";

const Card: FC<ILastThreeFixtures.ICard> = memo(({
	date,
	goals,
	teams,
	league,
}) => {
	return (
		<div className={styles.card}>
			<div className={styles.gameDayDateWrapper}>
				<motion.span
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className={styles.gameDay}
				>
					Game Day /
				</motion.span>
				<motion.span
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className={styles.date}
				>
					{dateFormat(date, "mmmm d, yyyy")}
				</motion.span>
			</div>
			<div className={styles.homeAndAwayWrapper}>
				<motion.div
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className={styles.homeTeam}
				>
					<Image
						width={1000}
						height={1000}
						src={teams?.home?.logo}
						alt={`${teams?.home?.name} club Logo`}
						className={styles.logo}
					/>
					<motion.span
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className={styles.name}
					>
						{teams?.home?.name}
					</motion.span>
					<motion.span
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className={styles.winner}
					>
						{teams?.home?.winner}
					</motion.span>
				</motion.div>
				<motion.div
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className={styles.goalsStats}
				>
					<motion.span
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className={styles.home}
					>
						{goals?.home}
					</motion.span>
					<span className={styles.div}>
						-
					</span>
					<motion.span
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className={styles.away}
					>
						{goals?.away}
					</motion.span>
				</motion.div>
				<motion.div
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className={styles.awayTeam}
				>
					<Image
						width={1000}
						height={1000}
						src={teams?.away?.logo}
						className={styles.logo}
						alt={`${teams?.away?.name} club Logo`}
					/>
					<motion.span
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className={styles.name}
					>
						{teams?.away?.name}
					</motion.span>
					<motion.span
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className={styles.winner}
					>
						{teams?.away?.winner}
					</motion.span>
				</motion.div>
			</div>
			<motion.span
				initial={initial}
				whileInView={fadeInUp}
				viewport={{once: true}}
				className={styles.leagueName}
			>
				{league?.name}
			</motion.span>
		</div>
	);
});

Card.displayName = 'Card';

export default Card;
