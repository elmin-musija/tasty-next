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
		notificationClass = styles.success;
	} else if (getNotificationType() === "warning") {
		notificationClass = styles.warning;
	} else {
		notificationClass = styles.error;
	}

	return (
		<div>
			<p onClick={onCloseButtonClickHandler} className={notificationClass}>
				{getMessage()}
			</p>
			<button onClick={onCloseButtonClickHandler}>X</button>
		</div>
	);
};

export default Notification;
