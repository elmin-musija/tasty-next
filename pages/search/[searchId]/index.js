import React from "react";
import { getMealByTitleSearch } from "../../../utils/fetch";
import MealDetails from "../../../components/meal-details/meal-details";
import { motion } from "framer-motion";

export default function DetailsPage({ mealBySearch }) {
	if (!mealBySearch) {
		return <p>Meal not found...</p>;
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<MealDetails meal={mealBySearch} />
		</motion.div>
	);
}

export async function getServerSideProps(context) {
	const searchId = context.params.searchId;
	const mealBySearch = await getMealByTitleSearch(searchId);
	return { props: { mealBySearch } };
}
