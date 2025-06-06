"use client";

// Imports
import {
	fadeIn,
	initial,
	stagger,
	fadeInUp,
	initialTwo,
} from "@/animations/animations";
import {motion} from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import React, {useState, FC, memo} from "react";
import {sendContactForm} from "@/lib/contactForm";
import {useFormik, Formik, Field, Form} from "formik";
import { IContactForm } from "@/components/ContactForm/types/index";

// Styling
import styles from "@/components/ContactForm/styles/ContactForm.module.scss";

const FormikForm: FC<IContactForm.IForm> = memo(({
	formTitle
}) => {
	// Loading, Send & Error Message States
	const [loading, setLoading] = useState(false);
	const [messageSent, setMessageSent] = useState(false);
	const [errorMessage, setErrorMessage] = useState(false);

	// A custom validation function. This must return an object
	// which index are symmetrical to our values/initialValues
	const validate: any = (values: any) => {
		const errors: any = {};
		if (!values?.firstName) {
			errors.firstName = "Required*";
		} else if (values?.firstName.length >= 16) {
			errors.firstName = "Must be 15 characters or less";
		}

		if (!values.lastName) {
			errors.lastName = "Required*";
		} else if (values.lastName.length >= 21) {
			errors.lastName = "Must be 20 characters or less";
		}

		if (!values?.email) {
			errors.email = "Required*";
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values?.email)
		) {
			errors.email = "Invalid email address";
		}

		if (!values?.phoneNumber) {
			errors.phoneNumber = "Required*";
		} else if (values?.phoneNumber.length < 1) {
			errors.phoneNumber = "Please inform us about the topic.";
		}

		if (!values?.selectedServices) {
			errors.selectedServices = "Required*";
		} else if (values?.selectedServices.length <= 0) {
			errors.selectedServices = "Please inform us about the topic.";
		}

		if (!values?.subject) {
			errors.subject = "Required*";
		} else if (values?.subject.length <= 0) {
			errors.subject = "Please inform us about the topic.";
		}

		if (!values?.message) {
			errors.message = "Required*";
		} else if (values?.message.length <= 0) {
			errors.message = "Please tell us about your enquiry.";
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
			firstName: "",
			lastName: "",
			email: "",
			phoneNumber: "",
			selectedServices: "",
			subject: "",
			message: "",
		},
		validate,
		onSubmit: async (values: any) => {
			if (reCaptchaResult) {
				try {
					await sendContactForm(values);
				} catch (error) {
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
			} catch (error) {
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
			<Form className={styles.formikForm}>
				{loading ? (
					<motion.h4
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className={styles.title + " text-pureBlack"}
					>
						Sending Message...
					</motion.h4>
				) : messageSent ? (
					<motion.h4
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className={styles.title + " text-accent-default"}
					>
						Message Sent!
					</motion.h4>
				) : errorMessage ? (
					<motion.h4
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className={styles.title + " text-primary-default"}
					>
						Error Message: Something went wrong with sending your message.
						Please try again.
					</motion.h4>
				) : (
					<motion.h4
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className={
							styles.title + " my-3 max-w-xl mx-auto xl:mx-0 text-pureBlack"
						}
					>
						{formTitle}
					</motion.h4>
				)}
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className={styles.formFields}
				>
					<div className="flex flex-col xl:flex-row gap-4">
						<motion.div
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className={styles.fieldWrapper}
						>
							<h5 className={styles.fieldText}>First Name</h5>
							{formik?.touched?.firstName && formik?.errors?.firstName ? (
								<>
									<span className={styles.errorMessage}>
										{formik?.errors?.firstName}
									</span>
								</>
							) : null}
							<Field
								id="firstName"
								name="firstName"
								placeholder="John *"
								className={styles.field}
								onBlur={formik?.handleBlur}
								onChange={formik?.handleChange}
								value={formik?.values?.firstName}
							/>
						</motion.div>
						<motion.div
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className={styles.fieldWrapper}
						>
							<h5 className={styles.fieldText}>Last Name</h5>
							{formik?.touched?.lastName && formik?.errors?.lastName ? (
								<>
									<span className={styles.errorMessage}>
										{formik?.errors?.lastName}
									</span>
								</>
							) : null}
							<Field
								id="lastName"
								name="lastName"
								placeholder="Doe *"
								className={styles.field}
								onBlur={formik?.handleBlur}
								onChange={formik?.handleChange}
								value={formik?.values?.lastName}
							/>
						</motion.div>
					</div>
					<div className="flex flex-col xl:flex-row gap-4">
						<motion.div
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className={styles.fieldWrapper}
						>
							<h5 className={styles.fieldText}>Phone Number</h5>
							{formik?.touched?.phoneNumber && formik?.errors?.phoneNumber ? (
								<>
									<span className={styles.errorMessage}>
										{formik?.errors?.phoneNumber}
									</span>
								</>
							) : null}
							<Field
								type="text"
								id="phoneNumber"
								name="phoneNumber"
								className={styles.field}
								onBlur={formik?.handleBlur}
								onChange={formik?.handleChange}
								placeholder="+255 787 000 000 *"
								value={formik?.values?.phoneNumber}
							/>
						</motion.div>
						<motion.div
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className={styles.fieldWrapper}
						>
							<h5 className={styles.fieldText}>Subject</h5>
							{formik?.touched?.subject && formik?.errors?.subject ? (
								<>
									<span className={styles.errorMessage}>
										{formik?.errors?.subject}
									</span>
								</>
							) : null}
							<Field
								type="text"
								id="subject"
								name="subject"
								className={styles.field}
								onBlur={formik?.handleBlur}
								onChange={formik?.handleChange}
								value={formik?.values?.subject}
								placeholder="General Information *"
							/>
						</motion.div>
					</div>
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className={styles.fieldWrapper}
					>
						<h5 className={styles.fieldText}>Email Address</h5>
						{formik?.touched?.email && formik?.errors?.email ? (
							<>
								<span className={styles.errorMessage}>
									{formik?.errors?.email}
								</span>
							</>
						) : null}
						<Field
							id="email"
							name="email"
							type="email"
							className={styles.field}
							onBlur={formik?.handleBlur}
							value={formik?.values?.email}
							onChange={formik?.handleChange}
							placeholder="johndoe@gmail.com *"
						/>
					</motion.div>
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className={styles.fieldWrapper}
					>
						<h5 className={styles.fieldText}>How can we help?</h5>
						{formik?.touched?.message && formik?.errors?.message ? (
							<>
								<span className={styles.errorMessage}>
									{formik?.errors?.message}
								</span>
							</>
						) : null}
						<textarea
							rows={5}
							id="message"
							name="message"
							className={styles.textarea}
							onBlur={formik?.handleBlur}
							placeholder="Your Message... *"
							onChange={formik?.handleChange}
							value={formik?.values?.message}
						/>
					</motion.div>
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className={
							formik?.touched?.firstName ||
							formik?.touched?.lastName ||
							formik?.touched?.email
								? "block"
								: "hidden"
						}
					>
						<ReCAPTCHA
							sitekey={`6LcfDlApAAAAAMj94407sxL1Q6ZxY54KQx60qifF`}
							onChange={handleReCaptchaChange}
						/>
					</motion.div>
					<motion.button
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						onClick={onFormSubmit}
						disabled={
							!formik?.values?.firstName ||
							!formik?.values?.lastName ||
							!formik?.values?.email ||
							!formik?.values?.phoneNumber ||
							!formik?.values?.subject ||
							!formik?.values?.message ||
							reCaptchaResult === null ||
							reCaptchaResult === undefined
						}
						className="w-full text-white disabled:bg-opacity-20 disabled:cursor-not-allowed"
						type="submit"
					>
						<span
							className={
								messageSent
									? `${styles.messageSent}`
									: `${styles.submitButton}`
							}
						>
							<h3 className={styles.text}>
								{loading
									? "Sending Message..."
									: messageSent
									? "Message Sent!"
									: errorMessage
									? "Sending Error!"
									: "Send Message"}
							</h3>
						</span>
					</motion.button>
				</motion.div>
			</Form>
		</Formik>
	);
});

FormikForm.displayName = 'FormikForm';

export default FormikForm;
