"use client";

// Imports
import {
    initial,
    stagger,
    slideInRightFinish,
    slideInRightInitial,
} from "@/animations/animations";
import {motion} from "framer-motion";
import {FC, Fragment, useState} from "react";
import {useGlobalContext} from "@/context/global";
import {INavbar} from "@/components/Global/Navigation/types/index";

// Styling
import styles from "@/components/Global/Navigation/styles/Navbar.module.scss";

// Components
import MegaNavVideoWrapper from "@/components/Global/Navigation/fragments/MegaNavigation/Elements/VideoWrapper";
import MobileLinksWrapper from "@/components/Global/Navigation/fragments/MegaNavigation/Elements/MobileLinksWrapper";
import MegaNavLinksWrapper from "@/components/Global/Navigation/fragments/MegaNavigation/Elements/MegaNavLinksWrapper";

const MegaNavigation: FC<INavbar.IMegaNavigation> = ({ menuActive, setMenuActive }) => {
    
    const globalContext = useGlobalContext();

    const [aboutTheClubSublinksOpen, setAboutTheClubSublinksOpen]: any =
        useState(false);
    const [newsSublinksOpen, setNewsSublinksOpen]: any = useState(false);
    const [fansSublinksOpen, setFansSublinksOpen] = useState(false);
    const [communitySublinksOpen, setCommunitySublinksOpen]: any =
        useState(false);
    const [ourHistorySublinksOpen, setOurHistorySublinksOpen]: any =
        useState(false);
    const [
        benjaminMkapaStadiumSublinksOpen,
        setBenjaminMkapaStadiumSublinksOpen,
    ]: any = useState(false);
    const [
        partnershipsAdvertisingSublinksOpen,
        setPartnershipsAdvertisingSublinksOpen,
    ]: any = useState(false);

    // Hides or Display About The Club Sublinks
    const displayAboutTheClubSublinks = () => {
        setNewsSublinksOpen(false);
        setFansSublinksOpen(false);
        setCommunitySublinksOpen(false);
        setOurHistorySublinksOpen(false);
        setAboutTheClubSublinksOpen(!aboutTheClubSublinksOpen);
        setBenjaminMkapaStadiumSublinksOpen(false);
        setPartnershipsAdvertisingSublinksOpen(false);
    };

    // Hides or Display News Sublinks
    const displayNewsSublinks = () => {
        setNewsSublinksOpen(!newsSublinksOpen);
        setFansSublinksOpen(false);
        setCommunitySublinksOpen(false);
        setOurHistorySublinksOpen(false);
        setAboutTheClubSublinksOpen(false);
        setBenjaminMkapaStadiumSublinksOpen(false);
        setPartnershipsAdvertisingSublinksOpen(false);
    };

    // Hides or Display Fans Sublinks
    const displayFansSublinks = () => {
        setNewsSublinksOpen(false);
        setFansSublinksOpen(!fansSublinksOpen);
        setCommunitySublinksOpen(false);
        setOurHistorySublinksOpen(false);
        setAboutTheClubSublinksOpen(false);
        setBenjaminMkapaStadiumSublinksOpen(false);
        setPartnershipsAdvertisingSublinksOpen(false);
    };

    // Hides or Display Community Sublinks
    const displayCommunitySublinks = () => {
        setNewsSublinksOpen(false);
        setFansSublinksOpen(false);
        setCommunitySublinksOpen(!communitySublinksOpen);
        setOurHistorySublinksOpen(false);
        setAboutTheClubSublinksOpen(false);
        setBenjaminMkapaStadiumSublinksOpen(false);
        setPartnershipsAdvertisingSublinksOpen(false);
    };

    // Hides or Display Our History Sublinks
    const displayOurHistorySublinks = () => {
        setNewsSublinksOpen(false);
        setFansSublinksOpen(false);
        setCommunitySublinksOpen(false);
        setOurHistorySublinksOpen(!ourHistorySublinksOpen);
        setAboutTheClubSublinksOpen(false);
        setBenjaminMkapaStadiumSublinksOpen(false);
        setPartnershipsAdvertisingSublinksOpen(false);
    };

    // Hides or Display Benjamin Mkapa Stadium Sublinks
    const displayBenjaminMkapaStadiumSublinks = () => {
        setNewsSublinksOpen(false);
        setFansSublinksOpen(false);
        setCommunitySublinksOpen(false);
        setOurHistorySublinksOpen(false);
        setAboutTheClubSublinksOpen(false);
        setBenjaminMkapaStadiumSublinksOpen(!benjaminMkapaStadiumSublinksOpen);
        setPartnershipsAdvertisingSublinksOpen(false);
    };

    // Hides or Display Partnerships Advertising Sublinks
    const displayPartnershipsAdvertisingSublinks = () => {
        setNewsSublinksOpen(false);
        setFansSublinksOpen(false);
        setCommunitySublinksOpen(false);
        setOurHistorySublinksOpen(false);
        setAboutTheClubSublinksOpen(false);
        setBenjaminMkapaStadiumSublinksOpen(false);
        setPartnershipsAdvertisingSublinksOpen(
            !partnershipsAdvertisingSublinksOpen
        );
    };

    const resetMenu = () => {
        setMenuActive(false);
        setNewsSublinksOpen(false);
        setFansSublinksOpen(false);
        setCommunitySublinksOpen(false);
        setOurHistorySublinksOpen(false);
        setAboutTheClubSublinksOpen(false);
        setBenjaminMkapaStadiumSublinksOpen(false);
        setPartnershipsAdvertisingSublinksOpen(false);
    };

    return (
        <div className={menuActive ? styles.megaMenuActive : styles.megaNavigation + " megaMenu hidden"}>
            <div
                className={styles.megaMenuContent}
                style={{
                    backgroundImage: `linear-gradient(
                        0deg,rgba(234, 29, 37, 0), rgba(234, 29, 37, 0), rgba(234, 29, 37, 0),
                        rgba(234, 29, 37, 0.10),rgba(234, 29, 37, 0.10),rgba(234, 29, 37, 0.45),rgba(234, 29, 37, 0.50)),
                        url("/img/background/red-background-dots.png")`,
                    }}
                >
                <div className={styles.wrapper}>
                    <div className={styles.mainMegaNavLinksWrapper}>
                        {/* Mobile */}
                        <motion.ul
                            initial={initial}
                            variants={stagger}
                            whileInView="animate"
                            viewport={{once: false}}
                            className={menuActive ? styles.mobile : "hidden"}
                        >
                            {globalContext?.megaNavigationLinks?.length > 0 ? (
                                globalContext?.megaNavigationLinks?.map(
                                    (item: any, index: number) => (
                                        <Fragment key={index}>
                                            {item?.node?.url === "/about-the-club" ? (
                                                <MobileLinksWrapper
                                                    resetMenu={resetMenu}
                                                    menuActive={menuActive}
                                                    sublinksOpen={aboutTheClubSublinksOpen}
                                                    displaySublinks={displayAboutTheClubSublinks}
                                                    sublinks={globalContext?.aboutTheClubSublinks}
                                                />
                                            ) : item?.node?.url === "/news" ? (
                                                <MobileLinksWrapper
                                                    resetMenu={resetMenu}
                                                    menuActive={menuActive}
                                                    sublinksOpen={newsSublinksOpen}
                                                    displaySublinks={displayNewsSublinks}
                                                    sublinks={globalContext?.newsSublinks}
                                                />
                                            ) : item?.node?.url === "/fans" ? (
                                                <MobileLinksWrapper
                                                    resetMenu={resetMenu}
                                                    menuActive={menuActive}
                                                    sublinksOpen={fansSublinksOpen}
                                                    displaySublinks={displayFansSublinks}
                                                    sublinks={globalContext?.fansSublinks}
                                                />
                                            ) : item?.node?.url === "/community" ? (
                                                <MobileLinksWrapper
                                                    resetMenu={resetMenu}
                                                    menuActive={menuActive}
                                                    sublinksOpen={communitySublinksOpen}
                                                    displaySublinks={displayCommunitySublinks}
                                                    sublinks={globalContext?.communitySublinks}
                                                />
                                            ) : item?.node?.url === "/our-history" ? (
                                                <MobileLinksWrapper
                                                    resetMenu={resetMenu}
                                                    menuActive={menuActive}
                                                    sublinksOpen={ourHistorySublinksOpen}
                                                    displaySublinks={displayOurHistorySublinks}
                                                    sublinks={globalContext?.ourHistorySublinks}
                                                />
                                            ) : item?.node?.url === "/benjamin-mkapa-stadium" ? (
                                                <MobileLinksWrapper
                                                    resetMenu={resetMenu}
                                                    menuActive={menuActive}
                                                    sublinksOpen={benjaminMkapaStadiumSublinksOpen}
                                                    displaySublinks={displayBenjaminMkapaStadiumSublinks}
                                                    sublinks={globalContext?.benjaminMkapaStadiumSublinks}
                                                />
                                            ) : item?.node?.url === "/partnerships-advertising" ? (
                                                <MobileLinksWrapper
                                                    resetMenu={resetMenu}
                                                    menuActive={menuActive}
                                                    sublinksOpen={partnershipsAdvertisingSublinksOpen}
                                                    displaySublinks={displayPartnershipsAdvertisingSublinks}
                                                    sublinks={globalContext?.partnershipsAdvertisingSublinks}
                                                />
                                            ) : (
                                                <></>
                                            )}
                                        </Fragment>
                                    )
                                )
                            ) : (
                                <></>
                            )}
                        </motion.ul>
                        {/* Desktop */}
                        <div className={styles.desktop}>
                            {aboutTheClubSublinksOpen ? (
                                <MegaNavLinksWrapper
                                    resetMenu={resetMenu}
                                    menuActive={menuActive}
                                    sublinks={globalContext?.aboutTheClubSublinks}
                                />
                            ) : newsSublinksOpen ? (
                                <MegaNavLinksWrapper
                                    resetMenu={resetMenu}
                                    menuActive={menuActive}
                                    sublinks={globalContext?.newsSublinks}
                                />
                            ) : fansSublinksOpen ? (
                                <>
                                    <MegaNavLinksWrapper
                                        resetMenu={resetMenu}
                                        menuActive={menuActive}
                                        sublinks={globalContext?.fansSublinks}
                                    />
                                    <motion.div
                                        viewport={{once: false}}
                                        initial={slideInRightInitial}
                                        whileInView={slideInRightFinish}
                                        className={
                                            menuActive
                                                ? "h-fit mt-6 lg:mt-0 w-full xl:w-full"
                                                : "hidden"
                                        }
                                    >
                                        {globalContext?.themesOptionsContent?.megaNavigation
                                            ?.displayFansVideoElement ? (
                                            <MegaNavVideoWrapper>
                                                {
                                                    globalContext?.themesOptionsContent?.megaNavigation
                                                        ?.fansVideoElement
                                                }
                                            </MegaNavVideoWrapper>
                                        ) : (
                                            <></>
                                        )}
                                    </motion.div>
                                </>
                            ) : communitySublinksOpen ? (
                                <MegaNavLinksWrapper
                                    resetMenu={resetMenu}
                                    menuActive={menuActive}
                                    sublinks={globalContext?.communitySublinks}
                                />
                            ) : ourHistorySublinksOpen ? (
                                <MegaNavLinksWrapper
                                    resetMenu={resetMenu}
                                    menuActive={menuActive}
                                    sublinks={globalContext?.ourHistorySublinks}
                                />
                            ) : benjaminMkapaStadiumSublinksOpen ? (
                                <MegaNavLinksWrapper
                                    resetMenu={resetMenu}
                                    menuActive={menuActive}
                                    sublinks={globalContext?.benjaminMkapaStadiumSublinks}
                                />
                            ) : partnershipsAdvertisingSublinksOpen ? (
                                <MegaNavLinksWrapper
                                    resetMenu={resetMenu}
                                    menuActive={menuActive}
                                    sublinks={globalContext?.partnershipsAdvertisingSublinks}
                                />
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                    <motion.div
                        initial={initial}
                        variants={stagger}
                        whileInView="animate"
                        viewport={{once: false}}
                        className={menuActive ? styles.aboutSimbaLinksWrapper : "hidden"}
                    >
                        <span className={styles.text}>
                            About Simba
                        </span>
                        <MegaNavLinksWrapper
                            resetMenu={resetMenu}
                            menuActive={menuActive}
                            sublinks={globalContext?.navbarMenuLinks}
                        />
                    </motion.div>
                    <motion.div
                        initial={initial}
                        variants={stagger}
                        whileInView="animate"
                        viewport={{ once: false }}
                        className={styles.usefulLinksWrapper}
                    >
                        <div className={styles.divider} />
                        <div className={menuActive ? styles.content : "hidden" }>
                            <span className={styles.text}>
                                Useful Links
                            </span>
                            <MegaNavLinksWrapper
                                resetMenu={resetMenu}
                                menuActive={menuActive}
                                sublinks={globalContext?.megaNavigationUsefulSublinks}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default MegaNavigation;