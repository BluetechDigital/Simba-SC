// Imports
import type {NextPage} from "next";
import {flexibleContentType, postType} from "@/context/pages";

// Queries Functions
import {getAllSeoContent} from "@/functions/graphql/Queries/GetAllSeoContent";
import {getAllBlogsPostsSlugs} from "@/functions/graphql/Queries/GetAllBlogs";
import {getAllFlexibleContentComponents} from "@/functions/graphql/Queries/GetAllFlexibleContentComponents";

// Components
import Layout from "@/components/Layout/Layout";
import BackToTopButton from "@/components/Elements/BackToTopButton";
import PageContextProvider from "@/context/providers/PageContextProvider";
import RenderFlexibleContent from "@/components/FlexibleContent/RenderFlexibleContent";

const dynamicPages: NextPage = async ({params}: any) => {
	// Fetch priority content
	const postTypeFlexibleContent = flexibleContentType?.pages;
	const seo: any = await getAllSeoContent(params?.slug, postType?.pages);
	const flexibleContentComponents: any = await getAllFlexibleContentComponents(
		params?.slug,
		postType?.pages,
		flexibleContentType?.pages
	);

	return (
		<>
			<PageContextProvider
				seo={seo}
				content={flexibleContentComponents?.content}
				postTypeFlexibleContent={postTypeFlexibleContent}
			>
				<Layout>
					<BackToTopButton link={`#`} />
					<RenderFlexibleContent />
				</Layout>
			</PageContextProvider>
		</>
	);
};

export default dynamicPages;
