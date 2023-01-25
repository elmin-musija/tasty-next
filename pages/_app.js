import { SessionProvider } from "next-auth/react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Link from "next/link";
import styles from "./app.module.css";
import "../styles/globals.css";

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
						<div className={styles.page}>
							<Component {...pageProps} />
						</div>
						<Footer />
					</div>
				</div>
				<Link href="/" className={styles.homeBtn}></Link>
			</div>
		</SessionProvider>
	);
}
