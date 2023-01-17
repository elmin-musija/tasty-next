import { ObjectId } from "mongodb";
import { dbConnect } from "./db-connection";

const COLLECTION_NAME = process.env.MONGO_DB_COLLECTION_NAME;

const dbGetAllFavorites = async () => {
	const connection = await dbConnect();
	const result = await connection.collection(COLLECTION_NAME).find().toArray();
	const resultFormat = result.map((element) => ({
		...element,
		_id: ObjectId(element._id).toString(),
	}));
	return resultFormat;
};

const dbGetSingleFavorite = async (paramFavorite) => {
	const connection = await dbConnect();
	const result = await connection
		.collection(COLLECTION_NAME)
		.findOne({ idMeal: paramFavorite });

	return result;
};

const dbDeleteSingleFavorite = async (paramFavorite) => {
	const connection = await dbConnect();
	const result = await connection
		.collection(COLLECTION_NAME)
		.deleteOne({ idMeal: paramFavorite });

	return result;
};

const dbInsertSingleFavorite = async ({
	idMeal,
	strMeal,
	strArea,
	strCategory,
	strMealThumb,
}) => {
	const connection = await dbConnect();
	const result = await connection
		.collection(COLLECTION_NAME)
		.insertOne({ idMeal, strMeal, strArea, strCategory, strMealThumb });

	return result;
};

module.exports = {
	dbGetAllFavorites,
	dbGetSingleFavorite,
	dbDeleteSingleFavorite,
	dbInsertSingleFavorite,
};
