// Imports
import {
	fadeIn,
	initial,
	stagger,
	initialTwo,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import {motion} from "framer-motion";
import {FC, memo, Fragment} from "react";
import {IGeneralInformation} from "@/components/CMS/GeneralInformation/types/index";

// Styling
import styles from "@/components/CMS/GeneralInformation/styles/GeneralInformation.module.scss";

// Components
import Card from "@/components/CMS/GeneralInformation/fragments/Card";
import Paragraph from "@/components/Global/Elements/Paragraph/Paragraph";
import SlideInXLeftAnimation from "@/components/Animations/SlideInXLeftAnimation";

const GeneralInformation: FC<IGeneralInformation.IProps> = memo(({
	image,
	title,
	paragraph,
	informationGrid,
}) => {
	return (
		<div className={styles.generalInformation}>
			<div className={styles.wrapper}>
				<SlideInXLeftAnimation className="w-full h-full">
					<div
						className={styles.content}
						style={{
							backgroundImage: `linear-gradient(0deg,rgba(0, 0, 0, 0.30),
							rgba(0, 0, 0, 0.30)),url("${image?.sourceUrl}")`,
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
	);
});

GeneralInformation.displayName = 'GeneralInformation';

export default GeneralInformation;
