import Logo from "../../components/logo/logo";
import Loader from "../../components/loader/loader";
import styles from "./splashscreen.module.css";

function Splashscreen() {
	return (
		<div className={styles.splashScreen}>
			<Logo />
			<Loader />
		</div>
	);
}

export default Splashscreen;
