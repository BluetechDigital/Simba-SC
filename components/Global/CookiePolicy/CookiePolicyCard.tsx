"use client";

// Imports
import postHog from "posthog-js";
import {FC, useState} from "react";
import {motion} from "framer-motion";
import {fadeInUp, initial, stagger} from "@/animations/animations";

// Styling
import styles from "@/components/Global/CookiePolicy/styles/CookiePolicyCard.module.scss";

// Components
import Paragraph from "@/components/Global/Elements/Paragraph/Paragraph";

const CookiePolicyCard: FC = () => {
	const [showCookiePolicyCard, setShowCookiePolicyCard] = useState(true);

	const acceptCookies = () => {
		postHog.opt_in_capturing();
		setShowCookiePolicyCard(false);
	};

	const refuseCookies = () => {
		postHog.opt_out_capturing();
		setShowCookiePolicyCard(false);
	};

	return (
		<div
			className={
				showCookiePolicyCard
					? styles.cookiePolicyCard
					: `hidden`
			}
		>
			<motion.div
				initial={initial}
				variants={stagger}
				whileInView="animate"
				viewport={{once: true}}
				className={styles.content}
				style={{
					boxShadow: "0px 30px 2px -25px rgba(0,0,0,0.1)",
				}}
			>
				<motion.h3
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className={styles.title}
				>
					Cookie Policy
				</motion.h3>
				<Paragraph
					className={styles.paragraph}
					content={`<p>This website uses cookies to enhance the user experience and ensure the proper functioning of the site. By using this website, you agree to the use of cookies in accordance with this CookiePolicy.</p>`}
				/>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className={styles.buttonSection}
				>
					<motion.button
						initial={initial}
						whileInView={fadeInUp}
						onClick={acceptCookies}
						viewport={{once: true}}
						className={styles.acceptButton}
					>
						Accept Cookies
					</motion.button>
					<motion.button
						initial={initial}
						whileInView={fadeInUp}
						onClick={refuseCookies}
						viewport={{once: true}}
						className={styles.refuseButton}
					>
						Refuse Cookies
					</motion.button>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default CookiePolicyCard;
