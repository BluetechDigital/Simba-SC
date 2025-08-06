"use client";

// Imports
import { FC } from "react";
import { motion } from "framer-motion";
import { useCookiePolicy } from "@/context/cookies";
import { fadeInUp, initial, stagger } from "@/animations/animations";

// Styling
import styles from "@/components/Global/CookiePolicy/styles/CookiePolicy.module.scss";

// Components
import Paragraph from "@/components/Global/Elements/Paragraph/Paragraph";

const CookiePolicy: FC = () => {

	const { hasConsent, acceptCookies, refuseCookies } = useCookiePolicy();

    // Only render the banner if no decision has been made.
    if (hasConsent !== null) {
        return null;
    }

    // Otherwise, render the cookie policy banner.
    return (
        <div className={styles.cookiePolicy}>
            <motion.div
                initial={initial}
                variants={stagger}
                whileInView="animate"
                viewport={{ once: true }}
                className={styles.content}
                style={{
                    boxShadow: "0px 30px 2px -25px rgba(0,0,0,0.1)",
                }}
            >
                <div className={styles.titleSection}>
                    <motion.h3
                        initial={initial}
                        whileInView={fadeInUp}
                        viewport={{ once: true }}
                        className={styles.title}
                    >
                        Cookie Policy
                    </motion.h3>
                    <Paragraph
                        className={styles.paragraph}
                        content={`<p>This website uses cookies to enhance the user experience and ensure the proper functioning of the site. By using this website, you agree to the use of cookies in accordance with this CookiePolicy.</p>`}
                    />
                </div>
                <motion.div
                    initial={initial}
                    variants={stagger}
                    whileInView="animate"
                    viewport={{ once: true }}
                    className={styles.buttonSection}
                >
                    <motion.button
                        initial={initial}
                        whileInView={fadeInUp}
                        onClick={acceptCookies}
						viewport={{ once: true }}
						aria-label="Accept cookies"
                        className={styles.acceptButton}
                    >
                        Accept Cookies
                    </motion.button>
                    <motion.button
                        initial={initial}
                        whileInView={fadeInUp}
                        onClick={refuseCookies}
						viewport={{ once: true }}
						aria-label="Refuse cookies"
                        className={styles.refuseButton}
                    >
                        Refuse Cookies
                    </motion.button>
                </motion.div>
            </motion.div>
        </div>
    );
};

CookiePolicy.displayName = "CookiePolicy";

export default CookiePolicy;