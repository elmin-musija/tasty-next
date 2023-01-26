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
			<div className={styles.searchIconContainer}>
				<img
					src="/searchbar-icon-black.svg"
					alt="Search Bar Icon"
					className={styles.searchIcon}
				/>
			</div>
			<form onSubmit={onSubmitHandler}>
				<input
					type="text"
					name="input-search"
					id="input-search"
					ref={inputRef}
					required
					placeholder="Search for meal"
				/>
				{/* <input type="submit" value="Search" /> */}
			</form>
		</div>
	);
};

export default Searchbar;
