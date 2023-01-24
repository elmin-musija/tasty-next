import React from "react";
import Link from "next/link";
import Image from "next/image";
import { uid } from "uid";
import styles from "./all-categories.module.css";

const AllCategories = ({ allCategories, showThumbnail }) => {
	// je nach status von showThumbnail die Klasse für Link setzen

	return (
		<div key={uid()} className={styles.allCategories}>
			<h3>Categories</h3>
			<div className={showThumbnail ? styles.catList : styles.catListWithoutTN}>
				{allCategories.map((element) => (
					<Link
						key={uid()}
						href={`/category/${element.strCategory}`}
						className={showThumbnail ? styles.catItem : styles.catItemWithoutTN}
					>
						{showThumbnail && (
							<Image
								src={element.strCategoryThumb}
								alt={element.strCategory}
								width={50}
								height={50}
								priority
								className={styles.catImg}
							/>
						)}
						<p>{element.strCategory}</p>
					</Link>
				))}
			</div>
		</div>
	);
};

export default AllCategories;
