// Imports
import Link from "next/link";
import {FC, Fragment} from "react";
import { motion } from "framer-motion";
import {INavbar} from "@/components/Global/Navigation/types/index";
import { initial, stagger, navigationMenuStaggerChildren} from "@/animations/animations";

// Styling
import styles from "@/components/Global/Navigation/styles/Navbar.module.scss";

// Components
import ContentSliceRevealMaskAnimation from "@/components/Animations/ContentSliceRevealMaskAnimation";

const MegaNavLinksWrapper: FC<INavbar.IMegaNavigation.IMegaNavLinksWrapper> = ({
    sublinks,
    resetMenu,
    menuActive
}) => {
    return (
        <motion.ul
            initial={initial}
            variants={stagger}
            whileInView="animate"
            className={menuActive ? styles.ul : "hidden"}
        >
            {sublinks?.length > 0 ? (
                sublinks?.map(
                    (item: any, index: number) => (
                        <Fragment key={index}>
                            <motion.li
                                custom={index}
                                initial={initial}
                                whileInView="animate"
                                className={styles.li + " self-end"}
                                variants={navigationMenuStaggerChildren}
                            >
                                <ContentSliceRevealMaskAnimation className="p-0">
                                    <Link
                                        onClick={resetMenu}
                                        className={styles.link}
                                        href={`${item?.node?.url}`}
                                        aria-label={`${item?.node?.label}`}
                                        target={item?.node?.target || "_self"}
                                    >
                                        {item?.node?.label}
                                    </Link>
                                </ContentSliceRevealMaskAnimation>
                            </motion.li>
                        </Fragment>
                    )
                )
            ) : (
                <></>
            )}
        </motion.ul>
    );
}

export default MegaNavLinksWrapper;