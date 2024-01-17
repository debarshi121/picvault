import Image from "next/image";
import React from "react";

const ImageCard = () => {
	return (
		<div className="w-full" >
			<Image src="/bg.jpg" alt="" width={400} height={400} className="w-full rounded-md" />
			<div className="flex gap-2 py-3">
				{Array.from({length: 3}).map((item) => (
					<div key={item} className="rounded text-sm bg-gray-100 max-w-fit px-3 text-center py-1">
						Digital
					</div>
				))}
			</div>
		</div>
	);
};

export default ImageCard;
