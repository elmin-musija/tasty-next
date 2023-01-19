import { dbConnect } from "./db-connection";

const COLLECTION_NAME = process.env.MONGO_DB_USERS_COLLECTION_NAME;

const dbInsertSingleUser = async ({ firstname, lastname, email, password }) => {
	const connnection = await dbConnect();
	const result = await connnection.collection(COLLECTION_NAME).insertOne({
		firstname,
		lastname,
		email,
		password,
		role: "user",
		createdAt: new Date().getTime(),
		verified: false,
	});
	return result;
};

const dbCheckIfUserExists = async ({ email }) => {
	const connection = await dbConnect();
	const result = await connection
		.collection(COLLECTION_NAME)
		.findOne({ email });

	if (result) {
		return true;
	} else return false;
};

const dbGetSingleUser = async ({ email }) => {
	const connection = await dbConnect();
	const result = await connection
		.collection(COLLECTION_NAME)
		.findOne({ email });

	if (result) {
		return result;
	} else return false;
};

const dbGetSingleUserAndPassword = async ({ email, password }) => {
	const connection = await dbConnect();
	const result = await connection
		.collection(COLLECTION_NAME)
		.findOne({ email, password });

	if (result) {
		return result;
	} else return false;
};

module.exports = {
	dbInsertSingleUser,
	dbCheckIfUserExists,
	dbGetSingleUser,
	dbGetSingleUserAndPassword,
};
