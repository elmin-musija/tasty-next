import { SessionProvider } from "next-auth/react";
import Footer from "../components/footer/footer";
import Searchbar from "../components/searchbar/searchbar";

import styles from "./app.module.css";
import Link from "next/link";
import "../styles/globals.css";
import Header from "../components/header/header";

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}) {
	return (
		<SessionProvider session={session}>
			<div className={styles.app}>
				<div className={styles.phone}>
					<div className={styles.content}>
						<Header />
						<Component {...pageProps} />
						<Footer />
					</div>
				</div>
				<Link href="/" className={styles.homeBtn}></Link>
			</div>
		</SessionProvider>
	);
}
