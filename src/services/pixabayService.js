"use server";

import axios from "axios";

export const getBase64 = async (imageUrl) => {
	try {
		const base64str = await fetch(imageUrl).then(async (res) => Buffer.from(await res.arrayBuffer()).toString("base64"));

		const blurSvg = `
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 5'>
              <filter id='b' color-interpolation-filters='sRGB'>
                <feGaussianBlur stdDeviation='1' />
              </filter>
        
              <image preserveAspectRatio='none' filter='url(#b)' x='0' y='0' height='100%' width='100%' 
              href='data:image/avif;base64,${base64str}' />
            </svg>
          `;

		const toBase64 = (str) => (typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str));

		return `data:image/svg+xml;base64,${toBase64(blurSvg)}`;
	} catch (error) {
		throw error;
	}
};

export const addBlurredDataUrls = async (pixabayHits) => {
	try {
		const base64Promises = pixabayHits.map((obj) => getBase64(obj.previewURL));
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
