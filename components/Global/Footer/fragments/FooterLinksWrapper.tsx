// Imports
import Link from "next/link";
import { motion } from "framer-motion";
import {FC, memo, Fragment} from "react";
import {IFooter} from "@/components/Global/Footer/types/index";
import { initial, stagger, arrayLoopStaggerChildren} from "@/animations/animations";

// Styling
import styles from "@/components/Global/Footer/styles/Footer.module.scss";

const FooterLinksWrapper: FC<IFooter.IFooterLinksWrapper> = memo(({
    sublinks
}) => {
    return (
        <motion.ul
            initial={initial}
            variants={stagger}
            whileInView="animate"
            className={styles.ul}
        >
            {sublinks?.length > 0 ? (
                sublinks?.map(
                    (item: any, index: number) => (
                        <Fragment key={index}>
                            <motion.li
                                custom={index}
                                initial={initial}
                                whileInView="animate"
                                viewport={{once: true}}
                                variants={arrayLoopStaggerChildren}
                            >
                                <Link
                                    className={styles.link}
                                    href={`${item?.node?.url}`}
                                    aria-label={`${item?.node?.label}`}
                                    target={item?.node?.target || "_self"}
                                >
                                    {item?.node?.label}
                                </Link>
                            </motion.li>
                        </Fragment>
                    )
                )
            ) : (
                <></>
            )}
        </motion.ul>
    );
});

FooterLinksWrapper.displayName = 'FooterLinksWrapper';

export default FooterLinksWrapper;