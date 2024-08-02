import {gql} from "@apollo/client";
import {client} from "@/config/apollo";
import {ILinks, IMegaMenuLinks} from "@/types/context/Links";

// NAVIGATION LINKS
// Navbar Menu Links
export const getNavbarMenuLinks =
	async (): Promise<ILinks.INavbarMenuLinks> => {
		try {
			const content: any = gql`
				{
					navbarMenuLinks: menuItems(where: {location: PRIMARY}) {
						edges {
							node {
								id
								url
								label
							}
						}
					}
				}
			`;

			const response: any = await client.query({
				query: content,
			});

			return response?.data?.navbarMenuLinks?.edges;
		} catch (error: unknown) {
			console.log(error);
			throw new Error(
				"Something went wrong trying to fetch main menu links content"
			);
		}
	};
// Mobile Navbar Links
export const getMobileLinks = async (): Promise<ILinks.IMobileLinks> => {
	try {
		const content: any = gql`
			{
				mobileLinks: menuItems(where: {location: MOBILE_LINKS}, first: 10) {
					edges {
						node {
							id
							url
							label
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.mobileLinks?.edges;
	} catch (error: unknown) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch mobile links content"
		);
	}
};
// Career Sublinks
export const getCareerSublinks = async (): Promise<ILinks.ICareerSublinks> => {
	try {
		const content: any = gql`
			{
				careerSublinks: menuItems(where: {location: CAREER_LINKS}, first: 10) {
					edges {
						node {
							id
							url
							label
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.careerSublinks?.edges;
	} catch (error: unknown) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch career sublinks content"
		);
	}
};
// Footer Copyright Links
export const getCopyrightLinks = async (): Promise<ILinks.ICopyrightLinks> => {
	try {
		const content: any = gql`
			{
				copyrightLinks: menuItems(
					where: {location: COPYRIGHT_LINKS}
					first: 10
				) {
					edges {
						node {
							id
							url
							label
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.copyrightLinks?.edges;
	} catch (error: unknown) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch copyright links content"
		);
	}
};
// Footer Menu Links
export const getFooterMenuLinks =
	async (): Promise<ILinks.IFooterMenuLinks> => {
		try {
			const content: any = gql`
				{
					footerMenuLinks: menuItems(where: {location: FOOTER}) {
						edges {
							node {
								id
								url
								label
							}
						}
					}
				}
			`;

			const response: any = await client.query({
				query: content,
			});

			return response?.data?.footerMenuLinks?.edges;
		} catch (error: unknown) {
			console.log(error);
			throw new Error(
				"Something went wrong trying to fetch footer menu links content"
			);
		}
	};

// MEGA NAVIGATION LINKS
export const getMegaNavigationLinks =
	async (): Promise<IMegaMenuLinks.IMegaNavigationLinks> => {
		try {
			const content: any = gql`
				{
					megaNavigationLinks: menuItems(
						where: {location: MEGA_NAVIGATION_LINKS}
						first: 10
					) {
						edges {
							node {
								id
								url
								label
							}
						}
					}
				}
			`;

			const response: any = await client.query({
				query: content,
			});

			return response?.data?.megaNavigationLinks?.edges;
		} catch (error: unknown) {
			console.log(error);
			throw new Error(
				"Something went wrong trying to fetch mega navigation content"
			);
		}
	};

// Mega Navigation Useful Sublinks
export const getMegaNavigationUsefulSublinks =
	async (): Promise<IMegaMenuLinks.IMegaNavigationUsefulSublinks> => {
		try {
			const content: any = gql`
				{
					megaNavigationUsefulSublinks: menuItems(
						where: {location: MEGA_NAVIGATION_USEFUL_SUBLINKS}
						first: 10
					) {
						edges {
							node {
								id
								url
								label
							}
						}
					}
				}
			`;

			const response: any = await client.query({
				query: content,
			});

			return response?.data?.megaNavigationUsefulSublinks?.edges;
		} catch (error: unknown) {
			console.log(error);
			throw new Error(
				"Something went wrong trying to fetch mega navigation useful sublinks content"
			);
		}
	};

// About The Club Sublinks
export const getAboutTheClubSublinks =
	async (): Promise<IMegaMenuLinks.IAboutTheClubSublinks> => {
		try {
			const content: any = gql`
				{
					aboutTheClubSublinks: menuItems(
						where: {location: ABOUT_THE_CLUB_SUBLINKS}
						first: 10
					) {
						edges {
							node {
								id
								url
								label
							}
						}
					}
				}
			`;

			const response: any = await client.query({
				query: content,
			});

			return response?.data?.aboutTheClubSublinks?.edges;
		} catch (error: unknown) {
			console.log(error);
			throw new Error(
				"Something went wrong trying to fetch about the club sublinks content"
			);
		}
	};

// News Sublinks
export const getNewsSublinks =
	async (): Promise<IMegaMenuLinks.INewsSublinks> => {
		try {
			const content: any = gql`
				{
					newsSublinks: menuItems(where: {location: NEWS_SUBLINKS}, first: 10) {
						edges {
							node {
								id
								url
								label
							}
						}
					}
				}
			`;

			const response: any = await client.query({
				query: content,
			});

			return response?.data?.newsSublinks?.edges;
		} catch (error: unknown) {
			console.log(error);
			throw new Error(
				"Something went wrong trying to fetch news sublinks content"
			);
		}
	};

// Fans Sublinks
export const getFansSublinks =
	async (): Promise<IMegaMenuLinks.IFansSublinks> => {
		try {
			const content: any = gql`
				{
					fansSublinks: menuItems(where: {location: FANS_SUBLINKS}, first: 10) {
						edges {
							node {
								id
								url
								label
							}
						}
					}
				}
			`;

			const response: any = await client.query({
				query: content,
			});

			return response?.data?.fansSublinks?.edges;
		} catch (error: unknown) {
			console.log(error);
			throw new Error(
				"Something went wrong trying to fetch fans sublinks content"
			);
		}
	};

// Community Sublinks
export const getCommunitySublinks =
	async (): Promise<IMegaMenuLinks.ICommunitySublinks> => {
		try {
			const content: any = gql`
				{
					communitySublinks: menuItems(
						where: {location: COMMUNITY_SUBLINKS}
						first: 10
					) {
						edges {
							node {
								id
								url
								label
							}
						}
					}
				}
			`;

			const response: any = await client.query({
				query: content,
			});

			return response?.data?.communitySublinks?.edges;
		} catch (error: unknown) {
			console.log(error);
			throw new Error(
				"Something went wrong trying to fetch community sublinks content"
			);
		}
	};

// Our History Sublinks
export const getOurHistorySublinks =
	async (): Promise<IMegaMenuLinks.IOurHistorySublinks> => {
		try {
			const content: any = gql`
				{
					ourHistorySublinks: menuItems(
						where: {location: OUR_HISTORY_SUBLINKS}
						first: 10
					) {
						edges {
							node {
								id
								url
								label
							}
						}
					}
				}
			`;

			const response: any = await client.query({
				query: content,
			});

			return response?.data?.ourHistorySublinks?.edges;
		} catch (error: unknown) {
			console.log(error);
			throw new Error(
				"Something went wrong trying to fetch our history sublinks content"
			);
		}
	};

// Benjamin Mkapa Stadium Sublinks
export const getBenjaminMkapaStadiumSublinks =
	async (): Promise<IMegaMenuLinks.IStadiumSublinks> => {
		try {
			const content: any = gql`
				{
					benjaminMkapaStadiumSublinks: menuItems(
						where: {location: STADIUM_SUBLINKS}
						first: 10
					) {
						edges {
							node {
								id
								url
								label
							}
						}
					}
				}
			`;

			const response: any = await client.query({
				query: content,
			});

			return response?.data?.benjaminMkapaStadiumSublinks?.edges;
		} catch (error: unknown) {
			console.log(error);
			throw new Error(
				"Something went wrong trying to fetch benjamin mkapa stadium sublinks content"
			);
		}
	};

// Partnerships Advertising Sublinks
export const getPartnershipsAdvertisingSublinks =
	async (): Promise<IMegaMenuLinks.IPartnershipsAdvertisingSublinks> => {
		try {
			const content: any = gql`
				{
					partnershipsAdvertisingSublinks: menuItems(
						where: {location: PARTNERSHIPS_ADVERTISING_SUBLINKS}
						first: 10
					) {
						edges {
							node {
								id
								url
								label
							}
						}
					}
				}
			`;

			const response: any = await client.query({
				query: content,
			});

			return response?.data?.partnershipsAdvertisingSublinks?.edges;
		} catch (error: unknown) {
			console.log(error);
			throw new Error(
				"Something went wrong trying to fetch partnerships advertising sublinks content"
			);
		}
	};
