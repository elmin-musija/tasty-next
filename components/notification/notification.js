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

	const onCloseButtonClickHandler = () => {
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
		<div className={notificationClass}>
			<p onClick={onCloseButtonClickHandler}>{getMessage()}</p>
			<button
				onClick={onCloseButtonClickHandler}
				className={styles.cancelNotificationBtn}
			>
				X
			</button>
		</div>
	);
};

export default Notification;
