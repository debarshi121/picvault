import HistoryList from "@/components/historyList/HistoryList";
import Navbar from "@/components/navbar/Navbar";
import {getDownloadHistory} from "@/lib/actions";
import React from "react";

const page = async () => {
	const downloadHistory = await getDownloadHistory();
	const data = JSON.parse(JSON.stringify(downloadHistory));
	return (
		<main className="min-h-screen h-full">
			<div className="bg-cover bg-center h-96" style={{backgroundImage: 'url("https://cdn.pixabay.com/index/2024/01/15/23-56-06-601_1920x550.jpg")'}}>
				<div className="container mx-auto text-center py-10">
					<Navbar />
					<h1 className="text-3xl text-white font-bold mt-10 mb-5">Download History</h1>
					<p className="text-white text-sm lg:text-lg">
						Your download history includes everything that you have downloaded while being logged in. <br />
						It is only visible to you. Some activity may take some time to appear.
					</p>
				</div>
			</div>

			<div className="bg-white w-full min-h-[500px]">
				<HistoryList downloadHistory={data} />
			</div>
		</main>
	);
};

export default page;
