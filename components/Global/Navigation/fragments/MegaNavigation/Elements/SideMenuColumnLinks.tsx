// Imports
import Link from "next/link";
import { motion } from "framer-motion";
import { FC, memo, Fragment } from "react";
import { INavbar } from "@/components/Global/Navigation/types/index";
import { initial, stagger, arrayLoopStaggerChildren } from "@/animations/animations";

// Styling
import styles from "@/components/Global/Navigation/styles/Navbar.module.scss";

// Components
import ContentSliceRevealMaskAnimation from "@/components/Animations/ContentSliceRevealMaskAnimation";

const SideMenuColumnLinks: FC<INavbar.IMegaNavigation.ISideMenuColumnLinks> = memo(({
    resetMenu,
    menuActive,
    columnTitle,
    columnOneLinks
}) => {
    return (
        <div className={menuActive ? styles.column : "hidden"}>
            <ContentSliceRevealMaskAnimation>
                <h4 className={styles.text}>
                    {columnTitle}
                </h4>
            </ContentSliceRevealMaskAnimation>
            <motion.ul
                initial={initial}
                variants={stagger}
                whileInView="animate"
                className={styles.ul}
            >
                {columnOneLinks?.length > 0 ? (
                    columnOneLinks?.map(
                        (item: any, index: number) => (
                            <Fragment key={index}>
                                <motion.li 
                                    initial={initial}
                                    whileInView="animate"
                                    className={styles.li}
                                    viewport={{once: false}}
                                    key={item.node.id || index}
                                    variants={arrayLoopStaggerChildren}
                                >
                                    <ContentSliceRevealMaskAnimation className="p-0">
                                        <Link
                                            href={item.node.url}
                                            className={styles.link}
                                            aria-label={item.node.label}
                                            target={item.node.target || "_self"}
                                        >
                                            {item.node.label}
                                        </Link>
                                    </ContentSliceRevealMaskAnimation>
                                </motion.li>
                            </Fragment>
                ))) : null}
            </motion.ul>
        </div>
    );
});

SideMenuColumnLinks.displayName = 'SideMenuColumnLinks';

export default SideMenuColumnLinks;