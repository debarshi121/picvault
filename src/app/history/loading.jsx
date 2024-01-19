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

			<div className="bg-white w-full min-h-[500px]">
				<div className="container mx-auto py-10">
					{Array.from({length: 3}).map((item) => (
						<div key={item} className="max-w-4xl bg-gray-300 w-full rounded mb-5 h-[60px] mx-auto"></div>
					))}
				</div>
			</div>
		</main>
	);
};

export default loading;
