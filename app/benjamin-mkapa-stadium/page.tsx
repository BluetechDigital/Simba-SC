// Imports
import {NextPage, Metadata} from "next";
import {flexibleContentType, postType, pageType} from "@/context/pages";

// Queries Functions
import {getAllSeoContent} from "@/graphql/GetAllSeoContent";
import {getAllFlexibleContentComponents} from "@/graphql/GetAllFlexibleContentComponents";

// Components
import PageContextProvider from "@/context/providers/PageContextProvider";
import RenderFlexibleContent from "@/components/FlexibleContent/RenderFlexibleContent";

// Dynamic Pages Generated Metadata
export const generateMetadata = async (): Promise<Metadata> => {
	const seo: any = await getAllSeoContent(pageType?.stadium, postType?.pages);

	return {
		title: seo?.title,
		description: seo?.metaDesc,
	};
};

const stadiumPage: NextPage = async () => {
	// Fetch priority content
	const flexibleContentComponents: any = await getAllFlexibleContentComponents(
		pageType?.stadium,
		postType?.pages,
		flexibleContentType?.pages
	);

	return (
		<>
			<PageContextProvider
				content={flexibleContentComponents?.content}
				postTypeFlexibleContent={flexibleContentType?.pages}
			>
				<RenderFlexibleContent />
			</PageContextProvider>
		</>
	);
};

export default stadiumPage;
