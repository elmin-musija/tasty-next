import { getRandomMeal, getAllAreas, getAllCategories } from "../utils/fetch";
import Searchbar from "../components/searchbar/searchbar";
import MealOfTheDay from "../components/meal-of-the-day/meal-of-the-day";
import PreviewAreas from "../components/preview-areas/preview-areas";
import PreviewCategories from "../components/preview-categories/preview-categories";

export default function Home({
	mealOfTheDay,
	previewAreas,
	previewCategories,
}) {
	return (
		<div>
			<Searchbar />
			<section>
				<MealOfTheDay randomMeal={mealOfTheDay} />
			</section>
			<section>
				<PreviewAreas previewAreas={previewAreas} />
			</section>
			<section>
				<PreviewCategories previewCategories={previewCategories} />
			</section>
		</div>
	);
}

export async function getStaticProps() {
	const mealOfTheDay = await getRandomMeal();
	const allAreas = await getAllAreas();
	const previewAreas = allAreas.slice(0, 3);
	const allCategories = await getAllCategories();
	const previewCategories = allCategories.slice(0, 3);

	return {
		props: {
			mealOfTheDay,
			previewAreas,
			previewCategories,
		},
		revalidate: 60,
	};
}
