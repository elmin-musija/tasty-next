import { getAllAreas, getAllCategories } from "../../utils/fetch";
import Searchbar from "../../components/searchbar/searchbar";
import AllAreas from "../../components/all-areas/all-areas";
import AllCategories from "../../components/all-categories/all-categories";

function SearchPage({ allAreas, allCategories }) {
	return (
		<div>
			<Searchbar />
			<AllAreas allAreas={allAreas} />
			<AllCategories allCategories={allCategories} />
		</div>
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
