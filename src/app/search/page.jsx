import ImageCard from "@/components/imageCard/ImageCard";
import Navbar from "@/components/navbar/Navbar";
import SearchBar from "@/components/searchbar/SearchBar";
import {getSearchResults} from "@/services/pixabayService";
import "@/app/search/search.css";

const Page = async ({searchParams}) => {
	const data = await getSearchResults(searchParams.q);
	return (
		<main className="h-screen relative bg-cover bg-center" style={{backgroundImage: 'url("/bg.jpg")'}}>
			<div className="bg-black absolute inset-0 opacity-50"></div>
			<Navbar />

			<div className="container mx-auto text-center">
				<SearchBar />
				<h1 className="text-3xl text-white font-bold my-8">Results: {searchParams.q}</h1>
			</div>

			<div className="bg-white w-full absolute min-h-[500px]">
				<div className="w-full bg-gray-100 flex justify-center gap-2 p-6 overflow-x-auto hide-scrollbar">
					{Array.from({length: 12}).map((item) => (
						<div key={item} className="rounded-md text-sm border border-gray-300 text-gray-600 px-5 text-center py-1">
							Digital
						</div>
					))}
				</div>

				<div className="container mx-auto py-10 col-3 masonry-3-col">
					{data.hits.map((item, i) => (
						<ImageCard key={i} data={item} />
					))}
				</div>
			</div>
		</main>
	);
};

export default Page;
