"use client";
import Image from "next/image";
import React from "react";

const ImageCard = ({data}) => {
	return (
		<div className="w-full break-inside">
			<Image src={data.webformatURL} alt="" width={400} height={400} className="w-full rounded-md" />
			<div className="flex gap-2 py-3">
				{data.tags.split(",").map((tag) => (
					<div key={tag} className="rounded text-sm bg-gray-100 max-w-fit px-3 text-center py-1 first-letter:uppercase">
						{tag}
					</div>
				))}
			</div>
		</div>
	);
};

export default ImageCard;
