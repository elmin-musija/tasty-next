import React from "react";
import AllCategories from "../../components/all-categories/all-categories";
import { getAllCategories } from "../../utils/fetch";
import { motion } from "framer-motion";

function CategoryPage({ allCategories }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<AllCategories allCategories={allCategories} showThumbnail={true} />
		</motion.div>
	);
}

export default CategoryPage;

export async function getStaticProps(context) {
	const allCategories = await getAllCategories();
	return { props: { allCategories } };
}
