"use client";

// Imports
import {motion} from "framer-motion";
import {useRouter} from "next/navigation";
import React, {useState, FC} from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {useFormik, Formik, Field, Form} from "formik";
import {sendNewsletterForm} from "@/lib/newsletterForm";
import {INewsletterFormikForm} from "@/types/components/Elements";
import {fadeIn, initial, fadeInUp, initialTwo} from "@/animations/animations";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const NewsletterFormikForm: FC<INewsletterFormikForm> = ({
	formTitle,
	textarea,
}) => {
	const router = useRouter();

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
					formik.resetForm();
					setMessageSent(false);
				}, 5000);
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
		<Formik
			onSubmit={formik?.onSubmit}
			initialValues={formik?.initialValues}
			className="w-full lg:w-1/2"
		>
			<Form action="#">
				{loading ? (
					<motion.h3
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="my-2 text-xl font-bold text-center lg:text-left text-primary-two"
					>
						Sending Message...
					</motion.h3>
				) : messageSent ? (
					<motion.h3
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="my-2 text-xl font-bold text-center lg:text-left text-primary-two"
					>
						Message Sent!
					</motion.h3>
				) : errorMessage ? (
					<motion.h3
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="my-2 text-xl font-bold text-center lg:text-left text-primary-default"
					>
						Error Message: Something went wrong with sending your message.
						Please try again.
					</motion.h3>
				) : (
					<motion.h3
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="my-2 text-xl font-bold text-center lg:text-left text-pureBlack"
					>
						{formTitle}
					</motion.h3>
				)}

				<Paragraph
					content={textarea}
					className="mb-2 lg:max-w-3xl mx-auto text-pureBlack text-base text-center lg:text-left"
				/>

				<motion.div
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className="mb-2 w-full"
				>
					{formik?.touched?.email && formik?.errors?.email ? (
						<div>
							<p className="py-1 text-left text-tiny text-primary-default ">
								{formik?.errors?.email}
							</p>
						</div>
					) : null}
					<Field
						id="email"
						name="email"
						type="email"
						placeholder="Email Address"
						onBlur={formik?.handleBlur}
						onChange={formik?.handleChange}
						value={formik?.values?.email}
						className="px-4 py-3 w-full text-darkGrey placeholder-darkGrey bg-white bg-opacity-90 outline-none border-[1px] border-darkGrey active:border-primary-dark focus:border-primary-dark focus:ring-[1px] focus:ring-primary-dark"
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
					className={
						formik?.touched?.email
							? "mt-2 w-full inline-block text-white disabled:bg-opacity-20 disabled:cursor-not-allowed"
							: "hidden"
					}
				>
					<span className="w-full flex items-center justify-center gap-3 py-3 px-6 bg-purple-default hover:bg-purple-two transition-all duration-200 ease-in-out">
						<motion.h3
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="text-white tracking-widest text-paragraph uppercase"
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
};

export default NewsletterFormikForm;
