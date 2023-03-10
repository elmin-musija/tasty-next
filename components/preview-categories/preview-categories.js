import React from "react";
import Link from "next/link";
import Image from "next/image";
import { uid } from "uid";
import styles from "./preview-categories.module.css";

const PreviewCategories = ({ previewCategories }) => {
	return (
		<div key={uid()}>
			<div className={styles.catHeading}>
				<h2>Categories</h2>
				<Link href={"/category"} className="seeAllLink">
					See all
				</Link>
			</div>
			<div className={styles.catContainer}>
				<div className={styles.catItemContainer}>
					{previewCategories.map((element) => (
						<Link
							key={uid()}
							href={`/category/${element.strCategory}`}
							className={styles.catItem}
						>
							<Image
								src={element.strCategoryThumb}
								alt={element.strCategory}
								width={70}
								height={70}
								priority
								className={styles.catImg}
							/>
							<p>{element.strCategory}</p>
						</Link>
					))}
					<Link href={"/category"} className={styles.more}>
						<p>...</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PreviewCategories;
