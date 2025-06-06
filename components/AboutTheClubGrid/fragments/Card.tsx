"use client";

// Imports
import Link from "next/link";
import Image from "next/image";
import { FC, memo } from "react";
import { motion } from "framer-motion";
import { initialTwo, fadeIn } from "@/animations/animations";
import {IAboutTheClubGrid} from "@/components/AboutTheClubGrid/types/index";

// Styling
import styles from "@/components/AboutTheClubGrid/styles/AboutTheClubGrid.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph/Paragraph";

const Card: FC<IAboutTheClubGrid.ICard> = memo(({
    image,
    title,
    paragraph,
    buttonLink,
}) => {
    return (
        <Link
            href={`${buttonLink?.url}`}
            aria-label={`${buttonLink?.title}`}
            target={`${buttonLink?.target ? buttonLink?.target : "_self"}`}
        >
            <div className={styles.aboutTheClubCard}>
                <Image
                    alt={image?.altText}
                    src={image?.sourceUrl}
                    className={image?.sourceUrl ? styles.image : "hidden"}
                    width={
                        image?.mediaDetails?.width ? image?.mediaDetails?.width : 1000
                    }
                    height={
                        image?.mediaDetails?.height ? image?.mediaDetails?.height : 1000
                    }
                />
                <div className={styles.details}>
                    <motion.h5
                        initial={initialTwo}
                        whileInView={fadeIn}
                        viewport={{once: true}}
                        className={styles.title}
                    >
                        {title}
                    </motion.h5>
                    <Paragraph
                        content={
                            paragraph?.length > 200
                                ? paragraph?.substring(0, 200) + "..."
                                : paragraph
                        }
                        className={styles.paragraph}
                    />
                    <Link
                        href={`${buttonLink?.url}`}
                        target={buttonLink?.target}
                        className={`${
                            buttonLink?.url
                                ? "buttonStyling-alt-two-slim mt-2 mx-auto lg:mx-0"
                                : "hidden"
                        }`}
                    >
                        {buttonLink?.title}
                    </Link>
                </div>
            </div>
        </Link>
    );
});

Card.displayName = 'AboutTheClubGridCard';

export default Card;