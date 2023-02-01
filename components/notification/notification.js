import React from "react";
import { useContext } from "react";
import NotificationContext from "../../context/context";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./notification.module.css";

const Notification = (props) => {
	const {
		hideNotification,
		getShowNotification,
		getNotificationType,
		getMessage,
	} = useContext(NotificationContext);

	let notificationClass = "";

	const onClickHandler = () => {
		hideNotification();
	};

	if (getNotificationType() === "success") {
		notificationClass = `${styles.notification} ${styles.success}`;
	} else if (getNotificationType() === "warning") {
		notificationClass = `${styles.notification} ${styles.warning}`;
	} else {
		notificationClass = `${styles.notification} ${styles.error}`;
	}

	return (
		<AnimatePresence initial={false}>
			{getShowNotification() && (
				<motion.div
					initial={{ x: "-100%" }}
					animate={{ x: 0 }}
					exit={{ x: "100%" }}
					transition={{ duration: 0.35, type: "spring" }}
					className={notificationClass}
					onClick={onClickHandler}
				>
					<p>{getMessage()}</p>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Notification;
