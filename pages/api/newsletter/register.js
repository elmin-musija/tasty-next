import { sendMail } from "../../../utils/mail";

export default async function handler(req, res) {
	if (req.method === "POST") {
		/**
		 * Due to privacy policy currently disabled
		 */
		// const { email } = JSON.parse(req.body);
		// /**
		//  * TODO: check email...
		//  */
		// const emailOptions = {
		// 	to: email,
		// 	subject: "Welcome to the tasty club",
		// 	message: `Welcome to the tasty club and enjoy our weekly specials!!!`,
		// 	html: "",
		// };

		// const result = sendMail(emailOptions);
		// if (result) {
		// 	res
		// 		.status(200)
		// 		.json({ success: "successfully registered for newsletter." });
		// 	return;
		// } else {
		// 	/**
		// 	 * TODO: handle error...
		// 	 */
		// }

		res
			.status(500)
			.json({ warning: "Due to privacy policy currently disabled." });
		return;
	}
	res.status(400).json({ error: "Invalid request" });
}
