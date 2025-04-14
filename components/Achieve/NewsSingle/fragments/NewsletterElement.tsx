"use client";

// Imports
import {FC, useState} from "react";
import {motion} from "framer-motion";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
import { Field, Form, Formik, useFormik } from "formik";
import {sendNewsletterForm} from "@/lib/newsletterForm";
import fadeInUp, {initial, initialTwo, fadeIn} from "@/animations/animations";

// Styling
import styles from "@/components/Achieve/NewsSingle/styles/NewsSingle.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph/Paragraph";

const NewsletterElement: FC = () => {
    const router: any = useRouter();

    // Loading, Send & Error Message States
	const [loading, setLoading] = useState(false);
	const [messageSent, setMessageSent] = useState(false);
	const [errorMessage, setErrorMessage] = useState(false);

	// A custom validation function. This must return an object
	// which keys are symmetrical to our values/initialValues
	const validate: any = (values: any) => {
		const errors: any = {};

		if (!values?.email) {
			errors.email = "Required*";
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values?.email)
		) {
			errors.email = "Invalid email address";
		}

		return errors;
	};

	// Google ReCaptcha Validation
	const [reCaptchaResult, setReCaptchaResult] = useState(null);
	const googleReCaptchaValidate = (value: any) => {
		return value;
	};

	const handleReCaptchaChange = (response: any) => {
		const result = googleReCaptchaValidate(response);
		setReCaptchaResult(result);
	};

	/* Contact Form Fields
	And Initial Values */
	const formik: any = useFormik({
		initialValues: {
			email: "",
		},
		validate,
		onSubmit: async (values: any) => {
			if (reCaptchaResult) {
				try {
					console.log(values);
					await sendNewsletterForm(values);
				} catch (error: unknown) {
					setErrorMessage(true);
					throw new Error(
						"Error Message: Something went wrong with Sending your Message. Please try again."
					);
				}
			} else {
				throw new Error(
					"Error Message: Something went wrong with your Google Recaptcha validation. Please try again."
				);
			}
		},
	});

	// Form Submission
	const onFormSubmit = (event: any) => {
		event.preventDefault();
		setErrorMessage(false);
		if (reCaptchaResult) {
			try {
				setLoading(true);
				/* Send Form Content */
				formik.handleSubmit();
				setLoading(false);
				setMessageSent(true);
				setTimeout(() => {
					router.reload();
				}, 3000);
			} catch (error: unknown) {
				setErrorMessage(true);
				throw new Error(
					"Error Message: Something went wrong with Sending your Message. Please try again."
				);
			}
		} else {
			throw new Error(
				"Error Message: Something went wrong with your Google Recaptcha validation. Please try again."
			);
		}
    };
    
    return (
        <Formik onSubmit={formik?.onSubmit} initialValues={formik?.initialValues}>
            <Form
				action="#"
				id="NewsletterElement"
				className={styles.newsletterElement}
			>
				<div className={styles.titleMessageWrapper}>
					{loading ? (
						<motion.h3
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className={styles.sendingMessage}
						>
							Sending Message...
						</motion.h3>
					) : messageSent ? (
						<motion.h3
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className={styles.messageSent}
						>
							Message Sent!
						</motion.h3>
					) : errorMessage ? (
						<motion.h3
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className={styles.errorMessage}
						>
							Error Message: Something went wrong with sending your message.
							Please try again.
						</motion.h3>
					) : (
						<motion.h3
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className={styles.title}
						>
							Join Our Newsletter
						</motion.h3>
					)}
					<Paragraph
						className={styles.paragraph}
						content={`Get the latest updates delivered into your inbox monthly. No spam.`}
					/>
				</div>
				<motion.div
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className={styles.fieldWrapper}
				>
					{formik?.touched?.email && formik?.errors?.email ? (
						<p className={styles.errorMessage}>
							{formik?.errors?.email}
						</p>
					) : null}
					<Field
						id="email"
						name="email"
						type="email"
						placeholder="Email Address"
						onBlur={formik?.handleBlur}
						className={styles.fieldText}
						value={formik?.values?.email}
						onChange={formik?.handleChange}
					/>
				</motion.div>
				<motion.div
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className={formik?.touched?.email ? "block" : "hidden"}
				>
					<ReCAPTCHA
						sitekey={`6LfxDlApAAAAAATlCoXvFZjsdAm6mgpAeDt_HVBR`}
						onChange={handleReCaptchaChange}
					/>
				</motion.div>
				<motion.button
					type="submit"
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					onClick={onFormSubmit}
					disabled={
						!formik?.values?.email ||
						reCaptchaResult === null ||
						reCaptchaResult === undefined
					}
					className={formik?.touched?.email ? styles.formSubmitButton : "hidden"}
				>
					<span className={styles.textWrapper}>
						<motion.h3
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className={styles.text}
						>
							{loading
								? "Subscribing..."
								: messageSent
								? "Message Sent!"
								: errorMessage
								? "Sending Error!"
								: "Subscribe"}
						</motion.h3>
					</span>
				</motion.button>
			</Form>
        </Formik>
    );
}

export default NewsletterElement;