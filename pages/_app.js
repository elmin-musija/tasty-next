import Footer from "../components/footer/footer";
import Searchbar from "../components/searchbar/searchbar";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Searchbar />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}
