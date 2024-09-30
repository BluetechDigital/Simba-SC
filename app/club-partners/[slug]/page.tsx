// Imports
import type {Metadata, NextPage} from "next";
import {flexibleContentType, postType} from "@/context/pages";
import {IClubPartnersPostType} from "@/types/components/ClubPartners";

// Queries Functions
import {getAllSeoContent} from "@/graphql/GetAllSeoContent";
import {getAllClubPartnersContent} from "@/graphql/GetAllClubPartners";
import {getAllFlexibleContentComponents} from "@/graphql/GetAllFlexibleContentComponents";

// Components
import BackPageButton from "@/components/Elements/BackPageButton";
import BackToTopButton from "@/components/Elements/BackToTopButton";
import PageContextProvider from "@/context/providers/PageContextProvider";
import TitleContentImage from "@/components/ClubPartners/TitleContentImage";
import RenderFlexibleContent from "@/components/FlexibleContent/RenderFlexibleContent";

// Dynamic Pages Generated Metadata
export const generateMetadata = async ({params}: any): Promise<Metadata> => {
	const seo: any = await getAllSeoContent(params?.slug, postType?.clubPartners);

	return {
		title: seo?.title,
		description: seo?.metaDesc,
	};
};

const dynamicPages: NextPage = async ({params}: any) => {
	// Fetch portfolio content
	const clubPartnersContent: IClubPartnersPostType.IClubPartnersContent[`clubPartnersContent`] =
		await getAllClubPartnersContent(params?.slug);

	// Fetch priority content
	const flexibleContentComponents: any = await getAllFlexibleContentComponents(
		params?.slug,
		postType?.clubPartners,
		flexibleContentType?.pages
	);

	return (
		<>
			<PageContextProvider
				content={flexibleContentComponents?.content}
				postTypeFlexibleContent={flexibleContentType?.pages}
			>
				<BackToTopButton link={`#`} />
				<BackPageButton link={`/club-partners`} />
				<TitleContentImage
					titleContentImage={clubPartnersContent?.titleContentImage}
				/>
				<RenderFlexibleContent />
			</PageContextProvider>
		</>
	);
};

export default dynamicPages;
