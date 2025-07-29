// Imports
import {NextPage, Metadata} from "next";
import {flexibleContentType, postType, pageType} from "@/context/pages";

// Queries Functions
import {getAllSeoContent} from "@/graphql/CMS/GetAllSeoContent";
import {getAllFlexibleContentComponents} from "@/graphql/CMS/GetAllFlexibleContentComponents";

// Components
import PageContextProvider from "@/context/providers/PageContextProvider";
import RenderFlexibleContent from "@/components/FlexibleContent/RenderFlexibleContent";

// Dynamic Pages Generated Metadata
export const generateMetadata = async (): Promise<Metadata> => {
	const seo: any = await getAllSeoContent(
		pageType?.caseStudies,
		postType?.pages
	);

	return {
		title: seo?.title,
		description: seo?.metaDesc,
		openGraph: {
			type: 'website',
			url: seo?.opengraphUrl,
			title: seo?.opengraphTitle,
			siteName: seo?.opengraphSiteName,
			description: seo?.opengraphDescription
		},
		alternates: {
			canonical: seo?.canonical,
		},
		robots: {
			follow: true,
			index: true
		}
	};
};

const caseStudiesPage: NextPage = async () => {
	// Fetch priority content
	const flexibleContentComponents: any = await getAllFlexibleContentComponents(
		pageType?.caseStudies,
		postType?.pages,
		flexibleContentType?.pages
	);

	return (
		<PageContextProvider
			content={flexibleContentComponents?.content}
			postTypeFlexibleContent={flexibleContentType?.pages}
		>
			<RenderFlexibleContent />
		</PageContextProvider>
	);
};

export default caseStudiesPage;
