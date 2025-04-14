// Imports
import {FC} from "react";
import {IHeroFour} from "@/components/HeroFour/types/index";

// Styling
import styles from "@/components/HeroFour/styles/HeroFour.module.scss";

// Components
import Card from "@/components/HeroFour/fragments/Card";

const HeroFour: FC<IHeroFour.IProps> = ({
	title,
	video,
	paragraph,
	buttonLink,
	displayVideo,
	buttonLinkTwo,
	backgroundImage,
	displayFullHeight,
}) => {
	return (
		<div className={styles.heroFour}>
			<div
				className={
					styles.container + ` ${displayFullHeight ? "h-[87vh]" : "h-[50vh]"}`
				}
				style={{
					backgroundImage: `linear-gradient(0deg,rgba(0, 0, 0, 0.5),
					rgba(0, 0, 0, 0.5)),url("${backgroundImage?.sourceUrl}")`,
				}}
			>
				<div className={styles.relativeWrapper}>
					<div className={styles.stickyWrapper}>
						<div className={styles.contentWrapper}>
							<Card
								title={title}
								video={video}
								paragraph={paragraph}
								buttonLink={buttonLink}
								displayVideo={displayVideo}
								buttonLinkTwo={buttonLinkTwo}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroFour;
