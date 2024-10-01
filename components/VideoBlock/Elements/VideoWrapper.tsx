// Imports
import {FC} from "react";
import parse from "html-react-parser";
import styled from "styled-components";
import {IVideoBlock} from "@/types/components";

const VideoWrapper: FC<IVideoBlock.IVideoWrapper> = ({children}) => {
	const VimeoVideo = styled.div`
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
			min-height: 225px;
			max-height: 1000px;
		}

		video {
			height: 100%;
			width: 1280px;
			margin: 0 auto;
			max-height: 1080px;
		}

		@media screen and (min-width: 425px) {
			iframe {
				width: 100%;
				height: 275px;
			}
		}

		@media screen and (min-width: 640px) {
			iframe {
				width: 100%;
				height: 400px;
			}
		}

		@media screen and (min-width: 768px) {
			iframe {
				width: 100%;
				height: 425px;
			}
		}

		@media screen and (min-width: 1024px) {
			iframe {
				width: 100%;
				height: 600px;
			}
		}

		@media screen and (min-width: 1280px) {
			iframe {
				width: 85%;
				height: 600px;
			}
		}

		@media screen and (min-width: 1440px) {
			iframe {
				width: 75%;
				height: 650px;
				max-height: 650px;
			}
		}
	`;

	return (
		<>
			<VimeoVideo>{parse(`${children}`)}</VimeoVideo>
		</>
	);
};

export default VideoWrapper;
