import React from "react";

import { getMealByID } from "../../../utils/fetch";
import MealDetails from "../../../components/meal-details/meal-details";

export default function DetailsPage({ mealById }) {
	console.log("reload...");
	return <MealDetails meal={mealById} />;
}

export async function getServerSideProps(context) {
	const { detailsId } = context.params;
	const mealById = await getMealByID(detailsId);

	return { props: { mealById } };
}
