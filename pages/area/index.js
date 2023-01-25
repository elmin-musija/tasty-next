import { getAllAreas } from "../../utils/fetch";
import AllAreas from "../../components/all-areas/all-areas";

function index({ allAreas }) {
	return <AllAreas allAreas={allAreas} />;
}

export default index;

export async function getStaticProps() {
	const allAreas = await getAllAreas();
	return { props: { allAreas } };
}
