// Imports
import { FC } from "react";
import {motion} from "framer-motion";
import {stagger, initial, fadeInUp} from "@/animations/animations";

// Styling
import styles from "@/components/Fans/AllPodcastsVideos/styles/AllPodcastsVideos.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph/Paragraph";

const ErrorCard: FC = () => {
    
    return (
        <div
			className={styles.errorCard}
			style={{
				boxShadow: "28px 28px 2px -20px rgba(0,0,0,0.1)",
			}}
		>
			<motion.div
				initial={initial}
				variants={stagger}
				whileInView="animate"
				viewport={{once: true}}
				className={styles.content}
			>
				<motion.h3
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className={styles.title}
				>
					Oops Sorry!
				</motion.h3>
				<Paragraph content="Nothing to display" className={styles.paragraph} />
			</motion.div>
		</div>
    );
}

ErrorCard.displayName = 'ErrorCard';

export default ErrorCard;