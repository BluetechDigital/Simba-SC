import {gql} from "@apollo/client";
import {client} from "@/config/apollo";

// Navbar Menu Links
export const getNavbarMenuLinks = async () => {
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
export const getMobileLinks = async () => {
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

// Mega Navigation Links
export const getMegaNavigationLinks = async () => {
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
export const getMegaNavigationUsefulSublinks = async () => {
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

// About The Club Sublinks (Mega Navigation)
export const getAboutTheClubSublinks = async () => {
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

// News Sublinks (Mega Navigation)
export const getNewsSublinks = async () => {
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

// Fans Sublinks (Mega Navigation)
export const getFansSublinks = async () => {
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

// Community Sublinks (Mega Navigation)
export const getCommunitySublinks = async () => {
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

// Our History Sublinks (Mega Navigation)
export const getOurHistorySublinks = async () => {
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

// Benjamin Mkapa Stadium Sublinks (Mega Navigation)
export const getBenjaminMkapaStadiumSublinks = async () => {
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

// Partnerships Advertising Sublinks (Mega Navigation)
export const getPartnershipsAdvertisingSublinks = async () => {
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

// Career Sublinks
export const getCareerSublinks = async () => {
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
export const getCopyrightLinks = async () => {
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
export const getFooterMenuLinks = async () => {
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
