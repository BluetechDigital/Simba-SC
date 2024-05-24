// Imports
import nodemailer from "nodemailer";

const email: any = process.env.EMAIL_USER;
const password: any = process.env.EMAIL_PASS;
const host: any = process.env.EMAIL_HOST;

export const emailTransporter: any = nodemailer.createTransport({
	host: host,
	port: 587,
	secure: false,
	auth: {
		user: email,
		pass: password,
	},
	tls: {rejectUnauthorized: false},
	logger: true,
	debug: true,
});
