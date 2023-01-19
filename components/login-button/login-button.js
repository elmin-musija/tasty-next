import React from "react";
import { signIn } from "next-auth/react";

function LoginButton() {
	const onLogoutHandler = () => {
		signIn();
	};

	return <button onClick={onLogoutHandler}>Login</button>;
}

export default LoginButton;
