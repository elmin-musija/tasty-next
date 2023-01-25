import React from "react";
import { unstable_getServerSession } from "next-auth/next";
import { NextAuthOptions } from "../../pages/api/auth/[...nextauth]";
import { dbGetAllFavoritesByUser } from "../../src/db_access/favorites-DAO";
import MealGallery from "../../components/meal-gallery/meal-gallery";

const FavoritesPage = ({ allFavorites }) => {
	return <MealGallery category={"Favorites"} meals={allFavorites} />;
};

export default FavoritesPage;

export async function getServerSideProps(context) {
	const session = await unstable_getServerSession(
		context.req,
		context.res,
		NextAuthOptions
	);

	if (!session) {
		return { redirect: { destination: "/auth/login", permanent: false } };
	}
	/**
	 * get all favorites by logged in user....
	 */
	const allFavorites = await dbGetAllFavoritesByUser(session.user.email);
	return { props: { allFavorites } };
}
