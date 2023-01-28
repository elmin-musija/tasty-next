import React from "react";
import LoginForm from "../../../components/login-form/login-form";
import { motion } from "framer-motion";

function LoginPage() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<LoginForm />
		</motion.div>
	);
}

export default LoginPage;
