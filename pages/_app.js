import Footer from "../components/footer/footer";
import Searchbar from "../components/searchbar/searchbar";
import styles from "./app.module.css";
import Link from "next/link";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
	return (
		<div className={styles.app}>
			<div className={styles.phone}>
				<div className={styles.content}>
					<Searchbar />
					<div className={styles.page}>
						<Component {...pageProps} />
					</div>
					<Footer />
				</div>
			</div>
			<Link href="/" className={styles.homeBtn}></Link>
		</div>
	);
}
