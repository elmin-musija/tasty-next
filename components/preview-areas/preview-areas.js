import React from "react";
import Link from "next/link";
import { uid } from "uid";

const PreviewAreas = ({ previewAreas }) => {
	return (
		<div key={uid()}>
			<h2>Areas</h2>
			<div>
				{previewAreas.map((element) => (
					<Link key={uid()} href={`area/${element.strArea}`}>
						{element.strArea}
					</Link>
				))}
			</div>
			<Link href="/area">See all ...</Link>
		</div>
	);
};

export default PreviewAreas;
