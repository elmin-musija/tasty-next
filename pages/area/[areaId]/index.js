import { getAllMealsByArea, getAllAreas } from "../../../utils/fetch";
import MealGallery from "../../../components/meal-gallery/meal-gallery";
import { motion } from "framer-motion";

export default function CategoryPage({ areaId, mealsByArea }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<MealGallery category={areaId} meals={mealsByArea} />
		</motion.div>
	);
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
