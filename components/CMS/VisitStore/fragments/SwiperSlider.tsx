"use client";

// Imports
import { FC, Fragment } from "react";
import useOnDesktopView from "@/hooks/useOnDesktopView";
import {IVisitStore} from "@/components/CMS/VisitStore/types/index";
import { useShopifyCollectionGlobalContext } from "@/context/shopifyCollectionGlobal";

// Swiper.js Slider
import "swiper/css";
import "swiper/css/navigation";
import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Styling
import styles from "@/components/CMS/VisitStore/styles/VisitStore.module.scss";

// Components
import Card from "@/components/CMS/VisitStore/fragments/Card";

const SwiperSlider: FC<IVisitStore.ISwiperSlider> = () => {

	const shopifyCollectionGlobalContext = useShopifyCollectionGlobalContext();
	
	// State to track window width and check if on desktop
	const onDesktop = useOnDesktopView();

	return (
		<div className={styles.visitStoreCard + " NewProductsCarouselSwiperSlider"}>
			<Swiper
				loop={true}
				navigation={true}
				centeredSlides={false}
				modules={[Autoplay, Navigation]}
				slidesPerView={onDesktop ? 4 : 2}
				spaceBetween={onDesktop ? 10 : 10}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
			>
				{shopifyCollectionGlobalContext.businessWebsiteShopifyCollectionContent.length > 0 ? (
					shopifyCollectionGlobalContext.businessWebsiteShopifyCollectionContent.map((item: any, index: number) => (
						<Fragment key={index}>
							<SwiperSlide>
								<Card
									id={item.id}
									index={index}
									title={item.title}
									handle={item.handle}
									priceRange={item.priceRange}
									featuredImage={item.featuredImage}
								/>
							</SwiperSlide>
						</Fragment>
				))) : null}
			</Swiper>
		</div>
	);
};

SwiperSlider.displayName = 'VisitStoreSwiperSlider';

export default SwiperSlider;
