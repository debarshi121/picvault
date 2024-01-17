import Navbar from "@/components/navbar/Navbar";
import SearchBar from "@/components/searchbar/SearchBar";

export default function Home() {
	return (
		<main className="h-screen relative bg-cover bg-center" style={{backgroundImage: 'url("/bg.jpg")'}}>
			<div className="bg-black absolute inset-0 opacity-50"></div>
			<Navbar />

			<div className="container mx-auto text-center relative z-10">
				<h1 className="text-6xl text-white font-bold mb-4 mt-24">
					Discover over 2,000,000 <br /> free Stock Images
				</h1>
				<SearchBar />
				<div className="rounded-md mx-auto bg-opacity-50 backdrop-filter backdrop-blur-md border-2 text-white border-gray-400  py-1 px-5 max-w-fit mt-5">
					<span className="text-sm font-semibold">Trending: </span> flowers, love, forest, river
				</div>
			</div>
		</main>
	);
}
