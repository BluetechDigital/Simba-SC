// Imports
import {
	fadeIn,
	initial,
	initialTwo,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
import { FC, memo } from "react";
import {motion} from "framer-motion";
import { IVisitStore } from "@/components/CMS/VisitStore/types/index";


// Styling
import styles from "@/components/CMS/VisitStore/styles/VisitStore.module.scss";

// Components
import Button from "@/components/Global/Elements/Button/Button";
import ScrollYProgressReveal from "@/components/Animations/ScrollYProgressReveal";
import SlideUpDivMaskReveal from "@/components/Animations/SlideUpDivMaskReveal/SlideUpDivMaskReveal";

// IMPORTANT: Environment variables accessible on the client-side must be prefixed with NEXT_PUBLIC_
// Ensure NEXT_PUBLIC_STORE_WEBSITE_URL is defined in your .env file
const storeWebsiteUrl: any = process.env.NEXT_PUBLIC_STORE_WEBSITE_URL;
  
const Card: FC<IVisitStore.ICard> = memo(({
    id,
    index,
    title,
    handle,
    priceRange,
    featuredImage,
}) => {

  type IButton = {
    url: string;
	  title: string;
	  target: string;
  };

  const buttonLink: IButton = {
    url: `${storeWebsiteUrl}/product/${handle}`,
    title: `Buy Now`,
    target: "_blank",
  }

	// Determine image dimensions with fallbacks for Next.js Image
    const imageWidth = featuredImage?.width || 1000;
    const imageHeight = featuredImage?.height || 1000;
    const imageAltText = featuredImage.altText || `Product: ${title}`;
	
    // Format Price
    const formatPrice = (currencyCode: any, amount: any) => {
        if (amount === null || amount === undefined) {
          return '';
        }
      
        const numericAmount = parseFloat(amount);
      
        if (isNaN(numericAmount)) {
          return '';
        }
      
        // Define a threshold for when to start using K/M notation
        // Let's say we use K/M for numbers 10,000 and above for better readability
        // For numbers below 10,000, we'll use standard comma formatting.
        const KM_THRESHOLD = 10000;
      
        if (numericAmount >= 1000000) {
          // For millions: M
          // Example: 1,550,000 -> 1.55M
          const formattedAmount = (numericAmount / 1000000).toFixed(2);
          return `${currencyCode} ${formattedAmount}M`;
        } else if (numericAmount >= KM_THRESHOLD) {
          // For thousands: K (if above threshold)
          // Example: 50,000 -> 50K, 105,000 -> 105K
          const formattedAmount = Math.round(numericAmount / 1000);
          return `${currencyCode} ${formattedAmount}K`;
        } else {
          // For smaller numbers, use standard comma formatting with no decimals
          // Example: 5,000 -> 5,000, 9,999 -> 9,999
          return `${currencyCode} ${new Intl.NumberFormat('en-TZ', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(numericAmount)}`;
        }
    };
    
    // This prevents rendering an incomplete card and potential errors.
    if (!id || !handle) {
        return null;
    }
	
  return (
    <motion.li
	  	initial={initial}
	  	custom={id || index}
	  	whileInView="animate"
	  	viewport={{once: true}}
	  	variants={arrayLoopStaggerChildren}
	  	className={styles.newProductsCarouselSliderCard + " group"}
	  >
      <Link
        target="_self"
        className="w-full h-full"
        aria-label={`Product: ${handle}`}
        href={`${storeWebsiteUrl}/product/${handle}`}
      >
        <SlideUpDivMaskReveal
          revealEase="fast"
          triggerOnce={true}
          backgroundColor={"bg-white"}
          className={styles.imageContainer}
        >
          <Image
            width={imageWidth}
            alt={imageAltText}
            placeholder="empty"
            height={imageHeight}
            src={featuredImage.url}
            className={styles.image + " group-hover:scale-105"}
          />
        </SlideUpDivMaskReveal>
      </Link>
      <div className={styles.priceTitleContent}>
        <Link
          target="_self"
          className={styles.slide}
          href={`${storeWebsiteUrl}/product/${handle}`}
          aria-label={`Product: ${handle}`}
        >
          <h4 className={styles.title + " text-pureBlack group-hover:text-primary-default"}>
            {title}
          </h4>
        </Link>
        <h4 className={styles.price}>
          <span>{priceRange?.maxVariantPrice?.currencyCode}</span>
          <span>
              {new Intl.NumberFormat('en-TZ', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
              }).format(priceRange?.maxVariantPrice?.amount)}
          </span>
          {/* <h4 className={styles.price}>
              {formatPrice(priceRange?.maxVariantPrice.currencyCode, priceRange?.maxVariantPrice.amount)}
          </h4> */}
        </h4>
        {buttonLink?.url ?
          <motion.div
              initial={initialTwo}
              whileInView={fadeIn}
              viewport={{once: true}}
              className={styles.buttonSection}
          >
            <Link
              href={buttonLink.url}
              aria-label={`${buttonLink.title}`}
              target={buttonLink.target || "_self"}
              className={buttonLink.url ? styles.linkWrapper : `hidden`}
            >
              <span className={styles.buttonStyling + " text-primary-default bg-transparent group-hover:text-white group-hover:bg-primary-default"}>
                {buttonLink.title}
              </span>
            </Link>
          </motion.div>
        : null}
      </div>
    </motion.li>
  );
});

Card.displayName = 'NewProductsCarouselCard';

export default Card;