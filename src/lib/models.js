import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			min: 2,
			max: 50,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			max: 50,
		},
		image: {
			type: String,
		},
	},
	{timestamps: true},
);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
