import {
	getRandomMeal,
	getAllAreas,
	getAllCategories,
} from "../../utils/fetch";
import MealOfTheDay from "../../components/meal-of-the-day/meal-of-the-day";
import PreviewAreas from "../../components/preview-areas/preview-areas";
import PreviewCategories from "../../components/preview-categories/preview-categories";
import NewsletterForm from "../../components/newsletter-form/newsletter-form";
import { motion } from "framer-motion";

export default function Home({
	mealOfTheDay,
	previewAreas,
	previewCategories,
}) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<MealOfTheDay randomMeal={mealOfTheDay} />
			<PreviewAreas previewAreas={previewAreas} />
			<PreviewCategories previewCategories={previewCategories} />
			<NewsletterForm />
		</motion.div>
	);
}

export async function getStaticProps() {
	const mealOfTheDay = await getRandomMeal();
	const allAreas = await getAllAreas();
	const previewAreas = allAreas.slice(0, 3);
	const allCategories = await getAllCategories();
	const previewCategories = allCategories.slice(0, 5);

	return {
		props: {
			mealOfTheDay,
			previewAreas,
			previewCategories,
		},
		revalidate: 60,
	};
}
