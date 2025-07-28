// Imports
import { FC } from "react";
import { motion } from "framer-motion";
import { fadeIn, initialTwo} from "@/animations/animations";
import {INavbar} from "@/components/Global/Navigation/types/index";

// Styling
import styles from "@/components/Global/Navigation/styles/Navbar.module.scss";

// Components
import MegaNavLinksWrapper from "@/components/Global/Navigation/fragments/MegaNavigation/Elements/MegaNavLinksWrapper";

const MobileLinksWrapper: FC<INavbar.IMegaNavigation.IMobileLinksWrapper> = ({
    sublinks,
    resetMenu,
    menuActive,
    sublinksOpen,
    displaySublinks
}) => {
    
    return (
        <>
            <motion.span
                initial={initialTwo}
                whileInView={fadeIn}
                onClick={displaySublinks}
                aria-label={`${sublinks[0]?.node?.label}`}
                className={styles.text + ` ${sublinksOpen ? "text-tertiary-two" : "text-white"}`}
            >
                {sublinks[0]?.node?.label}
            </motion.span>
            <div className={sublinksOpen ? styles.ulWrapper : "hidden"}>
                {sublinksOpen ? (
                    <MegaNavLinksWrapper
                        sublinks={sublinks}
                        resetMenu={resetMenu}
                        menuActive={menuActive}
                    />
                ) : (
                    <></>
                )}
            </div>
        </>
    );
}

export default MobileLinksWrapper;