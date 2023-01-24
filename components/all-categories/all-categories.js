import React from "react";
import Link from "next/link";
import Image from "next/image";
import { uid } from "uid";
import styles from "./all-categories.module.css";

const AllCategories = ({ allCategories, showThumbnail }) => {
	return (
		<div key={uid()} className={styles.allCategories}>
			<h1>Categories</h1>
			{allCategories.map((element) => (
				<Link key={uid()} href={`/category/${element.strCategory}`}>
					{showThumbnail && (
						<Image
							src={element.strCategoryThumb}
							alt={element.strCategory}
							width={50}
							height={50}
							priority
						/>
					)}
					<p>{element.strCategory}</p>
				</Link>
			))}
		</div>
	);
};

export default AllCategories;
