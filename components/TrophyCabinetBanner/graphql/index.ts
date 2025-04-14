// ACF Flexible Content Component Post Type Query
export const TrophyCabinetBanner = `
    fieldGroupName
    displaySection
    title
    paragraph
	buttonLink {
    	url
    	title
    	target
    }
	trophyCabinet {
    	name
    	totalAmount
    	image {
    		altText
    		sourceUrl
    		mediaDetails {
    			height
    			width
    		}
    	}
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