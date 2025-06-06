export namespace INavbar {
	export type IProps = {};
	export type IMegaNavigation = {
		menuActive: boolean;
		setMenuActive: any;
	};
	export type IVideoWrapper = {
		children: React.ReactNode;
	};
	export type IMegaNavLinksWrapper = {
		menuActive: boolean;
		resetMenu: () => void;
		sublinks: {
			node: {
				id: string;
				url: string;
				label: string;
			};
		}[];
	};
	export type IMobileLinksWrapper = {
		sublinks: {
			node: {
				id: string;
				url: string;
				label: string;
			};
		}[];
		menuActive: boolean;
		sublinksOpen: boolean;
		resetMenu: () => void;
		displaySublinks: () => void;
	};
	export namespace ITopNavigation {
		export type IProps = {
			revealGoogleTranslateOptions: boolean;
			handleRevealGoogleTranslateOptions: () => void;
		};
		export type ISocialLinksWrapper = {
			socialLinks: {
				url: string;
				title: string;
				target: string;
			};
		};
	};
}