import React from "react";
import { unstable_getServerSession } from "next-auth/next";
import { NextAuthOptions } from "../../pages/api/auth/[...nextauth]";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { dbGetAllFavoritesByUser } from "../../src/db_access/favorites-DAO";
import MealGalleryFavorites from "../../components/meal-gallery-favorites/meal-gallery-favorites";
import { motion } from "framer-motion";

const FavoritesPage = ({ allFavorites }) => {
	const { data: session, status } = useSession();
	const router = useRouter();

	if (!session && status === "unauthenticated") {
		router.replace("/auth/login");
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<MealGalleryFavorites category={"Favorites"} meals={allFavorites} />
		</motion.div>
	);
};

export default FavoritesPage;

export async function getServerSideProps(context) {
	const session = await unstable_getServerSession(
		context.req,
		context.res,
		NextAuthOptions
	);

	if (!session) {
		return { redirect: { destination: "/auth/login", permanent: false } };
	}

	const { email } = session.user;

	/**
	 * get all favorites by logged in user....
	 */
	const allFavorites = await dbGetAllFavoritesByUser(email);
	return { props: { allFavorites } };
}
