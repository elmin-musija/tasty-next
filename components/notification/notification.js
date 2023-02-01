import React from "react";
import { useContext } from "react";
import NotificationContext from "../../context/context";
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

	if (!getShowNotification()) {
		return null;
	}

	if (getNotificationType() === "success") {
		notificationClass = `${styles.notification} ${styles.success}`;
	} else if (getNotificationType() === "warning") {
		notificationClass = `${styles.notification} ${styles.warning}`;
	} else {
		notificationClass = `${styles.notification} ${styles.error}`;
	}

	return (
		<div className={notificationClass} onClick={onClickHandler}>
			<p>{getMessage()}</p>
		</div>
	);
};

export default Notification;
