import Navbar from "@/components/navbar/Navbar";
import {getDownloadHistory} from "@/lib/actions";
import Image from "next/image";
import React from "react";

const page = async () => {
	const downloadHistory = await getDownloadHistory();
	console.log(downloadHistory);
	return (
		<main className="min-h-screen h-full">
			<div className="bg-cover bg-center h-80" style={{backgroundImage: 'url("https://cdn.pixabay.com/index/2024/01/15/23-56-06-601_1920x550.jpg")'}}>
				<div className="container mx-auto text-center py-10">
					<Navbar />
					<h1 className="text-3xl text-white font-bold mt-10 mb-5">Download History</h1>
					<p className="text-white text-lg">
						Your download history includes everything that you have downloaded while being logged in. <br />
						It is only visible to you. Some activity may take some time to appear.
					</p>
				</div>
			</div>

			<div className="bg-white w-full min-h-[500px]">
				<div className="container mx-auto py-10 flex items-center justify-center">
					<div className="max-w-4xl  bg-white w-full rounded-lg shadow-xl">
						<div className="p-4 border-b">
							<h2 className="text-2xl ">Download Information</h2>
							<p className="text-sm text-gray-500">Recently downloaded images</p>
						</div>
						<div>
							{downloadHistory.map((item) => (
								<div key={item.id} className="flex hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
									<div className="flex-1 flex">
										<div className="w-16">
											<Image alt="" src={item.webformatURL} width={150} height={150} className="w-full h-full rounded-md object-cover" />
										</div>
										<div className="flex-1 flex flex-col gap-2">
											<p className="break-words">{item.webformatURL}</p>
										</div>
									</div>
									<div className="flex-1">{/* {item.updatedAt} */}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default page;
