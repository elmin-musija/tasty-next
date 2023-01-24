import { getAllMealsByArea, getAllAreas } from "../../../utils/fetch";
import MealGallery from "../../../components/meal-gallery/meal-gallery";

export default function CategoryPage({ areaId, mealsByArea }) {
	return <MealGallery category={areaId} meals={mealsByArea} />;
}

export async function getStaticProps(context) {
	const { areaId } = context.params;
	const mealsByArea = await getAllMealsByArea(areaId);
	return { props: { areaId, mealsByArea } };
}

export async function getStaticPaths() {
	const allAreas = await getAllAreas();
	const path = allAreas.map((element) => ({
		params: { areaId: element.strArea },
	}));
	return { paths: path, fallback: "blocking" };
}
