import React from "react";
import { unstable_getServerSession } from "next-auth";
import { NextAuthOptions } from "../api/auth/[...nextauth]";
import Image from "next/image";
import Link from "next/link";
import { uid } from "uid";
import { dbGetAllFavoriteCategoriesByUser } from "../../src/db_access/favorites-DAO";

const ProfilePage = ({ name, email, image, favoriteCategories }) => {
	return (
		<div>
			<h1>Your Profile</h1>
			{image && <Image src={image} width={150} height={150} alt={name} />}
			<p key={uid()}>{name}</p>
			<h2 key={uid()}>Your Interests</h2>
			<div>
				{favoriteCategories?.map((category) => (
					<Link href={`/category/${category}`} key={uid()}>
						{category}
					</Link>
				))}
			</div>
			<h2 key={uid()}>Your Account</h2>
			<p key={uid()}>{email}</p>
			<h2 key={uid()}>Upgrade to Premium</h2>
			<p key={uid()}>
				You have a free Account, upgrade now to Premium for an even better
				experience with Tasty! The AI algorithm displays you what you've been
				looking for all day. Save unlimited favourites and interact with the
				creators of the recipes.
			</p>
			<button>Upgrade</button>
		</div>
	);
};

export default ProfilePage;

export async function getServerSideProps(context) {
	const session = await unstable_getServerSession(
		context.req,
		context.res,
		NextAuthOptions
	);

	if (!session) {
		return { redirect: { destination: "/auth/login", permanent: false } };
	}

	const { name, email, image } = session.user;
	/**
	 * get all categories of favorite meals by user
	 */
	const favoriteCategories = await dbGetAllFavoriteCategoriesByUser(email);
	return { props: { name, email, image, favoriteCategories } };
}
