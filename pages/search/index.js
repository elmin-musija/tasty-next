import { getAllAreas, getAllCategories } from "../../utils/fetch";
import AllAreas from "../../components/all-areas/all-areas";
import AllCategories from "../../components/all-categories/all-categories";
import { motion } from "framer-motion";

function SearchPage({ allAreas, allCategories }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<AllAreas allAreas={allAreas} />
			<AllCategories allCategories={allCategories} />
		</motion.div>
	);
}

export default SearchPage;

export async function getStaticProps() {
	const allAreas = await getAllAreas();
	const allCategories = await getAllCategories();

	return {
		props: {
			allAreas,
			allCategories,
		},
		revalidate: 60,
	};
}
