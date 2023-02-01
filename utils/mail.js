import { google } from "googleapis";
import nodemailer from "nodemailer";

const GOOGLE_ADRESS = process.env.GOOGLE_ADRESS;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const GOOGLE_REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI;
const GOOGLE_REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
	GOOGLE_REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: GOOGLE_REFRESH_TOKEN });

const sendMail = ({ to, subject, message, html }) => {
	return oAuth2Client
		.getAccessToken()
		.then((accessToken) => {
			const transporter = nodemailer.createTransport({
				service: "gmail",
				auth: {
					type: "OAuth2",
					user: GOOGLE_ADRESS,
					clientId: GOOGLE_CLIENT_ID,
					clientSecret: GOOGLE_CLIENT_SECRET,
					refreshToken: GOOGLE_REFRESH_TOKEN,
					accessToken: accessToken,
				},
			});
			return transporter.sendMail({
				from: `The Tasty Club <${GOOGLE_ADRESS}>`,
				to,
				subject,
				message,
				html: html ? html : message.replaceAll("\n", "<br/>"),
			});
		})
		.then((sentMessageInfo) => {
			return sentMessageInfo.accepted.includes(to);
		});
};

module.exports = {
	sendMail,
};
