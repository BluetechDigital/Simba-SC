export namespace IFooter {
	export type IProps = {};
	export type ISocialLinksWrapper = {
		socialLinks: {
			url: string;
			title: string;
			target: string;
		};
	};
	export type IFooterLinksWrapper = {
		sublinks: {
			node: {
				id: string;
				url: string;
				label: string;
			};
		}[];
	};
}