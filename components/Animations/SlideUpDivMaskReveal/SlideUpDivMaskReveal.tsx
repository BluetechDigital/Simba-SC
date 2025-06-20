// Imports
import { FC, memo, useRef, useEffect, RefObject, useMemo } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

// Assume you have some CSS modules for styling, e.g., 'Reveal.module.css'
import styles from '@/components/Animations/SlideUpDivMaskReveal/styles/SlideUpDivMaskReveal.module.scss';

export namespace ISlideUpDivMaskReveal {
	export type IProps = {
    className?: string;
    triggerOnce?: boolean;
    backgroundColor: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
};
	export type IRevealVariants = {
    hidden: {
        height: string;
    };
    visible: {
        height: string;
        transition: {
            duration: number;
            ease: number[];
        };
    };
  }
}

const SlideUpDivMaskReveal: FC<ISlideUpDivMaskReveal.IProps> = memo(({
  style,
  children,
  className,
  triggerOnce = false,
  backgroundColor
}) => {
  const ref: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
  const isInView: boolean = useInView(ref, { amount: 0.5 });
  const controls: any = useAnimation();

  // Memoize revealVariants to ensure stable object reference
  const revealVariants: ISlideUpDivMaskReveal.IRevealVariants | any = useMemo(() => ({
    hidden: {
      height: '100%',
    },
    visible: {
      height: '0%',
      transition: {
        duration: 1.5,
        ease: [0.2, 0.6, 0.4, 0.95],
      },
    },
  }), []); // Dependencies array is empty because variants are static

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else if (!triggerOnce) {
      controls.start('hidden'); // Reset for re-reveal if triggerOnce is false
    }
  }, [isInView, controls, triggerOnce]);

  // Combine outer class names dynamically
  const outerContainerClasses = className
    ? `${className} ${styles.revealOuterContainer || ''}` // Use revealOuterContainer if needed
    : styles.revealOuterContainer; // Default class for outer container

  // Determine the background class for the mask
  // Ensure 'bg-pureBlack' and 'bg-white' are actual CSS classes defined
  // in your global CSS or Tailwind config.
  const maskBackgroundClass = backgroundColor || "bg-pureBlack";

  return (
    // Single outer div, handle class logic more efficiently
    <div
      className={outerContainerClasses} // Use computed class for the outer div
      style={style}
    >
      <div ref={ref} className={styles.revealContainer}>
        <div className={styles.revealContentWrapper}>
          {children}
        </div>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={revealVariants}
          className={`${styles.revealMask} ${maskBackgroundClass}`} // Combine mask styles and background color
        />
      </div>
    </div>
  );
});

export default SlideUpDivMaskReveal;