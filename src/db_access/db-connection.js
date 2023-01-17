import { MongoClient } from "mongodb";

const URL = process.env.MONGO_URL;
const DB_NAME = process.env.MONGO_DB_NAME;

let dbReference = null; // singleton pattern

const dbConnect = () => {
	if (dbReference) {
		return Promise.resolve(dbReference);
	} else {
		console.log("Connecting to database for first time...");
		const client = new MongoClient(URL);
		return client
			.connect()
			.then((connectedClient) => connectedClient.db(DB_NAME))
			.then((db) => {
				dbReference = db;
				return dbReference;
			});
	}
};

module.exports = {
	dbConnect,
};
