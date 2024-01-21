"use server";

import axios from "axios";
import {getPlaiceholder} from "plaiceholder";

export const getBase64 = async (imageUrl) => {
	try {
		const res = await fetch(imageUrl);

		if (!res.ok) throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);

		const buffer = await res.arrayBuffer();
		const {base64} = await getPlaiceholder(Buffer.from(buffer));
		return base64;
	} catch (error) {
		throw error;
	}
};

export const addBlurredDataUrls = async (pixabayHits) => {
	try {
		const base64Promises = pixabayHits.map((obj) => getBase64(obj.webformatURL));
		const base64Results = await Promise.all(base64Promises);
		return base64Results;
	} catch (error) {
		throw error;
	}
};

export const getSearchResults = async (query) => {
	try {
		const res = await axios.get(`https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=${query}&image_type=photo&pretty=true`);
		const blurredDataUrls = await addBlurredDataUrls(res.data.hits);
		const dataWithblurredDataUrl = {
			...res.data,
			hits: res.data.hits.map((obj, i) => {
				return {
					...obj,
					blurredDataUrl: blurredDataUrls[i],
				};
			}),
		};
		return dataWithblurredDataUrl;
	} catch (error) {
		throw new Error("Failed to fetch data");
	}
};
