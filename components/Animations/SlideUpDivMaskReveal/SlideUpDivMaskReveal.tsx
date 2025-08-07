"use client"

// Imports
import { motion, useInView, useAnimation } from 'framer-motion';
import { FC, memo, useRef, useEffect, RefObject, useMemo } from 'react';

// Assume you have some CSS modules for styling, e.g., 'Reveal.module.css'
import styles from '@/components/Animations/SlideUpDivMaskReveal/styles/SlideUpDivMaskReveal.module.scss';

export namespace ISlideUpDivMaskReveal {
	export type IProps = {
    className?: string;
    triggerOnce?: boolean;
    backgroundColor: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
    revealEase?: RevealEaseMode;
    direction?: RevealDirection;
  };

  export type RevealEaseMode = 'normal' | 'medium' | 'fast';
  export type RevealDirection = 'up' | 'down' | 'left' | 'right';

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
  backgroundColor,
  revealEase = 'normal',
  direction = 'up'
}) => {
  const ref: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
  const isInView: boolean = useInView(ref, { amount: 0.5 });
  const controls: any = useAnimation();

  // Define the ease values for each mode
  const easeMap: Record<ISlideUpDivMaskReveal.RevealEaseMode, number[]> = useMemo(() => ({
    normal: [0.2, 0.6, 0.4, 0.95], // Original ease
    medium: [0.35, 0.8, 0.9, 1.25], // Slightly faster start, less dramatic middle
    fast: [0.2, 0.6, 0.9, 2],   // Even faster start, more direct to end
  }), []);

  // Memoize revealVariants to ensure stable object reference
  const revealVariants: ISlideUpDivMaskReveal.IRevealVariants | any = useMemo(() => {
    const isHorizontal = direction === 'left' || direction === 'right';
    const sizeProperty = isHorizontal ? 'width' : 'height';
    const startPosition =
      direction === 'up' ? 'bottom' :
      direction === 'down' ? 'top' :
      direction === 'left' ? 'right' :
      'left';
    
    return {
      hidden: {
        [sizeProperty]: '100%',
        [startPosition]: '0%',
      },
      visible: {
        [sizeProperty]: '0%',
        [startPosition]: '0%',
        transition: {
          duration: 1.5,
          ease: easeMap[revealEase],
        },
      },
    };
  }, [easeMap, revealEase, direction]);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else if (!triggerOnce) {
      controls.start('hidden'); // Reset for re-reveal if triggerOnce is false
    }
  }, [isInView, controls, triggerOnce]);

  // Combine outer class names dynamically
  const outerContainerClasses = className
    ? `${className} ${styles.revealOuterContainer || ''}`
    : styles.revealOuterContainer;

  // Determine the background class for the mask
  const maskBackgroundClass = backgroundColor || "bg-pureBlack";

  // Use a class to handle the positioning based on direction
  const maskDirectionClass = useMemo(() => {
    if (direction === 'left') return styles.revealMaskLeft;
    if (direction === 'right') return styles.revealMaskRight;
    if (direction === 'down') return styles.revealMaskDown;
    return styles.revealMaskUp; // Default
  }, [direction]);

  return (
    <div
      className={outerContainerClasses}
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
          className={`${styles.revealMask} ${maskBackgroundClass}`}
        />
      </div>
    </div>
  );
});

SlideUpDivMaskReveal.displayName = 'SlideUpDivMaskReveal';

export default SlideUpDivMaskReveal;