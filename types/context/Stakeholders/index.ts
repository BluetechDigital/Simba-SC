// WEBSITE STAKEHOLDERS TYPES
export namespace IStakeholders {
	export type IStakeholders = {
		node: {
			slug: string;
			date: string;
			title: string;
			excerpt: string;
			featuredImage: {
				node: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
			};
		};
	}[];

	export interface IEmployees extends IStakeholders {}
	export interface IBoardOfDirectors extends IStakeholders {}
	export interface IExecutiveLeaderships extends IStakeholders {}
}
