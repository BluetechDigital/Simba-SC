// ACF Flexible Content Component Post Type Query
export const VideoBlock = `
    fieldGroupName
	displaySection
	title
	video {
      	link
      	title
      	mediaDetails {
      	  	height
      	  	width
      	}
    }
	subtitle
	paragraph
	displayVideo
	buttonLink {
		url
		title
		target
	}
	videoBackgroundImage {
		altText
		sourceUrl
		mediaDetails {
			height
			width
		}
	}
`;