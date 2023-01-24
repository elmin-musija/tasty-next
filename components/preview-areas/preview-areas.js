import React from "react";
import Link from "next/link";
import { uid } from "uid";
import styles from "./preview-areas.module.css";

const PreviewAreas = ({ previewAreas }) => {
	return (
		<div key={uid()}>
			<div className="previewHeading">
				<h2>Areas</h2>
				<Link href="/area" className="seeAllLink">
					See all
				</Link>
			</div>
			<div className={styles.areasItem}>
				{previewAreas.map((element) => (
					<Link key={uid()} href={`area/${element.strArea}`}>
						{element.strArea}
					</Link>
				))}
			</div>
		</div>
	);
};

export default PreviewAreas;
