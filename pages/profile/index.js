import React from "react";
import { unstable_getServerSession } from "next-auth";
import { NextAuthOptions } from "../api/auth/[...nextauth]";
import Image from "next/image";
import Link from "next/link";
import { uid } from "uid";
import { dbGetAllFavoriteCategoriesByUser } from "../../src/db_access/favorites-DAO";
import styles from "./profile.module.css";

const ProfilePage = ({ name, email, image, favoriteCategories }) => {
	return (
		<div className={styles.profile}>
			<div>
				{image && <Image src={image} width={150} height={150} alt={name} />}
				<p key={uid()} className={styles.profileName}>
					{name}
				</p>
			</div>
			<div>
				<h2 key={uid()}>Your Interests</h2>
				<div className={styles.interestContainer}>
					{favoriteCategories?.map((category) => (
						<Link
							href={`/category/${category}`}
							key={uid()}
							className={styles.interest}
						>
							{category}
						</Link>
					))}
				</div>
			</div>
			<div>
				<h2 key={uid()}>Your Account</h2>
				<p key={uid()}>{email}</p>
			</div>
			<div>
				<h2 key={uid()}>Upgrade to Premium</h2>
				<p key={uid()} className={styles.premiumText}>
					You have a free Account, upgrade now to Premium for an even better
					experience with Tasty! The AI algorithm displays you what you've been
					looking for all day. Save unlimited favourites and interact with the
					creators of the recipes.
				</p>
				<button className={styles.upgradeBtn}>
					<p>Upgrade</p>
					<img src="/arrow-right-white.svg" alt="arrow" />
				</button>
			</div>
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
