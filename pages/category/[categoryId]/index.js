import React from "react";
import { getAllCategories, getAllMealsByCategory } from "../../../utils/fetch";
import MealGallery from "../../../components/meal-gallery/meal-gallery";

export default function CategoryPage(props) {
	const { categoryId, mealsByCategory } = props;
	return <MealGallery category={categoryId} meals={mealsByCategory} />;
}

export async function getStaticProps(context) {
	const { categoryId } = context.params;
	const mealsByCategory = await getAllMealsByCategory(categoryId);
	return { props: { categoryId, mealsByCategory } };
}

export async function getStaticPaths() {
	const allCategories = await getAllCategories();
	const path = allCategories.map((element) => ({
		params: { categoryId: element.strCategory },
	}));
	return { paths: path, fallback: "blocking" };
}
