import {ISlug} from "@/types/context";
import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

/* JOBS POSITIONS SLUGS (URLS) */
export const getAllJobsPositionsSlugs = async (): Promise<ISlug> => {
	try {
		const content: DocumentNode = gql`
			{
				jobsPositionsSlugs: jobPositions(where: {status: PUBLISH}, last: 100) {
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

		return response?.data?.jobsPositionsSlugs?.nodes;
	} catch (error: unknown) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch the jobs positions slugs"
		);
	}
};

// All Jobs Positions Content
export const getAllJobsPositionsContent = async () => {
	try {
		const content: DocumentNode = gql`
			{
				jobsPositionsContent: jobPositions(
					where: {status: PUBLISH}
					last: 100
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

		return response?.data?.jobsPositionsContent?.edges;
	} catch (error: unknown) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all the jobs positions posts"
		);
	}
};

// Latest Three Jobs Positions Content
export const getThreeJobsPositionsContent = async () => {
	try {
		const content: DocumentNode = gql`
			{
				jobsPositionsContent: jobPositions(where: {status: PUBLISH}, first: 3) {
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

		return response?.data?.jobsPositionsContent?.edges;
	} catch (error: unknown) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all the jobs positions posts"
		);
	}
};
