import {topKeywords} from "@/lib/actions";
import Link from "next/link";

const TrendingSearch = async () => {
	const data = await topKeywords();
	return (
		<div className="py-5 px-5 overflow-x-auto hide-scrollbar text-center space-x-2">
			{data.map((item, i) => (
				<Link href={`/search?q=${item.keyword}`} key={i} className="rounded text-sm border border-gray-500 text-gray-700 px-5 text-center py-1">
					{item.keyword}
				</Link>
			))}
		</div>
	);
};

export default TrendingSearch;
