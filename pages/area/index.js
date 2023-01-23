import { getAllAreas } from "../../utils/fetch";
import AllAreas from "../../components/all-areas/all-areas";
import Searchbar from "../../components/searchbar/searchbar";

function index({ allAreas }) {
	return (
		<>
			<Searchbar />
			<AllAreas allAreas={allAreas} />
		</>
	);
}

export default index;

export async function getStaticProps() {
	const allAreas = await getAllAreas();
	return { props: { allAreas } };
}
