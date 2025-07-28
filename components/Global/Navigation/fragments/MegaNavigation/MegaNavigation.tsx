"use client";

// Imports
import {
    initial,
    stagger,
    slideInRightFinish,
    slideInRightInitial,
} from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {FC, memo, Fragment, useState} from "react";
import {useGlobalContext} from "@/context/global";
import {INavbar} from "@/components/Global/Navigation/types/index";

// Styling
import styles from "@/components/Global/Navigation/styles/Navbar.module.scss";

// Components
import Paragraph from "@/components/Global/Elements/Paragraph/Paragraph";
import ContentSliceRevealMaskAnimation from "@/components/Animations/ContentSliceRevealMaskAnimation";
import MegaNavVideoWrapper from "@/components/Global/Navigation/fragments/MegaNavigation/Elements/VideoWrapper";
import SocialLinksWrapper from "@/components/Global/Navigation/fragments/MegaNavigation/Elements/SocialLinksWrapper";
import MobileLinksWrapper from "@/components/Global/Navigation/fragments/MegaNavigation/Elements/MobileLinksWrapper";
import MegaNavLinksWrapper from "@/components/Global/Navigation/fragments/MegaNavigation/Elements/MegaNavLinksWrapper";
import SideMenuColumnLinks from "@/components/Global/Navigation/fragments/MegaNavigation/Elements/SideMenuColumnLinks";

const MegaNavigation: FC<INavbar.IMegaNavigation.IProps> = memo(({
    menuActive,
    setMenuActive
}) => {
    
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
                        url("/img/background/grey-arrows-up.png")`,
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
                    
                    <div className={styles.additionalLinks}>
                        <div className={menuActive ? styles.column : "hidden" }>
                            <span className={styles.text}>
                                Useful Links
                            </span>
                            <MegaNavLinksWrapper
                                resetMenu={resetMenu}
                                menuActive={menuActive}
                                sublinks={globalContext?.megaNavigationUsefulSublinks}
                            />
                        </div>
                        <SideMenuColumnLinks
                            resetMenu={resetMenu}
                            menuActive={menuActive}
                            columnTitle="Help Center"
                            columnOneLinks={globalContext?.megaNavigationUsefulSublinks}
                        />
                        <SideMenuColumnLinks
                            resetMenu={resetMenu}
                            menuActive={menuActive}
                            columnTitle="Information"
                            columnOneLinks={globalContext?.megaNavigationUsefulSublinks}
                        />
                        <div className={styles.downloadApps}>
                            <ContentSliceRevealMaskAnimation>
                                <h4 className={styles.title}>
                                    Download our apps now
                                </h4>
                            </ContentSliceRevealMaskAnimation>
                            <div className={styles.appsOptions}>
                                <Link
                                    target="_Blank"
                                    className={styles.link}
                                    aria-label="Apple App Store Link"
                                    href="https://apps.apple.com/us/app/simba-sc/id1564389213"
                                >
                                    <Image
                                        width={500}
                                        height={500}
                                        className={styles.image}
                                        alt="Apple App Store Logo"
                                        src="/svg/apple-app-store.svg"
                                    />
                                </Link>
                                <Link
                                    target="_Blank"
                                    className={styles.link}
                                    aria-label="Google Play App Store Link"
                                    href="https://play.google.com/store/apps/details?id=com.simbasc"
                                >
                                    <Image
                                        width={500}
                                        height={500}
                                        className={styles.imageTwo}
                                        alt="Google Play App Store Logo"
                                        src="/svg/google-play-app-store.svg"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <motion.div
                        initial={initial}
                        variants={stagger}
                        whileInView="animate"
                        viewport={{once: true}}
                        className={styles.socialLinks}
                    >
                        <SocialLinksWrapper
                            tiktokLink={globalContext.themesOptionsContent.tiktokLink}
                            twitterLink={globalContext.themesOptionsContent.twitterLink}
                            youtubeLink={globalContext.themesOptionsContent.youtubeLink}
                            facebookLink={globalContext.themesOptionsContent.facebookLink}
                            linkedinLink={globalContext.themesOptionsContent.linkedinLink}
                            instagramLink={globalContext.themesOptionsContent.instagramLink}
                        />
                    </motion.div>
                    <div className={styles.bluetechDigital}>
						<Link
							target="_blank"
							className={styles.link}
							href={`https://bluetech-digital.co.uk`}
						>
							<span className={styles.span}>
								<Image
									priority
									width={1000}
									height={1000}
									className={styles.image}
									alt="BluetechDigital Logo"
									src="/img/logos/BluetechDigital-Logo-color.png"
								/>
								<Paragraph className={styles.text} content={`Powered By BluetechDigital`} />
							</span>
						</Link>
					</div>
                </div>
            </div>
        </div>
    );
});

MegaNavigation.displayName = 'MegaNavigation';

export default MegaNavigation;