// Imports
import {
	fadeIn,
	initial,
	stagger,
	initialTwo,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IGeneralInformation} from "@/types/components/index";

// Styling
import styles from "@/styles/components/GeneralInformation.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import SlideInXLeftAnimation from "@/components/Animations/SlideInXLeftAnimation";

const Card: FC<IGeneralInformation.ICard> = ({title, paragraph}) => {
	return (
		<>
			<div className={styles.card}>
				<motion.h5
					initial={initialTwo}
					whileInView={fadeIn}
					viewport={{once: true}}
					className={styles.title}
				>
					{title}
				</motion.h5>
				<Paragraph content={paragraph} className={styles.paragraph} />
			</div>
		</>
	);
};

const GeneralInformation: FC<IGeneralInformation.IProps> = ({
	image,
	title,
	paragraph,
	informationGrid,
}) => {
	return (
		<>
			<div className={styles.generalInformation}>
				<div className={styles.wrapper}>
					<SlideInXLeftAnimation className="w-full h-full">
						<div
							className={styles.content}
							style={{
								backgroundImage: `linear-gradient(0deg,rgba(0, 0, 0, 0.30),rgba(0, 0, 0, 0.30)),url("${image?.sourceUrl}")`,
							}}
						>
							<motion.h5
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className={styles.title}
							>
								{title}
							</motion.h5>
							<Paragraph content={paragraph} className={styles.paragraph} />
						</div>
					</SlideInXLeftAnimation>

					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className={styles.gridContent}
					>
						{informationGrid?.length > 0 ? (
							informationGrid?.map((item: any, index: number) => (
								<Fragment key={index}>
									<motion.div
										custom={index}
										initial={initial}
										whileInView="animate"
										viewport={{once: false}}
										className="w-full h-full"
										variants={arrayLoopStaggerChildren}
									>
										<Card title={item?.title} paragraph={item?.paragraph} />
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

export default GeneralInformation;
