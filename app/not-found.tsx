// Imports
import {NextPage} from "next";
import {errorPage, postType, flexibleContentType} from "@/context/pages";

// Queries Functions
import {getAllSeoContent} from "@/functions/graphql/Queries/GetAllSeoContent";
import {getAllFlexibleContentComponents} from "@/functions/graphql/Queries/GetAllFlexibleContentComponents";

// Components
import Layout from "@/components/Layout/Layout";
import PageContextProvider from "@/context/providers/PageContextProvider";
import RenderFlexibleContent from "@/components/FlexibleContent/RenderFlexibleContent";

const noPageExits: NextPage = async () => {
	// Fetch priority content
	const postTypeFlexibleContent = flexibleContentType?.pages;
	const seo: any = await getAllSeoContent(errorPage, postType?.pages);
	const flexibleContentComponents: any = await getAllFlexibleContentComponents(
		errorPage,
		postType?.pages,
		flexibleContentType?.pages
	);

	return (
		<PageContextProvider
			seo={seo}
			content={flexibleContentComponents}
			postTypeFlexibleContent={postTypeFlexibleContent}
		>
			<Layout>
				<RenderFlexibleContent />
			</Layout>
		</PageContextProvider>
	);
};

export default noPageExits;
