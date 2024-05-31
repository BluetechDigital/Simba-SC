// Imports
import {FC} from "react";
import parse from "html-react-parser";
import styled from "styled-components";
import {IMegaNavVideoWrapper} from "@/types/components";

const MegaNavVideoWrapper: FC<IMegaNavVideoWrapper> = ({children}) => {
	const YoutubeVideo = styled.div`
		height: 100%;
		max-width: 100%;
		overflow: hidden;
		position: relative;

		iframe {
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			margin: 0 auto;
			position: static;
			max-height: 1000px;
			min-height: 225px !important;
		}

		video {
			height: 100%;
			width: 1280px;
			margin: 0 auto;
			max-height: 1080px;
		}

		@media screen and (min-width: 425px) {
			iframe {
				height: 265px !important;
			}
		}

		@media screen and (min-width: 640px) {
			iframe {
				height: 400px !important;
			}
		}

		@media screen and (min-width: 768px) {
			iframe {
				height: 425px !important;
			}
		}

		@media screen and (min-width: 1024px) {
			iframe {
				height: 450px !important;
			}
		}

		@media screen and (min-width: 1280px) {
			iframe {
				height: 465px !important;
				max-height: 465px !important;
			}
		}
	`;

	return (
		<>
			<YoutubeVideo>{parse(`${children}`)}</YoutubeVideo>
		</>
	);
};

export default MegaNavVideoWrapper;
