import React from "react";
import Link from "next/link";
import Image from "next/image";
import { uid } from "uid";

const PreviewCategories = ({ previewCategories }) => {
	return (
		<div key={uid()}>
			<h2>Categories</h2>
			<div>
				{previewCategories.map((element) => (
					<Link key={uid()} href={`/category/${element.strCategory}`}>
						<Image
							src={element.strCategoryThumb}
							alt={element.strCategory}
							width={50}
							height={50}
							priority
						/>
						<p>{element.strCategory}</p>
					</Link>
				))}
			</div>
			<Link href={"/category"}>See all</Link>
		</div>
	);
};

export default PreviewCategories;
