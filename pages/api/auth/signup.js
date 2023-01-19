import {
	dbCheckIfUserExists,
	dbGetSingleUser,
	dbInsertSingleUser,
} from "../../../src/db_access/users-DAO";
import { generatePasswordHash } from "../../../utils/crypt";

const handler = async (req, res) => {
	const { firstname, lastname, email, password } = JSON.parse(req.body);

	/**
	 * check if user already exists...
	 */
	const user = await dbGetSingleUser({ email });
	if (!user) {
		/**
		 * insert new user with hashed password...
		 */
		const passwordHash = await generatePasswordHash(password);

		const result = await dbInsertSingleUser({
			firstname: firstname,
			lastname: lastname,
			email: email,
			password: passwordHash,
		});
		if (result.acknowledged) {
			res.status(200).json({ success: "User successfully created" });
		} else {
			res.status(400).json({ fail: "User not created" });
		}
	} else {
		res.status(400).json({ fail: "User already exists" });
	}
};

export default handler;
