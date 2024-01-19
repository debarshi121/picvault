import {clsx} from "clsx";
import {twMerge} from "tailwind-merge";
import mongoose from "mongoose";

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export const formatDate = (dateString) => {
	const options = {year: "numeric", month: "long", day: "numeric"};
	const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
	return formattedDate;
};

const connection = {};

export const connectToDb = async () => {
	try {
		if (connection.isConnected) {
			console.log("Using existing connection");
			return;
		}
		const db = await mongoose.connect(process.env.MONGO);
		connection.isConnected = db.connections[0].readyState;
		console.log("DB Connected!");
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
};
