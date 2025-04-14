// Imports
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {ITrophyCabinetBanner} from "@/components/TrophyCabinetBanner/types/index";

// Styling
import styles from "@/components/TrophyCabinetBanner/styles/TrophyCabinetBanner.module.scss";

// Components
import Title from "@/components/Elements/Title";
import Paragraph from "@/components/Elements/Paragraph/Paragraph";
import Card from "@/components/TrophyCabinetBanner/fragments/Card";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";
import SlideInXRightAnimation from "@/components/Animations/SlideInXRightAnimation";
import ContentSliceRevealMaskAnimation from "@/components/Animations/ContentSliceRevealMaskAnimation";

const TrophyCabinetBanner: FC<ITrophyCabinetBanner.IProps> = ({
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
							<Link
								href={`${buttonLink?.url}`}
								target={buttonLink?.target}
								className={`${
									buttonLink?.url
										? styles.link + " buttonStyling-alt"
										: "hidden"
								}`}
							>
								{buttonLink?.title}
							</Link>
						</ScrollYProgressReveal>
					</div>
					<SlideInXRightAnimation className={styles.imageWrapper}>
						<Image
							src={backgroundImage?.sourceUrl}
							alt={`${backgroundImage?.altText}`}
							width={backgroundImage?.mediaDetails?.width || 1000}
							height={backgroundImage?.mediaDetails?.height || 1000}
							className={backgroundImage?.sourceUrl ? styles.image : `hidden`}
						/>
					</SlideInXRightAnimation>
				</div>
			</div>
		</div>
	);
};

export default TrophyCabinetBanner;
