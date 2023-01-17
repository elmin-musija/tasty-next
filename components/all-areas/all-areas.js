import React from "react";
import Link from "next/link";
import { uid } from "uid";

const AllAreas = ({ allAreas }) => {
	return (
		<div key={uid()}>
			<h1>Areas</h1>
			{allAreas.map((element) => (
				<Link key={uid()} href={`area/${element.strArea}`}>
					{element.strArea}
				</Link>
			))}
		</div>
	);
};

export default AllAreas;
