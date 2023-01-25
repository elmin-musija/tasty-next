import React from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

function LogoutButton() {
	const router = useRouter();
	const onLogoutHandler = async () => {
		const redirect = await signOut({ redirect: false, callbackUrl: "/home" });
		router.push(redirect.url);
	};

	return <button onClick={onLogoutHandler}>Logout</button>;
}

export default LogoutButton;
