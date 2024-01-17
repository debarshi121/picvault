const SearchBar = () => {
	return (
		<div className="max-w-xl mx-auto relative mt-12">
			<div className="flex items-center rounded-md bg-opacity-50 backdrop-filter backdrop-blur-md border-2 border-gray-400 py-2 px-3">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6 text-white mr-3">
					<circle cx="11" cy="11" r="8"></circle>
					<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
				</svg>
				<input type="text" className="w-full px-4 py-2 focus:outline-none bg-transparent text-white placeholder-white border-l-2 border-gray-400" placeholder="Search" />
				<button className="text-white px-3 border-2 rounded-md">GO!</button>
			</div>
		</div>
	);
};

export default SearchBar;
