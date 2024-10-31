// Imports
import {FC} from "react";
import {IFoundationIntro} from "@/types/components/index";

// Styling
import styles from "@/styles/components/FoundationIntro.module.scss";

// Components
import Title from "@/components/Elements/Title";
import Paragraph from "@/components/Elements/Paragraph";

const FoundationIntro: FC<IFoundationIntro> = ({title, paragraph}) => {
	return (
		<div className={styles.foundationIntro}>
			<div className={styles.container}>
				<div className={styles.content}>
					<Title
						content={title}
						className={
							styles.title + ` ${paragraph ? styles.after : styles.before}`
						}
					/>
					<Paragraph content={paragraph} className={styles.paragraph} />
				</div>
				<div className={styles.bottomContent}></div>
			</div>
		</div>
	);
};

export default FoundationIntro;
