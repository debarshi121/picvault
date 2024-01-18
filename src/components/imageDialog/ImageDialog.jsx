"use client";

import Image from "next/image";
import React from "react";
import {CgCloseR} from "react-icons/cg";
import {TiTick} from "react-icons/ti";

export const ImageDialog = ({data, onClose}) => {
	return (
		<div className="fixed inset-0 flex items-center justify-center">
			<div className="absolute inset-0 bg-black opacity-50"></div>
			<div className="z-10 bg-white w-9/12 rounded-md">
				<div className="bg-gray-100 p-5 rounded-t-md">
					<div className="flex justify-between">
						<span className="font-medium">Preview ID: {data.id}</span>
						<CgCloseR className="w-6 h-6 cursor-pointer" onClick={() => onClose()} />
					</div>
				</div>
				<div className="p-5 flex flex-col lg:flex-row gap-10">
					<div className="w-full lg:w-8/12 xl:w-9/12">
						<Image src={data.largeImageURL} alt="" width={data.webformatWidth} height={data.webformatHeight} className="w-full rounded-md" />
					</div>
					<div className="w-full lg:w-4/12 xl:w-3/12">
						<section>
							<h2 className="font-medium text-xl">Download</h2>
							<ul className="w-full mt-5 border rounded-md">
								<li className="flex justify-between p-3 bg-gray-100 rounded-t-md border-b">
									<div>Small</div>
									<div className="text-right flex items-center">
										<span className="font-semibold mr-5">640x960</span>
										<div className="inline-flex items-center ">
											<label className="relative flex cursor-pointer items-center rounded-full" htmlFor="checkbox-1">
												<input type="checkbox" className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full checked:border-green-500 checked:bg-green-500 " id="checkbox-1" checked />
												<div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
													<TiTick />
												</div>
											</label>
										</div>
									</div>
								</li>
								<li className="flex justify-between p-3 rounded-t-md border-b">
									<div>Medium</div>
									<div className="text-right flex items-center">
										<span className="font-semibold mr-5">640x960</span>
										<div className="inline-flex items-center ">
											<label className="relative flex cursor-pointer items-center rounded-full" htmlFor="checkbox-2">
												<input type="checkbox" className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full checked:border-green-500 checked:bg-green-500 " id="checkbox-2" />
												<div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
													<TiTick />
												</div>
											</label>
										</div>
									</div>
								</li>
								<li className="flex justify-between p-3 rounded-t-md border-b">
									<div>Big</div>
									<div className="text-right flex items-center">
										<span className="font-semibold mr-5">640x960</span>
										<div className="inline-flex items-center ">
											<label className="relative flex cursor-pointer items-center rounded-full" htmlFor="checkbox-3">
												<input type="checkbox" className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full checked:border-green-500 checked:bg-green-500 " id="checkbox-3" />
												<div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
													<TiTick />
												</div>
											</label>
										</div>
									</div>
								</li>
								<li className="flex justify-between p-3  rounded-t-md">
									<div>Original</div>
									<div className="text-right flex items-center">
										<span className="font-semibold mr-5">640x960</span>
										<div className="inline-flex items-center ">
											<label className="relative flex cursor-pointer items-center rounded-full" htmlFor="checkbox-4">
												<input type="checkbox" className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full checked:border-green-500 checked:bg-green-500 " id="checkbox-4" />
												<div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
													<TiTick />
												</div>
											</label>
										</div>
									</div>
								</li>
							</ul>
							<button className="rounded-md bg-green-500 text-white text-sm font-medium w-full py-2 mt-5">Download for free!</button>
						</section>
						<section className="mt-10">
							<h2 className="font-medium text-xl">Information</h2>
							<div className="grid grid-cols-3 mt-5 gap-5">
								<div>
									<h3 className="text-sm">User</h3>
									<h4 className="font-medium text mt-1 break-words">{data.user}</h4>
								</div>
								<div>
									<h3 className="text-sm">User ID</h3>
									<h4 className="font-medium text mt-1">{data.user_id}</h4>
								</div>
								<div>
									<h3 className="text-sm">Type</h3>
									<h4 className="font-medium text mt-1">{data.type}</h4>
								</div>
								<div>
									<h3 className="text-sm">Views</h3>
									<h4 className="font-medium text mt-1">{data.views}</h4>
								</div>
								<div>
									<h3 className="text-sm">Downloads</h3>
									<h4 className="font-medium text mt-1">{data.downloads}</h4>
								</div>
								<div>
									<h3 className="text-sm">Likes</h3>
									<h4 className="font-medium text mt-1">{data.likes}</h4>
								</div>
							</div>
						</section>
					</div>
				</div>
				<div className="bg-white p-5 rounded-b-md flex gap-5 items-center">
					<div className="font-medium text-lg">Tags:</div>
					<div className="flex flex-wrap gap-2">
						{data.tags.split(",").map((tag) => (
							<span key={tag} className="rounded-md text-xs border border-gray-300 text-gray-600 px-2 h-5 flex items-center">
								{tag}
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
