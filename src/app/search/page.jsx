import ImageCard from "@/components/imageCard/ImageCard";
import Navbar from "@/components/navbar/Navbar";
import SearchBar from "@/components/searchbar/SearchBar";
import {getSearchResults} from "@/services/pixabayService";
import "@/app/search/search.css";

const Page = async ({searchParams}) => {
	const data = await getSearchResults(searchParams.q);
	return (
		<main className="min-h-screen h-full">
			<div className="bg-cover bg-center" style={{backgroundImage: 'url("https://cdn.pixabay.com/index/2024/01/15/23-56-06-601_1920x550.jpg")'}}>
				<div className="container mx-auto text-center py-10">
					<Navbar />
					<SearchBar />
					<h1 className="text-3xl text-white font-bold my-5">Results: {searchParams.q}</h1>
				</div>
			</div>

			<div className="w-full bg-gray-100 ">
				<div className="container mx-auto flex justify-center gap-2 p-5 overflow-x-auto hide-scrollbar">
					{Array.from({length: 12}).map((item) => (
						<div key={item} className="rounded-md text-sm border border-gray-300 text-gray-600 px-5 text-center py-1">
							Digital
						</div>
					))}
				</div>
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
