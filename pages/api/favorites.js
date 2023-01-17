import {
	dbGetSingleFavorite,
	dbDeleteSingleFavorite,
	dbInsertSingleFavorite,
} from "../../src/db_access/favorites-DAO";

export default async function handler(req, res) {
	if (req.method === "POST") {
		const { idMeal, strMeal, strArea, strCategory, strMealThumb } = JSON.parse(
			req.body
		);
		const getSingleOne = await dbGetSingleFavorite(idMeal);
		if (!getSingleOne) {
			const insertOne = await dbInsertSingleFavorite({
				idMeal,
				strMeal,
				strArea,
				strCategory,
				strMealThumb,
			});
			return res.status(200).json({ inserted: insertOne.acknowledged });
		} else {
			const deleteOne = await dbDeleteSingleFavorite(idMeal);
			return res.status(200).json({ deleted: deleteOne.acknowledged });
		}
	}
}
