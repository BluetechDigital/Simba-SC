// Imports
import {NextPage} from "next";
import {flexibleContentType, postType} from "@/context/pages";

// Queries Functions
import {getAllSeoContent} from "@/functions/graphql/Queries/GetAllSeoContent";
import {getAllPagesSlugs} from "@/functions/graphql/Queries/GetAllPagesSlugs";
import {getAllFlexibleContentComponents} from "@/functions/graphql/Queries/GetAllFlexibleContentComponents";

// Components
import Layout from "@/components/Layout/Layout";
import BackToTopButton from "@/components/Elements/BackToTopButton";
import PageContextProvider from "@/context/providers/PageContextProvider";
import RenderFlexibleContent from "@/components/FlexibleContent/RenderFlexibleContent";

const dynamicPages: NextPage = async ({params}: any) => {
	// const pagesSlug = await getAllPagesSlugs();

	// const paths = pagesSlug?.map((item: any) => ({
	// 	params: {
	// 		slug: item?.slug as String,
	// 	},
	// }));

	// console.log(`params: ${params?.slug}`);
	// console.log(paths);

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
