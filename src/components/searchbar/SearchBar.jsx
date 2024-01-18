"use client";
import Link from "next/link";
import {useState} from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const SearchBar = () => {
	const [searchQuery, setSearchQuery] = useState("");
	return (
		<div className="max-w-xl mx-auto mt-12">
			<div className="flex items-center rounded-md bg-opacity-50 backdrop-filter backdrop-blur-md border-2 border-gray-400 py-2 px-3">
                <HiMiniMagnifyingGlass className="text-white w-6 h-6 mr-2"/>
				<input type="text" className="w-full px-4 py-2 focus:outline-none bg-transparent text-white placeholder-white border-l-2 border-gray-400" placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
				<Link href={`/search?q=${encodeURIComponent(searchQuery)}`} className="text-white px-3 border-2 rounded-md hover:bg-white hover:text-gray-700">
					GO!
				</Link>
			</div>
		</div>
	);
};

export default SearchBar;
