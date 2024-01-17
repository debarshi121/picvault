import axios from "axios";

export async function getSearchResults(query) {
	try {
		const res = await axios.get(`https://pixabay.com/api/?key=4671622-fba051603e1d8f8c84464f590&q=${query}&image_type=photo&pretty=true`);
		return res.data;
	} catch (error) {
		throw new Error("Failed to fetch data");
	}
}
