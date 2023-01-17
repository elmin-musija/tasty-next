import React from "react";

import { getMealByTitleSearch } from "../../../utils/fetch";
import MealDetails from "../../../components/meal-details/meal-details";

export default function DetailsPage({ mealBySeach }) {
	if (!mealBySeach) {
		return <p>Meal not found...</p>;
	}

	return <MealDetails meal={mealBySeach} />;
}

export async function getServerSideProps(context) {
	const searchId = context.params.searchId;
	const mealBySeach = await getMealByTitleSearch(searchId);
	return { props: { mealBySeach } };
}
