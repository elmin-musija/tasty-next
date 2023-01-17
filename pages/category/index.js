import React from "react";
import AllCategories from "../../components/all-categories/all-categories";
import { getAllCategories } from "../../utils/fetch";

function CategoryPage({ allCategories }) {
	return <AllCategories allCategories={allCategories} showThumbnail={true} />;
}

export default CategoryPage;

export async function getStaticProps(context) {
	const allCategories = await getAllCategories();
	return { props: { allCategories } };
}
