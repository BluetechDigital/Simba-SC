// ACF Flexible Content Component Post Type Query
export const LatestVideoBlock = `
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
	displayButtonColor
	displayContentColor
	displayBackgroundSvg
    displayBackgroundColor
	videoBackgroundImage {
		altText
		sourceUrl
		mediaDetails {
			height
			width
		}
	}
`;