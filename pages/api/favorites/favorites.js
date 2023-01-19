import {
	dbGetSingleFavoriteByUser,
	dbDeleteSingleFavorite,
	dbInsertSingleFavorite,
} from "../../../src/db_access/favorites-DAO";
import { unstable_getServerSession } from "next-auth";
import { NextAuthOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
	if (req.method === "POST") {
		const session = await unstable_getServerSession(req, res, NextAuthOptions);
		const { idMeal, strMeal, strArea, strCategory, strMealThumb, user } =
			JSON.parse(req.body);
		const getSingleOne = await dbGetSingleFavoriteByUser(
			idMeal,
			session.user.email
		);
		if (!getSingleOne) {
			const insertOne = await dbInsertSingleFavorite({
				idMeal,
				strMeal,
				strArea,
				strCategory,
				strMealThumb,
				user,
			});
			return res.status(200).json({ inserted: insertOne.acknowledged });
		} else {
			const deleteOne = await dbDeleteSingleFavorite(idMeal);
			return res.status(200).json({ deleted: deleteOne.acknowledged });
		}
	}
}
