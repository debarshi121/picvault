import React from "react";

const loading = () => {
	return (
		<main className="min-h-screen h-full animate-pulse">
			<div className="bg-cover bg-center h-96 bg-gray-200">
				<div className="container mx-auto text-center py-10">
					<nav className="w-full rounded-md bg-gray-300 h-[60px]"></nav>
					<div className="mt-20">
						<div className="max-w-xl mx-auto rounded h-[60px] bg-gray-300"></div>
					</div>
				</div>
			</div>
			<div className="w-full bg-gray-200 ">{/* <TrendingSearch /> */}</div>
			<div className="bg-white w-full min-h-[500px]">
				<div className="container mx-auto py-10">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
						{Array.from({length: 6}).map((item) => (
							<div key={item} className="w-full h-64 rounded break-inside bg-gray-200"></div>
						))}
					</div>
				</div>
			</div>
		</main>
	);
};

export default loading;
