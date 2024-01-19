"use client";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {HiMiniMagnifyingGlass} from "react-icons/hi2";

const SearchBar = () => {
	const router = useRouter();
	const [searchQuery, setSearchQuery] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (searchQuery.length) router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
	};

	return (
		<div className="max-w-xl mx-auto">
			<form onSubmit={handleSubmit}>
				<div className="flex items-center rounded-md backdrop-filter backdrop-blur-lg border-2 border-gray-300 py-2 px-3">
					<HiMiniMagnifyingGlass className="text-white w-6 h-6 mr-2" />
					<input type="text" className="w-full px-4 py-2 focus:outline-none bg-transparent font-semibold text-white placeholder-white border-l-2 border-gray-300" placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
					<button type="submit" className="text-white font-medium px-3 border-2 rounded-md hover:bg-white hover:text-gray-700">
						GO!
					</button>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
