import {topKeywords} from "@/lib/actions";
import Link from "next/link";

const TrendingSearch = async () => {
	const data = await topKeywords();
	return (
		<div className="container mx-auto flex justify-center gap-2 p-5 overflow-x-auto hide-scrollbar">
			{data.map((item) => (
				<Link href={`/search?q=${item.keyword}`} key={item.keyword} className="rounded-md text-sm border border-gray-500 text-gray-700 px-5 text-center py-1">
					{item.keyword}
				</Link>
			))}
		</div>
	);
};

export default TrendingSearch;
