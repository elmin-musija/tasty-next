import React from "react";
import { signOut } from "next-auth/react";

function LogoutButton() {
	const onLogoutHandler = async () => {
		await signOut({ redirect: "/" });
	};

	return <button onClick={onLogoutHandler}>Logout</button>;
}

export default LogoutButton;
