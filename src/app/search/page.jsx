import ImageCard from "@/components/imageCard/ImageCard";
import Navbar from "@/components/navbar/Navbar";
import SearchBar from "@/components/searchbar/SearchBar";

const page = () => {
	return (
		<main className="h-screen relative bg-cover bg-center" style={{backgroundImage: 'url("/bg.jpg")'}}>
			<div className="bg-black absolute inset-0 opacity-50"></div>
			<Navbar />

			<div className="container mx-auto text-center relative z-10">
				<SearchBar />
				<h1 className="text-3xl text-white font-bold my-8">Results: Technology</h1>
			</div>

			<div className="bg-white w-full absolute min-h-[500px]">
				<div className="w-full bg-gray-100 flex gap-2 p-6 overflow-x-auto hide-scrollbar">
					{Array.from({length: 12}).map((item) => (
						<div key={item} className="rounded text-sm border border-gray-300 min-w-36 text-center py-2">
							Digital
						</div>
					))}
				</div>

				<div className="w-full grid grid-cols-3 gap-10 px-6 py-10 container">
					{Array.from({length: 12}).map((item, i) => (
						<ImageCard key={i} />
					))}
				</div>
			</div>
		</main>
	);
};

export default page;
