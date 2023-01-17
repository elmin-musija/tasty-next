import { dbGetSingleFavorite } from "../../src/db_access/favorites-DAO";

export default async function handler(req, res) {
	if (req.method === "GET") {
		const [favorites, idMeal] = req.query.slug;
		const result = await dbGetSingleFavorite(idMeal);
		if (result && result.idMeal === idMeal) {
			res.status(200).json({ present: true });
		} else res.status(200).json({ present: false });
	}
}
