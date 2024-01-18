import {clsx} from "clsx";
import {twMerge} from "tailwind-merge";
import mongoose from "mongoose";

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

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
