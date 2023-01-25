import { ObjectId } from "mongodb";
import { dbConnect } from "./db-connection";

const COLLECTION_NAME = process.env.MONGO_DB_FAVORITE_COLLECTION_NAME;

const dbGetAllFavorites = async () => {
	const connection = await dbConnect();
	const result = await connection.collection(COLLECTION_NAME).find().toArray();
	const resultFormat = result.map((element) => ({
		...element,
		_id: ObjectId(element._id).toString(),
	}));
	return resultFormat;
};

const dbGetAllFavoritesByUser = async (paramUserEmail) => {
	const connection = await dbConnect();
	const result = await connection
		.collection(COLLECTION_NAME)
		.find({ user: paramUserEmail })
		.toArray();
	const resultFormat = result.map((element) => ({
		...element,
		_id: ObjectId(element._id).toString(),
	}));
	return resultFormat;
};

const dbGetAllFavoriteCategoriesByUser = async (paramUserEmail) => {
	const connection = await dbConnect();
	const result = await connection
		.collection(COLLECTION_NAME)
		.find({ user: paramUserEmail })
		.toArray();
	const filteredResult = result.map((element) => element.strCategory);
	const uniqueFilteredResults = Array.from(new Set(filteredResult));
	const uniqueFilteredResultsSorted = uniqueFilteredResults.sort((a, b) =>
		a.localeCompare(b)
	);
	return uniqueFilteredResultsSorted;
};

const dbGetSingleFavorite = async (paramFavorite) => {
	const connection = await dbConnect();
	const result = await connection
		.collection(COLLECTION_NAME)
		.findOne({ idMeal: paramFavorite });

	return result;
};

const dbGetSingleFavoriteByUser = async (paramFavorite, paramUserEmail) => {
	const connection = await dbConnect();
	const result = await connection
		.collection(COLLECTION_NAME)
		.findOne({ idMeal: paramFavorite, user: paramUserEmail });
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
	user,
}) => {
	const connection = await dbConnect();
	const result = await connection
		.collection(COLLECTION_NAME)
		.insertOne({ idMeal, strMeal, strArea, strCategory, strMealThumb, user });

	return result;
};

module.exports = {
	dbGetAllFavorites,
	dbGetAllFavoritesByUser,
	dbGetSingleFavorite,
	dbGetAllFavoriteCategoriesByUser,
	dbGetSingleFavoriteByUser,
	dbDeleteSingleFavorite,
	dbInsertSingleFavorite,
};
