// Imports
import {NextPage} from "next";
import {homePage, postType, flexibleContentType} from "@/context/pages";

// Queries Functions
import {getAllSeoContent} from "@/functions/graphql/Queries/GetAllSeoContent";
import {getAllFlexibleContentComponents} from "@/functions/graphql/Queries/GetAllFlexibleContentComponents";

// Components
import Layout from "@/components/Layout/Layout";
import PageContextProvider from "@/context/providers/PageContextProvider";
import RenderFlexibleContent from "@/components/FlexibleContent/RenderFlexibleContent";

const HomePage: NextPage = async () => {
	// Fetch priority content
	const postTypeFlexibleContent = flexibleContentType?.pages;
	const seo: any = await getAllSeoContent(homePage, postType?.pages);
	const flexibleContentComponents: any = await getAllFlexibleContentComponents(
		homePage,
		postType?.pages,
		flexibleContentType?.pages
	);

	return (
		<PageContextProvider
			seo={seo}
			content={flexibleContentComponents?.content}
			postTypeFlexibleContent={postTypeFlexibleContent}
		>
			<Layout>
				<RenderFlexibleContent />
			</Layout>
		</PageContextProvider>
	);
};

export default HomePage;
