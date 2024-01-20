import Navbar from "@/components/navbar/Navbar";
import SearchBar from "@/components/searchbar/SearchBar";
import {topKeywords} from "@/lib/actions";
import {backgroundImageArray} from "@/lib/data";
import {getRandomItemFromArray} from "@/lib/utils";

const Home = async () => {
	const data = await topKeywords();
	const keywords = data.slice(0, 5).map((item) => item.keyword);
	const bgImage = getRandomItemFromArray(backgroundImageArray);
	return (
		<main className="min-h-screen h-full relative bg-cover bg-center bg-gray-200" style={{backgroundImage: `url(${bgImage})`}}>
			<div className="container mx-auto text-center py-10">
				<Navbar />
				<h1 className="text-2xl md:text-4xl lg:text-6xl text-white font-bold mb-4 mt-24">
					Discover over 2,000,000 <br /> free Stock Images
				</h1>
				<div className="mt-20">
					<SearchBar />
				</div>
				<div className="rounded-md mx-auto backdrop-filter backdrop-blur-lg border-2 text-white border-gray-300 py-1 px-5 max-w-fit mt-5">
					<span className="text-sm font-semibold">Trending: </span>
					{keywords.join(", ")}
				</div>
			</div>
		</main>
	);
};

export default Home;
