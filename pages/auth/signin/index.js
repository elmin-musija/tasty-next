import React from "react";
import SigninForm from "../../../components/signin-form/signin-form";
import { motion } from "framer-motion";

function Auth() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<SigninForm />
		</motion.div>
	);
}

export default Auth;
