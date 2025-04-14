import {render} from "@react-email/components";
import {emailTransporter} from "@/config/nodemailer";
// Types
import {INewsletterEmail} from "@/components/Emails/types/index";
import {getThemesOptionsContent} from "@/graphql/GetAllThemesOptions";

// Components
import NewsletterEnquiryConfirmationEmail from "@/components/Emails/NewsletterEnquiryConfirmationEmail";

export async function POST(req: Request | any, res: Response | any) {
	const data = await req.json();

	// If any of these values are undefined
	if (!data?.email) {
		console.log("Missing Data Fields. Please try again.");
	}

	try {
		const imagesDirUrl: any = process.env.IMAGE_DIR_URL;
		const themesOptionsContent: any = await getThemesOptionsContent();

		/* Render React Newsletter
			 Confirmation Email Component*/
		const newsletterEmailHtml: any = render(
			<NewsletterEnquiryConfirmationEmail
				email={`${data?.email}`}
				imagesDirUrl={imagesDirUrl}
				themesOptionsContent={themesOptionsContent}
			/>
		);

		/* NewsletterConfirmation Email */
		const newsletterEmail: INewsletterEmail | any = {
			from: `${themesOptionsContent?.email}`,
			to: `${themesOptionsContent?.email}`,
			subject: `Thank You for Contacting Simba SC`,
			html: newsletterEmailHtml,
		};

		await emailTransporter.sendMail({...newsletterEmail});
	} catch (err) {
		console.log(err);
	}

	return Response.json({res});
}
