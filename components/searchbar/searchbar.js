import React from "react";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { uid } from "uid";
import styles from "./searchbar.module.css";

const Searchbar = () => {
	const inputRef = useRef();
	const router = useRouter();

	const onSubmitHandler = (event) => {
		event.preventDefault();
		router.push(`/search/${inputRef.current.value}`);
		inputRef.current.value = "";
	};

	const focusHandler = () => {
		inputRef.current.focus();
	};

	return (
		<div key={uid()} className={styles.searchbar} onClick={focusHandler}>
			<img
				src="/searchbar-icon.svg"
				alt="Search Bar Icon"
				className={styles.searchIcon}
			/>
			<form onSubmit={onSubmitHandler}>
				<input
					type="text"
					name="input-search"
					id="input-search"
					ref={inputRef}
					required
					placeholder="search for meal"
				/>
				{/* <input type="submit" value="Search" /> */}
			</form>
		</div>
	);
};

export default Searchbar;
