import { SessionProvider } from "next-auth/react";
import Footer from "../components/footer/footer";
import Searchbar from "../components/searchbar/searchbar";
import Header from "../components/header/header";

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}) {
	return (
		<SessionProvider session={session}>
			<Header />
			<Searchbar />
			<Component {...pageProps} />
			<Footer />
		</SessionProvider>
	);
}
