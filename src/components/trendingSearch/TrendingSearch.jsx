import React from "react";

const TrendingSearch = () => {
	return (
		<div className="container mx-auto flex justify-center gap-2 p-5 overflow-x-auto hide-scrollbar">
			{Array.from({length: 12}).map((item) => (
				<div key={item} className="rounded-md text-sm border border-gray-300 text-gray-600 px-5 text-center py-1">
					Digital
				</div>
			))}
		</div>
	);
};

export default TrendingSearch;
