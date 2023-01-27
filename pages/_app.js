import { SessionProvider } from "next-auth/react";
import Head from "next/head";
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
		<SessionProvider session={session} refetchInterval={60 * 6}>
			<div className={styles.app}>
				<div className={styles.phone}>
					<div className={styles.content}>
						<Head>
							<title>Tasty App</title>
							<meta name="description" content="Tasty App" />
							<meta
								name="viewport"
								content="width=device-width, initial-scale=1"
							/>
							<link rel="icon" href="/favicon.png" />
						</Head>
						<header>
							<Header />
						</header>
						<main>
							<div className={styles.page}>
								<Component {...pageProps} />
							</div>
						</main>
					</div>
					<footer>
						<Footer />
					</footer>
				</div>
				<div className={styles.loudspeakerLine}></div>
				<Link href="/" className={styles.homeBtn}></Link>
			</div>
		</SessionProvider>
	);
}
