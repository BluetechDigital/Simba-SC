// Imports
import Image from "next/image";
import { FC, memo, Fragment } from "react";
import { AnimatePresence } from "framer-motion";
import {ITrophyCabinetBanner} from "@/components/CMS/TrophyCabinetBanner/types/index";

// Styling
import styles from "@/components/CMS/TrophyCabinetBanner/styles/TrophyCabinetBanner.module.scss";

// Components
import Title from "@/components/Global/Elements/Title";
import Button from "@/components/Global/Elements/Button/Button";
import Paragraph from "@/components/Global/Elements/Paragraph/Paragraph";
import Card from "@/components/CMS/TrophyCabinetBanner/fragments/Card";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";
import SlideInXRightAnimation from "@/components/Animations/SlideInXRightAnimation";
import SlideUpDivMaskReveal from "@/components/Animations/SlideUpDivMaskReveal/SlideUpDivMaskReveal";
import ContentSliceRevealMaskAnimation from "@/components/Animations/ContentSliceRevealMaskAnimation";

const TrophyCabinetBanner: FC<ITrophyCabinetBanner.IProps> = memo(({
	title,
	paragraph,
	buttonLink,
	trophyCabinet,
	backgroundImage,
}) => {
	return (
		<div
			className={styles.trophyCabinetBanner}
			style={{
				backgroundImage: `url("/svg/background/stacked-steps-haikei-lightgrey.svg")`,
			}}
		>
			<div className={styles.container}>
				<div>
					<ContentSliceRevealMaskAnimation>
						<Title content={title} className={styles.title} />
					</ContentSliceRevealMaskAnimation>
					<Paragraph content={paragraph} className={styles.paragraph} />
				</div>
				<div className={styles.content}>
					<div className={styles.cardWrapper}>
						<AnimatePresence mode="wait">
							<ScrollYProgressReveal className={styles.trophyCabinetWrapper}>
								{trophyCabinet?.length > 0 ? (
									trophyCabinet?.map((item: any, index: number) => (
										<Fragment key={index}>
											<Card
												index={index}
												name={item?.name}
												image={item?.image}
												totalAmount={item?.totalAmount}
											/>
										</Fragment>
									))
								) : (
									<></>
								)}
							</ScrollYProgressReveal>
							<ScrollYProgressReveal className={styles.buttonLink}>
								<Button styleNumber={2} link={buttonLink}/>
							</ScrollYProgressReveal>
						</AnimatePresence>
					</div>
					<AnimatePresence mode="wait">
						<SlideInXRightAnimation className={styles.imageWrapper}>
							<SlideUpDivMaskReveal triggerOnce={true} backgroundColor={"bg-lightGreyTwo"}>
								<Image
									alt={backgroundImage?.altText}
									src={backgroundImage?.sourceUrl}
									width={backgroundImage?.mediaDetails?.width || 1000}
									height={backgroundImage?.mediaDetails?.height || 1000}
									className={backgroundImage?.sourceUrl ? styles.image : `hidden`}
								/>
							</SlideUpDivMaskReveal>
						</SlideInXRightAnimation>
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
});

TrophyCabinetBanner.displayName = 'TrophyCabinetBanner';

export default TrophyCabinetBanner;
