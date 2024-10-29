// Imports
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {initialTwo, fadeIn} from "@/animations/animations";
import {IOfficialMembershipsCta} from "@/types/components/index";

// Styling
import styles from "@/styles/components/OfficialMembershipsCta.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";
import SlideInXLeftAnimation from "@/components/Animations/SlideInXLeftAnimation";

const OfficialMembershipsCta: FC<IOfficialMembershipsCta> = ({
	title,
	image,
	paragraph,
	buttonLink,
	bulletPoints,
}) => {
	return (
		<>
			<div
				className={styles.officialMembershipsCta}
				style={{
					backgroundImage: `url("/svg/background/stacked-steps-haikei-lightgrey.svg")`,
				}}
			>
				<div className={styles.container}>
					<div
						className={styles.content}
						style={{
							backgroundImage: `url("${image?.sourceUrl}")`,
						}}
					>
						<SlideInXLeftAnimation className={styles.card}>
							<ScrollYProgressReveal className={styles.wrapper}>
								<motion.h4
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className={styles.title}
								>
									{title}
								</motion.h4>
								<Paragraph content={paragraph} className={styles.paragraph} />
								<div className={styles.buttonLink}>
									<Link
										href={`${buttonLink?.url}`}
										target={buttonLink?.target}
										aria-label={`${buttonLink?.title}`}
										className={`${
											buttonLink?.url ? "buttonStyling-alt-two" : "hidden"
										}`}
									>
										{buttonLink?.title}
									</Link>
								</div>
							</ScrollYProgressReveal>
						</SlideInXLeftAnimation>
					</div>
				</div>
			</div>
		</>
	);
};

export default OfficialMembershipsCta;
