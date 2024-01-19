"use server";

import {User, DownloadHistory, SearchHistory} from "./models";
import {connectToDb} from "./utils";
import {signIn, signOut, auth} from "./auth";
const mongoose = require("mongoose");

export const handleGithubLogin = async () => {
	await signIn("github");
};

export const handleLogout = async () => {
	await signOut();
};

export const saveDownloadHistory = async (data) => {
	try {
		const session = await auth();

		if (session.user) {
			await connectToDb();
			const user = await User.findOne({email: session.user.email});

			const downloadHistory = await DownloadHistory.findOne({owner: new mongoose.Types.ObjectId(user._id), id: data.id});

			// If download history already exists, then update the updatedAt
			if (downloadHistory) {
				downloadHistory.updatedAt = Date.now();
				await downloadHistory.save();
			} else {
				data.owner = user._id;
				const newDownloadHistory = new DownloadHistory(data);
				await newDownloadHistory.save();
			}
		}
	} catch (error) {
		throw error;
	}
};

export const getDownloadHistory = async () => {
	try {
		const session = await auth();

		if (session && session.user) {
			await connectToDb();
			const user = await User.findOne({email: session.user.email});
			const downloadHistory = await DownloadHistory.find({owner: new mongoose.Types.ObjectId(user._id)}).select("-owner");
			return downloadHistory;
		}
	} catch (error) {
		throw error;
	}
};

export const saveSearchHistory = async (data) => {
	try {
		await connectToDb();
		const session = await auth();

		if (session && session.user) {
			const user = await User.findOne({email: session.user.email});
			data.owner = user._id;
		}
		const searchHistory = new SearchHistory(data);
		await searchHistory.save();
	} catch (error) {
		throw error;
	}
};

export const topKeywords = async () => {
	try {
		await connectToDb();
		const topKeywords = await SearchHistory.aggregate([
			{
				$group: {
					_id: "$keyword",
                    keyword: { $first: '$keyword' },
					count: {$sum: 1},
				},
			},
			{
				$sort: {count: -1},
			},
			{
				$limit: 10,
			},
		]);
        return topKeywords;
	} catch (error) {
		throw error;
	}
};
