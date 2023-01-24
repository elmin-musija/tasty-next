import React from "react";
import Link from "next/link";
import { uid } from "uid";
import styles from "./all-areas.module.css";

const AllAreas = ({ allAreas }) => {
	return (
		<div key={uid()} className={styles.allAreas}>
			<h3>Areas</h3>
			<div className={styles.areaList}>
				{allAreas.map((element) => (
					<Link key={uid()} href={`area/${element.strArea}`}>
						{element.strArea}
					</Link>
				))}
			</div>
		</div>
	);
};

export default AllAreas;
