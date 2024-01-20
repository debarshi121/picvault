import ImageCard from "@/components/imageCard/ImageCard";
import Navbar from "@/components/navbar/Navbar";
import SearchBar from "@/components/searchbar/SearchBar";
import TrendingSearch from "@/components/trendingSearch/TrendingSearch";
import {saveSearchHistory} from "@/lib/actions";
import {getSearchResults} from "@/services/pixabayService";

const Page = async ({searchParams}) => {
	const data = await getSearchResults(searchParams.q);
	await saveSearchHistory({keyword: searchParams.q});

	return (
		<main className="min-h-screen h-full">
			<div className="bg-cover bg-center h-96 bg-gray-100" style={{backgroundImage: 'url("https://cdn.pixabay.com/index/2024/01/15/23-56-06-601_1920x550.jpg")'}}>
				<div className="container mx-auto text-center py-10">
					<Navbar />
					<div className="mt-20">
						<SearchBar />
					</div>
					<h1 className="text-3xl text-white font-bold my-5">Results: {searchParams.q}</h1>
				</div>
			</div>

			<div className="w-full bg-gray-100 ">
				<TrendingSearch />
			</div>

			<div className="bg-white w-full min-h-[500px]">
				<div className="container mx-auto py-10 col-3 masonry-1-col md:masonry-2-col lg:masonry-3-col">
					{data.hits.map((item, i) => (
						<ImageCard key={i} data={item} />
					))}
				</div>
			</div>
		</main>
	);
};

export default Page;
