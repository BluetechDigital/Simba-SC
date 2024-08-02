// WEBSITE LINKS AND SUBLINKS
export namespace ILinks {
	export type INavbarMenuLinks = {
		node: {
			id: string;
			url: string;
			label: string;
		};
	}[];

	export interface IMobileLinks extends INavbarMenuLinks {}
	export interface ICareerSublinks extends INavbarMenuLinks {}
	export interface ICopyrightLinks extends INavbarMenuLinks {}
	export interface IFooterMenuLinks extends INavbarMenuLinks {}
	export interface IBoardOfDirectorsLinks extends INavbarMenuLinks {}
	export interface IExecutiveLeadershipsLinks extends INavbarMenuLinks {}
}

export namespace IMegaMenuLinks {
	export type IMegaNavigationLinks = {
		node: {
			id: string;
			url: string;
			label: string;
		};
	}[];

	export interface INewsSublinks extends IMegaNavigationLinks {}
	export interface IFansSublinks extends IMegaNavigationLinks {}
	export interface IStadiumSublinks extends IMegaNavigationLinks {}
	export interface ICommunitySublinks extends IMegaNavigationLinks {}
	export interface IOurHistorySublinks extends IMegaNavigationLinks {}
	export interface IAboutTheClubSublinks extends IMegaNavigationLinks {}
	export interface IMegaNavigationUsefulSublinks extends IMegaNavigationLinks {}
	export interface IPartnershipsAdvertisingSublinks
		extends IMegaNavigationLinks {}
}
