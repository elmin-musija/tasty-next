import styles from "./logo.module.css";

function Logo() {
	return (
		<div>
			<img src="/logo.svg" alt="Logo" className={styles.icon} />
		</div>
	);
}

export default Logo;
