"use client";

// Imports
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import useScrollPosition from "@/hooks/useScrollPosition";
import {INavbar} from "@/components/Global/Navigation/types/index";
import {initial, stagger, arrayLoopStaggerChildren} from "@/animations/animations";

// Styling
import styles from "@/components/Global/Navigation/styles/Navbar.module.scss";

// Components
import SocialLinksWrapper from "@/components/Global/Navigation/fragments/TopNavigation/Elements/SocialLinksWrapper";

const TopNavigation: FC<INavbar.ITopNavigation.IProps> = () => {
    const globalContext = useGlobalContext();
    const scrollPosition = useScrollPosition();

    return (
        <motion.div
            className={scrollPosition < 50 ? styles.topNavigation : "hidden"}
        >
            <div className={styles.top}>
                {globalContext?.themesOptionsContent?.topNavigation?.sponsorsIcons
                    ?.length > 0 ? (
                    globalContext?.themesOptionsContent?.topNavigation?.sponsorsIcons?.map(
                        (item: any, index: number) => (
                            <Fragment key={index}>
                                <motion.div
                                    custom={index}
                                    initial={initial}
                                    whileInView="animate"
                                    viewport={{once: true}}
                                    variants={arrayLoopStaggerChildren}
                                >
                                    <Image
                                        alt={item?.altText}
                                        src={item?.sourceUrl}
                                        className={styles.image}
                                        width={
                                            item?.mediaDetails?.width
                                                ? item?.mediaDetails?.width
                                                : 1000
                                        }
                                        height={
                                            item?.mediaDetails?.height
                                                ? item?.mediaDetails?.height
                                                : 1000
                                        }
                                    />
                                </motion.div>
                            </Fragment>
                        )
                    )
                ) : (
                    <></>
                )}
            </div>
            <div className={styles.bottom}>
                <Link
                    target="_blank"
                    aria-label={`Simba Login`}
                    className={styles.simbaLogin}
                    href={`https://account.simbasc.com`}
                >
                    Login
                </Link>
                <Link
                    aria-label={`Simba Foundation`}
                    className={styles.simbaFoundation}
                    href={`${globalContext?.themesOptionsContent?.topNavigation?.foundationPageLink?.url}`}
                    target={`${
                        globalContext?.themesOptionsContent?.topNavigation
                            ?.foundationPageLink?.target
                            ? globalContext?.themesOptionsContent?.topNavigation
                                    ?.foundationPageLink?.target
                            : "_self"
                    }`}
                >
                    {
                        globalContext?.themesOptionsContent?.topNavigation
                            ?.foundationPageLink?.title
                    }
                </Link>
                <div className={styles.divider} />
                <motion.div
                    initial={initial}
                    variants={stagger}
                    whileInView="animate"
                    viewport={{once: true}}
                    className={styles.socialLinks}
                >
                    <SocialLinksWrapper socialLinks={globalContext?.themesOptionsContent?.facebookLink}/>
                    <SocialLinksWrapper socialLinks={globalContext?.themesOptionsContent?.twitterLink}/>
                    <SocialLinksWrapper socialLinks={globalContext?.themesOptionsContent?.linkedinLink}/>
                    <SocialLinksWrapper socialLinks={globalContext?.themesOptionsContent?.instagramLink}/>
                    <SocialLinksWrapper socialLinks={globalContext?.themesOptionsContent?.tiktokLink}/>
                    <SocialLinksWrapper socialLinks={globalContext?.themesOptionsContent?.youtubeLink}/>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default TopNavigation;