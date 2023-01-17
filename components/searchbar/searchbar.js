import React from "react";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { uid } from "uid";

const Searchbar = () => {
	const inputRef = useRef();
	const router = useRouter();

	const onSubmitHandler = (event) => {
		event.preventDefault();
		router.push(`/search/${inputRef.current.value}`);
		inputRef.current.value = "";
	};

	return (
		<div key={uid()}>
			<form onSubmit={onSubmitHandler}>
				<input
					type="text"
					name="input-search"
					id="input-search"
					ref={inputRef}
					required
					placeholder="search for meal"
				/>
				<input type="submit" value="Search" />
			</form>
		</div>
	);
};

export default Searchbar;
