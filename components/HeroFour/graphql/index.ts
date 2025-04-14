// ACF Flexible Content Component Post Type Query
export const HeroFour = `
    fieldGroupName
	displaySection
	title
	paragraph
	displayVideo
	displayFullHeight
	video {
      	link
      	title
      	mediaDetails {
      	  	height
      	  	width
      	}
    }
	buttonLink {
    	url
    	title
    	target
    }
    buttonLinkTwo {
    	url
    	title
    	target
    }
	backgroundImage {
		altText
		sourceUrl
		mediaDetails {
			height
			width
		}
	}
`;