import React from "react";
import { getMealByTitleSearch } from "../../../utils/fetch";
import MealDetails from "../../../components/meal-details/meal-details";

export default function DetailsPage({ mealBySearch }) {
	if (!mealBySearch) {
		return <p>Meal not found...</p>;
	}

	return <MealDetails meal={mealBySearch} />;
}

export async function getServerSideProps(context) {
	const searchId = context.params.searchId;
	const mealBySearch = await getMealByTitleSearch(searchId);
	return { props: { mealBySearch } };
}
