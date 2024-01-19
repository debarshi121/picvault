"use client";

import Image from "next/image";
import React, {useState} from "react";
import {IoArrowDownSharp} from "react-icons/io5";
import {ImageDialog} from "../imageDialog/ImageDialog";
import { formatDate } from "@/lib/utils";

const HistoryList = ({downloadHistory}) => {
	const [dialogContent, setDialogContent] = useState(null);
	const handleClose = () => {
		setDialogContent(null);
	};
	return (
		<div className="container mx-auto py-10 flex items-center justify-center">
			<div className="max-w-4xl bg-white w-full rounded-lg shadow-xl">
				<div className="p-4 border-b">
					<h2 className="text-2xl ">History</h2>
					<p className="text-sm text-gray-500">Recently downloaded images</p>
				</div>
				<div>
					{downloadHistory.map((item) => (
						<div key={item.id} className="flex flex-col md:flex-row hover:bg-gray-50 gap-5 p-4 border-b">
							<div className="w-full md:w-6/12 flex gap-2">
								<div className="w-3/12 md:w-2/12">
									<Image alt="" src={item.previewURL} width={item.previewWidth} height={item.previewHeight} className="w-full rounded-md object-cover" />
								</div>
								<div className="w-9/12 md:w-10/12 flex flex-col gap-2">
									<p className="break-words text-xs">{item.pageURL}</p>
								</div>
							</div>
							<div className="w-full md:w-6/12 flex justify-between">
								<div className="flex flex-col">
									<span className="text-sm text-gray-500">Downloaded on</span>
									<span className="text-sm">{formatDate(item.updatedAt)}</span>
								</div>
								<div onClick={() => setDialogContent(item)} className="rounded h-8 w-8 border flex items-center justify-center border-gray-400 cursor-pointer">
									<IoArrowDownSharp className="text-gray-500" />
								</div>
							</div>
						</div>
					))}
				</div>
				{dialogContent && <ImageDialog data={dialogContent} onClose={handleClose} />}
			</div>
		</div>
	);
};

export default HistoryList;
