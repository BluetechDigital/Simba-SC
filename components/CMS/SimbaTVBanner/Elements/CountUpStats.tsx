"use client";

// Imports
import React, {FC, memo, useEffect, useRef} from "react";
import {motion, animate, useInView} from "framer-motion";
import {initialTwo, fadeIn} from "@/animations/animations";
import { ISimbaTVBanner } from "@/components/CMS/SimbaTVBanner/types/index";

// Styling
import styles from "@/components/CMS/SimbaTVBanner/styles/SimbaTVBanner.module.scss";

// Components
import Paragraph from "@/components/Global/Elements/Paragraph/Paragraph";

const CountUpStats: FC<ISimbaTVBanner.ICountUpStats> = memo(({
    number,
    suffix,
    decimals = 0,
    paragraph,
    triggerOnce = false, // Destructure triggerOnce with a default value of false
}) => {
    const ref: any = useRef(null);
    const isInView = useInView(ref, { once: triggerOnce }); // Pass triggerOnce to useInView

    // Use a ref to keep track of whether the animation has already played
    const hasAnimated = useRef(false);

    // Formatting function to convert numbers to short form (e.g., 613k)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const formatNumber = (num: number): string => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(decimals) + "M";
        } else if (num >= 1000) {
            return (num / 1000).toFixed(decimals) + "k";
        }
        return num.toString();
    };

    useEffect(() => {
        // If triggerOnce is true and the animation has already played, do nothing
        if (triggerOnce && hasAnimated.current) {
            return;
        }

        if (isInView) {
            animate(0, Number(number), {
                duration: 2.5,
                onUpdate(value) {
                    if (!ref.current) return;

                    // Update the text content with the formatted value
                    ref.current.textContent = formatNumber(
                        parseFloat(value.toFixed(decimals))
                    );
                },
            });
            // Mark that the animation has played
            hasAnimated.current = true;
        }
    }, [number, decimals, isInView, formatNumber, triggerOnce]); // Add triggerOnce to dependencies

    return (
        <div className={styles.countUpStats}>
            <motion.h4
                initial={initialTwo}
                whileInView={fadeIn}
                viewport={{ once: true }} // Keep this as 'once: true' for the h4 animation if desired
                className={styles.suffix}
            >
                <span ref={ref}></span>
                {suffix ? suffix : null}
            </motion.h4>
            <Paragraph
                content={paragraph}
                className={styles.paragraph}
            />
        </div>
    );
});

CountUpStats.displayName = 'CountUpStats';

export default CountUpStats;
