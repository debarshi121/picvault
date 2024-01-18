"use client";
import Image from "next/image";
import React, {useState} from "react";
import {ImageDialog} from "../imageDialog/ImageDialog";

const ImageCard = ({data}) => {
	const [dialogContent, setDialogContent] = useState(null);
	const handleClose = () => {
		setDialogContent(null);
	};
	return (
		<>
			<div className="w-full break-inside">
				<Image src={data.webformatURL} alt="" width={400} height={400} onClick={() => setDialogContent(data)} className="w-full rounded-md cursor-pointer" />
				<div className="flex gap-2 py-3">
					{data.tags.split(",").map((tag) => (
						<div key={tag} className="rounded text-sm bg-gray-100 max-w-fit px-3 text-center py-1 first-letter:uppercase">
							{tag}
						</div>
					))}
				</div>
			</div>
			{dialogContent && <ImageDialog data={data} onClose={handleClose} />}
		</>
	);
};

export default ImageCard;
