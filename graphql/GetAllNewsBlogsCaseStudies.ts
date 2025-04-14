// Imports
import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";
import {ISlug, ICustomPostTypes} from "@/types/index";

/* NEWS SLUGS (URLS) */
export const getAllNewsPostsSlugs = async (): Promise<ISlug> => {
	try {
		const content: DocumentNode = gql`
			{
				newsSlugs: news(where: {status: PUBLISH}, last: 100) {
					nodes {
						slug
						modified
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.newsSlugs?.nodes;
	} catch (error: unknown) {
		console.log(error);
		throw new Error("Something went wrong trying to fetch the news slugs");
	}
};

// All News Content
export const getAllNewsContent =
	async (): Promise<ICustomPostTypes.INews> => {
		try {
			const content: DocumentNode = gql`
				{
					newsContent: news(where: {status: PUBLISH}, last: 100) {
						edges {
							node {
								id
								slug
								date
								excerpt
								title(format: RENDERED)
								featuredImage {
									node {
										altText
										sourceUrl
										mediaDetails {
											height
											width
										}
									}
								}
							}
						}
					}
				}
			`;

			const response: any = await client.query({
				query: content,
			});

			return response?.data?.newsContent?.edges;
		} catch (error: unknown) {
			console.log(error);
			throw new Error(
				"Something went wrong trying to fetch all the news posts"
			);
		}
	};

/* BLOGS SLUGS (URLS) */
export const getAllBlogsPostsSlugs = async (): Promise<ISlug> => {
	try {
		const content: DocumentNode = gql`
			{
				blogsSlugs: posts(where: {status: PUBLISH}, last: 100) {
					nodes {
						slug
						modified
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.blogsSlugs?.nodes;
	} catch (error: unknown) {
		console.log(error);
		throw new Error("Something went wrong trying to fetch the blogs slugs");
	}
};

// All Blogs Content
export const getAllBlogsContent =
	async (): Promise<ICustomPostTypes.IBlogs> => {
		try {
			const content: DocumentNode = gql`
				{
					blogsContent: posts(where: {status: PUBLISH}, last: 100) {
						edges {
							node {
								id
								slug
								date
								excerpt
								title(format: RENDERED)
								featuredImage {
									node {
										altText
										sourceUrl
										mediaDetails {
											height
											width
										}
									}
								}
							}
						}
					}
				}
			`;

			const response: any = await client.query({
				query: content,
			});

			return response?.data?.blogsContent?.edges;
		} catch (error: unknown) {
			console.log(error);
			throw new Error(
				"Something went wrong trying to fetch all the blogs posts"
			);
		}
	};

/* CASE STUDIES SLUGS (URLS) */
export const getAllCaseStudiesSlugs = async (): Promise<ISlug> => {
	try {
		const content: DocumentNode = gql`
			{
				caseStudiesSlugs: caseStudies(where: {status: PUBLISH}, last: 100) {
					nodes {
						slug
						modified
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.caseStudiesSlugs?.nodes;
	} catch (error: unknown) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch the case studies slugs"
		);
	}
};

// All Case Studies Content
export const getAllCaseStudiesContent =
	async (): Promise<ICustomPostTypes.ICaseStudies> => {
		try {
			const content: DocumentNode = gql`
				{
					caseStudiesContent: caseStudies(
						where: {status: PUBLISH, orderby: {field: DATE, order: ASC}}
						first: 100
					) {
						edges {
							node {
								slug
								excerpt
								title(format: RENDERED)
								featuredImage {
									node {
										altText
										sourceUrl
										mediaDetails {
											height
											width
										}
									}
								}
							}
						}
					}
				}
			`;

			const response: any = await client.query({
				query: content,
			});

			return response?.data?.caseStudiesContent?.edges;
		} catch (error: unknown) {
			console.log(error);
			throw new Error(
				"Something went wrong trying to fetch all the case studies content"
			);
		}
	};
