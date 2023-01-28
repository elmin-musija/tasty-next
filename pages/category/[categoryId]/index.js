import React from "react";
import { getAllCategories, getAllMealsByCategory } from "../../../utils/fetch";
import MealGallery from "../../../components/meal-gallery/meal-gallery";
import { motion } from "framer-motion";

export default function CategoryPage(props) {
	const { categoryId, mealsByCategory } = props;
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<MealGallery category={categoryId} meals={mealsByCategory} />
		</motion.div>
	);
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
