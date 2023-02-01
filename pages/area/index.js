import { getAllAreas } from "../../utils/fetch";
import AllAreas from "../../components/all-areas/all-areas";
import { motion } from "framer-motion";

function index({ allAreas }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<AllAreas allAreas={allAreas} />
		</motion.div>
	);
}

export default index;

export async function getStaticProps() {
	const allAreas = await getAllAreas();
	return { props: { allAreas } };
}
