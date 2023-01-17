import React from "react";
import { dbGetAllFavorites } from "../../src/db_access/favorites-DAO";
import MealGallery from "../../components/meal-gallery/meal-gallery";

const FavoritesPage = ({ allFavorites }) => {
	return <MealGallery category={"Favorites"} meals={allFavorites} />;
};

export default FavoritesPage;

export async function getServerSideProps(context) {
	const allFavorites = await dbGetAllFavorites();
	return { props: { allFavorites } };
}
