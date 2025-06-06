"use client";

// Imports
import { motion } from "framer-motion";
import { FC, memo, useMemo } from "react";
import {IHero} from "@/components/Hero/types/index";
import { fadeIn, initialTwo } from "@/animations/animations";

// Styling
import styles from "@/components/Hero/styles/Hero.module.scss";

// Components
import Button from "@/components/Elements/Button/Button";
import VideoCard from "@/components/Hero/fragments/VideoCard";
import Paragraph from "@/components/Elements/Paragraph/Paragraph";
import ContentSliceRevealMaskAnimation from "@/components/Animations/ContentSliceRevealMaskAnimation";

const Card: FC<IHero.ICard> = memo(({
    video,
	title,
	paragraph,
	buttonLink,
	displayVideo,
	buttonLinkTwo,
	backgroundImage,
}) => {

	// Optimize inline styles:
    const backgroundImageStyle = useMemo(() => ({
        backgroundImage: backgroundImage?.sourceUrl ? `url("${backgroundImage.sourceUrl}")` : 'none',
    }), [backgroundImage?.sourceUrl]);

    return (
        <div className={styles.slide} style={backgroundImageStyle}>
            <VideoCard video={video} displayVideo={displayVideo}/>
            <div className={styles.heroCard}>
                <div className={styles.content}>
                    <div className={styles.top}>
                        <ContentSliceRevealMaskAnimation>
                            <h1 className={styles.title}>{title}</h1>
                        </ContentSliceRevealMaskAnimation>
                        <Paragraph
                            content={paragraph}
                            className={styles?.paragraph}
                        />
                    </div>
                    <motion.div
                        initial={initialTwo}
                        whileInView={fadeIn}
                        viewport={{once: true}}
                        className={styles.bottom}
                    >
                        <Button styleNumber={0} link={buttonLink}/>
                        <Button styleNumber={0} link={buttonLinkTwo}/>
                    </motion.div>
                </div>
            </div>
        </div>
    );
});

export default Card;