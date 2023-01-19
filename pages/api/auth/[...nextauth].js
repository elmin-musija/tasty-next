import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { dbGetSingleUser } from "../../../src/db_access/users-DAO";
import { verifyPassword } from "../../../utils/crypt";

export const NextAuthOptions = {
	name: "Credentials",
	session: {
		strategy: "jwt",
		/**
		 *
		 */
		maxAge: 60 * 5,
	},
	providers: [
		CredentialsProvider({
			type: "credentials",
			credentials: {},
			async authorize(credentials, req) {
				const user = await dbGetSingleUser({
					email: credentials.email,
				});
				if (!user) {
					throw new Error("Error, user not found!");
				} else {
					/**
					 * compare entered password with hashed password in database
					 */
					const enteredPasswordIsValid = await verifyPassword(
						credentials.password,
						user.password
					);
					/**
					 * entered password is valid, user is logged in
					 */
					if (enteredPasswordIsValid) {
						console.log("User logged in");
						return { name: user.firstname, email: user.email };
					} else {
						throw new Error("Error, invalid password!");
					}
				}
			},
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	pages: { signIn: "/auth/login" },
};

export default NextAuth(NextAuthOptions);
