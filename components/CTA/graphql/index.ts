// ACF Flexible Content Component Post Type Query
export const CTA = `
    fieldGroupName
    displaySection
    title
    paragraph
	displayVideo
	displayBigCta
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
	backgroundImage {
      	altText
      	sourceUrl
      	mediaDetails {
      	  	height
      	  	width
      	}
    }
`;