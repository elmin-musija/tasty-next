import { dbGetSingleFavoriteByUser } from "../../../src/db_access/favorites-DAO";
import { unstable_getServerSession } from "next-auth";
import { NextAuthOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
	if (req.method === "GET") {
		const session = await unstable_getServerSession(req, res, NextAuthOptions);
		const [favorites, idMeal] = req.query.slug;
		if (session) {
			const result = await dbGetSingleFavoriteByUser(
				idMeal,
				session.user.email
			);

			if (result && result.idMeal === idMeal) {
				res.status(200).json({ present: true });
			} else res.status(200).json({ present: false });
		} else res.status(500).json({ error: "Not authenticated" });
	}
}
