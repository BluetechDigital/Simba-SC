// Imports
import type {Metadata, NextPage} from "next";
import {flexibleContentType, postType} from "@/context/pages";

// Queries Functions
import {getAllSeoContent} from "@/graphql/GetAllSeoContent";
import {getAllClubPartnersFlexibleContentComponents} from "@/graphql/GetAllFlexibleContentComponents";

// Components
import PageContextProvider from "@/context/providers/PageContextProvider";
import BackPageButton from "@/components/Elements/BackPageButton/BackPageButton";
import BackToTopButton from "@/components/Elements/BackToTopButton/BackToTopButton";
import RenderClubPartnersFlexibleContent from "@/components/FlexibleContent/RenderClubPartnersFlexibleContent";

// Dynamic Pages Generated Metadata
export const generateMetadata = async ({params}: any): Promise<Metadata> => {
	const seo: any = await getAllSeoContent(params?.slug, postType?.clubPartners);

	return {
		title: seo?.title,
		description: seo?.metaDesc,
	};
};

const clubPartnerPage: NextPage = async ({params}: any) => {
	// Fetch priority content
	const clubPartnersFlexibleContentComponents: any =
		await getAllClubPartnersFlexibleContentComponents(
			params?.slug,
			postType?.clubPartners,
			flexibleContentType?.clubPartner
		);

	return (
		<>
			<PageContextProvider
				content={clubPartnersFlexibleContentComponents?.content}
				postTypeFlexibleContent={flexibleContentType?.clubPartner}
			>
				<div className="pt-[138px]">
					<RenderClubPartnersFlexibleContent />
					<BackToTopButton link={`#`} />
					<BackPageButton link={`/club-partners`} />
				</div>
			</PageContextProvider>
		</>
	);
};

export default clubPartnerPage;
