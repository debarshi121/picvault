import Navbar from "@/components/navbar/Navbar";
import SearchBar from "@/components/searchbar/SearchBar";

export default function Home() {
	return (
		<main className="min-h-screen h-full relative bg-cover bg-center" style={{backgroundImage: 'url("https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg")'}}>
			<div className="container mx-auto text-center py-10">
				<Navbar />
				<h1 className="text-2xl md:text-4xl lg:text-6xl text-white font-bold mb-4 mt-24">
					Discover over 2,000,000 <br /> free Stock Images
				</h1>
				<div className="mt-20"><SearchBar/></div>
				<div className="rounded-md mx-auto backdrop-filter backdrop-blur-lg border-2 text-white border-gray-300 py-1 px-5 max-w-fit mt-5">
					<span className="text-sm font-semibold">Trending: </span> flowers, love, forest, river
				</div>
			</div>
		</main>
	);
}
