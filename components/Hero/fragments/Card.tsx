"use client";

// Imports
import { FC} from "react"; 
import Link from "next/link";
import { motion } from "framer-motion";
import {IHero} from "@/components/Hero/types/index";
import {fadeIn, initialTwo} from "@/animations/animations";


// Styling
import styles from "@/components/Hero/styles/Hero.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph/Paragraph";
import ContentSliceRevealMaskAnimation from "@/components/Animations/ContentSliceRevealMaskAnimation";

const Card: FC<IHero.ICard> = ({
    title,
    paragraph,
    buttonLink,
    buttonLinkTwo,
    backgroundImage,
}) => {
    return (
        <div className={styles.slide}>
            <div
                className={styles.contentWrapper}
                style={{
                    backgroundImage: `linear-gradient(0deg,rgb(0, 0, 0, 0.30),
                    rgba(0, 0, 0, 0.10)),url("${backgroundImage?.sourceUrl}")`,
                }}
            >
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
                        <Link
                            href={`${buttonLink?.url}`}
                            target={buttonLink?.target}
                            aria-label={`${buttonLink?.title}`}
                            className={`${
                                buttonLink?.url
                                    ? "buttonStyling"
                                    : "hidden"
                            }`}
                        >
                            {buttonLink?.title}
                        </Link>
                        <Link
                            href={`${buttonLinkTwo?.url}`}
                            target={buttonLinkTwo?.target}
                            aria-label={`${buttonLinkTwo?.title}`}
                            className={`${
                                buttonLinkTwo?.url
                                    ? "buttonStyling"
                                    : "hidden"
                            }`}
                        >
                            {buttonLinkTwo?.title}
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Card;